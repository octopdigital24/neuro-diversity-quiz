const express = require("express");
const cors = require("cors"); // Optional: for handling CORS if your frontend and backend are on different origins

const app = express();
const PORT = process.env.PORT || 5000; // You can change the port as needed

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Basic response for testing
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
