import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaUserTie,
  FaChartLine,
  FaRobot,
  FaUsers,
} from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className="bg-[#1A1A2E] min-h-screen w-full flex justify-center text-white">
      <div className="max-w-[1440px] w-full">
        <nav className="w-full fixed top-0 left-0 z-50 py-4 flex justify-center bg-[#222]">
          <div className="max-w-[1440px] w-full flex justify-between items-center px-6">
            <h1 className="text-2xl font-bold text-[#45BAB3]">HRTech</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-lg">
              <li className="hover:text-[#45BAB3] cursor-pointer">Features</li>
              <li className="hover:text-[#45BAB3] cursor-pointer">
                Testimonials
              </li>
              <li className="hover:text-[#45BAB3] cursor-pointer">Pricing</li>
              <li className="hover:text-[#45BAB3] cursor-pointer">SEO Copy</li>
              <li className="hover:text-[#45BAB3] cursor-pointer">
                <Link to="/hr-tech/dashboard">Dashboard</Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#45BAB3] text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars />
            </button>

            {/* Mobile Menu */}
            <div
              className={`fixed top-0 right-0 w-64 h-full bg-[#222] text-white transform ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out md:hidden`}
            >
              <div className="p-6 flex flex-col gap-6 text-lg">
                {/* Close Button */}
                <button
                  className="text-[#45BAB3] text-2xl self-end"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaTimes />
                </button>

                <Link
                  to="/features"
                  className="hover:text-[#45BAB3]"
                  onClick={() => setMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/testimonials"
                  className="hover:text-[#45BAB3]"
                  onClick={() => setMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  to="/pricing"
                  className="hover:text-[#45BAB3]"
                  onClick={() => setMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/seo-copy"
                  className="hover:text-[#45BAB3]"
                  onClick={() => setMenuOpen(false)}
                >
                  SEO Copy
                </Link>
                <Link
                  to="/hr-tech/dashboard"
                  className="hover:text-[#45BAB3]"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center px-6 py-20 md:py-32 mt-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
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
              {
                name: "Smart Candidate Matching",
                icon: <FaUserTie size={30} />,
              },
              { name: "Data-Driven Insights", icon: <FaChartLine size={30} /> },
              { name: "Automated Onboarding", icon: <FaRobot size={30} /> },
              { name: "Employee Engagement", icon: <FaUsers size={30} /> },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                whileHover={{ scale: 1.09 }}
                className="p-6 bg-[#222] rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="text-[#45BAB3] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.name}</h3>
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
            {[
              {
                title: "Strategic Keywords",
                text: "We integrate high-ranking keywords naturally for better visibility and search performance.",
              },
              {
                title: "Engaging & Clear",
                text: "Compelling content that keeps users engaged while improving search rankings.",
              },
              {
                title: "AI-Powered Optimization",
                text: "Smart AI-driven content strategies ensure your site stays ahead in search results.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-[#222] rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1 }}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 opacity-80">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#222] py-8 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#45BAB3]">HRTech</h2>
            <p className="mt-2 opacity-80">
              Empowering HR with AI-driven solutions
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="#" className="hover:text-[#45BAB3]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#45BAB3]">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#45BAB3]">
                Contact
              </a>
            </div>
            <p className="mt-4 text-sm opacity-60">
              © 2025 HRTech. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
