const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI =
  "mongodb+srv://amdadul-octopi:zWBCqbZwf42mzosM@cluster0.ysgtnmf.mongodb.net/neuro-diversity-quiz?retryWrites=true&w=majority&appName=Cluster0"; // Change the URI as needed
mongoose
  .connect(mongoURI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Mongoose schema for Quiz Data
const quizSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  text: { type: String, required: true },
  category: { type: String, required: true },
});

// Define Mongoose schema for User Results
const userResultSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  score: {
    EI: { type: Number, default: 0 },
    WI: { type: Number, default: 0 },
    EC: { type: Number, default: 0 },
    WC: { type: Number, default: 0 },
    EA: { type: Number, default: 0 },
    WA: { type: Number, default: 0 },
    SI: { type: Number, default: 0 },
  },
  createdAt: { type: Date, default: Date.now },
});

// Create a Mongoose model
const Quiz = mongoose.model("Quiz", quizSchema);

// create a Mongoose model
const UserResult = mongoose.model("UserResult", userResultSchema);

// Endpoint to get quiz data
app.get("/quiz-data", async (req, res) => {
  try {
    const quizData = await Quiz.find().lean(); // Fetch all quiz data as plain JS objects

    let id = 1;

    // Iterate over each quiz in the array (assuming quizData is an array of quizzes)
    quizData.forEach((quiz) => {
      // Ensure quiz has sections
      if (quiz.sections && quiz.sections.length > 0) {
        quiz.sections.forEach((section) => {
          // Ensure section has questions
          if (section.questions && section.questions.length > 0) {
            section.questions.forEach((question) => {
              question.question_id = id++; // Assign incremental question_id
            });
          }
        });
      }
    });

    console.log("Updated quizData: ", JSON.stringify(quizData));
    res.json(quizData); // Send modified quiz data with updated question_id
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    res.status(500).json({ error: "Failed to load quiz data" });
  }
});

// Endpoint to add or update user score
app.post("/user-score", async (req, res) => {
  const { name, email, score } = req.body;

  if (!name || !email || !score) {
    return res
      .status(400)
      .json({ error: "Name, email, and score are required" });
  }

  try {
    // Find the user by email
    let userResult = await UserResult.findOne({ email });

    if (userResult) {
      // Update existing user score
      userResult.score = score;
      await userResult.save();
      res.json({ message: "Score updated successfully", userResult });
    } else {
      // Create a new user with the given score
      const newUserResult = new UserResult({
        name,
        email,
        score,
      });
      await newUserResult.save();
      res.json({ message: "Score added successfully", newUserResult });
    }
  } catch (error) {
    console.error("Error saving user score:", error);
    res.status(500).json({ error: "Failed to save user score" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
