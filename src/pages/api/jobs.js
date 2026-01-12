import { parse } from "csv-parse/sync";

export default async function handler(req, res) {
  const sheetUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR-hIl2gKrfvciCEhQiAqPwT9rDYFTk9hf1INwWqpENbTo_EEFZmtrBzgY6o6W6qUOMh9cKrsjRrWme/pub?output=csv";

  try {
    const response = await fetch(sheetUrl);
    const csvText = await response.text();

    const records = parse(csvText, {
      columns: true,
      skip_empty_lines: true,
    });

    const jsonData = records.map((row) => ({
      id: Number(row.id),
      title: row.title,
      description: row.description,
      about: row.about,
      responsibilities: parseArray(row.responsibilities),
      qualifications: parseArray(row.qualifications),
      offer: parseArray(row.offer),
      type: row.type,
      location: row.location,
      experience: row.experience,
    }));

    res.status(200).json(jsonData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch/parse Google Sheet" });
  }
}

function parseArray(stringValue) {
  try {
    return JSON.parse(stringValue);
  } catch {
    return [];
  }
}
