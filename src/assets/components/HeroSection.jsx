import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUserTie,
  FaChartLine,
  FaRobot,
  FaUsers,
} from "react-icons/fa";

export default function LandingPage() {
  const plans = [
    {
      name: "Basic",
      price: "$29/mo",
      features: ["AI-Powered Matching", "Basic Analytics", "Email Support"],
    },
    {
      name: "Pro",
      price: "$79/mo",
      features: ["Advanced AI Insights", "Custom Reports", "Priority Support"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Full HR Automation",
        "Dedicated Account Manager",
        "24/7 Support",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "This platform completely changed the way we handle recruitment! The AI-powered insights are game-changers.",
      name: "Jane Doe",
      role: "HR Manager, TechCorp",
    },
    {
      quote:
        "An indispensable tool for HR teams. We've seen a 40% increase in hiring efficiency!",
      name: "John Smith",
      role: "Talent Acquisition Lead, InnovateX",
    },
    {
      quote:
        "A seamless experience from start to finish. The automation features are a lifesaver.",
      name: "Emily Davis",
      role: "VP of HR, GrowthHub",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-[#1A1A2E] text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mt-24 leading-tight"
        >
          AI-Powered HRTech for Smarter Workforce Management
        </motion.h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl opacity-90">
          Streamline your hiring, onboarding, and employee management with
          AI-driven insights.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#45BAB3] text-white rounded-lg">
          Get Started
        </button>
      </section>

      {/* Features Overview Section */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold">Key Features</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Smart Candidate Matching", icon: <FaUserTie size={30} /> },
            { name: "Data-Driven Insights", icon: <FaChartLine size={30} /> },
            { name: "Automated Onboarding", icon: <FaRobot size={30} /> },
            { name: "Employee Engagement", icon: <FaUsers size={30} /> },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-[#222] rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="text-[#45BAB3] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="px-6 py-20 text-center bg-[#1A1A2E]">
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <blockquote className="text-xl italic">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          <p className="mt-4 font-semibold">
            - {testimonials[currentIndex].name},{" "}
            {testimonials[currentIndex].role}
          </p>
        </motion.div>
      </section>

      {/* Pricing Plans */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Pricing Plans</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-6 bg-[#222] rounded-lg shadow-lg ${
                plan.highlight ? "border-2 border-[#45BAB3]" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-lg">{plan.price}</p>
              <ul className="mt-4 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#45BAB3]" /> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO-Optimized Copywriting */}
      <section className="px-6 py-16 md:py-24 bg-[#1A1A2E] text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold">
          SEO-Optimized Copywriting
        </h2>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
          Engage the right audience with AI-powered, SEO-friendly content that
          ranks higher and converts better.
        </p>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#222] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Strategic Keywords</h3>
            <p className="mt-2 opacity-80">
              We integrate high-ranking keywords naturally for better visibility
              and search performance.
            </p>
          </div>
          <div className="p-6 bg-[#222] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Engaging & Clear</h3>
            <p className="mt-2 opacity-80">
              Compelling content that keeps users engaged while improving search
              rankings.
            </p>
          </div>
          <div className="p-6 bg-[#222] rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">AI-Powered Optimization</h3>
            <p className="mt-2 opacity-80">
              Smart AI-driven content strategies ensure your site stays ahead in
              search results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
