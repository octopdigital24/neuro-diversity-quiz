import { useEffect, useState } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [score, setScore] = useState({
    EI: 0,
    WI: 0,
    EC: 0,
    WC: 0,
    EA: 0,
    WA: 0,
  });

  // Load questions from the Express server
  useEffect(() => {
    fetch("http://localhost:5000/quiz-data") // Ensure this matches your Express endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the fetched data for debugging
        setQuestions(data); // Assuming the API returns an array of questions
      })
      .catch((error) => console.error("Error fetching quiz data:", error));
  }, []);

  const handleResponseChange = (questionId, response) => {
    setResponses({ ...responses, [questionId]: response });
  };

  const calculateScore = () => {
    const newScore = { EI: 0, WI: 0, EC: 0, WC: 0, EA: 0, WA: 0 };

    for (const [id, response] of Object.entries(responses)) {
      const question = questions.find((q) => q.id === parseInt(id));

      if (question) {
        const category = question.category;
        // Scoring logic based on response
        if (id <= 30) {
          newScore[category] += response; // Adjust this as needed based on your scoring logic
        } else {
          newScore[category] += response; // Different scoring logic for Q31-60
        }
      }
    }

    setScore(newScore);
  };

  console.log("questions: ", questions);

  return (
    <div className="p-5 md:p-8 lg:p-16 max-w-3xl mx-auto bg-gray-100">
      <h1 className="text-4xl font-bold text-[#1D126C] mb-10 text-center">
        Neurodivergent Workplace Inclusion Test
      </h1>
      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        questions[0].sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h2 className="text-2xl font-bold -ml-6 mb-2">{section.name}</h2>
            {section.questions.map((question, questionIndex) => (
              <div key={question._id} className="mb-4">
                <h4 className="text-lg font-medium">
                  {questionIndex + 1}. {question.question}
                </h4>
                <div className="grid  grid-cols-1">
                  {/* Radio buttons for each answer option */}
                  {[0, 1, 2, 3, 4].map((value) => (
                    <label key={value} className="flex gap-2">
                      <input
                        type="radio"
                        name={`question_${question.id}`} // Group radio buttons by question ID
                        value={value}
                        checked={responses[question.id] === value}
                        onChange={() =>
                          handleResponseChange(question.id, value)
                        } // Update response state
                      />
                      {value === 0 && "Not at all"}
                      {value === 1 && "Sometimes"}
                      {value === 2 && "On Occasion"}
                      {value === 3 && "Most of the time"}
                      {value === 4 && "All the time"}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))
      )}
      <button
        onClick={calculateScore}
        className="p-3 mx-auto  bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-md text-white min-w-32 "
      >
        Submit
      </button>
      {/* <div>
        <h2>Your Scores:</h2>
        {Object.entries(score).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </div> */}
    </div>
  );
};

export default Quiz;
