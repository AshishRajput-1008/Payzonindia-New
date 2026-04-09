"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Quote, Sparkles, ExternalLink, Linkedin, Twitter, Mail, MessageCircle, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const SadaivSatyaMedia = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/sadaivsatyamedia",
      gradient: "from-blue-600 to-blue-700",
      hoverGradient: "hover:from-blue-700 hover:to-blue-800",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/sadaivsatyamedia/",
      gradient: "from-pink-600 to-purple-700",
      hoverGradient: "hover:from-pink-700 hover:to-purple-800",
      bgGradient: "from-pink-50 to-purple-100",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/PayzonIndia",
      gradient: "from-sky-500 to-sky-600",
      hoverGradient: "hover:from-sky-600 hover:to-sky-700",
      bgGradient: "from-sky-50 to-sky-100",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/101633112/admin/page-posts/published/",
      gradient: "from-blue-700 to-blue-800",
      hoverGradient: "hover:from-blue-800 hover:to-blue-900",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@payzonindiadigitalsolutions",
      gradient: "from-red-600 to-red-700",
      hoverGradient: "hover:from-red-700 hover:to-red-800",
      bgGradient: "from-red-50 to-red-100",
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6 border border-blue-100">
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              Our Own Brands
            </span>
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Partnering for Youth
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Empowerment & Growth
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Through innovative media solutions and foundation initiatives
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8 sm:p-12">
            {/* Right Image - First on mobile */}
            <div className="flex items-center justify-center lg:order-2">
              <div className="relative group">
                {/* Decorative rings */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-red-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Image container */}
                <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 transform group-hover:scale-105 transition-transform duration-500 bg-white">
                  <Image
                    src="/images/Sadaiv MEDIA 1.png"
                    alt="Sadaiv Satya Media Broadcasting"
                    width={400}
                    height={400}
                    className="object-contain w-full h-full"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Left Content - Second on mobile */}
            <div className="flex flex-col justify-center space-y-6 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Sadaiv Satya Media
                </h2>
              </div>

              <div className="relative">
                <div className="absolute -left-2 top-0">
                  <Quote className="w-8 h-8 text-red-500/20" />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed pl-10 pr-6 relative">
                  <span className="inline-block">
                    Sadaiv Satya Media and Broadcasting Pvt Ltd is a dynamic media
                    company focused on honest broadcasting and content creation that
                    empowers communities. Join us in a replay of this webinar to see
                    how to collaborate from the first line of code to impactful media
                    campaigns sent in less than 15 minutes, using our contact form to
                    kickstart your media journey.
                  </span>
                </p>
                <div className="absolute -right-2 bottom-0">
                  <Quote className="w-8 h-8 text-red-500/20 rotate-180" />
                </div>
              </div>

              {/* Features Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                  Honest Broadcasting
                </span>
                <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
                  Zero-Paid
                </span>
                <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
                  Fact Finding
                </span>
              </div>

              {/* Social Links Section */}
              <div className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Connect With Us
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
                
<div className="grid grid-cols-5 gap-3">
  {socialLinks.slice(0, 5).map((social, index) => {
    const Icon = social.icon;
    return (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex items-center justify-center h-14 rounded-xl bg-gradient-to-br ${social.bgGradient} shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden`}
        title={social.name}
      >
        {/* Background Gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>

        {/* Icon - solid color, always visible */}
        <Icon
          className={`relative w-6 h-6 z-20 transition-all duration-300 ${
            social.name === 'Facebook' ? 'text-blue-600 group-hover:text-white' :
            social.name === 'Instagram' ? 'text-pink-600 group-hover:text-white' :
            social.name === 'Twitter' ? 'text-sky-500 group-hover:text-white' :
            social.name === 'LinkedIn' ? 'text-blue-700 group-hover:text-white' :
            social.name === 'YouTube' ? 'text-red-600 group-hover:text-white' : ''
          }`}
        />

        {/* Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </a>
    );
  })}
</div>


              </div>

              {/* CTA Button */}
              <Link href="https://www.sadaivsatya.com/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative">Visit Website</span>
                  <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span>Empowering communities through media excellence</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default SadaivSatyaMedia;