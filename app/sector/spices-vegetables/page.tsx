// app/sector/spices-vegetables/page.tsx
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
  Apple,
  Flower2,
  TrendingUp,
  Package,
  Truck,
  Award,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SpicesVegetablesPage: React.FC = () => {
  const services = [
    "Fresh Vegetables",
    "Exotic Fruits",
    "Premium Spices",
    "Organic Produce",
    "Herbs & Greens",
    "Dry Fruits & Nuts",
    "Bulk Supply",
    "Home Delivery",
  ];

  const { setNavbarGradient, setPaymentGradient, setLogoGradient } =
    useNavbarColor();

  useEffect(() => {
    // Get gradients for this sector
    const gradients = sectorGradients["spices-vegetables"];

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
      icon: <Apple className="w-12 h-12 text-orange-500" />,
      title: "Farm Fresh Daily",
      description: "Direct from farms to your kitchen within 24 hours",
    },
    {
      icon: <Flower2 className="w-12 h-12 text-orange-500" />,
      title: "Authentic Spices",
      description: "Pure, unadulterated spices with rich aroma",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
      title: "Quality Assured",
      description: "Rigorous quality checks at every stage",
    },
    {
      icon: <Package className="w-12 h-12 text-orange-500" />,
      title: "Hygienically Packed",
      description: "Clean processing and secure packaging",
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: "Timely Delivery",
      description: "Efficient logistics ensuring freshness",
    },
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      title: "Fair Trade Certified",
      description: "Supporting farmers with ethical practices",
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-red-900/80"></div>

        <div className="relative z-10 text-center px-4 mt-[190px]">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Spices & Vegetables
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bringing Nature's Freshness and Authentic Flavors to Your Table
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
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-orange-700/50">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">
                  Our Products
                </h2>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-orange-700 to-red-700 hover:from-orange-600 hover:to-red-600 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
                    alt="Fresh Produce"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                    <Apple className="w-16 h-16 text-orange-300 mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Order Fresh Today
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
                      Fresh produce delivered to your doorstep
                    </p>
                    <motion.button
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-orange-400 hover:to-red-400 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Order Now</span>
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
                  alt="Spices Vegetables"
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
                  Fresh Vegetables and Authentic Indian Spices
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  PAYZONINDIA's Spices & Vegetables division celebrates India's
                  agricultural richness by bringing premium quality produce and
                  authentic spices to consumers. We work directly with over
                  3,000 farmers across India's diverse growing regions, ensuring
                  farm-fresh vegetables reach your kitchen within 24 hours of
                  harvest. Our spice collection features pure, unadulterated
                  varieties sourced from their regions of origin—Kerala for
                  black pepper, Kashmir for saffron, Gujarat for cumin, and
                  more. With 200+ distribution centers and a cold chain
                  infrastructure covering major cities, we've made quality
                  produce accessible to over 1 million households while ensuring
                  fair compensation for farming communities.
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
                Why Choose Payzon Produce?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offerings.map((offering, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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
                  The Freshness Promise
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Freshness makes all the difference in taste, nutrition, and
                  cooking quality. Our efficient farm-to-table supply chain
                  minimizes the time between harvest and delivery, preserving
                  natural flavors, vibrant colors, and nutritional content.
                  Vegetables are harvested at peak ripeness, sorted by quality
                  standards, and transported in temperature-controlled vehicles
                  to maintain freshness. Our quality control team inspects every
                  batch, rejecting produce that doesn't meet our strict
                  criteria. This commitment to freshness means you get
                  vegetables and fruits that look better, taste better, and last
                  longer in your refrigerator.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=400&fit=crop"
                  alt="Fresh vegetables"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
                <div className="bg-orange-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-orange-900">
                        3,000+ Farmers:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Direct partnerships ensuring quality and fair prices
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-orange-900">
                        200+ Centers:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Extensive distribution network nationwide
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-orange-900">
                        1 Million+ Households:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Trusted by families across India
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
                  Premium Indian Spices
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Indian cuisine's soul lies in its spices, and we take pride in
                  offering the finest varieties sourced directly from their
                  regions of origin. Our whole spices retain natural oils and
                  aromatics that ground spices lose over time. We offer both
                  whole and freshly ground options, with ground spices milled in
                  small batches to preserve potency. Our collection includes
                  turmeric from Sangli, red chilies from Guntur, cardamom from
                  Western Ghats, cinnamon from Kerala, and countless other
                  varieties. Each spice is tested for purity, graded for
                  quality, and packaged in airtight containers to maintain
                  freshness. We also offer spice blends for specific dishes—
                  garam masala, chaat masala, sambar powder—all made from
                  traditional recipes.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1596040033229-a0b3b83cb406?w=800&h=400&fit=crop"
                  alt="Indian spices"
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
                  Exotic & Specialty Produce
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Beyond everyday vegetables, we offer an exciting range of
                  exotic and specialty produce for adventurous cooks and
                  health-conscious consumers. Our selection includes imported
                  varieties like avocados, asparagus, zucchini, bell peppers,
                  and broccoli, alongside indigenous superfoods like moringa
                  leaves, amaranth, and various traditional greens. We source
                  exotic fruits such as dragon fruit, kiwi, blueberries, and
                  pomegranates, along with premium dry fruits and nuts. These
                  specialty items open up new culinary possibilities, allowing
                  you to experiment with international recipes and incorporate
                  nutritious ingredients into your diet.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&h=400&fit=crop"
                  alt="Exotic produce"
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
                  Supporting Farmer Communities
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our business model prioritizes farmer welfare alongside
                  customer satisfaction. By eliminating intermediaries and
                  buying directly from farmers, we ensure they receive fair
                  compensation for their hard work. We provide agricultural
                  training, access to quality seeds and organic inputs, and
                  market linkages that guarantee consistent demand. Many of our
                  partner farmers have increased their incomes by 40-60% through
                  direct trade with us. We also support organic transition
                  programs, helping conventional farmers adopt sustainable
                  practices with technical guidance and financial assistance
                  during the conversion period. This creates a virtuous
                  cycle—farmers prosper, soil health improves, and consumers get
                  superior produce.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=400&fit=crop"
                  alt="Farmer community"
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
                    Taste the Difference of Fresh Quality
                  </motion.h2>
                  <motion.p
                    className="text-gray-700 mb-6 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Experience the superior taste and nutrition of farm-fresh
                    vegetables and authentic spices. Order today for doorstep
                    delivery.
                  </motion.p>
                  <motion.button
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-orange-600 hover:to-red-600 transition-all duration-300 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Shopping <ArrowRight className="w-5 h-5" />
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

export default SpicesVegetablesPage;
