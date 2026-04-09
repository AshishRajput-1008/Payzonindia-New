"use client";
import React, { useEffect, useState } from 'react';
import { ArrowRight, Leaf, Blocks, Gem, Sprout, Cpu, Sparkles, ChevronRight, Shirt, TrendingUp, Award, Users } from 'lucide-react';

import {
  useNavbarColor,
  sectorGradients,
} from "@/app/contexts/NavbarColorContext";

const FMCGPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const { setNavbarGradient, setPaymentGradient, setLogoGradient } =
      useNavbarColor();
  
    useEffect(() => {
      // Get gradients for this sector
      const gradients = sectorGradients["E-commerce"];
  
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

  const fmcgCategories = [
    {
      id: 1,
      name: "Organic Farming",
      description: "Sustainable agricultural practices producing chemical-free, healthy organic products for conscious consumers.",
      icon: Leaf,
      color: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      href: "/sector/organic-farming",
      stats: "100% Natural",
      features: ["Chemical-free", "Sustainable", "Certified"]
    },
    {
      id: 2,
      name: "Toys Industries",
      description: "Creative and safe toys designed to inspire imagination, learning, and joy for children of all ages.",
      icon: Blocks,
      color: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      href: "/sector/toys-industries",
      stats: "Safe & Fun",
      features: ["Age-appropriate", "Educational", "Durable"]
    },
    {
      id: 3,
      name: "Artificial Jewellery",
      description: "Elegant and affordable fashion jewelry pieces that add style and sophistication to every occasion.",
      icon: Gem,
      color: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      href: "/sector/artificial-jewellery",
      stats: "Trendy Designs",
      features: ["Affordable", "Stylish", "Versatile"]
    },
    {
      id: 4,
      name: "Spices & Vegetables",
      description: "Fresh, premium quality spices and vegetables sourced directly from farms to ensure authentic flavors.",
      icon: Sprout,
      color: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50 to-amber-50",
      href: "/sector/spices-vegetables",
      stats: "Farm Fresh",
      features: ["Direct sourcing", "Premium quality", "Authentic"]
    },
    {
      id: 5,
      name: "Electronics",
      description: "Innovative electronic products and solutions designed for modern living with cutting-edge technology.",
      icon: Cpu,
      color: "from-cyan-500 to-teal-600",
      bgGradient: "from-cyan-50 to-teal-50",
      href: "/sector/electronics",
      stats: "Latest Tech",
      features: ["Innovative", "Reliable", "Energy-efficient"]
    },
    {
      id: 6,
      name: "Clothing",
      description: "Stylish and comfortable apparel for every occasion, combining quality fabrics with contemporary designs.",
      icon: Shirt,
      color: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50",
      href: "/sector/clothing",
      stats: "Quality Fashion",
      features: ["Comfortable", "Trendy", "Sustainable"]
    }
  ];

  const stats = [
    { icon: Blocks, value: "6+", label: "Product Categories", color: "text-emerald-600" },
    { icon: Award, value: "100%", label: "Quality Assured", color: "text-green-600" },
    { icon: Users, value: "10K+", label: "Happy Customers", color: "text-teal-600" },
    { icon: TrendingUp, value: "24/7", label: "Support Available", color: "text-lime-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="mt-[105px] md:mt-[100px] inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 mb-8 lg:mb-4 shadow-lg hover:bg-white/30 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              <span className="text-white text-sm font-bold tracking-wide">Fast Moving Consumer Goods</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight lg:mt-[16px]">
              FMCG{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-lime-300 to-green-300 animate-pulse">
                  Excellence
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-lime-300 to-green-300 rounded-full"></div>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-emerald-50 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              Discover our diverse range of fast-moving consumer goods, delivering quality products that meet everyday needs across multiple industries.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <IconComponent className="w-8 h-8 text-yellow-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-emerald-100 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-full">
              Our Product Range
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Explore Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
              Categories
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each category carefully curated to deliver excellence, quality, and value to our customers worldwide.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fmcgCategories.map((category) => {
            const IconComponent = category.icon;
            const isHovered = hoveredCard === category.id;
            
            return (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 ${isHovered ? 'border-emerald-200' : 'border-transparent'} overflow-hidden h-full`}>
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Animated Corner Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-bl-full transition-all duration-500 group-hover:w-48 group-hover:h-48`}></div>

                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Icon and Badge Row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className={`px-3 py-1.5 bg-gradient-to-r ${category.color} text-white text-xs font-bold rounded-full shadow-md`}>
                        {category.stats}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      {category.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {category.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={category.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn"
                    >
                      <span>Explore More</span>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''} group-hover/btn:translate-x-2`} />
                    </a>
                  </div>

                  {/* Decorative Icon */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <IconComponent className="w-full h-full text-gray-900" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 mb-16">
        <div className="relative bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Decorative Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white text-sm font-bold">Join Our Network</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-emerald-50 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join hands with PayzonIndia and explore opportunities in our thriving FMCG sector. Let's grow together and create lasting impact!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                <span>Contact Us Today</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/investor"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <span>Investor Program</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="relative h-24 bg-gradient-to-br from-emerald-600 to-green-600">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FMCGPage;