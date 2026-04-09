"use client";

import { useState } from "react";
import { Plus, Phone, ArrowRight, Sparkles } from "lucide-react";

interface Company {
  id: number;
  name: string;
  logo: string;
  url: string;
  url1: string;
  keyPoints: string[];
}

const companies: Company[] = [
  {
    id: 1,
    name: "Payzon Marketing",
    logo: "/images/logo.png",
    url: "https://www.payzonmarketing.com",
    url1: "www.payzonmarketing.com",
    keyPoints: [
      "360° Digital Marketing Solutions",
      "SEO & Social Media Expertise",
      "Brand Growth Strategies",
      "Result-Driven Campaigns"
    ]
  },
  {
    id: 2,
    name: "Payzon IT Services",
    logo: "/images/payzonit.png",
    url: "https://www.payzonitservices.com",
    url1: "www.payzonitservices.com",
    keyPoints: [
      "Custom Software Development",
      "Cloud Solutions & Infrastructure",
      "IT Consulting & Support",
      "Enterprise Solutions"
    ]
  },
  {
    id: 3,
    name: "Payzon Shoppy",
    logo: "/images/shoppy-logo.png",
    url: "https://www.payzonshoppy.com",
    url1: "www.payzonshoppy.com",
    keyPoints: [
      "E-Commerce Platform Solutions",
      "Seamless Shopping Experience",
      "Secure Payment Integration",
      "Multi-Vendor Marketplace"
    ]
  },
  {
    id: 4,
    name: "Payzon API",
    logo: "/images/PAYZONINDIA-pngLogo.png",
    url: "https://www.payzonapi.com",
    url1: "www.payzonapi.com",
    keyPoints: [
      "Financial Technology Solutions",
      "API Integration Services",
      "Payment Gateway Solutions",
      "Secure Transaction Processing"
    ]
  },
];

const ServiceCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
      
      {/* Card container */}
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Decorative top accent */}
        <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-500"></div>
        
        {/* Logo section */}
        <div className="relative pt-8 pb-6 px-6">
          <div className="relative w-28 h-28 mx-auto mb-6">
            {/* Rotating border effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl ${isHovered ? 'animate-pulse' : ''}`}></div>
            <div className="absolute inset-1 bg-white rounded-2xl flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <img 
                  src={item.logo} 
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Company name */}
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-2 group-hover:text-blue-600 transition-all duration-300">
            {item.name}
          </h3>
          
          {/* Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Key points section */}
        <div className="px-6 pb-6">
          <div className="space-y-3 mb-6">
            {item.keyPoints.map((point, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-3 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <a 
            href={item.url}
            className="group/btn relative w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span className="relative z-10">Explore More</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <Sparkles className="w-8 h-8 text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6 animate-[fadeInDown_0.6s_ease-out]">
            <Sparkles className="w-4 h-4" />
            <span>Online Versatility</span>
            <Sparkles className="w-4 h-4" />
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-[fadeInUp_0.6s_ease-out]">
            Showcasing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Innovation
            </span>
            <br />
            Across Industries & Communities
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
            From digital platforms to real-world solutions, our work highlights online versatility 
            and showcases innovation that inspires industries and empowers communities.
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-8 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          {companies.map((item, index) => (
            <ServiceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
      
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
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
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
      `}</style>
    </section>
  );
}