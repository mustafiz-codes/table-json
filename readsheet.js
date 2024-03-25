const { google } = require("googleapis");

async function readSheet() {
  const sheets = google.sheets({
    version: "v4",
    auth: "AIzaSyDLysHSGtdwi_TrWU0UiSYQTUzJFyTl_ts",
  });

  try {
    const range = "Sheet1"; // Adjust based on your actual sheet name and range
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "1VLlL9BJ0nTukqV5m49qLLTFmu3VanJHXEB_SDETDPRg",
      range,
    });

    console.log(response.data.values);
  } catch (error) {
    console.error("The API returned an error: " + error);
  }
}

readSheet();
