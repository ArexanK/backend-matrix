const fs = require("fs");

//read
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log("File content:", data);
});

//write

const contentToWrite = "This is a new line added using fs.writeFile!";

fs.writeFile("output.txt", contentToWrite, "utf8", (err) => {
  if (err) {
    console.error("Error writing to the file:", err);
    return;
  }
  console.log("File has been written successfully.");
});

//append = add content without overwriting

const contentToAppend = "\nThis line is appended using fs.appendFile!";

fs.appendFile("output.txt", contentToAppend, "utf8", (err) => {
  if (err) {
    console.error("Error appending to the file:", err);
    return;
  }
  console.log("Content has been appended successfully.");
});
