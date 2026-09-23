'use client'
import React, { useState, useEffect } from 'react';
import { FileText, Mail, Phone, MapPin, ChevronRight, Search, Clock, AlertCircle, Check, ExternalLink } from 'lucide-react';

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const tableOfContents = [
    { id: 'section-1', title: 'Agreement to Terms', icon: '📋' },
    { id: 'section-2', title: 'Intellectual Property Rights', icon: '©️' },
    { id: 'section-3', title: 'User Representations', icon: '👤' },
    { id: 'section-4', title: 'Prohibited Activities', icon: '🚫' },
    { id: 'section-5', title: 'Products and Services', icon: '🛍️' },
    { id: 'section-6', title: 'Purchases and Payment', icon: '💳' },
    { id: 'section-7', title: 'Shipping and Delivery', icon: '📦' },
    { id: 'section-8', title: 'Return and Refund Policy', icon: '↩️' },
    { id: 'section-9', title: 'User Data and Privacy', icon: '🔒' },
    { id: 'section-10', title: 'Disclaimers and Warranties', icon: '⚠️' },
    { id: 'section-11', title: 'Limitation of Liability', icon: '⚖️' },
    { id: 'section-12', title: 'Indemnification', icon: '🛡️' },
    { id: 'section-13', title: 'User-Generated Content', icon: '✍️' },
    { id: 'section-14', title: 'Third-Party Websites', icon: '🔗' },
    { id: 'section-15', title: 'Termination', icon: '🚪' },
    { id: 'section-16', title: 'Governing Law', icon: '⚖️' },
    { id: 'section-17', title: 'Modifications', icon: '📝' },
    { id: 'section-18', title: 'Contact Information', icon: '📞' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm mt-[244px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-600">
              <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium">Terms and Conditions</span>
            </div>
            <div className="text-xs text-gray-500 hidden sm:block">
              <Clock className="w-3 h-3 inline mr-1" />
              Last Updated: December 29, 2025
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-lg rounded-3xl mb-6 shadow-2xl">
            <FileText className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
            Please read these terms carefully before using our services or purchasing our products.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
            <AlertCircle className="w-4 h-4" />
            <span>Effective Date: December 29, 2025</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-4">
              {/* Search */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search terms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-lg">📑</span>
                  <span className="ml-2">Table of Contents</span>
                </h3>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                        activeSection === item.id
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="font-semibold mb-3">Need Help?</h3>
                <p className="text-sm text-blue-100 mb-4">Contact our legal team for clarifications</p>
                <a
                  href="mailto:legal@payzonindia.com"
                  className="inline-flex items-center text-sm bg-white/20 hover:bg-white/30 backdrop-blur-lg px-4 py-2 rounded-lg transition-all"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  legal@payzonindia.com
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-6">
            {/* Important Notice Banner */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Important Notice</h3>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    By accessing and using PAYZONINDIA's platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <section id="section-1" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">1</span>
                Agreement to Terms
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  These Terms and Conditions constitute a legally binding agreement between you (whether personally or on behalf of an entity) and <strong className="text-gray-900">PAYZONINDIA</strong> ("Company", "we", "us", or "our"), concerning your access to and use of our website, mobile application, and any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Platform").
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    By Accessing the Platform, You Agree That:
                  </h4>
                  <ul className="space-y-2 text-blue-900">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-blue-600" />
                      <span>You have read, understood, and agree to be bound by all Terms and Conditions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-blue-600" />
                      <span>You accept any supplemental terms that may be posted on the Platform</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-blue-600" />
                      <span>You acknowledge our right to modify these terms at any time</span>
                    </li>
                  </ul>
                </div>

                <p>
                  We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of these Terms and Conditions.
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
                  <h4 className="font-semibold text-indigo-900 mb-4">These Terms Apply to All Services and Products:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-indigo-900">IT Services (Software, Web Development, Technical Consulting)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-indigo-900">Cyber Security Solutions and Services</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-indigo-900">Digital Marketing (SEO, Social Media, Content)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-indigo-900">Skills Development Programs and Training</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-indigo-900">Finance Audit and Investor Programs</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-indigo-900">E-commerce Products (Toys, Jewellery, Clothing, Electronics)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-indigo-900">Organic Products (Spices, Vegetables, Farming)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-indigo-900">Divine Industries Religious Products</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-indigo-900">Social Welfare Initiatives and Programs</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">2</span>
                Intellectual Property Rights
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  Unless otherwise indicated, the Platform is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Platform (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
                </p>
                
                <p>
                  These are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of India, international copyright laws, and international conventions.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-semibold text-green-900 mb-3">Content Usage Restrictions:</h4>
                  <p className="text-green-900 mb-3">
                    The Content and Marks are provided "AS IS" for your information and personal use only. No part of the Platform may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose without our express prior written permission.
                  </p>
                </div>

                <h4 className="font-semibold text-gray-900 text-xl mt-6 mb-3">Ownership of Client Work Products</h4>
                <p>
                  Upon full payment for services rendered, ownership of deliverables as specified in the service agreement shall transfer to the client. However, PAYZONINDIA retains the right to:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Showcase completed work in portfolios and marketing materials unless explicitly restricted by written agreement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Use project knowledge and experience gained for future projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Retain copies of work for archival and reference purposes</span>
                  </li>
                </ul>

                <div className="bg-gray-50 border-l-4 border-gray-400 rounded-r-xl p-6">
                  <p className="text-gray-900 font-medium">
                    ⚠️ Any pre-existing intellectual property, tools, frameworks, or methodologies used by PAYZONINDIA in the course of providing services shall remain the exclusive property of PAYZONINDIA.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">3</span>
                User Representations and Registration
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg font-medium text-gray-900">By using the Platform, you represent and warrant that:</p>
                
                <div className="grid gap-4">
                  {[
                    "All registration information you submit will be true, accurate, current, and complete",
                    "You will maintain the accuracy of such information and promptly update it as necessary",
                    "You have the legal capacity and agree to comply with these Terms and Conditions",
                    "You are not a minor, or if a minor, you have received parental permission to use the Platform",
                    "You will not access the Platform through automated or non-human means",
                    "You will not use the Platform for any illegal or unauthorized purpose",
                    "Your use of the Platform will not violate any applicable law or regulation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-purple-50 border border-purple-100 rounded-lg p-4">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <span className="text-purple-900">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 mt-6">
                  <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🔐</span>
                    Account Security
                  </h4>
                  <p className="text-purple-900 mb-3">
                    You are responsible for maintaining the confidentiality of your account and password, including restricting access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account.
                  </p>
                  <p className="text-purple-900 font-medium">
                    ⚡ You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                  </p>
                </div>

                <p className="text-sm text-gray-600 italic">
                  We reserve the right to remove, reclaim, or change a username you select if we determine it is inappropriate, obscene, or otherwise objectionable.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">4</span>
                Prohibited Activities
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
                  <p className="text-red-900 font-medium">
                    You may not access or use the Platform for any purpose other than that for which we make it available. The Platform may not be used in connection with any commercial endeavors except those specifically endorsed or approved by us.
                  </p>
                </div>

                <p className="text-lg font-semibold text-gray-900">As a user of the Platform, you agree NOT to:</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "🚫", text: "Systematically retrieve data to create compilations or databases" },
                    { icon: "📧", text: "Make unauthorized use including collecting emails for spam" },
                    { icon: "🔒", text: "Circumvent or disable security-related features" },
                    { icon: "🔗", text: "Engage in unauthorized framing or linking" },
                    { icon: "🎭", text: "Trick, defraud, or mislead us or other users" },
                    { icon: "❌", text: "Make improper use of support services" },
                    { icon: "🤖", text: "Use automated systems like bots or scripts" },
                    { icon: "⚠️", text: "Interfere with or create undue burden on the Platform" },
                    { icon: "👤", text: "Attempt to impersonate another user" },
                    { icon: "💼", text: "Sell or transfer your profile" },
                    { icon: "😡", text: "Harass, abuse, or harm another person" },
                    { icon: "🔧", text: "Decompile or reverse engineer our software" },
                    { icon: "😠", text: "Harass our employees or agents" },
                    { icon: "🦠", text: "Upload viruses or malicious code" },
                    { icon: "⚖️", text: "Use the Platform inconsistent with laws" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <span className="text-2xl mr-3 flex-shrink-0">{item.icon}</span>
                      <span className="text-gray-800 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">5</span>
                Products and Services
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  We make every effort to display as accurately as possible the colors, features, specifications, and details of the products and services available on the Platform. However, we do not guarantee that the colors, features, specifications, and details will be accurate, complete, reliable, current, or free of other errors.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <span className="text-2xl mr-2">📦</span>
                      Product Availability
                    </h4>
                    <p className="text-blue-900 text-sm">
                      All products and services are subject to availability. We cannot guarantee items will be in stock and reserve the right to discontinue any products at any time.
                    </p>
                  </div>

                  <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
                    <h4 className="font-semibold text-cyan-900 mb-3 flex items-center">
                      <span className="text-2xl mr-2">💰</span>
                      Pricing Policy
                    </h4>
                    <p className="text-cyan-900 text-sm">
                      Prices for all products and services are subject to change without notice. We reserve the right to modify or discontinue pricing at any time.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6">
                  <h4 className="font-semibold text-indigo-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">💼</span>
                    Service Deliverables
                  </h4>
                  <p className="text-indigo-900 mb-3">
                    For professional services (IT Services, Cyber Security, Digital Marketing, Finance Audit), specific deliverables, timelines, and scope of work will be outlined in a separate service agreement or statement of work.
                  </p>
                  <div className="bg-white/60 rounded-lg p-4">
                    <p className="text-sm text-indigo-900 italic">
                      ℹ️ Product descriptions are provided in good faith, but we do not warrant they are accurate, complete, reliable, current, or error-free.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">6</span>
                Purchases and Payment
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h4 className="font-semibold text-teal-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">💳</span>
                    Accepted Payment Methods
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Credit Cards (Visa, Mastercard, Amex, RuPay)",
                      "Debit Cards",
                      "UPI (Unified Payments Interface)",
                      "Net Banking",
                      "Digital Wallets (Paytm, PhonePe, Google Pay)",
                      "Bank Transfer (for large projects)"
                    ].map((method, index) => (
                      <div key={index} className="flex items-center bg-white rounded-lg p-3">
                        <Check className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-teal-900">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-lg">
                  You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Platform.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-semibold text-green-900 mb-3">💵 Pricing Information</h4>
                  <p className="text-green-900">
                    All prices are quoted in <strong>Indian Rupees (INR)</strong> unless otherwise specified. Prices are subject to change without notice.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 text-xl">Payment Terms for Services</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4">
                      <h5 className="font-semibold text-blue-900 mb-2">IT Services & Cyber Security</h5>
                      <p className="text-sm text-blue-800">30-50% advance payment, remainder upon completion</p>
                    </div>
                    
                    <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-4">
                      <h5 className="font-semibold text-purple-900 mb-2">Digital Marketing</h5>
                      <p className="text-sm text-purple-800">Monthly advance payment for retainer services</p>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-4">
                      <h5 className="font-semibold text-green-900 mb-2">Skills Development Programs</h5>
                      <p className="text-sm text-green-800">Full payment before program commencement</p>
                    </div>
                    
                    <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-4">
                      <h5 className="font-semibold text-orange-900 mb-2">Finance Audit Services</h5>
                      <p className="text-sm text-orange-800">50% advance, 50% upon completion</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
                  <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Late Payment Policy
                  </h4>
                  <p className="text-red-900">
                    If payment is not received by the due date, we reserve the right to charge interest at <strong>2% per month</strong> on overdue amounts and suspend services until payment is received.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">7</span>
                Shipping and Delivery
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  All orders are subject to product availability. We will inform you as soon as possible if the product you have ordered is not available.
                </p>

                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                  <h4 className="font-semibold text-indigo-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🚚</span>
                    Shipping Methods
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-indigo-600 font-bold">📦</span>
                        </div>
                        <div>
                          <p className="font-semibold text-indigo-900">Standard Shipping</p>
                          <p className="text-sm text-indigo-700">5-7 business days</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-white rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-purple-600 font-bold">⚡</span>
                        </div>
                        <div>
                          <p className="font-semibold text-purple-900">Express Shipping</p>
                          <p className="text-sm text-purple-700">2-3 business days</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-white rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-pink-600 font-bold">🚀</span>
                        </div>
                        <div>
                          <p className="font-semibold text-pink-900">Same-Day Delivery</p>
                          <p className="text-sm text-pink-700">Available in select cities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                    <h4 className="font-semibold text-purple-900 mb-2">📍 Delivery Address</h4>
                    <p className="text-sm text-purple-800">
                      You must provide a complete and accurate delivery address. We are not responsible for orders delivered to incorrect addresses provided by you.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-900 mb-2">⚠️ Risk of Loss</h4>
                    <p className="text-sm text-blue-800">
                      The risk of loss and title for items pass to you upon our delivery to the carrier.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6">
                  <h4 className="font-semibold text-amber-900 mb-2">🌍 International Shipping</h4>
                  <p className="text-amber-900">
                    For international orders, customers are responsible for all customs duties, taxes, and import fees.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">8</span>
                Return and Refund Policy
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-6">
                  <p className="text-pink-900 mb-3">
                    Please review our comprehensive <a href="/refund-cancellation-policy" className="text-pink-600 hover:text-pink-700 underline font-semibold inline-flex items-center">
                      Refund and Cancellation Policy
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a> for detailed information regarding returns, refunds, and cancellations for all our products and services.
                  </p>
                </div>

                <h4 className="font-semibold text-gray-900 text-xl">General Return Guidelines</h4>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "📦", title: "Original Condition", desc: "Items must be returned with all tags and packaging intact" },
                    { icon: "⏰", title: "Timeframe", desc: "Returns must be initiated within specified timeframe" },
                    { icon: "🧾", title: "Proof of Purchase", desc: "Receipt or invoice required for all returns" },
                    { icon: "✏️", title: "Custom Items", desc: "Personalized items are generally non-returnable" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <span className="text-3xl mr-3">{item.icon}</span>
                        <div>
                          <h5 className="font-semibold text-pink-900 mb-1">{item.title}</h5>
                          <p className="text-sm text-pink-800">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">9</span>
                User Data and Privacy
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  We will maintain certain data that you transmit to the Platform for managing its performance. Although we perform regular routine backups, you are solely responsible for all data you transmit.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
                  <p className="text-red-900 font-medium">
                    ⚠️ You agree that we shall have no liability to you for any loss or corruption of data, and you hereby waive any right of action against us arising from any such loss or corruption.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🔒</span>
                    Data Collection and Use
                  </h4>
                  <p className="text-cyan-900 mb-3">
                    We collect and use your personal information in accordance with our <a href="/privacy-policy" className="text-cyan-600 hover:text-cyan-700 underline font-semibold inline-flex items-center">
                      Privacy Policy
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>. By using the Platform, you consent to such processing.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <span className="text-2xl mr-2">🍪</span>
                    Cookies
                  </h4>
                  <p className="text-blue-900">
                    The Platform uses cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and personalize content.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">10</span>
                Disclaimers and Warranties
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
                  <p className="uppercase font-bold text-yellow-900 mb-3">
                    THE PLATFORM IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS.
                  </p>
                  <p className="text-yellow-900">
                    You agree that your use of the Platform will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied.
                  </p>
                </div>

                <p className="font-semibold text-gray-900">We make no warranties about the accuracy or completeness of the Platform's content and assume no liability for:</p>
                
                <div className="grid gap-3">
                  {[
                    "Errors, mistakes, or inaccuracies of content",
                    "Personal injury or property damage resulting from your access",
                    "Any unauthorized access to our secure servers",
                    "Any interruption or cessation of transmission",
                    "Any bugs, viruses, or trojan horses transmitted through the Platform"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <span className="text-orange-900">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-900 mb-4">Service-Specific Disclaimers:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">🔐</span>
                      <div>
                        <strong className="text-orange-900">Cyber Security:</strong>
                        <span className="text-orange-800"> We cannot guarantee absolute security against all cyber threats</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">📊</span>
                      <div>
                        <strong className="text-orange-900">Digital Marketing:</strong>
                        <span className="text-orange-800"> Results may vary and are not guaranteed</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">💼</span>
                      <div>
                        <strong className="text-orange-900">Finance Audit:</strong>
                        <span className="text-orange-800"> Does not guarantee financial success</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-600 mr-2 font-bold">💰</span>
                      <div>
                        <strong className="text-orange-900">Investor Programs:</strong>
                        <span className="text-orange-800"> All investments carry risk</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">11</span>
                Limitation of Liability
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <div className="bg-violet-50 border-2 border-violet-400 rounded-xl p-6">
                  <p className="uppercase font-bold text-violet-900 mb-3">
                    IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES.
                  </p>
                  <p className="text-violet-900">
                    This includes lost profit, lost revenue, or loss of data.
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <p className="text-purple-900 font-medium">
                    Our liability to you for any cause whatsoever will at all times be limited to the amount paid by you to us during the six (6) month period prior to any cause of action arising.
                  </p>
                </div>

                <h4 className="font-semibold text-gray-900 text-xl">Specific Limitations</h4>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "📉", text: "Not liable for business losses including loss of profits or revenue" },
                    { icon: "🔄", text: "Not liable for indirect or consequential losses" },
                    { icon: "🌪️", text: "Not liable for losses caused by events beyond our control" },
                    { icon: "🦠", text: "Not liable for damage caused by viruses or cyber attacks" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 rounded-lg p-5">
                      <span className="text-3xl block mb-2">{item.icon}</span>
                      <p className="text-sm text-violet-900">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">12</span>
                Indemnification
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  You agree to defend, indemnify, and hold us harmless from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of:
                </p>
                
                <div className="space-y-3">
                  {[
                    "Your use of the Platform",
                    "Breach of these Terms and Conditions",
                    "Any breach of your representations and warranties",
                    "Your violation of the rights of a third party, including intellectual property rights",
                    "Any harmful act toward any other user with whom you connected via the Platform"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <span className="flex-shrink-0 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <span className="text-emerald-900 pt-0.5">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl p-6">
                  <p className="text-teal-900 font-medium">
                    We reserve the right to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">13</span>
                User-Generated Content
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  The Platform may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality. You agree that any content you submit may be used by us in accordance with our Privacy Policy.
                </p>

                <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
                  <h4 className="font-semibold text-rose-900 mb-3">By posting content, you grant us:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-rose-900">A non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, perform, display, and distribute such content</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-rose-900">The right to sublicense such content to third parties</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                  <h4 className="font-semibold text-pink-900 mb-3">You represent and warrant that:</h4>
                  <ul className="space-y-2">
                    {[
                      "You own or control all rights to the content you post",
                      "The content is accurate and not misleading",
                      "Use and posting of the content does not violate these Terms"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-pink-600 mr-2">✓</span>
                        <span className="text-pink-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">14</span>
                Third-Party Websites and Content
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  The Platform may contain links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties.
                </p>

                <div className="bg-amber-50 border border-amber-300 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-900 mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    We are not responsible for:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Accuracy or legality of Third-Party content",
                      "Any damages from your use of Third-Party Websites",
                      "Privacy practices of Third-Party Websites",
                      "Products or services offered by third parties"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start bg-white rounded-lg p-3">
                        <ExternalLink className="w-4 h-4 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-amber-900">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-center bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-900 font-medium">
                  Your interactions with Third-Party Websites are solely between you and such third parties.
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section id="section-15" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">15</span>
                Termination
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  These Terms and Conditions shall remain in full force and effect while you use the Platform. We may suspend or terminate your rights to use the Platform at any time for any reason, including:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: "⚠️", text: "Violation of these Terms and Conditions" },
                    { icon: "👮", text: "Requests by law enforcement or government agencies" },
                    { icon: "🔧", text: "Discontinuance or modification of the Platform" },
                    { icon: "🔒", text: "Unexpected technical or security issues" },
                    { icon: "💤", text: "Extended periods of inactivity" },
                    { icon: "🚫", text: "Engagement in fraudulent or illegal activities" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-red-50 border border-red-200 rounded-lg p-4">
                      <span className="text-2xl mr-3 flex-shrink-0">{item.icon}</span>
                      <span className="text-red-900 text-sm pt-1">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-rose-50 border-l-4 border-rose-500 rounded-r-xl p-6">
                  <h4 className="font-semibold text-rose-900 mb-3">Upon Termination:</h4>
                  <ul className="space-y-2">
                    {[
                      "Your right to use the Platform will cease immediately",
                      "We may delete your account and all associated data",
                      "All provisions which should survive termination shall survive"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-rose-600 mr-2">•</span>
                        <span className="text-rose-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 16 */}
            <section id="section-16" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">16</span>
                Governing Law and Dispute Resolution
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-6">
                  <h4 className="font-semibold text-sky-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">⚖️</span>
                    Governing Law
                  </h4>
                  <p className="text-sky-900">
                    These Terms shall be governed by and defined following the laws of <strong>India</strong>. PAYZONINDIA and yourself irrevocably consent that the courts of <strong>Bhopal, Madhya Pradesh</strong> shall have exclusive jurisdiction to resolve any dispute arising from these Terms.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">🤝 Dispute Resolution</h4>
                  <p className="text-blue-900 mb-3">
                    In the event of any dispute arising out of or relating to these Terms, the parties agree to first attempt to resolve the matter through good faith negotiations.
                  </p>
                  <p className="text-blue-900">
                    If the dispute cannot be resolved through negotiation within 30 days, either party may initiate formal legal proceedings in the courts of Bhopal, Madhya Pradesh.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 17 */}
            <section id="section-17" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 text-white font-bold shadow-lg">17</span>
                Modifications and Updates
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  We reserve the right to modify, update, or discontinue these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting to the Platform.
                </p>

                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                  <h4 className="font-semibold text-indigo-900 mb-3">📝 Your Responsibility</h4>
                  <p className="text-indigo-900 mb-3">
                    It is your responsibility to review these Terms periodically for changes. Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes.
                  </p>
                  <p className="text-indigo-900 font-medium">
                    If you do not agree to the modified terms, you must discontinue use of the Platform.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
                  <p className="text-blue-900">
                    <strong>Last Updated:</strong> December 29, 2025<br />
                    <strong>Effective Date:</strong> December 29, 2025
                  </p>
                </div>
              </div>
            </section>

            {/* Section 18 - Contact Information */}
            <section id="section-18" className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-lg text-white scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center mr-4 font-bold shadow-lg">18</span>
                Contact Information
              </h2>
              <div className="space-y-5">
                <p className="text-blue-100 text-lg">
                  If you have any questions, concerns, or complaints regarding these Terms and Conditions, please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-200">Email</p>
                        <p className="font-semibold">legal@payzonindia.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-200">Phone</p>
                        <p className="font-semibold">+91 XXX XXX XXXX</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 md:col-span-2">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-200 mb-1">Address</p>
                        <p className="font-semibold">PAYZONINDIA<br />Bhopal, Madhya Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mt-6">
                  <p className="text-center text-blue-100">
                    <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST<br />
                    We aim to respond to all inquiries within 24-48 business hours.
                  </p>
                </div>
              </div>
            </section>

            {/* Acknowledgment */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">Acknowledgment of Terms</h3>
                  <p className="text-green-800 mb-3">
                    By using our Platform, you acknowledge that you have read these Terms and Conditions and agree to be bound by them. These Terms constitute the entire agreement between you and PAYZONINDIA regarding your use of the Platform.
                  </p>
                  <p className="text-green-800 font-medium">
                    Thank you for taking the time to read our Terms and Conditions. We're committed to providing you with excellent service while protecting both your rights and ours.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronRight className="w-6 h-6 transform -rotate-90" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 PAYZONINDIA. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/refund-cancellation-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}