"use client";

import React, { useEffect } from "react";
import {
  Phone,
  ArrowRight,
  Shield,
  Users,
  Zap,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  useNavbarColor,
  sectorGradients,
} from "@/app/contexts/NavbarColorContext";

const PyazonLandingPage = () => {
  const { setNavbarGradient, setPaymentGradient, setLogoGradient } = useNavbarColor();

  useEffect(() => {
    const gradients = sectorGradients["Social-Welfare"];
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
    { name: "Media", href: "/associations/media/" },
    { name: "Social Welfare", href: "/associations/social-welfare/" },
    { name: "Finance Audits", href: "/audit" },
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", 
      href: "https://www.facebook.com/SadaivYuvaFoundation", 
      color: "hover:text-blue-600" 
    },
    { 
      name: "Twitter", 
      icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", 
      href: "https://x.com/PayzonIndia", 
      color: "hover:text-sky-500" 
    },
    { 
      name: "LinkedIn", 
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", 
      href: "https://www.linkedin.com/company/101633112/admin/page-posts/published/", 
      color: "hover:text-blue-700" 
    },
    { 
      name: "Instagram", 
      icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z", 
      href: "http://instagram.com/sadaivyuvafoundation", 
      color: "hover:text-pink-600" 
    },
    { 
      name: "YouTube", 
      icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", 
      href: "https://www.youtube.com/@payzonindiadigitalsolutions", 
      color: "hover:text-red-600" 
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center pt-36 md:pt-56 lg:pt-64">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop"
          alt="Background"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-4 mb-[59px]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-snug tracking-wide mb-4">
            Welcome to
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 bg-clip-text text-transparent drop-shadow-xl leading-tight mb-6">
            Sadaiv Yuva Foundation
          </h2>
          <p className="mt-6 text-base md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Securing Every Digital Life — Cyber Awareness, Protection & Empowerment
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <motion.aside
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-48 space-y-8">
              {/* Services Menu */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-green-500/50">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 bg-clip-text text-transparent mb-6 text-center">
                  Our Initiatives
                </h2>
                <div className="flex flex-col gap-6">
                  {services.map((service, index) => (
                    <a key={index} href={service.href}>
                      <motion.div
                        className="bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 hover:from-green-500 hover:via-lime-500 hover:to-orange-500 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {service.name}
                      </motion.div>
                    </a>
                  ))}
                </div>
              </div>


                 {/* Social Links Card */}
              <motion.div
                className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-green-500/50"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 bg-clip-text text-transparent mb-4 text-center">
                  Connect With Us
                </h3>
                <div className="flex justify-center gap-4 flex-wrap">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-white p-3 rounded-full shadow-md transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.name}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>



              {/* Contact Card */}
              <a className="hidden" href="/contact">
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img
                    src="/images/bg-info-box1.jpg"
                    alt="Foundation Team"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-600/90 via-lime-600/90 to-orange-600/90">
                    <motion.svg
                      className="w-16 h-16 text-white mb-4"
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
                      className="bg-white text-green-600 px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Contact</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </a>

            

           
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            className="lg:col-span-8 space-y-8 prose prose-lg max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Section with Logo - IMPROVED FOR MOBILE */}
            <section className="rounded-2xl shadow-xl overflow-hidden">
              {/* Logo Container - Fixed for mobile */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center bg-gradient-to-br from-green-50 via-lime-50 to-orange-50 p-4 sm:p-6 md:p-8">
                <img
                  src="/images/Sadaiv_logo.png"
                  alt="Sadaiv Yuva Foundation Logo"
                  className="object-contain max-h-full w-auto px-2 sm:px-4"
                />
              </div>

              {/* Content Section - Improved spacing and typography for mobile */}
              <div className="p-6 pt-8 sm:p-8 md:p-10 lg:p-12 bg-white">
                <motion.h1
                  className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight sm:leading-snug"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Unlocking the Mission of Sadaiv Yuva Foundation: Pioneering
                  Cyber Safety in the Digital Age
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Sadaiv Yuva Foundation, a 12A / 80G / CSR FUND approved
                  non-profit organization, stands at the forefront of digital
                  empowerment, dedicated to securing every digital life through
                  comprehensive cyber awareness, protection strategies, and
                  community education. As an integral part of the PAYZONINDIA
                  ecosystem, the foundation leverages innovative digital
                  solutions to combat evolving cyber threats, fostering a safer
                  online environment for individuals, families, and businesses
                  across the globe. Our core focus revolves around equipping
                  vulnerable populations—such as women, children, elders, and
                  youth—with the knowledge and tools to navigate the digital
                  world securely, preventing financial frauds, online abuses,
                  and scams that plague modern society.
                </motion.p>
              </div>
            </section>

            {/* Blog Content */}
            <article className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              {/* About Us Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 bg-clip-text text-transparent mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  About Sadaiv Yuva Foundation
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Established under the visionary umbrella of PAYZONINDIA,
                  Sadaiv Yuva Foundation embodies the ethos of "eternal youth"
                  in safeguarding the future through proactive cyber defense.
                  Registered as a non-profit with full tax-exempt status under
                  sections 12A and 80G, and approved for CSR funding, the
                  foundation channels corporate social responsibility
                  initiatives into tangible digital safety programs. Our journey
                  began with a recognition of the widening digital divide and
                  the surge in cybercrimes, prompting us to launch awareness
                  campaigns that have now reached thousands. We collaborate with
                  government bodies, tech firms, and community leaders to
                  deliver workshops, online resources, and real-time support
                  helplines, ensuring that cyber literacy is accessible to all
                  socio-economic strata.
                </motion.p>
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
                  alt="Foundation community workshop"
                  className="w-full rounded-lg object-cover mb-6"
                />
                <motion.div
                  className="bg-gradient-to-br from-green-50 via-lime-50 to-orange-50 p-6 rounded-lg border-l-4 border-green-500"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Shield className="w-6 h-6 text-green-600 inline mr-2" />
                  <span className="font-semibold text-green-900">
                    Milestone:
                  </span>{" "}
                  Empowered over 50,000 individuals through 200+ awareness
                  sessions since inception.
                </motion.div>
              </section>

              {/* Mission and Vision Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 bg-clip-text text-transparent mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Mission and Vision: Building a Cyber-Resilient Society
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  The mission of Sadaiv Yuva Foundation is to democratize cyber
                  safety education, making it a fundamental right in the digital
                  era. We envision a world where every user, regardless of age
                  or background, can thrive online without fear of exploitation.
                  By integrating advanced technologies from PAYZONINDIA—such as
                  AI-driven threat detection tools and interactive e-learning
                  platforms—we bridge the gap between awareness and action. Our
                  vision extends to policy advocacy, pushing for stronger cyber
                  laws and inclusive digital policies that protect the most
                  vulnerable.
                </motion.p>
                <ul className="space-y-3 text-gray-700 text-base list-disc pl-6 mb-6">
                  <li>
                    <strong>Mission Pillars:</strong> Education through
                    workshops, real-time fraud alerts via apps, and community
                    partnerships for widespread impact.
                  </li>
                  <li>
                    <strong>Vision Goals:</strong> Achieve zero-tolerance for
                    preventable cybercrimes by 2030 through scalable,
                    tech-enabled programs.
                  </li>
                </ul>
              </section>

              {/* Key Initiatives Section */}
              <section>
                <motion.h2
                  className="text-3xl font-bold bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 bg-clip-text text-transparent mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Our Key Initiatives: Combating Digital Threats Head-On
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Sadaiv Yuva Foundation's initiatives are laser-focused on the
                  most pressing cyber threats, delivering targeted interventions
                  that educate, protect, and empower.
                </motion.p>

                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Citizen Cyber Fraud Prevention: Protecting the Vulnerable from
                  Online Perils
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  Tailored for women, children, and elders—who often face
                  heightened risks—this initiative addresses online abuse,
                  grooming, fake job offers, and identity theft. We conduct
                  school programs, senior citizen forums, and women empowerment
                  sessions, teaching safe browsing, privacy settings, and
                  emergency reporting.
                </motion.p>

                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Crypto & Gaming Scam Awareness: Navigating the Wild West of
                  Digital Assets
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  With the rise of cryptocurrencies and online gaming, scams
                  promising quick riches abound. Our awareness drives demystify
                  blockchain basics, spot fake rewards, and avoid phishing in
                  metaverses. Through gamified learning modules and expert-led
                  podcasts, we guide enthusiasts toward legitimate investments.
                </motion.p>

                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  Tackling Advanced Threats: Ransomware, BEC, Wire Fraud, and
                  Rootkits
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  We delve into sophisticated attacks like Ransomware—malware
                  that locks files for ransom—Business Email Compromise for
                  corporate espionage, Wire Transfer Frauds via
                  impersonation, and Rootkit Malware for stealthy breaches. Our
                  forensic workshops and threat intelligence reports empower
                  organizations to fortify defenses.
                </motion.p>
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
                  alt="Cyber threat simulation"
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              {/* Partnerships and Impact */}
              <section>
                <motion.h2
                  className="text-3xl font-bold bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 bg-clip-text text-transparent mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  Partnerships, Team, and Measurable Impact
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                >
                  Sadaiv Yuva Foundation thrives on strategic alliances with
                  PAYZONINDIA, cybersecurity firms, NGOs, and government
                  agencies, amplifying our reach through CSR-funded projects.
                  Our diverse team of ethical hackers, educators, and policy
                  experts drives innovation in safety curricula. The impact is
                  profound: reduced fraud reports in partnered communities by
                  40%, thousands of lives protected, and a growing network of
                  cyber ambassadors.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-50 to-lime-50 p-4 rounded-lg border border-green-200">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-center text-sm text-gray-600">
                      Expert Team of Specialists
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-lime-50 to-orange-50 p-4 rounded-lg border border-orange-200">
                    <Globe className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-center text-sm text-gray-600">
                      Global Reach via Partnerships
                    </p>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="text-center py-8 border-t border-gray-200">
                <motion.h2
                  className="text-3xl font-bold bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 bg-clip-text text-transparent mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  Join Us in Securing the Digital Future
                </motion.h2>
                <motion.p
                  className="text-gray-700 mb-6 max-w-2xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                >
                  At Sadaiv Yuva Foundation, we're more than an
                  organization—we're a movement towards a fear-free digital
                  world. Whether through donations, volunteering, or
                  participating in our programs, your involvement fortifies our
                  collective defense.
                </motion.p>
                <a
                  href="https://www.sadaivyuvafoundation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-xl transition-all duration-300 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Involved <Zap className="w-5 h-5" />
                  </motion.button>
                </a>
              </section>
            </article>

            {/* Bottom Social Section */}
            <motion.div
              className="bg-gradient-to-br from-green-50 via-lime-50 to-orange-50 rounded-2xl shadow-xl p-8 border border-green-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 bg-clip-text text-transparent mb-3">
                  Stay Connected
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Follow us on social media and visit our website for the latest updates, resources, and cyber safety tips
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Website CTA */}
                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg border border-green-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Globe className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    Visit Our Official Website
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    Discover our complete range of programs, resources, and impact stories
                  </p>
                  <a
                    href="https://www.sadaivyuvafoundation.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className="bg-gradient-to-r from-green-600 via-lime-600 to-orange-600 text-white px-6 py-3 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore More <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg border border-green-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Users className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    Follow Us On Social Media
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    Join our community and stay updated with our latest initiatives
                  </p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-full shadow-md transition-all duration-300 ${social.color}`}
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.name}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={social.icon} />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Bottom Quote */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-gray-600 italic text-sm">
                  "Together, we're building a safer digital world for everyone"
                </p>
              </motion.div>
            </motion.div>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default PyazonLandingPage;