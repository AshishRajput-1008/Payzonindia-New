// app/sector/organic-farming/page.tsx
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
  Leaf,
  Sprout,
  Droplets,
  Sun,
  TreePine,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const OrganicFarmingPage: React.FC = () => {
  const services = [
    "Organic Vegetables",
    "Fruit Cultivation",
    "Herbal Products",
    "Natural Fertilizers",
    "Sustainable Farming",
    "Farm Consultation",
    "Soil Management",
    "Crop Planning",
  ];

  const { setNavbarGradient, setPaymentGradient, setLogoGradient } =
    useNavbarColor();

  useEffect(() => {
    // Get gradients for this sector
    const gradients = sectorGradients["organic-farming"];

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
      icon: <Leaf className="w-12 h-12 text-green-500" />,
      title: "100% Organic Produce",
      description: "Chemical-free vegetables and fruits grown naturally",
    },
    {
      icon: <Sprout className="w-12 h-12 text-green-500" />,
      title: "Sustainable Methods",
      description: "Eco-friendly farming practices for healthier soil",
    },
    {
      icon: <Droplets className="w-12 h-12 text-green-500" />,
      title: "Water Conservation",
      description: "Efficient irrigation systems reducing water waste",
    },
    {
      icon: <Sun className="w-12 h-12 text-green-500" />,
      title: "Natural Growth",
      description: "Sun-ripened crops with maximum nutritional value",
    },
    {
      icon: <TreePine className="w-12 h-12 text-green-500" />,
      title: "Biodiversity Focus",
      description: "Promoting ecosystem balance and biodiversity",
    },
    {
      icon: <Heart className="w-12 h-12 text-green-500" />,
      title: "Health & Wellness",
      description: "Nutritious produce for better health outcomes",
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-black/80"></div>

         <div className="relative z-10 text-center px-4 mt-[190px]">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Organic Farming
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cultivating Pure, Chemical-Free Produce for a Healthier Tomorrow
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
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-green-700/50">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">
                  Our Organic Products
                </h2>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-green-700 hover:bg-green-600 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <Link href="https://www.payzonshoppy.com">
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Image
                    src="/images/bg-info-box1.jpg"
                    alt="Farm Consultation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                    <Leaf className="w-16 h-16 text-green-300 mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Go Organic Today
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
                      Fresh organic produce delivered to your door
                    </p>
                    <motion.button
                      className="bg-green-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-green-400 transition-all duration-300 group"
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
                  alt="Organic Farming"
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
                  Pure, Sustainable, and Healthy Organic Farming
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Payzon India's Organic Farming initiative promotes sustainable
                  agriculture practices that prioritize environmental health and
                  human wellness. Our 200-acre certified organic farms produce
                  chemical-free vegetables, fruits, and herbs using traditional
                  farming wisdom combined with modern techniques. We've helped
                  over 500 farmers transition to organic methods, creating a
                  network of sustainable farms across central India.
                </motion.p>
              </div>
            </section>

            {/* Services Grid */}
            <Link href="/contact">
              <section className="bg-white rounded-2xl shadow-xl p-8">
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Why Choose Organic?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {offerings.map((offering, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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
            </Link>

            {/* Detailed Content */}
            <article className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <section>
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  The Organic Advantage
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Organic farming isn't just about avoiding chemicals—it's about
                  nurturing the entire ecosystem. Our methods enhance soil
                  fertility, promote biodiversity, conserve water resources, and
                  produce nutrient-dense food. Studies show organic produce
                  contains higher levels of antioxidants, vitamins, and minerals
                  compared to conventionally grown crops, making them better for
                  your health and the planet.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=400&fit=crop"
                  alt="Organic farm"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
                <div className="bg-green-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-green-900">
                        Certified Organic:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        All farms meet national organic standards
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-green-900">
                        200-Acre Network:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Extensive organic farming operations
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-green-900">
                        500+ Farmers:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Supporting sustainable livelihoods
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
                  Sustainable Farming Practices
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  We employ time-tested sustainable practices including crop
                  rotation, companion planting, natural pest management, and
                  composting. Our drip irrigation systems reduce water usage by
                  50% while maintaining optimal crop health. We also maintain
                  biodiversity corridors that support beneficial insects, birds,
                  and pollinators essential for a thriving agricultural
                  ecosystem.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=400&fit=crop"
                  alt="Sustainable farming"
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
                  Farm-to-Table Freshness
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Experience the true taste of fresh, organic produce delivered
                  straight from our farms to your table. Our efficient supply
                  chain ensures vegetables and fruits reach customers within 24
                  hours of harvest, preserving maximum freshness and nutritional
                  value. We offer subscription boxes, weekly markets, and direct
                  delivery services for convenient access to healthy organic
                  food.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=400&fit=crop"
                  alt="Fresh organic produce"
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
                  Empowering Farming Communities
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Beyond producing organic food, we're committed to supporting
                  farmer livelihoods and rural development. We provide training,
                  certification assistance, market linkages, and fair prices to
                  farmers transitioning to organic methods. Our farmer
                  cooperative model ensures equitable profit sharing and creates
                  sustainable income opportunities for rural families.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=500&fit=crop"
                  alt="Farming community"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
              </section>

              {/* CTA Section */}

              <Link href="/contact">
                <section className="text-center py-8 border-t border-gray-200">
                  <motion.h2
                    className="text-3xl font-bold text-gray-900 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Make the Switch to Organic
                  </motion.h2>
                  <motion.p
                    className="text-gray-700 mb-6 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Join thousands of health-conscious families enjoying fresh,
                    chemical-free organic produce. Start your journey to better
                    health today.
                  </motion.p>
                  <motion.button
                    className="bg-green-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-green-600 transition-all duration-300 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe to Farm Box <ArrowRight className="w-5 h-5" />
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

export default OrganicFarmingPage;
