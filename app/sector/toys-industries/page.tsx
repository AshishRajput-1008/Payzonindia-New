// app/sector/toys-industries/page.tsx
"use client";

import { useNavbarColor, sectorGradients } from "@/app/contexts/NavbarColorContext"


import React, { useEffect } from "react";
import {
  Phone,
  CheckCircle,
  ArrowRight,
  Smile,
  Star,
  Gift,
  Sparkles,
  Heart,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ToysIndustriesPage: React.FC = () => {
  const services = [
    "Educational Toys",
    "Wooden Toys",
    "Soft Toys",
    "Puzzle Games",
    "Creative Kits",
    "Outdoor Play",
    "STEM Toys",
    "Traditional Games",
  ];


   const { setNavbarGradient, setPaymentGradient, setLogoGradient } = useNavbarColor();
       
         useEffect(() => {
           // Get gradients for this sector
           const gradients = sectorGradients['toys-industries'];
           
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
      icon: <Smile className="w-12 h-12 text-pink-500" />,
      title: "Safe & Non-Toxic",
      description: "All toys meet international safety standards"
    },
    {
      icon: <Star className="w-12 h-12 text-pink-500" />,
      title: "Educational Value",
      description: "Learning through play with developmental focus"
    },
    {
      icon: <Gift className="w-12 h-12 text-pink-500" />,
      title: "Eco-Friendly Materials",
      description: "Sustainable wood and recyclable components"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-pink-500" />,
      title: "Creative Designs",
      description: "Innovative toys that spark imagination"
    },
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: "Age-Appropriate",
      description: "Carefully curated for different age groups"
    },
    {
      icon: <Trophy className="w-12 h-12 text-pink-500" />,
      title: "Award-Winning",
      description: "Recognized for quality and innovation"
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
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-purple-900/80"></div>

             <div className="relative z-10 text-center px-4 mt-[190px]">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Toys Industries
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-2xl text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creating Joyful Moments Through Safe and Educational Toys
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
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-pink-700/50">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">
                  Toy Categories
                </h2>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
                  alt="Toy Store"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                  <Gift className="w-16 h-16 text-pink-300 mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Find Perfect Toys
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
                    Bringing smiles to children everywhere
                  </p>
                  <motion.button
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-pink-400 hover:to-purple-400 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Shop Now</span>
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
                  alt="Toys Industries"
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
                  Safe, Educational, and Fun Toys for Every Child
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Payzon India's Toys Industries division brings joy and learning to children 
                  through carefully crafted, safe, and educational toys. We manufacture and 
                  distribute a wide range of toys including traditional wooden toys, educational 
                  STEM kits, creative art supplies, and outdoor play equipment. With over 5,000 
                  products in our catalog and distribution across 500+ cities, we're committed 
                  to making quality playtime accessible to every child.
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
                Why Choose Our Toys?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offerings.map((offering, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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
                  The Power of Play
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Play is essential for child development, fostering creativity, problem-solving 
                  skills, social interaction, and emotional growth. Our toys are designed by 
                  child development experts to support learning at every age. We prioritize 
                  safety with rigorous testing, use non-toxic materials, and ensure all products 
                  meet or exceed international safety standards including ASTM and EN71.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=400&fit=crop"
                  alt="Children playing with toys"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
                <div className="bg-pink-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-pink-900">Safety Certified:</span>
                      <span className="text-gray-700"> All toys meet ASTM and EN71 standards</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-pink-900">5,000+ Products:</span>
                      <span className="text-gray-700"> Extensive catalog for all ages and interests</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-pink-900">500+ Cities:</span>
                      <span className="text-gray-700"> Nationwide distribution network</span>
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
                  Educational & STEM Toys
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our STEM toy collection introduces children to science, technology, engineering, 
                  and mathematics through hands-on experiments and projects. From robotics kits 
                  and coding games to chemistry sets and building blocks, these toys make learning 
                  fun and engaging. Each product includes age-appropriate challenges that grow 
                  with your child's abilities.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&h=400&fit=crop"
                  alt="Educational toys"
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
                  Traditional Wooden Toys
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  We celebrate Indian heritage through beautifully crafted wooden toys inspired 
                  by traditional designs. Made from sustainable wood and finished with natural, 
                  child-safe paints, these toys are durable, eco-friendly, and timeless. Our 
                  wooden toy collection supports local artisans and keeps traditional craftsmanship 
                  alive while providing children with screen-free, imaginative play options.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&h=400&fit=crop"
                  alt="Wooden toys"
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
                  Creative Arts & Crafts
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Nurture creativity and self-expression with our comprehensive arts and crafts 
                  collection. We offer everything from painting sets and clay modeling kits to 
                  jewelry-making supplies and DIY craft projects. These activities help develop 
                  fine motor skills, patience, and artistic confidence while providing hours of 
                  creative entertainment.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=400&fit=crop"
                  alt="Arts and crafts"
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
                  Give the Gift of Learning & Fun
                </motion.h2>
                <motion.p
                  className="text-gray-700 mb-6 max-w-2xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Explore our extensive collection of safe, educational, and entertaining toys. 
                  Perfect for birthdays, festivals, or everyday joy.
                </motion.p>
                <motion.button
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Catalog <ArrowRight className="w-5 h-5" />
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

export default ToysIndustriesPage;