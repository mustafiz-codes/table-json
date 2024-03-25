const express = require("express");
const multer = require("multer");
const XLSX = require("xlsx");
const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Convert uploaded file to JSON
  const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const json = XLSX.utils.sheet_to_json(worksheet);

  // Convert JSON to a string and send as a file
  res.setHeader("Content-disposition", "attachment; filename=output.json");
  res.setHeader("Content-type", "application/json");
  res.send(JSON.stringify(json, null, 4)); // Pretty print the JSON
});

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
