import React from 'react';
import { Shield, Award, Users, TrendingUp, CheckCircle, Star } from 'lucide-react';
import ceoPZI from "../app/assests/CEO-PZI.png";

import justdialLogo from "../app/assests/logos/justdial.jpg"
import google from "../app/assests/logos/google bussibess.jpg"
import dun from "../app/assests/logos/dun and breassheet.jpg"
import indianMart from "../app/assests/logos/indianMart.png"
import CompanyLogo from "../app/assests/logos/payzonindia-logo.png"

const TrustSection = () => {
  const partners = [
    {
      name: "Dun & Bradstreet",
      description: "Global Business Intelligence",
      url: "https://www.dnb.com/business-directory/company-profiles.payzonindia_private_limited.b77773c8705cc49c9333a52a68281cfa.html",
      logo: dun,
      color: "from-red-500 to-orange-600"
    },
    {
      name: "JustDial",
      description: "Local Search Engine",
      url: "https://www.justdial.com/Bhopal/Payzon-India-Pvt-Ltd-Near-HP-Petrol-Pump-Raisen-Road/0755PX755-X755-170603212514-Z1X9_BZDET",
      logo: justdialLogo,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "IndiaMART",
      description: "B2B Marketplace",
      url: "https://www.indiamart.com/payzonindia/",
      logo: indianMart,
      color: "from-blue-600 to-cyan-500"
    },
    {
      name: "Google Business",
      description: "Verified Business Profile",
      url: "https://share.google/p4mCl4y6InFO4EBmk",
      logo: google,
      color: "from-green-500 to-blue-500"
    }
  ];

  const trustPoints = [
    { icon: Shield, text: "Multi-Domain Expertise", detail: "IT, Fintech & E-Commerce" },
    { icon: Award, text: "Industry Leader", detail: "Award-winning service" },
    { icon: Users, text: "10,000+ Clients", detail: "Trusted nationwide" },
    { icon: TrendingUp, text: "Comprehensive Solutions", detail: "End-to-end services" }
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "50K+", label: "Transactions" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
             OUR EXCELLENCE IS YOUR TRUST
            </span>
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          </div>
        </div>

        {/* Main Trust Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          
          {/* Chairman Section with Enhanced Design */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30 z-10"></div>
                <img 
                  src={ceoPZI.src}
                  alt="Chairman of Payzon India" 
                  className="w-full h-[550px] object-contain object-center bg-white"
                />
                
                {/* Bottom Gradient Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8 z-20">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-green-400 font-semibold text-sm">Verified Leadership</span>
                  </div>
                  <h3 className="text-white text-3xl font-bold mb-2">Visionary Leadership</h3>
                  <p className="text-blue-200 text-sm">Steering Payzon India Towards Excellence</p>
                </div>
              </div>

              {/* Certified Badge and Stats Below Image */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-10 py-6 rounded-2xl shadow-2xl">
                  <Shield className="w-8 h-8 flex-shrink-0" />
                  <div className="text-left flex-grow">
                    <div className="font-black text-2xl">Certified & Trusted</div>
                    <div className="text-blue-100 text-base font-medium">Excellence Since Inception</div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-white" />
                    ))}
                  </div>
                </div>

                {/* Stats Grid Below Badge */}
                <div className="grid grid-cols-3 gap-4 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-base font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Blur Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>

          {/* Content Section with Enhanced Typography */}
          <div className="space-y-8 lg:pt-4">
            <div>
              {/* Company Logo and Trust & Excellence */}
              <div className="flex items-center gap-6 mb-8 flex-wrap">
                <img 
                  src={CompanyLogo.src} 
                  alt="Payzon India Private Limited Logo"
                  className="h-24 md:h-32 w-auto object-contain"
                />
                <div className="inline-flex items-center space-x-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                    Trust & Excellence
                  </span>
                </div>
              </div>
              
              {/* Updated heading with forced line break on mobile */}
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1]">
                <span className="block sm:inline">Payzon India</span>
                <span className="block">Private Limited</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mt-3">
                  Trusted Company
                </span>
              </h2>
              
              <div className="space-y-5">
                <p className="text-gray-700 text-lg leading-relaxed">
                  At Payzon India, trust isn't just a value—it's our foundation. As a diversified technology and services company, we excel across IT Services, Digital Marketing, E-Commerce, and Fintech Solutions. Our commitment to excellence and transparency has earned us the confidence of thousands of clients nationwide.
                </p>
              </div>
            </div>

            {/* Enhanced Trust Points */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {trustPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="group relative bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="pt-0.5">
                        <h4 className="text-gray-900 font-bold text-[15px] mb-1 leading-tight">{point.text}</h4>
                        <p className="text-gray-600 text-[13px] leading-snug">{point.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Premium Trusted Partners Section */}
        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                Verified Partnerships
              </span>
              <div className="h-1 w-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"></div>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Trusted Partners
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Officially verified and recognized by leading global and national platforms, reinforcing our commitment to transparency, credibility, and excellence in every aspect of our business
            </p>
          </div>

          {/* Premium Partners Grid with Logo Images - Enhanced for mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => {
              return (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-3xl p-8 md:p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-blue-200 overflow-hidden"
                >
                  {/* Gradient Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Company Logo Image - Increased size on mobile */}
                    <div className="w-full h-40 sm:h-44 md:h-24 mx-auto mb-6 flex items-center justify-center">
                      <div className="w-full h-40 sm:h-44 md:h-24 rounded-2xl overflow-hidden bg-white shadow-lg transform group-hover:scale-110 transition-all duration-300 flex items-center justify-center p-5 sm:p-6 md:p-3">
                        <img 
                          src={partner.logo.src || partner.logo} 
                          alt={`${partner.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    <h4 className="text-gray-900 font-bold text-xl sm:text-2xl md:text-xl mb-2 group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h4>
                    <p className="text-gray-500 text-sm sm:text-base md:text-sm mb-4">{partner.description}</p>
                    
                    {/* Verified Badge */}
                    <div className="inline-flex items-center space-x-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-xs font-semibold">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-3 md:h-3" />
                      <span>Verified Partner</span>
                    </div>
                  </div>

                  {/* Hover Arrow - Increased z-index */}
                  <div className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-20">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
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
      `}</style>
    </section>
  );
};

export default TrustSection;