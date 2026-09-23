"use client";

import React, { useState, useEffect } from "react";
import {
  useNavbarColor,
  sectorGradients,
} from "@/app/contexts/NavbarColorContext";

import {
  Shield,
  Users,
  Target,
  ArrowRight,
  Code,
  Eye,
  Lock,
  FileCheck,
  Megaphone,
  Building2,
  CheckCircle,
  Mail,
  Phone,
  Calendar,
  TrendingUp,
  Lightbulb,
  Globe,
  Award,
  Handshake,
  Send,
} from "lucide-react";

const PayzonInvestorPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    investmentRange: "",
    message: "",
  });
  const { setNavbarGradient, setPaymentGradient, setLogoGradient } =
    useNavbarColor();

  useEffect(() => {
    // Set payment page gradients (cyan/emerald/blue theme)
    setNavbarGradient("from-purple-500 via-purple-800 to-blue-400");
    setPaymentGradient("from-purple-800 to-blue-400");
    setLogoGradient("from-blue-400 to-purple-700");

    // Cleanup: Reset to default when leaving page
    return () => {
      const defaultGradients = sectorGradients["default"];
      setNavbarGradient(defaultGradients.navbar);
      setPaymentGradient(defaultGradients.payment);
      setLogoGradient(defaultGradients.logo);
    };
  }, [setNavbarGradient, setPaymentGradient, setLogoGradient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const ventures = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "IT & Software Solutions",
      description:
        "End-to-end development, automation, cloud setup, ERP systems, website development, and custom software across industries.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cyber Security Services",
      description:
        "Vulnerability assessment, penetration testing, cyber audits, and enterprise security systems — safeguarding businesses in the digital era.",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Audit & Compliance Services",
      description:
        "Digital audit tools, advisory, and reporting frameworks to help organizations meet compliance standards.",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing & Branding",
      description:
        "Social media, brand identity, performance marketing, and content strategy for comprehensive market presence.",
      color: "from-orange-600 to-red-600",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Association & Business Services",
      description:
        "Networks, partnership ecosystems, business listings, and support systems for MSMEs and startups.",
      color: "from-indigo-600 to-purple-600",
    },
  ];

  const reasons = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Multiple High-Growth Ventures",
      description:
        "Diversified operations reduce risk and increase revenue potential",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Strong Technology Backbone",
      description:
        "Every service is powered by modern, scalable, and future-ready tech",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Excellent Market Opportunity",
      description:
        "Serving enterprise businesses and MSMEs — India's largest growing market",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Transparent & Ethical Operations",
      description:
        "Structured reporting, audit standards, and strategic planning",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation-Driven Leadership",
      description:
        "Expert team brings bold ideas, execution excellence, and industry experience",
    },
  ];

  const coreValues = [
    { label: "Transparency", icon: <Eye className="w-5 h-5" /> },
    { label: "Sustainable Growth", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Operational Efficiency", icon: <Target className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop"
            alt="Business team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-purple-900/90 to-slate-900/95"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl lg:ml-[390px] mt-[140px] mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <span className="text-blue-200 font-semibold">
              🤝 Investor Relations
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mt-2">
              PAYZONINDIA
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Honored to welcome forward-thinking investors who believe in
            innovation, sustainability, and long-term value creation.
          </p>

          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            We are building a strong ecosystem across multiple high-growth
            sectors, and your partnership fuels our mission to create impactful
            solutions for businesses and consumers across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="group px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Meeting
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* About Section with Image */}
      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-6 py-2 bg-blue-100 border border-blue-200 rounded-full">
              <span className="text-blue-700 font-semibold">
                About PAYZONINDIA
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering Businesses with Technology & Strategy
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              PAYZONINDIA is a diversified digital and business-service company
              operating across multiple ventures, all driven by one vision —{" "}
              <span className="font-semibold text-blue-600">
                empowering businesses with technology, security, and strategic
                growth solutions.
              </span>
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-700">
                  We believe in <strong>transparency</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-700">
                  We focus on <strong>sustainable long-term growth</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-700">
                  We ensure <strong>high operational efficiency</strong> in
                  every venture
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Core Ventures */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-purple-100 border border-purple-200 rounded-full">
              <span className="text-purple-700 font-semibold">
                Our Core Ventures
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Diversified Business Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five strategic verticals driving innovation across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {ventures.map((venture, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`inline-flex p-4 bg-gradient-to-br ${venture.color} rounded-2xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {venture.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {venture.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {venture.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Message to Investors with Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                alt="Business partnership"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl -z-10"></div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block mb-4 px-6 py-2 bg-green-100 border border-green-200 rounded-full">
              <span className="text-green-700 font-semibold">
                Message to Investors
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Deeply Value Your Trust
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We are committed to building a future-ready organization, and your
              investment strengthens our ability to innovate, expand, and serve
              millions more across India.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Commitment
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Transparency in all operations and reporting
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Focus on sustainable long-term growth
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    High operational efficiency in every venture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Face-to-Face Meeting Section */}
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="text-blue-200 font-semibold">
                💼 Personal Meeting
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Face-to-Face Investor Meeting
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We strongly believe that meaningful partnerships begin with
              personal conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                text: "Our business model",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                text: "Revenue streams",
              },
              { icon: <Globe className="w-6 h-6" />, text: "Market expansion" },
              {
                icon: <Handshake className="w-6 h-6" />,
                text: "Investment opportunities",
              },
              {
                icon: <Award className="w-6 h-6" />,
                text: "Partnership structure",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-white/20 rounded-xl text-white mb-3">
                  {item.icon}
                </div>
                <p className="text-white font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Schedule Your Meeting
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <a href="mailto:investors@payzonindia.com?subject=Investor%20Inquiry&body=Hello%2C%20I%20would%20like%20to%20connect...">
                    <p className="font-semibold">investors@payzonindia.com</p>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Call Us</p>
                  <p className="font-semibold">+91 755 485 9540</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/20">
                <p className="text-blue-100 text-center">
                  Or fill the investor contact form below
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-orange-100 border border-orange-200 rounded-full">
            <span className="text-orange-700 font-semibold">
              Partnership Benefits
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Partner With PAYZONINDIA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic advantages that set us apart in the market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section with Image */}
      <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-6 py-2 bg-purple-100 border border-purple-200 rounded-full">
                <span className="text-purple-700 font-semibold">
                  Our Vision
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Building India's Most Trusted Ecosystem
              </h2>

              <p className="text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                To become India's most trusted multi-venture digital service
                ecosystem, enabling businesses to grow{" "}
                <span className="text-blue-600">smarter</span>,{" "}
                <span className="text-purple-600">safer</span>, and{" "}
                <span className="text-green-600">faster</span>.
              </p>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What This Means
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-gray-700">
                      <strong>Smarter:</strong> AI-driven solutions and data
                      intelligence
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                    </div>
                    <p className="text-gray-700">
                      <strong>Safer:</strong> Enterprise-grade security and
                      compliance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-700">
                      <strong>Faster:</strong> Accelerated growth and market
                      expansion
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
                  alt="Future vision"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div
        id="contact-form"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="inline-block mb-4 px-6 py-2 bg-blue-100 border border-blue-200 rounded-full">
              <span className="text-blue-700 font-semibold">Get In Touch</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Investor Contact Form
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Fill out the form below and our investment team will reach out to
              you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Investment Range *
                </label>
                <select
                  name="investmentRange"
                  required
                  value={formData.investmentRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Range</option>
                  <option value="50L-2Cr">₹50 Lakhs - ₹2 Crores</option>
                  <option value="2Cr-5Cr">₹2 Crores - ₹5 Crores</option>
                  <option value="5Cr-10Cr">₹5 Crores - ₹10 Crores</option>
                  <option value="10Cr+">₹10 Crores+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message/Query *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your investment interests and any specific questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Submit Inquiry
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Info Card */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Invest with Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>
                    Diversified portfolio across 5 high-growth sectors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Strong technology infrastructure and IP</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>
                    Transparent operations and ethical business practices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Experienced leadership with proven track record</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="font-semibold text-gray-900">
                      investors@payzonindia.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="font-semibold text-gray-900">
                      +91 755 485 9540
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Response Time</p>
                    <p className="font-semibold text-gray-900">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                📊 Investment Process
              </h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <span className="text-gray-700">Submit inquiry form</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <span className="text-gray-700">
                    Initial consultation call
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <span className="text-gray-700">Face-to-face meeting</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <span className="text-gray-700">
                    Due diligence & documentation
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    5
                  </span>
                  <span className="text-gray-700">
                    Partnership finalization
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <span className="text-blue-200 font-semibold">
              🚀 Join Our Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build the Future with PAYZONINDIA
          </h2>

          <p className="text-xl text-blue-100 mb-4">
            Your investment is more than financial support — it is a partnership
            in building one of India's future-leading business solutions
            platforms.
          </p>

          <p className="text-2xl font-bold text-white mb-12">
            Let's grow together. Let's build the future with PAYZONINDIA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 transform"
            >
              <Handshake className="w-5 h-5" />
              Become a Partner
            </a>
            <a
              href="#contact-form"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 text-sm">
              All investment inquiries are treated with strict confidentiality.
              We respect your privacy and data security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayzonInvestorPage;
