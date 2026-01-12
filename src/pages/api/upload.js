import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { google } from "googleapis";
import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
import key from "@/modules/static_json/cloud-pass.json";

export const config = { api: { bodyParser: false } };

const SPREADSHEET_ID = "";

// --- AWS S3 Setup ---
const s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});
const BUCKET_NAME = "technozis-resume";

// --- Helper: Parse form data ---
const parseForm = (req) =>
  new Promise((resolve, reject) => {
    console.log("[INFO] Parsing incoming form data...");
    const form = new IncomingForm({ multiples: false, keepExtensions: true });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { fields, files } = await parseForm(req);

    const normalize = (f) => (Array.isArray(f) ? f[0] : f) || "";

    // Collect data for Google Sheets
    const row = [
      normalize(fields.fullName),
      normalize(fields.email),
      normalize(fields.phone),
      normalize(fields.jobTitle),
      normalize(fields.experienceYears),
      normalize(fields.skills),
      normalize(fields.noticePeriod),
      normalize(fields.currentLocation),
      normalize(fields.preferredLocation),
      normalize(fields.currentCTC),
      normalize(fields.expectedCTC),
      normalize(fields.consent) === "true" ? "Yes" : "No",
    ];

    // --- Upload to S3 ---
    let resumeLink = "";
    const resumeFile = Array.isArray(files.resume)
      ? files.resume[0]
      : files.resume;

    if (resumeFile && resumeFile.filepath) {
      const fileStream = fs.createReadStream(resumeFile.filepath);
      const key = `resumes/${Date.now()}_${path.basename(
        resumeFile.originalFilename || "resume.pdf"
      )}`;

      await s3.send(
        new PutObjectCommand({
          Bucket: BUCKET_NAME,
          Key: key,
          Body: fileStream,
          ContentType: resumeFile.mimetype,
        })
      );

      resumeLink = `https://${BUCKET_NAME}.s3.amazonaws.com/${key}`;
    }

    row.push(resumeLink);
    row.push(normalize(fields.isReferred) === "yes" ? "Yes" : "No");
    row.push(normalize(fields.referrerEmail));
    row.push(normalize(fields.c2hInterest) === "true" ? "Yes" : "No");

    // --- Google Sheets Append ---
    const auth = new google.auth.GoogleAuth({
      credentials: key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({
      version: "v4",
      auth: await auth.getClient(),
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      requestBody: { values: [row] },
    });

    return res.status(200).json({ success: true, resumeLink });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ error: error.message });
  }
}
