"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ShoppingCart,
  Package,
  CreditCard,
  Clock,
  Truck,
  DollarSign,
  Tag,
  Gift,
  Sparkles,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Globe,
  ExternalLink,
} from "lucide-react";

import { useNavbarColor, sectorGradients } from "@/app/contexts/NavbarColorContext"

const PayzonShoppyLandingPage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredFMCG, setHoveredFMCG] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);


    const { setNavbarGradient, setPaymentGradient, setLogoGradient } = useNavbarColor();

          useEffect(() => {
              // Get gradients for this sector
              const gradients = sectorGradients['E-commerce'];
              
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

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/payzonshoppy",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/payzonshoppy",
      color: "from-pink-500 via-purple-500 to-orange-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/PayzonIndia",
      color: "from-sky-400 to-blue-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@payzonindiadigitalsolutions",
      color: "from-red-500 to-red-600",
    },
  ];

  const services = [
    { name: "IT Services", href: "/ventures/it-services/" },
    { name: "Digital Marketing", href: "/ventures/digital-marketing/" },
    { name: "E-commerce", href: "/ventures/e-commerce/" },
    { name: "Fintech Solutions", href: "/ventures/fintech-solutions/" },
  ];

  const fmcgCategories = [
    {
      name: "Organic Farming",
      href: "/sector/organic-farming",
      description: "Sustainable, chemical-free organic products for healthy living",
    },
    {
      name: "Toys Industries",
      href: "/sector/toys-industries",
      description: "Safe, creative toys that inspire imagination and learning",
    },
    {
      name: "Artificial Jewellery",
      href: "/sector/artificial-jewellery",
      description: "Elegant fashion jewelry for every occasion and style",
    },
    {
      name: "Spices & Vegetables",
      href: "/sector/spices-vegetables",
      description: "Farm-fresh spices and vegetables with authentic flavors",
    },
    {
      name: "Electronics",
      href: "/sector/electronics",
      description: "Cutting-edge electronics for modern, connected lifestyles",
    },
    {
      name: "Clothing",
      href: "/sector/clothing",
      description: "Stylish and comfortable apparel for every occasion",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
 <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10 text-center px-4 py-24 mt-[173px]">
          <div className="inline-flex items-center mt-[16px] p-2 px-5 py-2.5 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 mb-8">
            <ShoppingCart className="w-5 h-5 mr-2 text-white " />
            <span className="text-white text-sm font-bold mt-[2px]">
              E-commerce Excellence
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Welcome to <span className="text-yellow-300">Payzon Shoppy</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50 max-w-3xl mx-auto">
            Your Premier E-commerce Destination — Fresh Products, Low Prices &
            Seamless Shopping
          </p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Services Menu */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-emerald-200/50">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 mb-6 text-center">
                  Our Ventures
                </h2>
                <div className="flex flex-col gap-4">
                  {services.map((service, index) => (
                    <a key={index} href={service.href} onMouseEnter={() => setHoveredService(index)} onMouseLeave={() => setHoveredService(null)}>
                      <div className={`bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-5 py-3 text-white rounded-xl font-semibold text-center cursor-pointer transition-all duration-300 transform ${hoveredService === index ? "scale-105 shadow-lg" : ""}`}>
                        {service.name}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Promo Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 shadow-2xl">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
                </div>
                <div className="relative px-6 py-16 flex flex-col items-center justify-center text-center">
                  <div className="bg-yellow-400 text-emerald-900 px-4 py-2 rounded-full mb-4 font-black">
                    <Tag className="w-5 h-5 inline mr-2" /> WOODVEG25
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Save Up to 25% Today!</h3>
                  <p className="text-white text-lg mb-6">Free Delivery on Orders Over £30</p>
                  <a href="https://www.payzonshoppy.com" className="bg-white text-emerald-700 px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-50 transition-all duration-300 group shadow-lg">
                    <span>Shop Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* FMCG Categories Sidebar - Desktop Only */}
              <div className="hidden lg:block bg-gradient-to-br from-emerald-50 via-white to-teal-50 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-emerald-200/50">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">FMCG Categories</h2>
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
                  Explore our premium Fast Moving Consumer Goods across diverse sectors
                </p>

                <div className="flex flex-col gap-3">
                  {fmcgCategories.map((category, index) => (
                    <a key={index} href={category.href} onMouseEnter={() => setHoveredCategory(index)} onMouseLeave={() => setHoveredCategory(null)}>
                      <div className={`group relative overflow-hidden bg-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 px-4 py-3 rounded-xl font-semibold text-sm text-gray-700 hover:text-white cursor-pointer transition-all duration-300 transform ${hoveredCategory === index ? "scale-[1.02]" : ""} shadow-md hover:shadow-xl border border-emerald-100 hover:border-transparent`}>
                        <div className="flex items-center justify-between relative z-10">
                          <span className={`transition-transform duration-300 ${hoveredCategory === index ? "translate-x-1" : ""}`}>{category.name}</span>
                          <ArrowRight className={`w-4 h-4 transition-all duration-300 ${hoveredCategory === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`} />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-center">
                  <p className="text-white text-xs font-bold uppercase tracking-wider">Quality Products, Trusted Service</p>
                </div>
              </div>

              {/* Social Links Sidebar */}
              <div className="bg-gradient-to-br from-white via-emerald-50 to-white backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-emerald-200/50">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <h2 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Connect With Us</h2>
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                  </div>
                </div>

                <p className="text-xs text-gray-600 text-center mb-6 leading-relaxed">
                  Follow us on social media for updates, offers & more
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredSocial(index)} onMouseLeave={() => setHoveredSocial(null)}>
                      <div className={`group relative overflow-hidden bg-white hover:bg-gradient-to-r ${social.color} p-4 rounded-xl cursor-pointer transition-all duration-500 transform ${hoveredSocial === index ? "scale-105 -rotate-3" : ""} shadow-md hover:shadow-2xl border-2 border-gray-100 hover:border-transparent`}>
                        <div className="flex flex-col items-center justify-center gap-2 relative z-10">
                          <social.icon className={`w-7 h-7 transition-all duration-300 ${hoveredSocial === index ? "text-white scale-110" : "text-gray-700"}`} />
                          <span className={`text-xs font-bold transition-colors duration-300 ${hoveredSocial === index ? "text-white" : "text-gray-700"}`}>{social.name}</span>
                        </div>
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </a>
                  ))}
                </div>

                <a href="https://www.payzonshoppy.com" target="_blank" rel="noopener noreferrer">
                  <div className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500 p-4 rounded-xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <div className="flex items-center justify-center gap-3 relative z-10">
                      <Globe className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-emerald-100 font-medium">Visit Our Website</span>
                        <span className="text-white text-sm font-bold">payzonshoppy.com</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-8 space-y-12">
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Payzon Shoppy: Redefining E-commerce Excellence</h1>
                <p className="text-base leading-relaxed mb-8 text-gray-700">
                  Payzon Shoppy is more than just an online store—it's a dynamic e-commerce ecosystem designed to deliver unparalleled convenience, quality, and value.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200">
                    <ShoppingCart className="w-8 h-8 text-emerald-600 mb-2" />
                    <div className="text-3xl font-black text-emerald-700">100K+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border-2 border-teal-200">
                    <Package className="w-8 h-8 text-teal-600 mb-2" />
                    <div className="text-3xl font-black text-teal-700">1M+</div>
                    <div className="text-sm text-gray-600">Orders Delivered</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 p-6 rounded-xl border-2 border-cyan-200">
                    <Clock className="w-8 h-8 text-cyan-600 mb-2" />
                    <div className="text-3xl font-black text-cyan-700">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>

                <div className="space-y-8">
                  <FeatureSection icon={<DollarSign className="w-6 h-6" />} title="Competitive Pricing: Lower Costs, Higher Value" description="Direct-to-consumer model with AI-driven pricing algorithms." features={["Dynamic Pricing: Real-time adjustments", "Bulk Savings: Discounts on larger orders", "Transparency: Clear pricing with no hidden fees"]} />
                  <FeatureSection icon={<Package className="w-6 h-6" />} title="Fresh Products Daily: Quality You Can Count On" description="Sourced fresh daily from over 5,000 trusted suppliers." features={["Freshness Guarantee: Daily restocking", "Eco-Friendly Practices: Sustainable packaging", "Traceability: Blockchain technology"]} />
                  <FeatureSection icon={<CreditCard className="w-6 h-6" />} title="Secure Payments: Shop with Confidence" description="256-bit encryption and PCI DSS compliance." features={["Universal Compatibility: All major bank cards", "Advanced Security: Multi-layered encryption", "Seamless Checkout: Fast, secure payments"]} />
                  <FeatureSection icon={<Truck className="w-6 h-6" />} title="Free Delivery: Convenience at No Extra Cost" description="Free delivery on orders over £30 with AI-optimized routes." features={["Reliable Logistics: AI-optimized delivery", "Sustainable Packaging: Eco-conscious materials", "Flexible Scheduling: Choose delivery times"]} />
                </div>
              </div>
            </section>

            {/* FMCG Section */}
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-emerald-200/50">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-emerald-300 mb-4">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-800 text-sm font-bold">Fast Moving Consumer Goods</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-4">Our FMCG Collection</h2>
                <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                  Premium FMCG range—carefully curated products that blend quality, sustainability, and innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {fmcgCategories.map((category, idx) => (
                  <a key={idx} href={category.href} onMouseEnter={() => setHoveredFMCG(idx)} onMouseLeave={() => setHoveredFMCG(null)}>
                    <div className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${hoveredFMCG === idx ? "-translate-y-2" : ""} border-2 ${hoveredFMCG === idx ? "border-emerald-300" : "border-transparent"} overflow-hidden cursor-pointer h-full flex flex-col`}>
                      <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 opacity-0 ${hoveredFMCG === idx ? "opacity-100" : ""} transition-opacity duration-500`}></div>
                      <div className="relative z-10 flex-grow flex flex-col">
                        <div className={`w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 shadow-md ${hoveredFMCG === idx ? "scale-110 rotate-6" : ""}`}>
                          <Package className="w-7 h-7 text-white" />
                        </div>
                        <h3 className={`text-xl font-bold text-gray-800 mb-3 transition-all duration-300 ${hoveredFMCG === idx ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600" : ""}`}>{category.name}</h3>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">{category.description}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-full">Premium Quality</span>
                          <ArrowRight className={`w-5 h-5 text-teal-600 transition-all duration-300 ${hoveredFMCG === idx ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`} />
                        </div>
                      </div>
                      <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-10 transition-transform duration-700 ${hoveredFMCG === idx ? "scale-150" : ""}`}></div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="text-center">
                <a href="/sector/fmcg">
                  <button className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:shadow-2xl transition-all duration-300 mx-auto group">
                    <span>Explore All FMCG Categories</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </a>
              </div>
            </div>

      
            {/* Social Media Section */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-emerald-200/50">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-200 mb-4">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-800 text-sm font-bold">Stay Connected</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-4">Follow Us on Social Media</h2>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">Join our growing community for exclusive deals, product updates, and behind-the-scenes content</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {socialLinks.map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredSocial(`main-${idx}`)} onMouseLeave={() => setHoveredSocial(null)}>
                    <div className={`group relative bg-gradient-to-br ${social.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${hoveredSocial === `main-${idx}` ? "-translate-y-2 rotate-2" : ""} overflow-hidden cursor-pointer h-full flex flex-col items-center justify-center`}>
                      <div className={`absolute inset-0 bg-white/20 opacity-0 ${hoveredSocial === `main-${idx}` ? "opacity-100" : ""} transition-opacity duration-500`}></div>
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${hoveredSocial === `main-${idx}` ? "scale-110 rotate-12" : ""}`}>
                          <social.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{social.name}</h3>
                        <p className="text-white/90 text-sm mb-4">Follow us for updates</p>
                        <div className="flex items-center gap-2 text-white font-semibold text-sm">
                          <span>Visit Page</span>
                          <ExternalLink className={`w-4 h-4 transition-all duration-300 ${hoveredSocial === `main-${idx}` ? "translate-x-1 -translate-y-1" : ""}`} />
                        </div>
                      </div>
                      <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full transition-transform duration-700 ${hoveredSocial === `main-${idx}` ? "scale-150" : ""}`}></div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 shadow-xl">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white mb-1">Visit Our Website</h3>
                      <p className="text-emerald-50 text-sm">Explore our full catalog at payzonshoppy.com</p>
                    </div>
                  </div>
                  <a href="https://www.payzonshoppy.com" target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-emerald-50 transition-all duration-300 group shadow-lg whitespace-nowrap">
                      <span>Visit Website</span>
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </a>
                </div>
              </div>
            </div>


      {/* CTA Section */}
            <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`, backgroundSize: "40px 40px" }}></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Join the Payzon Shoppy Community</h2>
                <p className="text-emerald-50 text-lg mb-2 max-w-2xl mx-auto">Experience e-commerce done differently. Shop with confidence knowing our team is here 24/7.</p>
                {/* <a href="https://www.payzonshoppy.com">
                  <button className="bg-white text-emerald-700 px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-emerald-50 transition-all duration-300 mx-auto shadow-lg group">
                    <span>Start Shopping</span>
                    <Gift className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </button>
                </a> */}
              </div>
            </div>




          </main>
        </div>
      </div>
    </div>
  );
};


// Feature Section Component
const FeatureSection = ({ icon, title, description, features }) => (
  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
    <ul className="space-y-2 ml-16">
      {features.map((feature, idx) => (
        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
          <span className="text-emerald-600 font-bold">•</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default PayzonShoppyLandingPage;