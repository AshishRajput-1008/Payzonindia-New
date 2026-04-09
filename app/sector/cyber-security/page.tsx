// app/sector/cyber-security/page.tsx

"use client";

import {
  useNavbarColor,
  sectorGradients,
} from "@/app/contexts/NavbarColorContext";

import React, { useEffect } from "react";
import {
  Phone,
  CheckCircle,
  ArrowRight,
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  FileSearch,
  Users,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const CyberSecurityPage: React.FC = () => {
  const services = [
    "Security Audits",
    "Vulnerability Assessment",
    "Penetration Testing",
    "Compliance Solutions",
    "Incident Response",
    "Security Training",
    "Data Protection",
    "Threat Intelligence",
  ];

  const { setNavbarGradient, setPaymentGradient, setLogoGradient } =
    useNavbarColor();

  useEffect(() => {
    // Get gradients for this sector
    const gradients = sectorGradients["cyber-security"];

    // Set all three gradients
    setNavbarGradient(gradients.navbar);
    setPaymentGradient(gradients.payment);
    setLogoGradient(gradients.logo);

    // Cleanup: Reset to default
    return () => {
      const defaultGradients = sectorGradients["default"];
      setNavbarGradient(defaultGradients.navbar);
      setPaymentGradient(defaultGradients.payment);
      setLogoGradient(defaultGradients.logo);
    };
  }, [setNavbarGradient, setPaymentGradient, setLogoGradient]);
  const offerings = [
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Security Audits",
      description:
        "Comprehensive security assessments to identify vulnerabilities",
    },
    {
      icon: <Lock className="w-12 h-12 text-red-500" />,
      title: "Data Encryption",
      description:
        "Advanced encryption solutions to protect sensitive information",
    },
    {
      icon: <Eye className="w-12 h-12 text-red-500" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and threat detection",
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-red-500" />,
      title: "Incident Response",
      description: "Rapid response to security breaches and cyber attacks",
    },
    {
      icon: <FileSearch className="w-12 h-12 text-red-500" />,
      title: "Penetration Testing",
      description: "Ethical hacking to identify and fix security weaknesses",
    },
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: "Security Awareness",
      description: "Employee training programs to build security culture",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <img
          src="/images/bg-pagetitle.jpg"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-black/80"></div>

        <div className="relative z-10 text-center px-4 mt-[190px]">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Cyber Security Services
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Safeguarding Your Digital Assets with Advanced Security Solutions
          </motion.p>
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
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-red-700/50">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">
                  Security Services
                </h2>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-red-700 hover:bg-red-600 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <Link href="/contact">
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Image
                    src="/images/bg-info-box1.jpg"
                    alt="Security Consultation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                    <Shield className="w-16 h-16 text-red-300 mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Secure Your Business
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
                      Get expert security consultation today
                    </p>
                    <motion.button
                      className="bg-red-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-red-400 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Introduction Section */}
            <section className="rounded-2xl shadow-xl overflow-hidden">
              {/* <div className="relative h-64 lg:h-72 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Cyber Security"
                  height={400}
                  width={300}
                  className="object-contain"
                  priority
                />
              </div> */}
              <div className="bg-white p-8">
                <motion.h1
                  className="text-4xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Advanced Cyber Security Solutions
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  In an era of escalating cyber threats, Payzon India's Cyber
                  Security division provides comprehensive protection for your
                  digital assets. Our team of certified security professionals
                  and ethical hackers work tirelessly to safeguard your business
                  from phishing, ransomware, data breaches, and insider threats.
                  We've successfully protected over 1,000 organizations,
                  reducing security breach risks by 60% through proactive
                  monitoring and rapid response protocols.
                </motion.p>
              </div>
            </section>

            {/* Services Grid */}
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Our Security Services
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offerings.map((offering, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-4">{offering.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600">{offering.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Detailed Content */}
            <article className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Why Cyber Security Matters
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Cyber attacks are increasing in frequency and sophistication.
                  A single breach can cost your business millions in damages,
                  lost revenue, and reputational harm. Our comprehensive
                  security approach protects your infrastructure, data, and
                  reputation through advanced threat detection, continuous
                  monitoring, and immediate incident response capabilities.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
                  alt="Cyber security monitoring"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
                <div className="bg-red-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-red-900">
                        Certified Experts:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Team of CEH and CISSP certified professionals
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-red-900">
                        Proven Protection:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        1,000+ organizations secured successfully
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-red-900">
                        60% Risk Reduction:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Average breach risk reduction for clients
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Security Awareness Training
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Human error accounts for 95% of security breaches. Our
                  comprehensive security awareness training programs educate
                  your employees on identifying phishing attempts, social
                  engineering tactics, and best practices for data protection.
                  Through engaging workshops and simulated attack exercises, we
                  build a security- conscious culture within your organization.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
                  alt="Security training"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              <section>
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Penetration Testing & Vulnerability Assessment
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our ethical hackers conduct thorough penetration testing to
                  identify vulnerabilities before malicious actors can exploit
                  them. We perform black box, white box, and grey box testing
                  across your networks, applications, and infrastructure. Each
                  assessment includes detailed reports with prioritized
                  remediation recommendations and follow-up support.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop"
                  alt="Penetration testing"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              <section>
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  24/7 Security Operations Center (SOC)
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our state-of-the-art Security Operations Center monitors your
                  systems around the clock, detecting and responding to threats
                  in real-time. Using advanced SIEM tools, threat intelligence
                  feeds, and AI-powered analytics, we identify suspicious
                  activities and neutralize threats before they cause damage.
                  Our SOC team provides immediate incident response, ensuring
                  minimal disruption to your operations.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
                  alt="Security operations center"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              {/* CTA Section */}

              <Link href="/contact">
                <section className="text-center py-8 border-t border-gray-200">
                  <motion.h2
                    className="text-3xl font-bold text-gray-900 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Protect Your Business Today
                  </motion.h2>
                  <motion.p
                    className="text-gray-700 mb-6 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Don't wait for a breach to happen. Get a free security
                    assessment and discover how we can strengthen your defenses.
                  </motion.p>
                  <motion.button
                    className="bg-red-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-red-600 transition-all duration-300 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Security Audit <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </section>
              </Link>
            </article>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityPage;
