"use client";

import React, { useState } from "react";
import { 
  Phone, 
  ArrowRight, 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Briefcase,
  CheckCircle,
  Star,
  Calendar,
  Clock,
  Building2,
  GraduationCap,
  Zap,
  Shield,
  BarChart3,
  Lightbulb,
  HeartHandshake,
  MessageCircle
} from "lucide-react";

const CorporateTrainingPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const services = [
    { name: "Media", href: "/associations/media/" },
    { name: "Social Welfare", href: "/associations/social-welfare/" },
    { name: "Finance Audits", href: "/audit" },
    { name: "Corporate Training", href: "/associations/corporate-training", active: true },
  ];

  const trainingPrograms = [
    {
      title: "Leadership Development",
      subtitle: "Transform Your Leaders",
      description: "Comprehensive leadership training programs designed to develop strategic thinking, decision-making, and team management skills.",
      icon: <Award className="w-12 h-12 text-blue-500" />,
      duration: "3-6 Months",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
      title: "Technical Skills Training",
      subtitle: "Stay Ahead of Technology",
      description: "Cutting-edge technical training in latest technologies, tools, and methodologies to keep your team competitive.",
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      duration: "1-3 Months",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
    },
    {
      title: "Communication Excellence",
      subtitle: "Master Professional Communication",
      description: "Enhance verbal and written communication skills, presentation abilities, and interpersonal effectiveness.",
      icon: <MessageCircle className="w-12 h-12 text-blue-500" />,
      duration: "2-4 Months",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
    },
    {
      title: "Sales & Marketing Mastery",
      subtitle: "Drive Business Growth",
      description: "Advanced sales techniques, digital marketing strategies, and customer relationship management for revenue growth.",
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      duration: "2-5 Months",
      level: "Professional",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    }
  ];

  const corporateEntities = [
    {
      name: "Fortune 500 Companies",
      count: "150+",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      description: "Leading global corporations"
    },
    {
      name: "Startups & SMEs",
      count: "500+",
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      description: "Growing businesses"
    },
    {
      name: "Government Agencies",
      count: "75+",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      description: "Public sector organizations"
    },
    {
      name: "Educational Institutions",
      count: "200+",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      description: "Universities and colleges"
    }
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6 text-blue-300" />,
      title: "Expert Trainers",
      description: "Industry professionals with 15+ years of experience"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-300" />,
      title: "Customized Programs",
      description: "Tailored training solutions for your specific needs"
    },
    {
      icon: <Award className="w-6 h-6 text-blue-300" />,
      title: "Certified Courses",
      description: "Industry-recognized certifications upon completion"
    }
  ];

  const stats = [
    { label: "Trained Professionals", value: "50,000+", icon: <Users className="w-8 h-8" /> },
    { label: "Corporate Clients", value: "925+", icon: <Building2 className="w-8 h-8" /> },
    { label: "Training Programs", value: "150+", icon: <BookOpen className="w-8 h-8" /> },
    { label: "Success Rate", value: "98%", icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative w-full min-h-[60vh] flex items-center justify-center pt-32 md:pt-36 lg:pt-40">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop"
          alt="Corporate Training"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>

        <div className="relative z-10 text-center px-6 py-12 mt-[60px]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-snug tracking-wide mb-4">
            Corporate Training Excellence
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-xl leading-tight mb-6">
            PAYZON INDIA
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-100 mb-8">
            Empowering Organizations Through Knowledge
          </h3>
          <p className="mt-6 text-base md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Transform your workforce with world-class training programs, expert facilitators, and proven methodologies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Services Menu */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Our Services
                </h2>
                <div className="flex flex-col gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`px-5 py-3 rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                        service.active
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                          : "bg-blue-700 hover:bg-blue-600 text-white"
                      }`}
                    >
                      {service.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Impact</h3>
                <div className="space-y-4">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div className="text-yellow-300">{stat.icon}</div>
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-blue-100">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8 space-y-12">
            {/* Hero Section */}
            <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 lg:h-96">
                <img
                  src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=600&fit=crop"
                  alt="Training Session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-8 md:p-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Transform Your Organization with Expert Corporate Training
                </h1>
                <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
                  Building Future-Ready Teams
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At PayzonIndia, we understand that your organization's success depends on the capabilities of your workforce. Our comprehensive corporate training programs are designed to bridge skill gaps, enhance productivity, and drive organizational excellence through innovative learning methodologies and expert facilitation.
                </p>
              </div>
            </section>

            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-lg p-2">
              <div className="flex flex-wrap gap-2">
                {["overview", "programs", "entities", "process"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <article className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-10">
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug border-b-4 border-blue-600 pb-3 inline-block">
                    Why Choose PayzonIndia Corporate Training?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-600">
                      <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Industry Expertise</h3>
                      <p className="text-gray-700">15+ years of experience in delivering impactful training across diverse industries and sectors.</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-600">
                      <Target className="w-12 h-12 text-green-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Customized Solutions</h3>
                      <p className="text-gray-700">Tailored programs that align with your organization's specific goals and challenges.</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-600">
                      <BarChart3 className="w-12 h-12 text-purple-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Measurable Results</h3>
                      <p className="text-gray-700">Data-driven approach with clear ROI metrics and performance indicators.</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-600">
                      <Award className="w-12 h-12 text-orange-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Certified Programs</h3>
                      <p className="text-gray-700">Industry-recognized certifications that add value to your employees' careers.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug border-b-4 border-blue-600 pb-3 inline-block">
                    Our Training Methodology
                  </h2>
                  <div className="space-y-6 mt-6">
                    {[
                      { step: "1", title: "Needs Assessment", desc: "Comprehensive analysis of your organization's training requirements and skill gaps." },
                      { step: "2", title: "Customized Design", desc: "Development of tailored training modules aligned with your objectives." },
                      { step: "3", title: "Expert Delivery", desc: "Engaging training sessions led by industry experts and certified trainers." },
                      { step: "4", title: "Continuous Support", desc: "Post-training support, follow-ups, and performance tracking." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                          <p className="text-gray-700">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </article>
            )}

            {activeTab === "programs" && (
              <section className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Training Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trainingPrograms.map((program, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="relative h-48">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          {program.icon}
                        </div>
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {program.duration}
                          </span>
                          <span className="bg-blue-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {program.level}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-sm font-semibold text-blue-600 mb-2">{program.subtitle}</h3>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h4>
                        <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                        <button className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700 transition-colors">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === "entities" && (
              <article className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-10">
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug border-b-4 border-blue-600 pb-3 inline-block">
                    Corporate Entities We Serve
                  </h2>
                  <p className="text-gray-700 text-lg mb-8">
                    Our training programs have empowered organizations across various sectors, helping them achieve operational excellence and competitive advantage.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {corporateEntities.map((entity, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 p-3 rounded-lg">
                            {entity.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{entity.name}</h3>
                            <p className="text-3xl font-extrabold text-blue-600 mb-2">{entity.count}</p>
                            <p className="text-gray-600">{entity.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug border-b-4 border-blue-600 pb-3 inline-block">
                    Industry Partnerships
                  </h2>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
                    <p className="text-gray-700 text-lg mb-6">
                      We collaborate with leading organizations across various sectors including:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {["Technology", "Finance", "Healthcare", "Manufacturing", "Retail", "Education", "Government", "Consulting"].map((industry, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg shadow-sm text-center">
                          <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                          <p className="font-semibold text-gray-800">{industry}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </article>
            )}

            {activeTab === "process" && (
              <article className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-10">
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug border-b-4 border-blue-600 pb-3 inline-block">
                    Our Training Process
                  </h2>
                  <div className="space-y-8 mt-6">
                    {[
                      {
                        title: "Initial Consultation",
                        description: "We begin with a detailed discussion to understand your organization's goals, challenges, and training requirements.",
                        icon: <MessageCircle className="w-8 h-8 text-blue-600" />
                      },
                      {
                        title: "Skills Gap Analysis",
                        description: "Comprehensive assessment of current skill levels and identification of gaps that need to be addressed.",
                        icon: <BarChart3 className="w-8 h-8 text-green-600" />
                      },
                      {
                        title: "Program Design",
                        description: "Development of customized training modules, materials, and delivery methods tailored to your needs.",
                        icon: <BookOpen className="w-8 h-8 text-purple-600" />
                      },
                      {
                        title: "Implementation",
                        description: "Delivery of engaging training sessions by expert facilitators using interactive methodologies.",
                        icon: <Users className="w-8 h-8 text-orange-600" />
                      },
                      {
                        title: "Assessment & Certification",
                        description: "Evaluation of learning outcomes and issuance of industry-recognized certifications.",
                        icon: <Award className="w-8 h-8 text-yellow-600" />
                      },
                      {
                        title: "Follow-up Support",
                        description: "Ongoing support, refresher sessions, and performance tracking to ensure long-term success.",
                        icon: <HeartHandshake className="w-8 h-8 text-red-600" />
                      }
                    ].map((step, idx) => (
                      <div key={idx} className="flex gap-6 items-start p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                        <div className="flex-shrink-0">
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </article>
            )}

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-10 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Workforce?
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-blue-100">
                Let's discuss how our corporate training programs can help your organization achieve its goals and build a high-performing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg mx-auto"
                >
                  Contact Us To Our Team
                </button>
              </div>
            </section>

            {/* Contact Card - Moved to Bottom */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-green-600 to-green-800">
              <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                <HeartHandshake className="w-16 h-16 text-green-200 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-3">
                  Start Your Journey
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
                  Schedule a consultation today
                </p>
                <button className="bg-white text-green-600 px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 group hover:scale-105 shadow-lg">
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CorporateTrainingPage;