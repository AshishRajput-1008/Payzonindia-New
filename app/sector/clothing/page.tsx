// app/sector/clothing/page.tsx
"use client";

import {
  useNavbarColor,
  sectorGradients,
} from "@/app/contexts/NavbarColorContext";

import React, { useEffect } from "react";
import {
  Phone,
  CheckCircle,
  ArrowRight,
  Shirt,
  Sparkles,
  Users,
  Palette,
  Store,
  Scissors,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ClothingPage: React.FC = () => {
  const services = [
    "Traditional Wear",
    "Casual Fashion",
    "Ethnic Collection",
    "Western Wear",
    "Kids Clothing",
    "Custom Tailoring",
    "Bulk Orders",
    "Designer Collection",
  ];

  const { setNavbarGradient, setPaymentGradient, setLogoGradient } =
    useNavbarColor();

  useEffect(() => {
    // Get gradients for this sector
    const gradients = sectorGradients["clothing"];

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

  const offerings = [
    {
      icon: <Shirt className="w-12 h-12 text-indigo-500" />,
      title: "Premium Fabrics",
      description: "High-quality materials for comfort and durability",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-indigo-500" />,
      title: "Latest Designs",
      description: "Trending styles blended with traditional elegance",
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-500" />,
      title: "All Age Groups",
      description: "Fashion for men, women, and children",
    },
    {
      icon: <Palette className="w-12 h-12 text-indigo-500" />,
      title: "Custom Designs",
      description: "Personalized clothing tailored to your preferences",
    },
    {
      icon: <Store className="w-12 h-12 text-indigo-500" />,
      title: "Retail & Wholesale",
      description: "Flexible purchasing options for all needs",
    },
    {
      icon: <Scissors className="w-12 h-12 text-indigo-500" />,
      title: "Expert Tailoring",
      description: "Perfect fit guaranteed by skilled artisans",
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
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80"></div>

        <div className="relative z-10 text-center px-4 mt-[190px]">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Clothing & Fashion
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Weaving Tradition with Contemporary Style for Every Occasion
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
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-indigo-700/50">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">
                  Our Collections
                </h2>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-600 hover:to-purple-600 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
                    alt="Fashion Consultation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                    <Shirt className="w-16 h-16 text-indigo-300 mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Discover Your Style
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
                      Premium fashion at affordable prices
                    </p>
                    <motion.button
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-indigo-400 hover:to-purple-400 transition-all duration-300 group"
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
                  alt="Clothing Fashion"
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
                  Fashion That Celebrates Indian Heritage and Modern Trends
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Payzon India's Clothing division is a celebration of India's
                  rich textile heritage combined with contemporary fashion
                  sensibilities. We offer an extensive range of traditional
                  ethnic wear, modern western outfits, and fusion styles for all
                  occasions. With manufacturing facilities employing over 2,000
                  skilled artisans and distribution across 800+ retail outlets,
                  we've dressed millions with quality fabrics, exquisite
                  designs, and affordable pricing. From handwoven sarees to
                  designer kurtas, casual wear to party attire, our collection
                  caters to every taste and occasion.
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
                Why Choose Payzon Fashion?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offerings.map((offering, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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
                  The Art of Indian Textiles
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  India's textile tradition spans thousands of years, and we
                  honor this legacy by working directly with master weavers and
                  artisans across the country. Our ethnic collection features
                  handloom sarees from Banarasi, Kanjivaram, and Chanderi;
                  intricately embroidered salwar suits; traditional kurtas with
                  block prints; and elegant lehengas for special occasions. Each
                  piece tells a story of craftsmanship, cultural heritage, and
                  timeless beauty. We ensure fair wages and sustainable
                  practices, supporting thousands of artisan families while
                  preserving traditional textile arts.
                </motion.p>
                <img
                  src="https://images.pexels.com/photos/6311606/pexels-photo-6311606.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Traditional Indian wear"
                  width="800"
                  height="400"
                  className="w-full rounded-lg object-cover mb-6"
                />
                <div className="bg-indigo-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-indigo-900">
                        2,000+ Artisans:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Skilled craftspeople creating quality garments
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-indigo-900">
                        800+ Retail Outlets:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Nationwide presence for easy access
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-indigo-900">
                        Premium Quality:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Finest fabrics and superior stitching standards
                      </span>
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
                  Contemporary Fashion Collection
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our modern fashion line brings international trends to Indian
                  consumers with collections inspired by global runways. From
                  smart casuals and corporate wear to party outfits and
                  athleisure, we offer versatile wardrobes for the contemporary
                  Indian lifestyle. Our in-house design team works on seasonal
                  collections featuring trending colors, patterns, and
                  silhouettes while ensuring comfort and wearability. We use
                  premium fabrics including cotton, linen, silk blends, and
                  performance materials that are breathable, easy to maintain,
                  and long-lasting.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=400&fit=crop"
                  alt="Modern fashion"
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
                  Kids' Fashion Paradise
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Children deserve comfortable, durable, and stylish clothing
                  that keeps up with their active lifestyles. Our kids'
                  collection includes everything from everyday casuals and
                  school uniforms to party wear and traditional outfits. We
                  prioritize soft, skin-friendly fabrics, reinforced stitching
                  for durability, and vibrant designs that kids love. Special
                  attention is given to safety with no sharp embellishments,
                  secure buttons, and easy-to-wear designs. Our size range
                  covers newborns to teenagers, ensuring every child finds their
                  perfect fit.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&h=400&fit=crop"
                  alt="Kids fashion"
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
                  Custom Tailoring & Bulk Orders
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  For those seeking personalized perfection, our custom
                  tailoring service offers made-to-measure clothing crafted by
                  expert tailors. Choose your fabric, design, and style details
                  for garments that fit perfectly and reflect your unique taste.
                  We also handle bulk orders for corporate uniforms, wedding
                  parties, event staff, and institutional requirements. Our
                  efficient production capabilities ensure timely delivery
                  without compromising quality, and our competitive wholesale
                  pricing makes bulk purchasing economical for businesses and
                  organizations.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1525171254930-643fc658b64e?auto=format&fit=crop&w=800&q=80"
                  alt="Custom tailoring"
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
                    Refresh Your Wardrobe Today
                  </motion.h2>
                  <motion.p
                    className="text-gray-700 mb-6 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Explore our latest collections and discover fashion that
                    celebrates your style. Visit our stores or shop online for
                    exclusive deals and new arrivals.
                  </motion.p>
                  <motion.button
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Collections <ArrowRight className="w-5 h-5" />
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

export default ClothingPage;
