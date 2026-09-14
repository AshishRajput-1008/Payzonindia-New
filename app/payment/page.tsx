'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, Shield, Zap, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Code, ShoppingCart, Wallet, TrendingUp } from 'lucide-react';
import { useNavbarColor, sectorGradients } from "@/app/contexts/NavbarColorContext";

export default function PaymentPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { setNavbarGradient, setPaymentGradient, setLogoGradient } = useNavbarColor();


    const PAYMENT_URL = 'https://rzp.io/rzp/HxCD3kT';


  const services = [
    {
      icon: Code,
      title: 'PayzonIndia IT Services',
      description: 'Custom software development, cloud solutions, and IT consulting',
      link: 'https://payzonitservices.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShoppingCart,
      title: 'PayzonIndia E-commerce',
      description: 'Complete online store solutions with secure payment integration',
      link: 'https://payzonshoppy.com',
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      icon: Wallet,
      title: 'PayzonIndia Fintech Solutions',
      description: 'Payment gateways, digital wallets, and financial platforms',
      link: 'https://payzonapi.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'PayzonIndia Digital Marketing',
      description: 'SEO, social media marketing, and growth strategies',
      link: 'https://payzonmarketing.com',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const trustBadges = [
    { icon: Shield, label: 'Secure Payment' },
    { icon: Zap, label: 'Instant Processing' },
    { icon: Lock, label: 'SSL Encrypted' },
    { icon: CheckCircle2, label: 'PayU Verified' },
  ];

  useEffect(() => {
    setNavbarGradient('from-cyan-600 via-emerald-600 to-blue-600');
    setPaymentGradient('from-cyan-500 to-emerald-500');
    setLogoGradient('from-cyan-400 to-emerald-400');

    return () => {
      const defaultGradients = sectorGradients['default'];
      setNavbarGradient(defaultGradients.navbar);
      setPaymentGradient(defaultGradients.payment);
      setLogoGradient(defaultGradients.logo);
    };
  }, [setNavbarGradient, setPaymentGradient, setLogoGradient]);

  const handlePaymentClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
    window.open(PAYMENT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden md:py-22">

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.04)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-6xl mx-auto relative z-10 pt-16 md:pt-[90px]">

        {/* Header */}
        <div className="text-center mb-5 pt-0 md:pt-10 lg:pt-16 animate-fadeIn">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-500 via-emerald-500 to-blue-500 rounded-3xl mb-6 shadow-2xl shadow-cyan-500/50 animate-float relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-3xl blur-xl opacity-50 animate-pulse-slow"></div>
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white relative z-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-slideDown">
            Payment Portal
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-medium animate-slideUp max-w-lg mx-auto mb-0">
            Complete your payment securely via PayU — India's most trusted payment platform
          </p>
        </div>

        {/* ── Side-by-Side: Compliance LEFT  |  Payment Card RIGHT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 items-stretch animate-slideUp">

          {/* ── MOBILE ONLY: Pay Now button — visible only on mobile/tablet, before Compliance ── */}
          <div className="lg:hidden col-span-full flex justify-center">
            <button
              onClick={handlePaymentClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-2xl text-white w-full max-w-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/40 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              style={{
                background: clicked
                  ? 'linear-gradient(135deg, #10b981, #06b6d4)'
                  : 'linear-gradient(135deg, #06b6d4, #10b981, #3b82f6)',
                backgroundSize: '200% 200%',
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <span className="relative z-10">{clicked ? '✓ Redirecting...' : 'Pay Now'}</span>
              <div className={`relative z-10 flex items-center gap-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                <ExternalLink className="w-5 h-5" />
              </div>
            </button>
          </div>

          {/* LEFT — Regulatory Compliance */}
          <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-amber-500/30 shadow-xl shadow-amber-500/5 overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 pointer-events-none"></div>
            <div className="p-6 sm:p-8 relative z-10 flex flex-col flex-1">

              {/* Heading row */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-amber-500/15 border border-amber-500/30 rounded-xl">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-amber-400 tracking-wide uppercase">
                    Regulatory Payment Compliance
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">As per RBI &amp; Cyber Security Guidelines</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-amber-500/30 via-amber-400/10 to-transparent mb-5"></div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-5">
                Payments must be made{' '}
                <span className="font-semibold text-amber-300">strictly from the same bank account or company account</span>{' '}
                as registered in your agreement with PAYZON INDIA PVT LTD. As per cyber security regulations, transactions received from unregistered or third-party accounts will be{' '}
                <span className="font-semibold text-red-400">placed on hold or may not be accepted.</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-auto">
                {[
                  { emoji: '🏦', text: 'Use only your agreement-registered account' },
                  { emoji: '🚫', text: 'Third-party payments will not be processed' },
                  { emoji: '📋', text: 'Company account must match agreement records' },
                  { emoji: '🔒', text: 'Held payments require verification & clearance' },
                ].map(({ emoji, text }) => (
                  <div key={text} className="flex items-start gap-2.5 bg-slate-800/50 rounded-xl px-4 py-3 border border-slate-700/40">
                    <span className="text-lg mt-0.5">{emoji}</span>
                    <span className="text-sm text-slate-300 font-medium leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Payment Card */}
          <div className="relative bg-slate-900/70 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 overflow-hidden flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5 pointer-events-none"></div>
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>

            <div className="p-6 sm:p-8 flex flex-col flex-1">

              {/* PayU Branding */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-slate-800/80 border border-cyan-500/20 rounded-2xl px-6 py-3.5 mb-5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-base font-semibold text-slate-200 tracking-wide uppercase">
                    Powered by PayU India
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">PAYZON INDIA PVT LTD</h2>
                <p className="text-base text-slate-400">Click below to proceed to our secure payment gateway</p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center mb-8">
                <button
                  onClick={handlePaymentClick}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-2xl font-bold text-lg text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/40 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                  style={{
                    background: clicked
                      ? 'linear-gradient(135deg, #10b981, #06b6d4)'
                      : 'linear-gradient(135deg, #06b6d4, #10b981, #3b82f6)',
                    backgroundSize: '200% 200%',
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <span className="relative z-10">{clicked ? '✓ Redirecting...' : 'Pay Now'}</span>
                  <div className={`relative z-10 flex items-center gap-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-auto">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 bg-slate-800/50 rounded-xl p-3.5 border border-slate-700/50">
                    <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-lg">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-sm text-slate-300 font-medium text-center leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"></div>
          </div>
        </div>

        {/* Info Note */}
        <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-cyan-500/20 shadow-xl mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-emerald-500/5"></div>
          <p className="text-center text-slate-300 text-sm sm:text-base relative z-10">
            <span className="font-bold text-cyan-400">💡 Important:</span> After completing the payment, please save the transaction reference number for your records and future queries.
          </p>
        </div>

        {/* Our Top Services */}
        <div className="animate-fadeIn">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-3">
              Our Top Services
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Empowering businesses with cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative mb-4">
                  <div className={`inline-flex p-3.5 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{service.description}</p>
                  <p className="text-cyan-400 text-xs font-semibold flex items-center gap-1">
                    <span>Visit Site</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out both; }
        .animate-slideDown { animation: slideDown 0.6s ease-out both; }
        .animate-slideUp { animation: slideUp 0.6s ease-out both; }
        .animate-pulse-slow { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}