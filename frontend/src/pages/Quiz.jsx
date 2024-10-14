import { useEffect, useState } from "react";
import PatientInfo from "./PatientInfo";

const Quiz = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [errors, setErrors] = useState({});
  const [patientData, setPatientData] = useState({
    name: "",
    email: "",
  });
  const [score, setScore] = useState({
    EI: 0,
    WI: 0,
    EC: 0,
    WC: 0,
    EA: 0,
    WA: 0,
  });
  const [showResults, setShowResults] = useState(false);

  // Load questions from the Express server
  useEffect(() => {
    fetch("http://localhost:5005/quiz-data") // Ensure this matches your Express endpoint
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
    setErrors({ ...errors, [questionId]: false }); // Clear error when the question is answered
  };

  const validateResponses = () => {
    const newErrors = {};
    let allValid = true;

    // Validate each question is answered
    questions[0].sections.forEach((section) => {
      section.questions.forEach((question) => {
        if (responses[question.id] === undefined) {
          newErrors[question.id] = true; // Mark as an error if not answered
          allValid = false;
        }
      });
    });

    setErrors(newErrors);
    return allValid;
  };

  const calculateScore = () => {
    if (!validateResponses()) {
      alert("Please answer all questions before submitting.");
      return;
    }

    const newScore = { EI: 0, WI: 0, EC: 0, WC: 0, EA: 0, WA: 0 };

    for (const [id, response] of Object.entries(responses)) {
      const question = questions[0].sections
        .flatMap((section) => section.questions)
        .find((q) => q.id === parseInt(id));

      if (question) {
        const category = question.category;
        // Scoring logic based on response
        newScore[category] += response; // Adjust this as needed based on your scoring logic
      }
    }

    setScore(newScore);
    setShowResults(true); // Show results after calculation
  };

  if (!hasStarted) {
    return (
      <div>
        <PatientInfo
          patientData={patientData}
          setPatientData={setPatientData}
          setHasStarted={setHasStarted}
        />
      </div>
    );
  }

  return (
    <div className="pb-16">
      <div>
        <div className="max-w-screen-sm mx-auto">
          {showResults ? (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-center">Your Scores</h2>
              <ul className="list-none text-lg">
                {Object.entries(score).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          ) : questions.length === 0 ? (
            <p>Loading questions...</p>
          ) : (
            <div className="space-y-12">
              <h1 className="text-2xl font-bold text-[#1D126C] text-center mb-10">
                Neurodivergent Workplace Inclusion Test
              </h1>
              {questions[0].sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="p-4 rounded-md border">
                  <p className="text-2xl font-bold -mt-8 z-10 bg-white flex justify-start w-fit">
                    {section.name}
                  </p>
                  {section.questions.map((question, questionIndex) => (
                    <div
                      key={question._id}
                      className={`mb-4 mt-2 last:mb-0 bg-gray-100 p-4 rounded-lg ${
                        errors[question.id] ? "border border-red-600" : ""
                      }`}
                    >
                      <h4 className="text-lg font-medium mb-2">
                        {questionIndex + 1}. {question.question}
                      </h4>
                      <div className="grid grid-cols-1 gap-1 pl-4">
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
                              required
                            />
                            {value === 0 && "Not at all"}
                            {value === 1 && "Sometimes"}
                            {value === 2 && "On Occasion"}
                            {value === 3 && "Most of the time"}
                            {value === 4 && "All the time"}
                          </label>
                        ))}
                      </div>
                      {errors[question.id] && (
                        <p className="text-red-600">Please select an answer.</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          {!showResults && (
            <div className="w-full flex justify-end">
              <button
                onClick={calculateScore}
                className="p-3 mt-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-md text-white min-w-32"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
