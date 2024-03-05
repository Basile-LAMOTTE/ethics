const express = require("express");
const bodyParser = require("body-parser");
const { spawn } = require("child_process");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a POST route to receive JSON data containing a single sentence
app.post("/image", (req, res) => {
  // Execute the Python script with parameters
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req.body);

  const pythonProcess = spawn("python3", [
    "ia.py",
    req.body.param1,
    req.body.param2,
    req.body.param3,
    req.body.param4,
  ]);

  pythonProcess.stderr.on("data", (data) => {
    console.error(`Python script error: ${data}`);
  });

  const imagePath = path.join(__dirname, "images", "image.png");

  // Serve the image file
  res.sendFile(imagePath);
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
