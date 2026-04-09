// app/sector/electronics/page.tsx
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
  Smartphone,
  Laptop,
  Tv,
  Headphones,
  Camera,
  Battery,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ElectronicsPage: React.FC = () => {
  const services = [
    "Consumer Electronics",
    "Smart Devices",
    "Audio Systems",
    "Home Appliances",
    "Gaming Consoles",
    "Accessories",
    "Warranty Support",
    "Installation Services",
  ];

  const { setNavbarGradient, setPaymentGradient, setLogoGradient } =
    useNavbarColor();

  useEffect(() => {
    // Get gradients for this sector
    const gradients = sectorGradients["electronics"];

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
      icon: <Smartphone className="w-12 h-12 text-cyan-500" />,
      title: "Latest Technology",
      description: "Cutting-edge electronics with newest features",
    },
    {
      icon: <Laptop className="w-12 h-12 text-cyan-500" />,
      title: "Wide Selection",
      description: "Extensive range across all price points",
    },
    {
      icon: <Tv className="w-12 h-12 text-cyan-500" />,
      title: "Authorized Dealer",
      description: "Genuine products from top brands",
    },
    {
      icon: <Headphones className="w-12 h-12 text-cyan-500" />,
      title: "Expert Guidance",
      description: "Knowledgeable staff to help you choose",
    },
    {
      icon: <Camera className="w-12 h-12 text-cyan-500" />,
      title: "Warranty & Support",
      description: "Comprehensive after-sales service",
    },
    {
      icon: <Battery className="w-12 h-12 text-cyan-500" />,
      title: "Energy Efficient",
      description: "Eco-friendly products saving power and money",
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
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 to-blue-900/80"></div>

        <div className="relative z-10 text-center px-4 mt-[190px]">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Electronics & Appliances
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Lives with Smart Technology and Innovative Solutions
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
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-cyan-700/50">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">
                  Product Categories
                </h2>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-600 hover:to-blue-600 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
                    alt="Electronics Store"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                    <Smartphone className="w-16 h-16 text-cyan-300 mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Upgrade Your Tech
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
                      Get expert advice on the perfect device
                    </p>
                    <motion.button
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Visit Store</span>
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
                  alt="Electronics"
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
                  Your One-Stop Electronics and Appliances Destination
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Payzon India's Electronics division brings the latest
                  technology to your doorstep with an extensive range of
                  consumer electronics, home appliances, and smart devices. As
                  authorized dealers for leading global brands including
                  Samsung, LG, Sony, Apple, and more, we offer genuine products
                  with manufacturer warranties. Our 150+ retail stores and
                  robust online platform have served over 500,000 customers,
                  providing not just products but complete solutions including
                  installation, maintenance, and dedicated after-sales support.
                  From smartphones and laptops to refrigerators and air
                  conditioners, we make modern living accessible and affordable.
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
                Why Buy Electronics from Payzon?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offerings.map((offering, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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
                  Technology That Transforms Daily Life
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  In today's connected world, electronics are more than
                  gadgets—they're essential tools for work, entertainment,
                  communication, and home management. We carefully curate our
                  product selection to include only reliable, high-performance
                  devices that deliver real value. Our knowledgeable sales team
                  understands technical specifications and practical
                  applications, helping you make informed decisions based on
                  your needs and budget. Whether you're a tech enthusiast
                  seeking the latest innovations or a practical buyer looking
                  for dependable appliances, we have something for everyone.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=400&fit=crop"
                  alt="Electronics display"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
                <div className="bg-cyan-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-cyan-900">
                        150+ Stores:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Nationwide retail presence for easy access
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-cyan-900">
                        500,000+ Customers:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Trusted by families across India
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-cyan-900">
                        Authorized Dealer:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Genuine products from top global brands
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
                  Smart Home Solutions
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Transform your house into an intelligent home with our range
                  of smart devices. From voice-controlled assistants and smart
                  lighting to automated security systems and connected
                  appliances, we offer complete smart home ecosystems that
                  enhance convenience, security, and energy efficiency. Our
                  experts provide consultation on compatibility, installation
                  support, and configuration to ensure seamless integration of
                  all your smart devices. Experience the future of living where
                  your home responds to your needs, learns your preferences, and
                  operates efficiently.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=400&fit=crop"
                  alt="Smart home devices"
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
                  Premium Audio & Entertainment
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Elevate your entertainment experience with our collection of
                  high-fidelity audio systems, immersive home theaters, and
                  stunning visual displays. We stock the latest 4K and 8K
                  televisions with HDR technology, Dolby Atmos soundbars,
                  wireless multi-room audio systems, and professional-grade
                  headphones. Whether you're setting up a dedicated home cinema
                  or simply want better sound for your living room, our
                  audio-video specialists help you design the perfect setup. We
                  also offer gaming consoles, streaming devices, and accessories
                  to create comprehensive entertainment hubs.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=400&fit=crop"
                  alt="Home entertainment system"
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
                  Comprehensive After-Sales Support
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our relationship with customers extends far beyond the
                  purchase. We provide comprehensive after-sales services
                  including free home delivery, professional installation,
                  product demonstrations, and ongoing technical support. Our
                  extended warranty programs offer additional peace of mind,
                  while our dedicated service centers handle repairs and
                  maintenance efficiently. We maintain a large inventory of
                  genuine spare parts and work directly with manufacturers to
                  ensure quick resolution of any issues. Our customer service
                  team is available via phone, email, and chat to address
                  queries and concerns promptly.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
                  alt="Customer service"
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
                    Experience the Latest Technology
                  </motion.h2>
                  <motion.p
                    className="text-gray-700 mb-6 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Visit our stores to see products in action or browse our
                    online catalog for exclusive deals. Our experts are ready to
                    help you find the perfect device.
                  </motion.p>
                  <motion.button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Products <ArrowRight className="w-5 h-5" />
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

export default ElectronicsPage;
