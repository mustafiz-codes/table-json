const axios = require("axios");

async function fetchAndConvertJson() {
  try {
    // Replace the URL with your target URL
    // https://docs.google.com/spreadsheets/d/1VLlL9BJ0nTukqV5m49qLLTFmu3VanJHXEB_SDETDPRg/edit#gid=1777816807
    // "https://spreadsheets.google.com/feeds/list/1VLlL9BJ0nTukqV5m49qLLTFmu3VanJHXEB_SDETDPRg/od6/public/values?alt=json";
    const url =
      "GET https://sheets.googleapis.com/v4/spreadsheets/1VLlL9BJ0nTukqV5m49qLLTFmu3VanJHXEB_SDETDPRg/values    ";
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
