"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Headphones,
  Building2,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Zap,
  Users,
  Shield,
  Check,
  Sparkles,
  ChevronRight,
  Calendar,
  MessageCircle,
} from "lucide-react";

const ModernContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you within 24 hours.");
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 755 485 9540", "+91 755 485 9541"],
      gradient: "from-blue-500 to-cyan-500",
      link: "tel:+917554859540",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@payzonindia.com", "support@payzonindia.com"],
      gradient: "from-emerald-500 to-teal-500",
      link: "mailto:info@payzonindia.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["B1, Patel Nagar, Raisen Road", "Bhopal, Madhya Pradesh 462022"],
      gradient: "from-purple-500 to-pink-500",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Sat: 11:00 AM - 7:00 PM", "Sunday: Closed"],
      gradient: "from-orange-500 to-red-500",
      link: "",
    },
  ];

  const services = [
    "IT Solutions & Software Development",
    "Fintech APIs & Payment Gateways",
    "E-commerce Platform Development",
    "Digital Marketing & SEO",
    "Cyber Security Services",
    "Mobile App Development",
    "Cloud Computing Solutions",
    "Financial Consulting",
    "Other",
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      gradient: "from-blue-600 to-blue-700",
      link: "https://www.linkedin.com/company/payzonindiabhopal/posts/?feedView=all",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      gradient: "from-blue-500 to-blue-600",
      link: "https://www.facebook.com/PAYZONINDIA/",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      gradient: "from-sky-400 to-sky-500",
      link: "https://x.com/payzonindia",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      gradient: "from-pink-500 to-rose-500",
      link: "https://www.instagram.com/thepayzonindia/",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      name: "YouTube",
      gradient: "from-red-600 to-red-700",
      link: "https://www.youtube.com/channel/UCSjsk1O7zYurXPDl2o3RuIA",
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Lightning Fast Response",
      description: "Get responses within 24 hours from our dedicated expert team, ensuring your project never faces delays",
      gradient: "from-blue-500 to-cyan-500",
      feature: "24/7 Support Available",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Team",
      description: "Certified professionals with years of industry experience ready to bring your vision to life",
      gradient: "from-emerald-500 to-teal-500",
      feature: "Certified Professionals",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Trusted Partner",
      description: "10+ years of excellence with 99% client satisfaction rate and proven track record of success",
      gradient: "from-purple-500 to-pink-500",
      feature: "99% Satisfaction Rate",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white  overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-8 hover:bg-white/10 transition-all">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium">We're Here to Help 24/7</span>
          </div>
          
          <h1 className="  text-5xl mt-28 sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Have a project in mind? Need expert consultation? Our team is ready to transform your ideas into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+917554859540" className="px-8 py-4 bg-white/5 backdrop-blur-xl rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 text-white/50" />
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-xl rounded-full border border-blue-500/20 mb-6">
              <MessageCircle className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Contact Information</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Reach Out{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                To Us
              </span>
            </h2>
            <p className="text-xl text-gray-400">Multiple ways to connect - choose what works best for you</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity`}></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                  
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-400 text-sm">
                        {info.link && i === 0 ? (
                          <a href={info.link} className="hover:text-white transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section id="contact-form" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-xl rounded-full border border-purple-500/20 mb-6">
                <Send className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Send Us a Message</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Start Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Project Today
                </span>
              </h2>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours with a customized solution for your needs.
              </p>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white placeholder-gray-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white"
                  >
                    <option value="" className="bg-slate-900">Select a service</option>
                    {services.map((service, i) => (
                      <option key={i} value={service} className="bg-slate-900">{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-white placeholder-gray-500 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="group w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Map & Social Media */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-xl rounded-full border border-green-500/20 mb-6">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-400">Find Us</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-6">Visit Our Office</h3>
                
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-2 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.3759405211263!2d77.49342867477695!3d23.249645607817282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41dd20a8788b%3A0xbac1812be533a741!2sPAYZONINDIA%20PVT%20LTD!5e1!3m2!1sen!2sin!4v1759236311343!5m2!1sen!2sin"
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                <p className="text-gray-400 mb-6">Follow us on social media for updates, insights, and industry news</p>
                
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity`}></div>
                      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all flex flex-col items-center gap-2">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          {social.icon}
                        </div>
                        <span className="text-xs font-medium text-gray-400">{social.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-xl rounded-full border border-orange-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Why PAYZONINDIA</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technology Partner
              </span>
            </h2>
            <p className="text-xl text-gray-400">Join 10,000+ satisfied clients who trust us for their digital transformation journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity`}></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all h-full">
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{benefit.description}</p>
                  
                  <div className="flex items-center gap-2 text-green-400">
                    <Check className="w-5 h-5" />
                    <span className="text-sm font-semibold">{benefit.feature}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Our team is available 24/7 to answer your questions and help you get started on your next project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+917554859540" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
                <a href="#contact-form" className="px-8 py-4 bg-white/5 backdrop-blur-xl rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernContactPage;