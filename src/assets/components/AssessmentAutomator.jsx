import React, { useState, useEffect } from "react";

const AssessmentAutomator = ({ assessment }) => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log("Assessment loaded:", assessment);
  }, [assessment]);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    assessment?.questions?.forEach((question) => {
      if (answers[question.questionId] === question.correctAnswer) {
        totalScore += question.points;
      }
    });
    setScore(totalScore);
    setSubmitted(true);
  };

  if (!assessment || !assessment.questions) {
    return <p className="text-white">No assessment data available.</p>;
  }

  return (
    <div className="p-6 bg-[#1A1A2E] text-white">
      <h2 className="text-3xl font-bold mb-4">{assessment.title}</h2>
      <p className="text-lg opacity-80 mb-6">{assessment.description}</p>

      <div className="space-y-6">
        {assessment.questions.map((question) => (
          <div
            key={question.questionId}
            className="bg-[#222] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">
              {question.questionText}
            </h3>

            {/* Question Type Rendering */}
            {question.type === "image" && (
              <img
                src={question.imageUrl}
                alt="Question"
                className="mb-4 rounded-lg"
              />
            )}
            {question.type === "code" && (
              <div>
                <pre className="bg-[#1A1A2E] p-4 rounded-lg mb-4">
                  <code>{question.codeSnippet}</code>
                </pre>
                <textarea
                  className="w-full p-3 bg-gray-900 text-white rounded-lg"
                  value={answers[question.questionId] || ""}
                  onChange={(e) =>
                    handleAnswer(question.questionId, e.target.value)
                  }
                  placeholder="Your code here..."
                />
              </div>
            )}
            {question.type === "multiple-choice" && (
              <div className="space-y-2">
                {question.options.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={`question-${question.questionId}`}
                      value={option}
                      checked={answers[question.questionId] === option}
                      onChange={() => handleAnswer(question.questionId, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={calculateScore}
        className="mt-6 bg-[#45BAB3] text-white px-6 py-2 rounded-lg hover:bg-[#3aa8a1]"
      >
        Submit
      </button>

      {submitted && (
        <div className="mt-6 bg-[#222] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#45BAB3]">
            Your Score: {score}
          </h3>
          <p className="text-gray-300 mt-2">
            Passing Score:{" "}
            {assessment.evaluationCriteria?.passingScore || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
};

export default AssessmentAutomator;
