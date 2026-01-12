import { google } from "googleapis";
import { IncomingForm } from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

const SPREADSHEET_ID = "1Oqt5xIFCM561MdY06sn5iXbVmqx_8WtssBpOeXIwOkY";
const DRIVE_FOLDER_ID = "lrK-Zs0XR1BWbcixlFqzPBy4z1QEk6Kv" // <-- your Drive folder ID

// Helper: Parse form data
const parseForm = (req) =>
  new Promise((resolve, reject) => {
    const form = new IncomingForm({ multiples: false, keepExtensions: true });
    console.log("Parsing incoming form...");
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else {
        console.log("Form parsed successfully.");
        console.log("Fields:", fields);
        console.log("Files:", files);
        resolve({ fields, files });
      }
    });
  });

export default async function handler(req, res) {
  console.log("API /api/upload called");

  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    // --- Parse form data ---
    const { fields, files } = await parseForm(req);

    const normalize = (f) => (Array.isArray(f) ? f[0] : f) || "";
    const row = [
      normalize(fields.fullName),
      normalize(fields.email),
      normalize(fields.phone),
      normalize(fields.jobTitle),
      normalize(fields.experienceYears),
      normalize(fields.skills),
      normalize(fields.consent) === "true" ? "Yes" : "No",
    ];

    // --- Google Auth ---
    console.log("Authenticating with Google...");
    const auth = new google.auth.GoogleAuth({
      keyFile: "src/modules/static_json/cloud-pass.json",
      scopes: [
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });
    const client = await auth.getClient();
    const drive = google.drive({ version: "v3", auth: client });
    const sheets = google.sheets({ version: "v4", auth: client });

    // --- Upload resume if provided ---
    let resumeLink = "";
    const file = files.resume;
    if (file && file.filepath) {
      try {
        console.log("Uploading resume to Drive...");
        const media = {
          mimeType: file.mimetype,
          body: fs.createReadStream(file.filepath),
        };
        const fileMeta = {
          name: file.originalFilename || "resume.pdf",
          parents: [DRIVE_FOLDER_ID],
        };

        const uploaded = await drive.files.create({
          requestBody: fileMeta,
          media,
          fields: "id, webViewLink",
        });
        console.log("Resume uploaded:", uploaded.data);

        resumeLink = uploaded.data.webViewLink;

        // Make file accessible to anyone with link
        await drive.permissions.create({
          fileId: uploaded.data.id,
          requestBody: { role: "reader", type: "anyone" },
        });
        console.log("File sharing permission added.");
      } catch (driveErr) {
        console.error("Drive upload failed:", driveErr.message);
        if (driveErr.code === 403) {
          return res.status(403).json({
            error:
              "Service account does not have access to the Drive folder. Please share the folder with the service account email.",
          });
        }
        throw driveErr;
      }
    } else {
      console.log("No resume file uploaded.");
    }

    // --- Add resume link to row ---
    row.push(resumeLink);

    // --- Append to Google Sheets ---
    console.log("Appending row to Google Sheets:", row);
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      requestBody: { values: [row] },
    });

    console.log("Data appended successfully to Sheets.");
    return res.status(200).json({ success: true, resumeLink });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ error: error.message });
  }
}
