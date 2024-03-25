const axios = require("axios");

async function fetchAndConvertJson() {
  try {
    // Replace the URL with your target URL
    
    const url =
      "GET https://sheets.googleapis.com/v4/spreadsheets/<id>/values    ";
    const response = await axios.get(url);

    // Assuming you want to simplify the structure or convert it in some specific way
    const entries = response.data.feed.entry;
    const simplifiedEntries = entries.map((entry) => {
      // Convert each entry to a new structure. This is an example.
      return {
        // Assuming you want to extract specific fields. Adjust according to the actual structure.
        title: entry.title.$t,
        content: entry.content.$t,
        // Add or modify fields as needed
      };
    });

    console.log(simplifiedEntries);
    // Further processing, such as saving to a file or database
  } catch (error) {
    console.error("Error fetching or processing JSON:", error);
  }
}

fetchAndConvertJson();
