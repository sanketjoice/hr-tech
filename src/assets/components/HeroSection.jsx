import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function HeroSection() {
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
    }, 4000); // Auto-scroll every 4 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <section className="flex flex-col items-center text-center px-6 py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-28 leading-tight">
          AI-Powered HRTech for Smarter Workforce Management
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          Streamline your hiring, onboarding, and employee management with
          cutting-edge AI-driven insights.
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 text-lg font-semibold text-blue-600 border border-blue-600 rounded-lg shadow-md hover:bg-blue-100 transition">
            Learn More
          </button>
        </div>
        <div className="mt-10"></div>
      </section>

      {/* Features Overview Section */}
      <section className="px-6 py-16 md:py-24 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Key Features
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how our AI-powered platform transforms HR management.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Feature 1 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <div className="text-4xl text-blue-600 mb-4">🔍</div>
            <h3 className="text-xl font-semibold">Smart Candidate Matching</h3>
            <p className="mt-2 text-gray-600">
              AI-driven recommendations for finding the best talent quickly.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <div className="text-4xl text-blue-600 mb-4">📊</div>
            <h3 className="text-xl font-semibold">Data-Driven Insights</h3>
            <p className="mt-2 text-gray-600">
              Make informed HR decisions with real-time analytics.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <div className="text-4xl text-blue-600 mb-4">⚙️</div>
            <h3 className="text-xl font-semibold">Automated Onboarding</h3>
            <p className="mt-2 text-gray-600">
              Streamline onboarding processes with AI-powered automation.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <div className="text-4xl text-blue-600 mb-4">💼</div>
            <h3 className="text-xl font-semibold">Employee Engagement</h3>
            <p className="mt-2 text-gray-600">
              Enhance team productivity with AI-backed engagement tools.
            </p>
          </div>
        </div>
      </section>
      {/* Client Testimonials Section */}
      <section className="px-6 py-16 md:py-24 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from HR professionals who transformed their workflow with our
          platform.
        </p>
        <div className="relative mt-10 max-w-3xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full p-6 bg-white rounded-lg shadow-md"
              >
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <h4 className="mt-4 font-semibold text-blue-600">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Plans */}
      <section className="px-6 py-16 md:py-24 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Pricing Plans
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the right plan for your business needs.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 border rounded-lg shadow-md ${
                plan.highlight
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {plan.name}
              </h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">
                {plan.price}
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* SEO-Optimized Copywriting */}
      <section className="px-6 py-16 md:py-24 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          SEO-Optimized Copywriting
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Engage the right audience with AI-powered, SEO-friendly content that
          ranks higher and converts better.
        </p>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              Strategic Keywords
            </h3>
            <p className="mt-2 text-gray-600">
              We integrate high-ranking keywords naturally for better visibility
              and search performance.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              Engaging & Clear
            </h3>
            <p className="mt-2 text-gray-600">
              Compelling content that keeps users engaged while improving search
              rankings.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              AI-Powered Optimization
            </h3>
            <p className="mt-2 text-gray-600">
              Smart AI-driven content strategies ensure your site stays ahead in
              search results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
