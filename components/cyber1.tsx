"use client";

import React from "react";
import { CheckCircle2, Facebook, Instagram, Twitter, Youtube, Linkedin, Shield, Sparkles, Star, ArrowUpRight, Lock, Globe2 } from "lucide-react";

export default function CyberSecurityUI() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/sadaivyuvafoundation",
      gradient: "from-[#1877F2] to-[#0C63D4]",
      hoverGlow: "group-hover:shadow-[0_0_40px_rgba(24,119,242,0.6)]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/sadaivyuvafoundation",
      gradient: "from-[#E1306C] via-[#C13584] to-[#833AB4]",
      hoverGlow: "group-hover:shadow-[0_0_40px_rgba(225,48,108,0.6)]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/sadaivyuvafoundation",
      gradient: "from-[#1DA1F2] to-[#0C85D0]",
      hoverGlow: "group-hover:shadow-[0_0_40px_rgba(29,161,242,0.6)]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/101633112/admin/page-posts/published/",
      gradient: "from-[#0077B5] to-[#005E93]",
      hoverGlow: "group-hover:shadow-[0_0_40px_rgba(0,119,181,0.6)]",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@sadaivyuvafoundation",
      gradient: "from-[#FF0000] to-[#CC0000]",
      hoverGlow: "group-hover:shadow-[0_0_40px_rgba(255,0,0,0.6)]",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Ultra Modern Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Premium Header Badge */}
          <div className="flex justify-center mb-12">
            <div className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-full border border-white/10 hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Sparkles className="w-5 h-5 sm:w-5 sm:h-5 text-blue-400 animate-pulse relative z-10" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-bold text-base sm:text-sm uppercase tracking-wider relative z-10">
                Cyber Security Excellence
              </span>
              <Star className="w-5 h-5 sm:w-5 sm:h-5 text-pink-400 animate-pulse relative z-10" />
            </div>
          </div>

          {/* Main Content - Bento Grid Style */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            
            {/* Main Content Card - Left */}
            <div className="lg:col-span-7 group relative">
              {/* Animated Border Gradient */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/20 overflow-hidden">
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  {/* Premium Badge */}
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/50">
                    <Shield className="w-5 h-5 text-white" />
                    <span className="text-white text-sm font-bold uppercase tracking-wider">
                      Cyber Shield for Corporates
                    </span>
                  </div>

                  {/* Main Heading with Modern Typography and Better Line Spacing */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-[1.3] sm:leading-[1.2]">
                    <span className="text-gray-900">Legal Support &</span>
                    <br />
                    <span className="text-gray-900">Awareness in</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                      Digital Cyber Crimes
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                    Specializes in combating cyber fraud and providing robust protection against digital crimes. With consultancy and expert solutions, we safeguard businesses and corporates from online threats, ensuring a secure digital environment.
                  </p>

                  {/* Feature Cards - Modern Style */}
                  <div className="space-y-4">
                    <div className="group/item relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500 origin-left"></div>
                      <div className="relative flex items-start gap-4 p-5 rounded-2xl border border-blue-100/50 bg-gradient-to-r from-blue-50/50 to-transparent hover:border-blue-200 transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover/item:scale-110 transition-transform">
                          <Lock className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-gray-800 font-semibold text-base sm:text-lg leading-relaxed">
                            We offer data security and cyber services for companies & businesses.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group/item relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500 origin-left"></div>
                      <div className="relative flex items-start gap-4 p-5 rounded-2xl border border-purple-100/50 bg-gradient-to-r from-purple-50/50 to-transparent hover:border-purple-200 transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover/item:scale-110 transition-transform">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-gray-800 font-semibold text-base sm:text-lg leading-relaxed">
                            Get the best consult from cyber expert advisors working in the legal sector for corporates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Bar */}
                  <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-1">24/7</div>
                      <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1">100%</div>
                      <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Secure</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-1">500+</div>
                      <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Foundation Card - Right */}
            <div className="lg:col-span-5 group relative">
              {/* Animated Border Gradient */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
              
              <div className="relative h-full bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden flex flex-col">
                
                {/* Logo Section with Gradient Background */}
                <div className="flex-1 flex items-center justify-center p-8 sm:p-10 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
                  
                  {/* Logo with Modern Frame */}
                  <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-700">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50"></div>
                    <img
                      src="/images/Sadaiv_logo.png"
                      alt="Sadaiv Yuva Foundation"
                      className="relative object-contain max-h-64 sm:max-h-80 w-auto drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Info Section with Gradient */}
                <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-6 sm:p-8">
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
                  
                  <div className="relative z-10 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                      Sadaiv Yuva Foundation
                    </h2>
                    
                    <a
                      href="https://www.sadaivyuvafoundation.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-white font-bold hover:text-blue-300 transition-all duration-300"
                    >
                      <Globe2 className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                      <span className="text-base sm:text-lg border-b-2 border-white/30 group-hover/link:border-blue-300 transition-colors">
                        www.sadaivyuvafoundation.com
                      </span>
                      <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section - Ultra Modern */}
          <div className="relative group">
            {/* Animated Background Glow */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900/98 via-blue-900/98 to-purple-900/98 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              
              <div className="relative z-10 py-12 sm:py-16 px-6 sm:px-10">
                
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-4 mb-4">
                    <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                      Connect with Us
                    </h3>
                    <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-pink-400 to-transparent"></div>
                  </div>
                  <p className="text-blue-200/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Follow Sadaiv Yuva Foundation on social media for updates, insights, and community engagement
                  </p>
                </div>

                {/* Social Icons - Premium Design with YouTube Centered on Mobile */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-5xl mx-auto mb-10">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    const isYouTube = social.name === "YouTube";
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/social relative flex flex-col items-center gap-4 ${isYouTube ? 'col-span-2 sm:col-span-1' : ''}`}
                        title={social.name}
                      >
                        {/* Glow Effect */}
                        <div className={`absolute -inset-8 bg-gradient-to-br ${social.gradient} rounded-full blur-2xl opacity-0 group-hover/social:opacity-60 transition-all duration-700`}></div>
                        
                        {/* Icon Container */}
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-2xl opacity-20 blur-xl`}></div>
                          <div className={`relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${social.gradient} rounded-2xl shadow-2xl transform transition-all duration-500 group-hover/social:scale-110 group-hover/social:rotate-12 ${social.hoverGlow} border border-white/10`}>
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-white/10 to-transparent rounded-2xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Icon */}
                            <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white relative z-10 drop-shadow-2xl" />
                            
                            {/* Animated Shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl transform -translate-x-full group-hover/social:translate-x-full transition-transform duration-1000"></div>
                          </div>
                        </div>

                        {/* Label */}
                        <span className="text-white font-bold text-sm sm:text-base tracking-wide relative z-10 group-hover/social:text-transparent group-hover/social:bg-clip-text group-hover/social:bg-gradient-to-r group-hover/social:from-blue-400 group-hover/social:to-pink-400 transition-all duration-300">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>

                {/* Bottom Decorative */}
                <div className="flex flex-col items-center gap-3">
                  <div className="h-px w-40 sm:w-64 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                    <p className="text-blue-200/60 text-xs sm:text-sm font-medium">Join our growing community</p>
                    <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}