const { google } = require("googleapis");

async function readSheet() {
  const sheets = google.sheets({
    version: "v4",
    auth: "auth id",
  });

  try {
    const range = "Sheet1"; // Adjust based on your actual sheet name and range
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "spreadsheet id",
      range,
    });

    console.log(response.data.values);
  } catch (error) {
    console.error("The API returned an error: " + error);
  }
}

readSheet();
