// app/sector/skills-development/page.tsx
"use client";

import { useNavbarColor, sectorGradients } from "@/app/contexts/NavbarColorContext"

import React from "react";
import { useEffect } from "react";
import {
  Phone,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Target,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SkillsDevelopmentPage: React.FC = () => {
  
  const services = [
    "Technical Training",
    "Soft Skills Development",
    "Leadership Programs",
    "Digital Literacy",
    "Vocational Training",
    "Corporate Training",
    "Certification Courses",
    "Career Counseling",
  ];

  const offerings = [
    {
      icon: <GraduationCap className="w-12 h-12 text-purple-500" />,
      title: "Professional Training",
      description: "Industry-aligned courses to boost your career prospects"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-purple-500" />,
      title: "Online Learning",
      description: "Flexible e-learning platforms with expert instructors"
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: "Group Workshops",
      description: "Collaborative learning experiences with hands-on practice"
    },
    {
      icon: <Award className="w-12 h-12 text-purple-500" />,
      title: "Certification Programs",
      description: "Recognized certifications to validate your expertise"
    },
    {
      icon: <Target className="w-12 h-12 text-purple-500" />,
      title: "Skill Assessment",
      description: "Comprehensive evaluations to identify growth areas"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
      title: "Career Development",
      description: "Personalized guidance for professional advancement"
    },
  ];

  const { setNavbarGradient, setPaymentGradient, setLogoGradient } = useNavbarColor();

  useEffect(() => {
    // Get gradients for this sector
    const gradients = sectorGradients['skills-development'];
    
    // Set all three gradients
    setNavbarGradient(gradients.navbar);
    setPaymentGradient(gradients.payment);
    setLogoGradient(gradients.logo);
    
    // Cleanup: Reset to default
    return () => {
      const defaultGradients = sectorGradients['default'];
      setNavbarGradient(defaultGradients.navbar);
      setPaymentGradient(defaultGradients.payment);
      setLogoGradient(defaultGradients.logo);
    };
  }, [setNavbarGradient, setPaymentGradient, setLogoGradient]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <img
          src="/images/bg-pagetitle.jpg"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-black/80"></div>

          <div className="relative z-10 text-center px-4 mt-[190px]">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Skills Development
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-2xl text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Individuals Through Quality Training and Development
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
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-purple-700/50">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">
                  Training Programs
                </h2>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-purple-700 hover:bg-purple-600 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
                  alt="Training Consultation"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                  <GraduationCap className="w-16 h-16 text-purple-300 mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Start Learning Today
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
                    Unlock your potential with expert training
                  </p>
                  <motion.button
                    className="bg-purple-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-purple-400 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Enroll Now</span>
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
                  alt="Skills Development"
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
                  Transform Your Career Through Skills Development
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Payzon India's Skills Development division is dedicated to bridging the gap 
                  between education and employment. We offer comprehensive training programs 
                  designed to equip individuals with market-relevant skills. From technical 
                  certifications to so ft skills development, our expert trainers have successfully 
                  upskilled over 10,000 professionals, with 85% placement success rate across 
                  various industries.
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
                Our Training Programs
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offerings.map((offering, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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
                  Why Choose Our Training Programs?
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our training methodology combines theoretical knowledge with practical 
                  application, ensuring learners gain hands-on experience. We partner with 
                  leading companies to design courses that meet current industry demands, 
                  providing you with skills that employers actively seek. Our flexible learning 
                  options include classroom, online, and hybrid formats to suit your schedule.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop"
                  alt="Training session"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
                <div className="bg-purple-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-purple-900">Expert Trainers:</span>
                      <span className="text-gray-700"> Industry professionals with 10+ years experience</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-purple-900">Proven Results:</span>
                      <span className="text-gray-700"> 10,000+ professionals trained successfully</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-purple-900">85% Placement Rate:</span>
                      <span className="text-gray-700"> High success rate in job placements</span>
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
                  Technical Skills Training
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our technical training programs cover a wide range of in-demand skills including 
                  programming languages, data analytics, digital marketing, cloud computing, and 
                  cybersecurity. Each course is designed with hands-on projects and real-world 
                  scenarios, ensuring you gain practical experience that directly translates to 
                  workplace readiness.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
                  alt="Technical training"
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
                  Soft Skills & Leadership Development
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Technical skills alone aren't enough for career success. Our soft skills programs 
                  focus on communication, teamwork, problem-solving, time management, and emotional 
                  intelligence. Leadership training modules prepare aspiring managers with strategic 
                  thinking, team building, conflict resolution, and decision-making capabilities.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
                  alt="Leadership training"
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
                  Corporate Training Solutions
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  We partner with organizations to deliver customized corporate training programs 
                  that address specific business needs. From onboarding new employees to upskilling 
                  existing teams, our tailored solutions enhance productivity, improve employee 
                  satisfaction, and drive business growth. We've successfully trained teams at 
                  over 200 companies across various sectors.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop"
                  alt="Corporate training"
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
                  Ready to Upgrade Your Skills?
                </motion.h2>
                <motion.p
                  className="text-gray-700 mb-6 max-w-2xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Join thousands of successful professionals who have transformed their careers 
                  through our training programs. Enroll today and take the first step.
                </motion.p>
                <motion.button
                  className="bg-purple-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-purple-600 transition-all duration-300 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Courses <ArrowRight className="w-5 h-5" />
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

export default SkillsDevelopmentPage;