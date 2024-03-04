const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a POST route to receive JSON data containing a single sentence
app.post("/image", (req, res) => {
  // Assuming your image file is named "example.jpg" and located in a folder named "images" in your project directory
  const imagePath = path.join(__dirname, "images", "example.jpg");

  // Assuming you want to log the received sentence to the console
  console.log("Received sentence:", req.body.sentence);

  // Serve the image file
  res.sendFile(imagePath);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
