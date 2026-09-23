// app/sector/artificial-jewellery/page.tsx
"use client";

import { useNavbarColor, sectorGradients } from "@/app/contexts/NavbarColorContext"
import React, { useEffect } from "react";
import {
  Phone,
  CheckCircle,
  ArrowRight,
  Gem,
  Crown,
  Star,
  Sparkles,
  Heart,
  Award,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ArtificialJewelleryPage: React.FC = () => {
  const services = [
    "Fashion Jewellery",
    "Bridal Collections",
    "Temple Jewellery",
    "Oxidized Silver",
    "Kundan & Polki",
    "Beaded Accessories",
    "Custom Designs",
    "Wholesale Supply",
  ];

const { setNavbarGradient, setPaymentGradient, setLogoGradient } = useNavbarColor();

  useEffect(() => {
    // Get gradients for this sector
    const gradients = sectorGradients['artificial-jewellery'];
    
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

  const offerings = [
    {
      icon: <Gem className="w-12 h-12 text-amber-500" />,
      title: "Premium Designs",
      description: "Exquisite craftsmanship with intricate detailing"
    },
    {
      icon: <Crown className="w-12 h-12 text-amber-500" />,
      title: "Bridal Specialists",
      description: "Complete wedding jewelry sets for every ceremony"
    },
    {
      icon: <Star className="w-12 h-12 text-amber-500" />,
      title: "Trendy Collections",
      description: "Latest designs inspired by fashion runways"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-amber-500" />,
      title: "Quality Materials",
      description: "Tarnish-resistant, skin-friendly components"
    },
    {
      icon: <Heart className="w-12 h-12 text-amber-500" />,
      title: "Affordable Luxury",
      description: "Premium look at accessible prices"
    },
    {
      icon: <Award className="w-12 h-12 text-amber-500" />,
      title: "Traditional to Modern",
      description: "Diverse styles for every occasion and age"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <img
          src="/images/bg-pagetitle.jpg"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-yellow-900/80"></div>

        <div className="relative z-10 text-center px-4 mt-[190px]">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Artificial Jewellery
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-2xl text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Adorning Dreams with Elegant Fashion Jewellery for Every Occasion
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <motion.aside
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-48 space-y-8">
              {/* Services Menu */}
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-amber-700/50">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">
                  Jewellery Collections
                </h2>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
                        <Link href="https://www.payzonshoppy.com/">
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/images/bg-info-box1.jpg"
                  alt="Jewellery Store"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                  <Gem className="w-16 h-16 text-amber-300 mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Sparkle Every Day
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
                    Discover stunning jewelry for every style
                  </p>
                  <motion.button
                    className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Shop Collection</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
              </Link>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Introduction Section */}
            <section className="rounded-2xl shadow-xl overflow-hidden">
              {/* <div className="relative h-64 lg:h-72 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Artificial Jewellery"
                  height={400}
                  width={300}
                  className="object-contain"
                  priority
                />
              </div> */}
              <div className="bg-white p-8">
                <motion.h1
                  className="text-4xl font-bold text-black mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Timeless Elegance in Contemporary Fashion Jewellery
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  PAYZONINDIA's Artificial Jewellery division brings the glamour of fine jewelry 
                  to everyone with beautifully crafted fashion accessories that rival the elegance 
                  of precious metals and gems. Our extensive collection spans traditional temple 
                  jewelry, contemporary statement pieces, delicate everyday wear, and elaborate 
                  bridal sets. With over 10,000 unique designs crafted by skilled artisans and 
                  distributed through 300+ retail partners, we've adorned millions of women across 
                  India. Our jewelry combines aesthetic appeal with quality materials—tarnish-resistant 
                  coatings, skin-friendly base metals, and durable construction—ensuring pieces remain 
                  beautiful through repeated wear.
                </motion.p>
              </div>
            </section>

            {/* Services Grid */}
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                What Makes Our Jewellery Special?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offerings.map((offering, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-4">{offering.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600">{offering.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Detailed Content */}
            <article className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  The Art of Fashion Jewellery
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Fashion jewelry has evolved from simple costume pieces to sophisticated accessories 
                  that command attention and admiration. Our design philosophy blends traditional 
                  Indian motifs with contemporary aesthetics, creating pieces that complement both 
                  ethnic and western attire. Each piece undergoes meticulous craftsmanship—from 
                  initial design sketches to prototype development, material selection, stone setting, 
                  and final finishing. We use a variety of techniques including filigree work, 
                  meenakari enameling, kundan setting, and oxidized finishes. The result is jewelry 
                  that looks expensive and luxurious while remaining affordable and accessible to 
                  everyone.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=400&fit=crop"
                  alt="Fashion jewellery"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
                <div className="bg-amber-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-amber-900">10,000+ Designs:</span>
                      <span className="text-gray-700"> Extensive variety for every taste and occasion</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-amber-900">300+ Retail Partners:</span>
                      <span className="text-gray-700"> Wide distribution across India</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-amber-900">Quality Assured:</span>
                      <span className="text-gray-700"> Tarnish-resistant and skin-friendly materials</span>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Bridal & Wedding Jewellery
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Indian weddings are grand celebrations where jewelry plays a starring role. Our 
                  bridal collections offer complete sets including necklaces, earrings, maang tikkas, 
                  nose rings, bangles, haath phools, and waist belts—everything needed to create 
                  that perfect bridal look. We specialize in traditional styles like Rajasthani 
                  jadau, South Indian temple jewelry, Bengali gold-inspired designs, and Maharashtrian 
                  kolhapuri pieces. Each bridal set is crafted to coordinate seamlessly, creating a 
                  harmonious ensemble. We also offer matching jewelry for the wedding party, ensuring 
                  bridesmaids and family members complement the bride beautifully. Our bridal specialists 
                  provide personalized consultations to help select pieces that match your outfit, 
                  wedding theme, and personal style.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=400&fit=crop"
                  alt="Bridal jewellery"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              <section>
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Contemporary Fashion Accessories
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Modern fashion demands versatile accessories that transition effortlessly from day 
                  to night, casual to formal. Our contemporary collection features minimalist designs, 
                  geometric patterns, bohemian styles, and statement pieces that reflect current 
                  global trends. We offer layered necklaces perfect for fusion wear, stackable rings 
                  and bracelets for a personalized look, and bold earrings that serve as conversation 
                  starters. These pieces are designed for the modern woman who values style, quality, 
                  and affordability. Materials include oxidized silver for a vintage appeal, rose gold 
                  finishes for romantic elegance, and mixed metals for contemporary edge. Our seasonal 
                  collections align with fashion weeks and runway trends, ensuring you always have 
                  access to the latest styles.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=400&fit=crop"
                  alt="Contemporary jewellery"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              <section>
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Custom Design Services
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  For those seeking something truly unique, our custom design service brings your 
                  vision to life. Work with our experienced designers to create bespoke pieces that 
                  reflect your personality and preferences. Whether you want to recreate a family 
                  heirloom, design matching sets for your bridesmaids, or create corporate gifts 
                  with personalized touches, we handle projects of all sizes. Our process includes 
                  design consultation, digital rendering for approval, prototype development, and 
                  final production with quality checks at every stage. We also offer bulk customization 
                  for corporate events, festivals, and special occasions—perfect for businesses looking 
                  to gift employees or clients with memorable accessories. Minimum order quantities 
                  vary by design complexity, and our team works closely with you to stay within budget 
                  while achieving your aesthetic goals.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=400&fit=crop"
                  alt="Custom jewellery design"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              {/* CTA Section */}
                 <Link href="https://www.payzonshoppy.com/">
              <section className="text-center py-8 border-t border-gray-200">
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Adorn Yourself with Elegance
                </motion.h2>
                <motion.p
                  className="text-gray-700 mb-6 max-w-2xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Explore our stunning collections and find the perfect pieces to complement your 
                  style. New designs added weekly!
                </motion.p>
                <motion.button
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Collections <ArrowRight className="w-5 h-5" />
                </motion.button>
              </section>
              </Link>
            </article>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default ArtificialJewelleryPage;