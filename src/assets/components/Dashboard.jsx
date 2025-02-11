import React, { useState } from "react";
import {
  FaChartLine,
  FaBars,
  FaTimes,
  FaHome,
  FaFileAlt,
  FaClipboardCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MarketAnalytics from "./MarketAnalytics";
import CVScanner from "./CVScanner";
import AssessmentAutomator from "./AssessmentAutomator";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("market-analytics");

  const sampleAssessment = {
    title: "Frontend Developer Quiz",
    description: "Test your React and JavaScript skills.",
    questions: [
      {
        id: "q1",
        text: "What is the purpose of useState in React?",
        options: ["Manage state", "Handle routing", "Make API calls"],
      },
      {
        id: "q2",
        text: "What does JSX stand for?",
        options: ["JavaScript XML", "JSON XML", "Java XML"],
      },
    ],
  };

  return (
    <div className="flex h-screen bg-[#1A1A2E] text-white">
      {/* Sidebar */}
      <motion.div
        animate={{ width: isCollapsed ? "80px" : "250px" }}
        className="h-full bg-[#222] p-4 flex flex-col fixed left-0 top-0 z-50 shadow-lg"
      >
        <div className="flex justify-between items-center">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-[#45BAB3]">HRTech</h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-xl hover:cursor-pointer"
          >
            {isCollapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>
        <ul className="mt-8 space-y-6">
          <li className="hover:text-[rgb(69,186,179)] cursor-pointer flex items-center">
            <Link to="/hr-tech" className="flex items-center gap-3">
              <FaHome size={20} />
              {!isCollapsed && "Home"}
            </Link>
          </li>
          <li
            className="flex items-center gap-3 cursor-pointer hover:text-[#45BAB3]"
            onClick={() => setActiveSection("market-analytics")}
          >
            <FaChartLine size={20} /> {!isCollapsed && "Market Analytics"}
          </li>
          <li
            className="flex items-center gap-3 cursor-pointer hover:text-[#45BAB3]"
            onClick={() => setActiveSection("cv-scanner")}
          >
            <FaFileAlt size={20} /> {!isCollapsed && "CV Scanner"}
          </li>
          <li
            className="flex items-center gap-3 cursor-pointer hover:text-[#45BAB3]"
            onClick={() => setActiveSection("assessment-automator")}
          >
            <FaClipboardCheck size={20} />{" "}
            {!isCollapsed && "Assessment Automator"}
          </li>
        </ul>
      </motion.div>

      {/* Main Content */}
      <div className="ml-[80px] md:ml-[250px] flex-1 p-8 overflow-auto">
        {activeSection === "market-analytics" && <MarketAnalytics />}
        {activeSection === "cv-scanner" && <CVScanner />}
        {activeSection === "assessment-automator" && (
          <AssessmentAutomator assessmentData={sampleAssessment} />
        )}
      </div>
    </div>
  );
}
