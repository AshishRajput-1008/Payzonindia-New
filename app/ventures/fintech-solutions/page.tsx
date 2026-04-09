"use client";

import React, { useEffect } from "react";
import {
  Phone,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

// Mock context hooks for demo
const useNavbarColor = () => ({
  setNavbarGradient: () => {},
  setPaymentGradient: () => {},
  setLogoGradient: () => {},
});

const sectorGradients = {
  "Finance-Audits": {
    navbar: "gradient1",
    payment: "gradient2",
    logo: "gradient3",
  },
  default: {
    navbar: "default1",
    payment: "default2",
    logo: "default3",
  },
};

const FinanceAuditsLandingPage: React.FC = () => {
  const { setNavbarGradient, setPaymentGradient, setLogoGradient } =
    useNavbarColor();

  useEffect(() => {
    const gradients = sectorGradients["Finance-Audits"];
    setNavbarGradient(gradients.navbar);
    setPaymentGradient(gradients.payment);
    setLogoGradient(gradients.logo);

    return () => {
      const defaultGradients = sectorGradients["default"];
      setNavbarGradient(defaultGradients.navbar);
      setPaymentGradient(defaultGradients.payment);
      setLogoGradient(defaultGradients.logo);
    };
  }, [setNavbarGradient, setPaymentGradient, setLogoGradient]);

  const services = [
    { name: "IT Services", href: "/ventures/it-services/" },
    { name: "Digital Marketing", href: "/ventures/digital-marketing/" },
    { name: "E-commerce", href: "/ventures/e-commerce/" },
    { name: "Fintech Solutions", href: "/ventures/fintech-solutions/" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/smarttaxidea/",
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/smarttaxidea",
      color: "hover:bg-pink-600",
      bgColor: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/PayzonIndia",
      color: "hover:bg-sky-600",
      bgColor: "bg-sky-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
       href:"https://www.youtube.com/@payzonindiadigitalsolutions",
      color: "hover:bg-red-600",
      bgColor: "bg-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center pt-36 md:pt-56 lg:pt-64">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-4 mb-[59px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
            Welcome to
            <br className="block sm:hidden" />
            <span className="block sm:inline"> </span>
            <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-200 bg-clip-text text-transparent">
              Payzon APIs
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200">
            Secure Fintech Solutions — Your Trusted Partner for Digital Payment Integration
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <motion.aside
            className="lg:col-span-4 order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lg:sticky lg:top-48 space-y-8">
              {/* Services Menu */}
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-blue-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Our Ventures
                </h2>
                <div className="flex flex-col gap-4">
                  {services.map((service, index) => (
                    <motion.a
                      key={index}
                      href={service.href}
                      className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 hover:from-blue-800 hover:via-indigo-800 hover:to-blue-900 px-5 py-3 text-white rounded-xl font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Media Card - Desktop Only */}
              <motion.div
                className="hidden lg:block bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 rounded-2xl p-6 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.bgColor} ${social.color} p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                      <span className="text-xs text-white font-medium">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
                <motion.a
                  href="https://www.smarttaxidea.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-blue-900 px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 group w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Visit Our Website</span>
                </motion.a>
              </motion.div>

              {/* Contact Card - Desktop Only */}
              <motion.a
                href="https://www.smarttaxidea.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800"></div>
                  <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                    <motion.svg
                      className="w-16 h-16 text-blue-300 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5C15.87 5 18 6.5 18 7S15.87 9 12 9Z" />
                    </motion.svg>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Need Assistance?
                    </h3>
                    <div className="mb-4 flex flex-col items-center">
                      <div className="flex items-center text-white mb-2">
                        <Phone className="w-6 h-6 mr-2" />
                        <span className="text-2xl font-semibold">
                          +91 755 485 9540
                        </span>
                      </div>
                    </div>
                    <p className="text-white text-lg mb-6">
                      Or reach out via our contact form:
                    </p>
                    <motion.button
                      className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 group shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <motion.main
            className="lg:col-span-8 space-y-8 order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Blog-like Section for APIs */}
            <section className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative h-80 md:h-96 overflow-hidden group">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20230216170349/What-is-an-API.png"
                  alt="Fintech API integration"
                  className="w-full h-full object-contain md:object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-blue-800/95 backdrop-blur-sm"></div>

                {/* Animated geometric shapes */}
                <div className="absolute top-10 right-10 w-32 h-32 border-4 border-blue-300/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-indigo-300/30 rounded-lg rotate-45 animate-pulse delay-150"></div>

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center text-center p-4 md:p-8">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-3 md:space-y-6 w-full"
                  >
                    {/* Main heading with gradient text */}
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-2">
                        <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-2xl">
                          Payzon APIs
                        </span>
                      </h2>
                      <div className="h-1 w-24 md:w-32 mx-auto bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 rounded-full"></div>
                    </motion.div>

                    {/* Subheading with icon */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-center justify-center gap-2 md:gap-3"
                    >
                      <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                    </motion.div>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-base md:text-xl lg:text-2xl text-blue-100 font-semibold tracking-wide"
                    >
                      Secure Fintech Solutions
                    </motion.p>

                    {/* Feature badges */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex flex-wrap justify-center gap-2 md:gap-3 pt-2 md:pt-4"
                    >
                      <span className="px-2 md:px-4 py-1 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs md:text-sm text-white font-medium">
                        🚀 Fast Integration
                      </span>
                      <span className="px-2 md:px-4 py-1 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs md:text-sm text-white font-medium">
                        🔒 Bank-Grade Security
                      </span>
                      <span className="px-2 md:px-4 py-1 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs md:text-sm text-white font-medium">
                        ⚡ 24/7 Available
                      </span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bottom wave decoration */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg
                    className="w-full h-8 md:h-12 fill-white"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                  </svg>
                </div>
              </div>

              <div className="p-8 prose prose-lg max-w-none text-gray-800">
              <motion.h2
  className="text-3xl font-bold text-gray-900 mb-4 mt-12"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.4 }}
>
  Mobile Recharge, DTH & Data Card Recharge API
</motion.h2>

<motion.p
  className="text-base leading-relaxed mb-6 text-gray-700"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }}
>
  Payzon's Mobile Recharge API is a comprehensive solution that empowers businesses 
  to offer instant recharge services for mobile prepaid, DTH (Direct-to-Home), and 
  data card services. Built with cutting-edge technology and designed for maximum 
  reliability, this API enables businesses to provide seamless recharge experiences 
  tailored to client needs and budgets across all major telecom operators in India.
</motion.p>

<motion.div
  className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6 mb-8"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.55 }}
>
  <h3 className="text-xl font-semibold text-gray-900 mb-3">
    Why Choose Our Recharge API?
  </h3>
  <p className="text-gray-700">
    Whether you're running a retail outlet, building a fintech app, or operating 
    a distribution network, our API provides the infrastructure you need to offer 
    reliable recharge services that keep your customers connected and satisfied.
  </p>
</motion.div>

<motion.h3
  className="text-2xl font-bold text-gray-900 mb-4 mt-8"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.6 }}
>
  Key Features & Capabilities
</motion.h3>

<motion.ul
  className="list-disc pl-6 space-y-3 mb-8 text-gray-700"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.65 }}
>
  <li>
    <strong>Multi-Operator Support:</strong> Seamlessly process recharges across 
    all major mobile operators including Airtel, Jio, Vi (Vodafone Idea), BSNL, 
    and MTNL, along with popular DTH providers like Tata Sky, Dish TV, Sun Direct, 
    Airtel Digital TV, and d2h
  </li>
  <li>
    <strong>Instant Processing:</strong> Lightning-fast transaction execution with 
    real-time confirmation ensures your customers receive their recharges within 
    seconds, enhancing user satisfaction and trust
  </li>
  <li>
    <strong>User-Friendly Interface:</strong> Intuitive dashboard with interactive 
    features, comprehensive reporting tools, and integrated chat support for both 
    you and your end-users
  </li>
  <li>
    <strong>High TPS Capability:</strong> Built to handle high transaction volumes 
    with robust infrastructure supporting multiple transactions per second (TPS), 
    perfect for businesses experiencing rapid growth
  </li>
  <li>
    <strong>24/7 Technical Support:</strong> Round-the-clock assistance from our 
    dedicated support team ensures seamless integration, troubleshooting, and 
    continuous operation of your recharge services
  </li>
  <li>
    <strong>Flexible Commission Structure:</strong> Competitive and customizable 
    commission models that allow you to maintain healthy profit margins while 
    offering attractive prices to your customers
  </li>
  <li>
    <strong>Smart Plan Recommendations:</strong> Integrated operator plan browsing 
    feature helps users discover the best recharge plans based on their usage 
    patterns and budget preferences
  </li>
  <li>
    <strong>Automated Wallet Management:</strong> Built-in wallet system with 
    automatic balance updates, low-balance alerts, and detailed transaction history 
    for better financial tracking
  </li>
</motion.ul>

<motion.h3
  className="text-2xl font-bold text-gray-900 mb-4 mt-8"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.7 }}
>
  Advanced Security & Compliance
</motion.h3>

<motion.p
  className="text-base leading-relaxed mb-6 text-gray-700"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.75 }}
>
  Security is at the core of our API design. Every transaction is encrypted 
  end-to-end using industry-standard protocols, and our system includes multiple 
  layers of fraud detection and prevention mechanisms. We maintain compliance with 
  RBI guidelines and telecom regulatory requirements, ensuring your business operates 
  within the legal framework while protecting sensitive customer data.
</motion.p>

<motion.h3
  className="text-2xl font-bold text-gray-900 mb-4 mt-8"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.8 }}
>
  Integration & Implementation
</motion.h3>

<motion.p
  className="text-base leading-relaxed mb-4 text-gray-700"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.85 }}
>
  Getting started with Payzon's Recharge API is straightforward and developer-friendly. 
  Our comprehensive documentation includes:
</motion.p>

<motion.ul
  className="list-disc pl-6 space-y-2 mb-8 text-gray-700"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.9 }}
>
  <li>Step-by-step integration guides with code samples in multiple programming languages</li>
  <li>RESTful API architecture with clear endpoints and response formats</li>
  <li>Sandbox environment for thorough testing before going live</li>
  <li>Webhook support for real-time transaction status updates</li>
  <li>Detailed error codes and troubleshooting guidelines</li>
  <li>SDK availability for faster implementation across platforms</li>
</motion.ul>

<motion.div
  className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8 border border-green-200"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.95 }}
>
  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
    <span className="text-2xl">💡</span> Business Benefits
  </h3>
  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
    <div>
      <p className="font-medium mb-1">• Revenue Generation</p>
      <p className="text-sm">Earn consistent commissions on every successful recharge</p>
    </div>
    <div>
      <p className="font-medium mb-1">• Customer Retention</p>
      <p className="text-sm">Provide value-added services that keep users engaged</p>
    </div>
    <div>
      <p className="font-medium mb-1">• Market Expansion</p>
      <p className="text-sm">Tap into India's massive mobile and DTH user base</p>
    </div>
    <div>
      <p className="font-medium mb-1">• Zero Inventory Risk</p>
      <p className="text-sm">Digital-first model eliminates physical stock concerns</p>
    </div>
  </div>
</motion.div>

<motion.p
  className="text-base leading-relaxed mb-6 text-gray-700 italic"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 1.0 }}
>
  Join thousands of businesses already leveraging Payzon's Recharge API to deliver 
  fast, reliable, and convenient recharge services. Our proven infrastructure processes 
  millions of transactions monthly, ensuring your business has the reliability and 
  scalability it needs to succeed in the competitive digital payments landscape.
</motion.p>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Utilities Bill Payments API
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-6 text-gray-700"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  The Utilities Bill Payments API facilitates payments for a
                  wide range of services, including landline, postpaid mobile,
                  gas, insurance, electricity, and more, provided by private
                  companies.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8 text-gray-700"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <li>
                    Covers telecommunications, electrical utilities, natural
                    gas, transportation, water, and wastewater services
                  </li>
                  <li>Instant processing and comprehensive reporting</li>
                  <li>Compatible with digital platforms for online access</li>
                </motion.ul>

                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Verification APIs (E-KYC, Aadhaar, GSTN, Live Face)
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-6 text-gray-700"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  Payzon's Verification APIs include E-KYC for customer
                  identification, Aadhaar for identity verification, GSTN for
                  business authentication, and Live Face for biometric checks,
                  crucial for compliance and fraud prevention.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8 text-gray-700"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <li>
                    E-KYC: Anti-financial crime measures using biometric and
                    demographic information
                  </li>
                  <li>
                    Aadhaar Verification: Real-time confirmation with 99.9%
                    accuracy
                  </li>
                  <li>
                    GSTN Verification: Authenticates GSTIN with business details
                  </li>
                  <li>
                    Live Face Verification: AI-powered with liveness detection
                    and anti-spoofing
                  </li>
                  <li>Blockchain support for crypto user verification</li>
                </motion.ul>

                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  Shopping Portal API (E-commerce)
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-6 text-gray-700"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  The Shopping Portal API enables e-commerce platforms like
                  Payzon Shopy, allowing online purchases with rewards such as
                  cashback, miles, or points via affiliate links.
                </motion.p>
                <motion.ul
                  className="list-disc pl-6 space-y-2 mb-8 text-gray-700"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <li>
                    Supports seller onboarding, discount coupons, and product
                    sales
                  </li>
                  <li>Inventory management and payment gateway integration</li>
                  <li>Advanced analytics and reward systems</li>
                </motion.ul>

              

                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  How Payzon APIs Work?
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8 text-gray-700"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  Payzon APIs operate as digital payment methods available 24/7,
                  even on holidays. Unlike traditional wallets, they directly
                  withdraw and deposit funds from bank accounts using Virtual
                  Payment Addresses, IFSC codes, MMID, Aadhaar, or one-time
                  Virtual IDs. Each transaction requires MPIN verification for
                  security, applicable to recharge, bill payments, and other
                  APIs.
                </motion.p>

                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4 mt-12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  Why Choose Payzon APIs?
                </motion.h2>
                <motion.p
                  className="text-base leading-relaxed mb-8 text-gray-700"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  With global reach, robust security, easy integration, and high
                  performance, Payzon APIs provide trusted solutions for
                  businesses. Our commitment to innovation ensures seamless,
                  secure transactions, helping you focus on growth while we
                  handle the technical backbone.
                </motion.p>
              </div>
            </section>

  {/* Social Share Section */}
                <motion.div
                  className="my-12 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 rounded-2xl p-8 text-white shadow-2xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Stay Connected
                  </h3>
                  <p className="text-center mb-6 text-blue-100">
                    Follow us on social media for the latest updates, tips, and
                    industry insights
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-110 group border border-white/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-6 h-6 text-white" />
                        <span className="font-medium text-white">
                          {social.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                  <div className="text-center">
                    <motion.a
                      href="https://www.smarttaxidea.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Explore More on Our Website</span>
                    </motion.a>
                  </div>
                </motion.div>

          </motion.main>
        </div>
      </div>

      {/* Contact Card - Mobile Bottom Only */}
      <div className="max-w-7xl mx-auto px-4 pb-16 sm:px-6 lg:px-8 lg:hidden">
        <motion.a
          href="https://www.smarttaxidea.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800"></div>
            <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
              <motion.svg
                className="w-16 h-16 text-blue-300 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5C15.87 5 18 6.5 18 7S15.87 9 12 9Z" />
              </motion.svg>
              <h3 className="text-3xl font-bold text-white mb-3">
                Need Assistance?
              </h3>
              <div className="mb-4 flex flex-col items-center">
                <div className="flex items-center text-white mb-2">
                  <Phone className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-semibold">
                    +91 755 485 9540
                  </span>
                </div>
              </div>
              <p className="text-white text-lg mb-6">
                Or reach out via our contact form:
              </p>
              <motion.button
                className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 group shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default FinanceAuditsLandingPage;