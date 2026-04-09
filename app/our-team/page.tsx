"use client";
import React, { useEffect, useState } from "react";
import {
  Users,
  Linkedin,
  Mail,
  Award,
  Sparkles,
  Phone,
  MessageCircle,
  Twitter,
} from "lucide-react";
import RamSir from "../assests/banana-Ram-Sir-5.png";
import shubhamSir from "../assests/shubhum sir PZI.png";
import SanjaySir from "../assests/banana-sanjay-sir.png";
import AnkitSir from "../assests/final-ankit-sir -banana.png";

import {
  useNavbarColor,
  sectorGradients,
} from "@/app/contexts/NavbarColorContext";
import divyaniMam from "../assests/DIVYANI-MAM-NEW-1.jpg";
import VarunSir from "../assests/varun sir-2.png";
import MohitSir from "../assests/mohit-sir-2.png";
import Link from "next/link";

import ceoPZI from "../assests/CEO-PZI.png";
import MainshSen from "../assests/manish-sir-advocate.png";
import AshishImg from "../assests/Ashish-banana.png";

const OurTeam = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const { setNavbarGradient, setPaymentGradient, setLogoGradient } =
    useNavbarColor();

  useEffect(() => {
    const gradients = sectorGradients["ourTeams"];
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

  const teamMembers = [
    {
      name: "Divendu Prakash Verma",
      specialization: "Management,Legal,Finance,Social Welfare,Marketing,Technical",
      qualification: "LLB, MCA",
      category: "Management,Legal,Social Welfare,Marketing,Technical,Finance",
      image: ceoPZI.src,
      bio: "Leading Payzon India's vision with 12+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      twitter: "https://twitter.com/payzonindia",
      email: "info@payzonindia.com",
      whatsapp: "+91 755 485 9540",
      phone: "+91 924 383 7546",
    },
    {
      name: "Advocate Manish Sen",
      specialization: "Management,Finance,Legal",
      qualification: "LLB,MBA, Practicing CA",
      category: "Management,Finance,Legal,",
      image: MainshSen.src,
      bio: "Leading Payzon India's vision with 8+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      twitter: "https://twitter.com/payzonindia",
      email: "info@payzonindia.com",
      whatsapp: "+91 755 485 9540",
      phone: "+91 924 383 7546",
    },
    {
      name: "Subham Choudhary",
      specialization: "Technical,Management,Social Welfare,Marketing,Finance",
      qualification: "MBA, B.E.",
      category: "Technical,Management,Social Welfare,Marketing,Finance",
      image: shubhamSir.src,
      bio: "Leading Payzon India's vision with 7+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      twitter: "https://twitter.com/payzonindia",
      email: "info@payzonindia.com",
      whatsapp: "+91 755 485 9540",
      phone: "+91 924 383 7546",
    },
    {
      name: "Ram Bindal",
      specialization: "Technical,Social Welfare",
      qualification: "BCA ,MCA",
      category: "Technical,Social Welfare",
      image: RamSir.src,
      bio: "Leading Payzon India's vision with 2+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      twitter: "https://twitter.com/payzonindia",
      email: "info@payzonindia.com",
      whatsapp: "+91 755 485 9540",
      phone: "+91 924 383 7546",
    },
    {
      name: "Sanjay Patel",
      specialization: "Technical,Social Welfare",
      qualification: "B.Tech CS",
      category: "Technical,Social Welfare",
      image: SanjaySir.src,
      bio: "Leading Payzon India's vision with 2+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      twitter: "https://twitter.com/payzonindia",
      email: "info@payzonindia.com",
      whatsapp: "+91 755 485 9540",
      phone: "+91 924 383 7546",
    },
    {
      name: "Ankit Laxakar",
      specialization: "Technical,Social Welfare",
      qualification: "B.Tech CS",
      category: "Technical,Social Welfare",
      image: AnkitSir.src,
      bio: "Leading Payzon India's vision with 2+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      twitter: "https://twitter.com/payzonindia",
      email: "info@payzonindia.com",
      whatsapp: "+91 755 485 9540",
      phone: "+91 924 383 7546",
    },
    {
      name: "Ashish Rajput",
      specialization: "Technical,Social Welfare,Marketing",
      qualification: "B.Tech IT",
      category: "Technical,Social Welfare,Marketing",
      image: AshishImg.src,
      bio: "Leading Payzon India's vision with 1+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      twitter: "https://twitter.com/payzonindia",
      email: "info@payzonindia.com",
      whatsapp: "+91 755 485 9540",
      phone: "+91 924 383 7546",
    },
    {
      name: "Varun Kumar Sen",
      specialization: "Marketing,Social Welfare,Management,Finance",
      qualification: "MBA Marketing",
      category: "Marketing,Social Welfare,Management,Finance",
      image: VarunSir.src,
      bio: "Leading Payzon India's vision with 2+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      twitter: "https://twitter.com/payzonindia",
      email: "info@payzonindia.com",
      whatsapp: "+91 755 485 9540",
      phone: "+91 924 383 7546",
    },
    {
      name: "Mohit Merrill",
      specialization: "Marketing,Social Welfare,Management",
      qualification: "BA,Content Creator Certified",
      category: "Marketing,Social Welfare,Management",
      image: MohitSir.src,
      bio: "Leading Payzon India's vision with 2+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      twitter: "https://twitter.com/payzonindia",
      email: "info@payzonindia.com",
      whatsapp: "+91 755 485 9540",
      phone: "+91 924 383 7546",
    },
    {
      name: "Advocate Divyani Jadon",
      specialization: "Legal,Social Welfare",
      qualification: "LLB, LLM",
      category: "Legal,Social Welfare",
      image: divyaniMam.src,
      bio: "Leading Payzon India's vision with 2+ years of Technical expertise",
      linkedin: "https://www.linkedin.com/company/payzonindiabhopal/",
      twitter: "https://twitter.com/payzonindia",
      email: "info@payzonindia.com",
      whatsapp: "+91 755 485 9540",
      phone: "+91 924 383 7546",
    },
  ];

  const categories = [
    { id: "all", label: "All Team", icon: Users },
    { id: "Technical", label: "Technical", icon: Users },
    { id: "Management", label: "Management", icon: Award },
    { id: "Legal", label: "Legal", icon: Sparkles },
    { id: "Finance", label: "Finance", icon: Users },
    { id: "Marketing", label: "Marketing", icon: Users },
    { id: "Social Welfare", label: "Social Welfare", icon: Award },
  ];

  const filteredMembers =
    activeCategory === "all"
      ? teamMembers
      : teamMembers.filter((member) => {
          const memberCategories = member.category
            .split(",")
            .map((cat) => cat.trim());
          return memberCategories.includes(activeCategory);
        });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 md:py-24 px-4 md:px-6">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

        <div className="relative max-w-7xl mx-auto text-center pt-32 md:pt-44 pb-8 md:pb-10">
          <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-1.5 md:py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-xs md:text-sm animate-fade-in">
            ✨ Meet the Innovators
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight animate-fade-in-up px-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Exceptional
            </span>{" "}
            Team
          </h1>
          <p className="text-base md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 px-4">
            The brilliant minds behind Payzon India's success, driving
            innovation across ventures, associations, and sectors
          </p>
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-4 animate-fade-in-up animation-delay-400 px-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3 text-white font-semibold text-xs md:text-base transform hover:scale-105 transition-transform duration-300">
              🎯 50+ Team Members
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3 text-white font-semibold text-xs md:text-base transform hover:scale-105 transition-transform duration-300">
              ⚡ 10+ Years Experience
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-6 py-2 md:py-3 text-white font-semibold text-xs md:text-base transform hover:scale-105 transition-transform duration-300">
              🚀 100% Dedication
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-6 md:-mt-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-3 md:p-4 border border-white/50">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-xs md:text-base transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                      : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 shadow-md"
                  }`}
                >
                  <Icon size={16} className="md:block" />
                  <span className="whitespace-nowrap">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50 flex flex-col h-full"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>

              {/* Image Container - FIXED for mobile with better fit */}
              <div className="relative w-full h-80 md:h-72 overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain md:object-cover md:object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-white text-xs md:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 relative flex flex-col flex-grow">
                {/* Gradient Line */}
                <div className="absolute top-0 left-4 right-4 md:left-6 md:right-6 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {member.name}
                </h3>
                
                {/* Specialization Section with Label - FIXED HEIGHT */}
                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-500 mb-1.5">Specialization:</p>
                  <div className="flex flex-wrap gap-1.5 min-h-[52px]">
                    {member.specialization.split(',').map((spec, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-xs font-semibold text-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50 px-2.5 py-1 rounded-full border border-indigo-100 h-fit"
                      >
                        {spec.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Qualification Badge */}
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-100 w-fit">
                  <Award size={14} className="text-indigo-500" />
                  <span className="text-gray-700 text-xs font-medium">
                    {member.qualification}
                  </span>
                </div>

                {/* Social Links - Single Row */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110"
                    title="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-sky-50 to-sky-100 text-sky-600 hover:from-sky-500 hover:to-sky-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110"
                    title="Twitter"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 text-pink-600 hover:from-pink-600 hover:to-pink-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110"
                    title="Email"
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href={`https://wa.me/${member.whatsapp.replace(
                      /[^0-9]/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-green-50 to-emerald-100 text-green-600 hover:from-green-600 hover:to-emerald-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110"
                    title="WhatsApp"
                  >
                    <MessageCircle size={16} />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-violet-50 to-purple-100 text-violet-600 hover:from-violet-600 hover:to-purple-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110"
                    title="Phone"
                  >
                    <Phone size={16} />
                  </a>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <p className="text-gray-500 text-base md:text-lg">
                🔍 No team members found in this category.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <Link href="/contact">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16 relative z-10">
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-transform duration-300 shadow-2xl">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-semibold">
                🌟 Join Our Journey
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Want to Join Our Team?
              </h2>
              <p className="text-indigo-100 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our
                mission of innovation and excellence
              </p>
              <button className="bg-white text-indigo-600 font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 text-sm md:text-base">
                View Open Positions →
              </button>
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default OurTeam;