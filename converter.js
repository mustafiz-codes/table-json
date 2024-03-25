import filePath from "/table1up.xlsx";
const XLSX = require("xlsx");
const fs = require("fs");

function convertRowToJson(filePath, sheetName, rowIndex) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];
  const range = XLSX.utils.decode_range(sheet["!ref"]); // Get the complete range of cells

  let targetRow;
  for (let R = range.s.r; R <= range.e.r; ++R) {
    if (R === rowIndex) {
      targetRow = [];
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellAddress = { c: C, r: R };
        const cellRef = XLSX.utils.encode_cell(cellAddress);
        const cell = sheet[cellRef];
        targetRow.push(cell ? cell.v : undefined);
      }
      break;
    }
  }
  return targetRow; // This will return the
}

function rowToJson(row) {
  // Example conversion, customize this based on your needs
  return {
    code: row[0],
    titles: row[1],
    optionA: row[2],
    optionB: row[3],
    optionCD: row[4],
    optionE: row[5],
    eligible: row[6],
    // Add more fields as necessary
  };
}

function writeJsonToFile(json, outputPath) {
  fs.writeFile(outputPath, JSON.stringify(json, null, 2), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`JSON saved to ${outputPath}`);
  });
}

console.log(`Trying to open file at path: ${filePath}`);
const workbook = XLSX.readFile(filePath);
if (!workbook) {
  console.error("Failed to read the workbook.");
  return;
}

const sheet = workbook.Sheets[sheetName];
if (!sheet) {
  console.error(`Sheet "${sheetName}" not found.`);
  return;
}
const sheetName = "Sheet1";
const rowIndex = 2; // Excel rows are 1-indexed
const outputPath = "output.json";

const row = convertRowToJson(filePath, sheetName, rowIndex);
const json = rowToJson(row);
writeJsonToFile(json, outputPath);

console.log("Conversion completed.");
