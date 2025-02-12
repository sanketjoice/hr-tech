import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
    <div className="p-4 md:p-6 bg-[#1A1A2E] text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        {assessment.title}
      </h2>
      <p className="text-base md:text-lg opacity-80 mb-6">
        {assessment.description}
      </p>

      <div className="space-y-6">
        {assessment.questions.map((question) => (
          <div
            key={question.questionId}
            className="bg-[#222] p-4 md:p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              {question.questionText}
            </h3>

            {/* Image Question */}
            {question.type === "image" && (
              <div className="mb-4">
                <img
                  src={question.imageUrl}
                  alt="Question"
                  className="mb-4 rounded-lg w-full max-w-md mx-auto"
                />
                <input
                  type="text"
                  className="w-full p-3 bg-gray-900 text-white rounded-lg"
                  placeholder="Enter your answer..."
                  value={answers[question.questionId] || ""}
                  onChange={(e) =>
                    handleAnswer(question.questionId, e.target.value)
                  }
                />
              </div>
            )}

            {/* Code Question */}
            {question.type === "code" && (
              <div>
                <pre className="bg-[#1A1A2E] p-4 rounded-lg mb-4 text-sm md:text-base overflow-auto">
                  <code>{question.codeSnippet}</code>
                </pre>
                <textarea
                  className="w-full min-h-[100px] md:min-h-[150px] p-3 bg-gray-900 text-white rounded-lg resize-none"
                  value={answers[question.questionId] || ""}
                  onChange={(e) =>
                    handleAnswer(question.questionId, e.target.value)
                  }
                  placeholder="Your code here..."
                />
              </div>
            )}

            {/* Chart Question */}
            {question.type === "chart" && question.chartData && (
              <div className="mb-4">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart
                    data={question.chartData.labels.map((label, i) => ({
                      label,
                      value: question.chartData.values[i],
                    }))}
                  >
                    <XAxis dataKey="label" stroke="#E0E0E0" />
                    <YAxis stroke="#E0E0E0" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#45BAB3"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-900 text-white rounded-lg mt-4"
                  placeholder="Enter your analysis..."
                  value={answers[question.questionId] || ""}
                  onChange={(e) =>
                    handleAnswer(question.questionId, e.target.value)
                  }
                />
              </div>
            )}

            {/* Multiple Choice */}
            {question.type === "multiple-choice" && (
              <div className="space-y-2">
                {question.options.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center cursor-pointer text-sm md:text-base"
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

      <div className="mt-6 flex flex-col md:flex-row items-center md:justify-between">
        <button
          onClick={calculateScore}
          className="bg-[#45BAB3] text-white px-6 py-2 rounded-lg hover:bg-[#3aa8a1] w-full md:w-auto"
        >
          Submit
        </button>
      </div>

      {submitted && (
        <div className="mt-6 bg-[#222] p-4 md:p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-[#45BAB3]">
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
