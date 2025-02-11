import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const MarketAnalytics = () => {
  const hiringTrendsData = [
    { month: "Jan", hires: 30 },
    { month: "Feb", hires: 50 },
    { month: "Mar", hires: 40 },
    { month: "Apr", hires: 70 },
    { month: "May", hires: 90 },
  ];

  const jobDemandData = [
    { industry: "Tech", demand: 80 },
    { industry: "Finance", demand: 60 },
    { industry: "Healthcare", demand: 50 },
    { industry: "Education", demand: 40 },
    { industry: "Retail", demand: 30 },
  ];

  const experienceLevelData = [
    { name: "Entry Level", value: 40 },
    { name: "Mid Level", value: 35 },
    { name: "Senior Level", value: 25 },
  ];

  const COLORS = ["#45BAB3", "#BA454C", "#FFBB28"];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Market Analytics</h2>
      <p className="text-lg opacity-80 mb-6">
        Interactive dashboard for hiring trend insights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#222] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">
            Hiring Trends Over Time
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={hiringTrendsData}>
              <XAxis dataKey="month" stroke="#E0E0E0" />
              <YAxis stroke="#E0E0E0" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="hires"
                stroke="#45BAB3"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#222] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Job Demand by Industry</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={jobDemandData}>
              <XAxis dataKey="industry" stroke="#E0E0E0" />
              <YAxis stroke="#E0E0E0" />
              <Tooltip />
              <Bar dataKey="demand" fill="#BA454C" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#222] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">
            Candidate Experience Levels
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={experienceLevelData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#45BAB3"
                dataKey="value"
              >
                {experienceLevelData.map((entry, index) => (
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
};

export default MarketAnalytics;
