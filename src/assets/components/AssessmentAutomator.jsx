import React, { useState } from "react";

export default function AssessmentAutomator({ assessmentData }) {
  if (!assessmentData || !assessmentData.questions) {
    return <div className="text-white">Loading assessment...</div>;
  }

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="bg-[#222] p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-4">{assessmentData.title}</h2>
      <p className="text-lg opacity-80 mb-6">{assessmentData.description}</p>

      {assessmentData.questions.map((question, index) => (
        <div key={question.id} className="mb-4 p-4 bg-[#333] rounded-lg">
          <h3 className="text-xl mb-2">
            {index + 1}. {question.text}
          </h3>
          {question.options.map((option) => (
            <label
              key={option}
              className="block p-2 bg-[#444] rounded-lg mt-2 cursor-pointer"
            >
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={answers[question.id] === option}
                onChange={() => handleAnswerChange(question.id, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="mt-4 bg-[#45BAB3] text-white px-6 py-2 rounded-lg"
        >
          Submit Answers
        </button>
      ) : (
        <div className="mt-4 text-green-400">
          Your answers have been submitted!
        </div>
      )}
    </div>
  );
}
