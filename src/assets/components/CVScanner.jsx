import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function CVScanner() {
  const candidates = [
    {
      id: 1,
      name: "Alice Johnson",
      experience: "5 years",
      skills: "React, Node.js",
      score: 85,
    },
    {
      id: 2,
      name: "Bob Smith",
      experience: "3 years",
      skills: "Python, Django",
      score: 78,
    },
    {
      id: 3,
      name: "Charlie Brown",
      experience: "7 years",
      skills: "Java, Spring Boot",
      score: 92,
    },
  ];

  const experienceData = [
    { category: "0-2 yrs", value: 15 },
    { category: "3-5 yrs", value: 25 },
    { category: "6-8 yrs", value: 30 },
    { category: "9+ yrs", value: 20 },
  ];

  const COLORS = ["#45BAB3", "#BA454C", "#FFBB28"];
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold">CV Scanner</h2>
      <p className="mt-4 text-lg opacity-80">
        AI-powered resume parsing & candidate ranking.
      </p>

      {/* Candidate Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-[#222] p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
            onClick={() => setSelectedCandidate(candidate)}
          >
            <h3 className="text-xl font-semibold text-[#45BAB3]">
              {candidate.name}
            </h3>
            <p className="text-gray-300">Experience: {candidate.experience}</p>
            <p className="text-gray-300">Skills: {candidate.skills}</p>
            <p className="text-gray-400">AI Score: {candidate.score}</p>
          </div>
        ))}
      </div>

      {/* Selected Candidate Details */}
      {selectedCandidate && (
        <div className="mt-6 bg-[#222] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#45BAB3]">
            {selectedCandidate.name}'s Details
          </h3>
          <p className="text-gray-300 mt-2">
            Experience: {selectedCandidate.experience}
          </p>
          <p className="text-gray-300">Skills: {selectedCandidate.skills}</p>
          <p className="text-gray-400">AI Score: {selectedCandidate.score}</p>
        </div>
      )}

      {/* Charts Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart - Experience Distribution */}
        <div className="bg-[#222] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            Candidate Experience Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={experienceData}>
              <XAxis dataKey="category" stroke="#E0E0E0" />
              <YAxis stroke="#E0E0E0" />
              <Tooltip />
              <Bar dataKey="value" fill="#45BAB3" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Experience Levels */}
        <div className="bg-[#222] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            Experience Level Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={experienceData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#45BAB3"
                dataKey="value"
              >
                {experienceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
