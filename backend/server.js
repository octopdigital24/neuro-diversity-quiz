const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI =
  "mongodb+srv://amdadul-octopi:zWBCqbZwf42mzosM@cluster0.ysgtnmf.mongodb.net/neuro-diversity-quiz?retryWrites=true&w=majority&appName=Cluster0"; // Change the URI as needed
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Mongoose schema for Quiz Data
const quizSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  text: { type: String, required: true },
  category: { type: String, required: true },
});

// Create a Mongoose model
const Quiz = mongoose.model("Quiz", quizSchema);

// Endpoint to get quiz data
app.get("/quiz-data", async (req, res) => {
  try {
    const quizData = await Quiz.find(); // Fetch all quiz data from the database
    res.json(quizData);
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    res.status(500).json({ error: "Failed to load quiz data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
