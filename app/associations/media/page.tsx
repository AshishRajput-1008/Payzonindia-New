"use client";

import {
  Phone,
  ArrowRight,
  PlayCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
} from "lucide-react";

import {
  useNavbarColor,
  sectorGradients,
} from "@/app/contexts/NavbarColorContext";
import { useEffect } from "react";

const PyazonLandingPage = () => {
  const services = [
    { name: "Media", href: "/associations/media/" },
    { name: "Social Welfare", href: "/associations/social-welfare/" },
    { name: "Finance Audits", href: "/audit" },
  ];

   const { setNavbarGradient, setPaymentGradient, setLogoGradient } = useNavbarColor();

     useEffect(() => {
       const gradients = sectorGradients["Media"];
       setNavbarGradient(gradients.navbar);
       setPaymentGradient(gradients.payment);
       setLogoGradient(gradients.logo);
   
       return () => {
         const defaultGradients = sectorGradients["default"];
         setNavbarGradient(defaultGradients.navbar);
         setPaymentGradient(defaultGradients.payment);
         setLogoGradient(defaultGradients.logo);
       };
     }, [setNavbarGradient, setPaymentGradient, setLogoGradient]);

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/sadaivsatyamedia",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/SadaivSatyaNews",
      color: "hover:text-sky-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/sadaivsatyamedia/",
      color: "hover:text-pink-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@SadaivSatyaMedia",
      color: "hover:text-red-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/107578599/admin/page-posts/published/",
      color: "hover:text-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner - Improved Mobile Heading */}
      <div className="relative w-full min-h-screen flex items-center justify-center pt-36 md:pt-56 lg:pt-64">
        <img
          src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=1200&h=600&fit=crop"
          alt="News Broadcasting Background"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-4 mb-[59px] mt-[42px]">
          <h1 className="text-3xl mb-6 md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-snug tracking-wide">
            Welcome to
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent drop-shadow-xl leading-tight mb-6">
            SADAIV SATYA
            <br className="block sm:hidden" />
            <span className="block sm:inline"> MEDIA</span>
          </h2>
          <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-100 mb-8">
            AND BROADCASTING PRIVATE LIMITED
          </h3>
          <p className="mt-6 text-xl md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Pursuit of Truth — With Video News, Political Articles, Business,
            and Crypto Updates.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4 order-1 lg:order-1">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Services Menu */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-700/50">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Our Categories
                </h2>
                <div className="flex flex-col gap-4">
                  {services.map((service, index) => (
                    <a key={index} href={service.href}>
                      <div
                        className="bg-gradient-to-r from-red-700 via-orange-600 to-amber-600 hover:from-red-600 hover:via-orange-500 hover:to-amber-500 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        {service.name}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links Card - Desktop Only */}
              <div className="lg:block bg-white rounded-2xl p-6 shadow-lg border border-amber-600/50">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Connect With Us
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div
                        className={`bg-gradient-to-br from-red-50 to-amber-50 hover:from-red-100 hover:to-amber-100 p-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl ${social.color} hover:scale-110`}
                      >
                        <social.icon className="w-6 h-6 text-gray-700 group-hover:text-current transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="mailto:contact@sadaivsatya.com"
                    className="inline-flex items-center gap-2 text-red-700 hover:text-orange-600 transition-colors font-medium"
                  >
                    <Mail className="w-5 h-5" />
                    <span>contact@sadaivsatya.com</span>
                  </a>
                </div>
              </div>

              {/* Contact Card - Desktop Only */}
              <a
                href="https://www.sadaivsatya.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-red-700 via-orange-600 to-amber-600">
                  <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                    <svg
                      className="w-16 h-16 text-amber-200 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5C15.87 5 18 6.5 18 7S15.87 9 12 9Z" />
                    </svg>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Contact for News?
                    </h3>
                    <div className="mb-4 flex flex-col items-center">
                      <div className="flex items-center text-white mb-2">
                        <Phone className="w-6 h-6 mr-2" />
                        <span className="text-2xl font-semibold">
                          +91 755 485 9540
                        </span>
                      </div>
                    </div>
                    <p className="text-white text-lg mb-6">
                      Or reach out via our contact form:
                    </p>
                    <button className="bg-white text-red-700 px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-amber-50 transition-all duration-300 group hover:scale-105 shadow-lg">
                      <span>Contact Us</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8 space-y-12 order-2 lg:order-2">
            {/* Hero Section */}
            <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 lg:h-96">
                <img
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop"
                  alt="News Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-8 md:p-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Exploring Sadaiv Satya Media And Broadcasting Private Limited
                </h1>
                <h2 className="text-xl md:text-2xl bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent font-semibold mb-6">
                  Your Gateway to Unbiased Truth in Media
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Sadaiv Satya Media And Broadcasting Private Limited stands as
                  a beacon of integrity in the fast-evolving world of digital
                  media, committed to the relentless pursuit of truth.
                </p>
              </div>
            </section>

            {/* Main Article */}
            <article className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-10">
              {/* About Section */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug border-b-4 border-red-600 pb-3 inline-block">
                  About Satya Media And Broadcasting
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6 mb-6">
                  Founded on the principle of always the truth, Sadaiv Satya
                  Media And Broadcasting Private Limited is a premier digital
                  media outlet dedicated to delivering factual, unbiased
                  reporting.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=400&fit=crop"
                  alt="News reporting"
                  className="w-full rounded-lg object-cover mb-6 shadow-md"
                />
                <div className="bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-red-600">
                  <p className="text-gray-800 text-base md:text-lg">
                    <span className="font-bold text-red-900">Core Value:</span>{" "}
                    Unwavering commitment to truth, transparency, and timeliness
                    in every story we tell.
                  </p>
                </div>
              </section>

              {/* Categories Section */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug border-b-4 border-orange-600 pb-3 inline-block">
                  Our Core Categories
                </h2>
                <div className="space-y-10 mt-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                      Media: Dynamic Video News and Live Updates
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      Our Media category is the heartbeat of Sadaiv Satya Media
                      and Broadcasting Private Limited, offering high-quality
                      video content that captures the pulse of current affairs.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                      Social Welfare: Championing Causes for a Better Society
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      Social Welfare at Sadaiv Satya Media spotlights stories
                      that matter to the underserved and underrepresented.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                      Finance Audits: Ensuring Transparency in Economic Affairs
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                      In the Finance Audits section, we scrutinize financial
                      statements, corporate governance, and market
                      irregularities with forensic precision.
                    </p>
                    <img
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
                      alt="Finance audit"
                      className="w-full rounded-lg object-cover shadow-md"
                    />
                  </div>
                </div>
              </section>

              {/* Featured Topics */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug border-b-4 border-red-600 pb-3 inline-block">
                  Spotlight Stories
                </h2>
                <div className="space-y-10 mt-6">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                      The Future of Sustainable Living
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      In an era of climate urgency, adopting eco-friendly
                      lifestyles is imperative.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                      Global Tensions Analysis
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      Geopolitical strains raise alarms about potential
                      escalation.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-red-50 p-6 rounded-lg">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                      New Heights in Crypto Market
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                      The cryptocurrency market is soaring with Bitcoin
                      shattering records.
                    </p>
                    <img
                      src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop"
                      alt="Crypto trends"
                      className="w-full rounded-lg object-cover shadow-md"
                    />
                  </div>
                </div>
              </section>

              {/* Mission */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug border-b-4 border-orange-600 pb-3 inline-block">
                  Our Mission
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6 mb-6">
                  The ethos of Satya Media And Broadcasting Private Limited is
                  rooted in journalistic integrity and public service.
                </p>
                <ul className="space-y-3 text-gray-700 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">▪</span>
                    <span>
                      Credible Reporting: Fact-checked content across all
                      platforms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1">▪</span>
                    <span>
                      Innovative Delivery: Leveraging Payzon tech for immersive
                      experiences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">▪</span>
                    <span>
                      Community Engagement: Forums and feedback loops for
                      audience voices
                    </span>
                  </li>
                </ul>
              </section>

              {/* CTA */}
              <section className="text-center py-10 border-t-2 border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Join the Pursuit of Truth
                </h2>
                <p className="text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Subscribe today to stay ahead with our video news, political
                  insights, business alerts, and crypto trends.
                </p>
                <a
                  href="https://www.sadaivsatya.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gradient-to-r from-red-600 to-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:from-red-500 hover:to-amber-500 transition-all duration-300 mx-auto hover:scale-105 shadow-lg">
                    Subscribe Now <PlayCircle className="w-6 h-6" />
                  </button>
                </a>
              </section>

              {/* Social Media CTA Section - Desktop Only */}
              <section className="hidden lg:block relative overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-amber-600 opacity-95"></div>
                <div className="relative z-10 px-8 py-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Stay Connected
                  </h2>
                  <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                    Follow us on social media for real-time updates, exclusive
                    content, and breaking news
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div
                          className="bg-white/20 backdrop-blur-sm hover:bg-white p-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110"
                        >
                          <social.icon className="w-8 h-8 text-white group-hover:text-red-600 transition-colors" />
                        </div>
                      </a>
                    ))}
                  </div>
                  <a
                    href="https://www.sadaivsatya.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-red-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-3 mx-auto">
                      <span>Visit Our Website</span>
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </a>
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>

      {/* Contact Card - Mobile Bottom Only */}
      <div className="max-w-7xl mx-auto px-4 pb-16 sm:px-6 lg:px-8 lg:hidden">
        <a
          href="https://www.sadaivsatya.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-red-700 via-orange-600 to-amber-600">
            <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
              <svg
                className="w-16 h-16 text-amber-200 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3C7.58 3 4 4.79 4 7V17C4 19.21 7.59 21 12 21S20 19.21 20 17V7C20 4.79 16.42 3 12 3M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11C14.39 11 16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5C15.87 5 18 6.5 18 7S15.87 9 12 9Z" />
              </svg>
              <h3 className="text-3xl font-bold text-white mb-3">
                Contact for News?
              </h3>
              <div className="mb-4 flex flex-col items-center">
                <div className="flex items-center text-white mb-2">
                  <Phone className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-semibold">
                    +91 755 485 9540
                  </span>
                </div>
              </div>
              <p className="text-white text-lg mb-6">
                Or reach out via our contact form:
              </p>
              <button className="bg-white text-red-700 px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-amber-50 transition-all duration-300 group hover:scale-105 shadow-lg">
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PyazonLandingPage;