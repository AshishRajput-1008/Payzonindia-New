import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
  CreditCard,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const PAYMENT_URL =
    "https://payu.in/pay/A03F3FA8038CE785284CB50CD60370D4";

  const externalLinks = [
    { name: "payzonindia.com", url: "https://www.payzonindia.com" },
    { name: "payzonapi.com", url: "https://www.payzonapi.com" },
    { name: "payzonmarketing.com", url: "https://www.payzonmarketing.com" },
    { name: "payzonshoppy.com", url: "https://www.payzonshoppy.com" },
    { name: "payzonitservices.com", url: "https://www.payzonitservices.com" },
    { name: "sadaivsatya.com", url: "https://www.sadaivsatya.com" },
    {
      name: "sadaivyuvafoundation.com",
      url: "https://www.sadaivyuvafoundation.com",
    },
  ];

  const navigationLinks = [
    { name: "Profile", url: "/about" },
    { name: "Our Team", url: "/our-team" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Our Ventures", url: "/sector" },
    { name: "IT-Services", url: "sector/it-services/" },
    { name: "Digital Marketing", url: "/sector/digital-marketing" },
    { name: "Cyber Security", url: "sector/cyber-security/" },
  ];

  const partnerImages = [
    {
      src: "/images/sadaivsatyalogo.jpeg",
      url: "https://www.sadaivyuvafoundation.com/",
      alt: "Sadaiv Satya",
    },
    {
      src: "/images/Sadaiv MEDIA 1.png",
      url: "https://www.sadaivsatya.com/",
      alt: "Sadaiv Media",
    },
    {
      src: "/images/SMART TAX !DEA.png",
      url: "https://www.smarttaxidea.com/",
      alt: "Smart Tax Idea",
    },
  ];

  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/bg-footer1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-6 sm:px-12 lg:px-24 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start">
              <img
                src="/images/logo.png"
                alt="Payzon Logo"
                className="h-24 w-24 mb-6 drop-shadow-lg"
              />
              <h3 className="font-bold text-2xl mb-5 leading-tight">
                PAYZONINDIA
                <br />
                PRIVATE LIMITED
              </h3>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                We have extensive experience providing industry-specific IT
                solutions. Our team understands the unique challenges.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/PAYZONINDIA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCSjsk1O7zYurXPDl2o3RuIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/payzonindiabhopal/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/thepayzonindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/payzonindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-sky-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-xl mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></span>
            </h3>
            <ul className="space-y-4">
              {navigationLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 inline-block text-base"
                  >
                    → {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Versatility */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-xl mb-8 relative inline-block">
              Online Versatility
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></span>
            </h3>
            <ul className="space-y-4">
              {externalLinks.map((site, i) => (
                <li key={i}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 inline-block text-base"
                  >
                    → {site.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-xl mb-8 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></span>
            </h3>
            <div className="space-y-5 text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Sector B Plot 1, Patel Nagar,
                    <br />
                    Raisen road, Bhopal (MP)
                    <br />
                    Pin: 462022
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:info@payzonindia.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  info@payzonindia.com
                </a>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <a
                    href="tel:+917554859540"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +91 755 485 9540
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <a
                    href="tel:+917554923296"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +91 755 492 3296
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <a
                    href="https://wa.me/919243837546"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    +91 924 383 7546
                  </a>
                </div>
              </div>

              {/* ── Pay Now Button ── */}
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #0891b2 100%)",
                }}
              >
                <CreditCard className="w-4 h-4" />
            Payment
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-10 max-w-7xl mx-auto">
          <div className="flex flex-col gap-8">
            {/* Copyright and Policy Links Row */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
              <p className="text-gray-400 text-base text-center md:text-left">
            © {currentYear}      PAYZONINDIA PRIVATE LIMITED. All Rights Reserved.  
              </p>

              <div className="flex flex-wrap justify-center gap-8">
                <a
                  href="/audit"
                  className="text-gray-400 hover:text-white text-base transition-colors duration-300"
                >
                  Audit Report
                </a>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white text-base transition-colors duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="/Terms-Conditions"
                  className="text-gray-400 hover:text-white text-base transition-colors duration-300"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white text-base transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="/refund-policy"
                  className="text-gray-400 hover:text-white text-base transition-colors duration-300"
                >
                  Refund & Cancellation
                </a>
              </div>
            </div>

            {/* Business Collaboration Section */}
            <div className="w-full pt-8 border-t border-white/10">
              <div className="text-center mb-8">
                <h4 className="text-gray-200 font-bold text-xl md:text-2xl tracking-wider uppercase inline-block relative">
                  Our Business Collaboration
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
                </h4>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                {partnerImages.map((partner, i) => (
                  <a
                    key={i}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
                      <img
                        src={partner.src}
                        alt={partner.alt}
                        className="h-16 w-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}