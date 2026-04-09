"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Users, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const SmartTaxIdeaSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Expert CA Advisors",
      description: "8+ years of corporate consultancy experience"
    },
    {
      icon: Users,
      title: "2,000+ Clients",
      description: "99.7% satisfaction rate across India"
    },
    {
      icon: TrendingUp,
      title: "Tax Savings",
      description: "30-50% potential savings through planning"
    }
  ];

  const services = [
    "Company Registration",
    "Income Tax Filing",
    "GST Registration",
    "Company Audit",
    "FPO Incorporation",
    "Tax Planning"
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/smarttaxidea/",
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/PayzonIndia",
      color: "from-sky-500 to-sky-600"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/101633112/admin/page-posts/published/",
      color: "from-blue-700 to-blue-800"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/smarttaxidea",
      color: "from-pink-600 to-purple-700"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6 border border-blue-100">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
              Expert CA Services
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Smart Tax Idea
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Your Financial Partner
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert C.A Services in India — Your Trusted Partner for All Financial & Tax Needs
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image + Connect Section - Shows first on mobile */}
          <div className="space-y-6 order-1 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 transform group-hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-[4/3] relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                  <Image
                    src="/images/SMART TAX !DEA.png"
                    alt="Smart Tax Idea - Expert CA Services"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Connect With Us - Below Image */}
            <div className="relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100">
              {/* Decorative background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-60"></div>
              
              <div className="relative p-6 lg:p-10">
                <h4 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
                  Connect With Us
                </h4>
                
                {/* Social Links - Compact Row */}
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                        title={social.name}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity`}></div>
                        <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content - Shows second on mobile */}
          <div className="space-y-8 order-2 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                  About Us
                </span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Trusted Provider of Expert Chartered Accountant Services
              </h3>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Smart Tax Idea offers professional and reliable financial and tax solutions for individuals, startups, and businesses across India. With over 18 years of corporate consultancy experience, we're committed to being more than just a CA service provider—we're your long-term financial partner.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 mb-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Complete Financial Solutions</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      From GST registration to income tax filing, company registration to audit services—we provide comprehensive solutions to ensure compliance while maximizing your benefits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Services Grid */}
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-gray-800">{service}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Bottom Info Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600 text-sm">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <Shield className="w-4 h-4 text-blue-600" />
            <span>Trusted by businesses across India for expert financial solutions</span>
            <Shield className="w-4 h-4 text-blue-600" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTaxIdeaSection;