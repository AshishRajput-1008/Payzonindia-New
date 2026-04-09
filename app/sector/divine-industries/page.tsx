// app/sector/divine-industries/page.tsx
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
  Church,
  Flame,
  BookOpen,
  Music,
  Sparkles,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const DivineIndustriesPage: React.FC = () => {
  const services = [
    "Religious Idols",
    "Puja Essentials",
    "Incense & Dhoop",
    "Sacred Books",
    "Temple Decor",
    "Devotional Music",
    "Spiritual Gifts",
    "Festival Items",
  ];

  const { setNavbarGradient, setPaymentGradient, setLogoGradient } =
    useNavbarColor();

  useEffect(() => {
    // Get gradients for this sector
    const gradients = sectorGradients["divine-industries"];

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
      icon: <Church className="w-12 h-12 text-orange-600" />,
      title: "Authentic Products",
      description: "Genuine religious articles blessed and sanctified",
    },
    {
      icon: <Flame className="w-12 h-12 text-orange-600" />,
      title: "Sacred Fragrances",
      description: "Premium incense and aromatic offerings",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-orange-600" />,
      title: "Spiritual Literature",
      description: "Ancient texts and devotional books",
    },
    {
      icon: <Music className="w-12 h-12 text-orange-600" />,
      title: "Devotional Media",
      description: "Mantras, bhajans, and spiritual music",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-orange-600" />,
      title: "Artisan Crafted",
      description: "Handmade items by traditional craftspeople",
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-600" />,
      title: "All Faiths Welcome",
      description: "Products for diverse religious traditions",
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-amber-900/80"></div>

        <div className="relative z-10 text-center px-4 mt-[190px]">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Divine Industries
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nurturing Spiritual Connections Through Sacred Products and Services
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
                  Sacred Products
                </h2>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-orange-700 to-amber-700 hover:from-orange-600 hover:to-amber-600 px-5 py-3 text-white rounded-full font-medium text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <Link href="/contact">
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Image
                    src="/images/bg-info-box1.jpg"
                    alt="Divine Products"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="relative px-6 py-20 flex flex-col items-center justify-center text-center">
                    <Church className="w-16 h-16 text-orange-300 mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Begin Your Spiritual Journey
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
                      Find everything for your spiritual practice
                    </p>
                    <motion.button
                      className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-orange-400 hover:to-amber-400 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Explore Products</span>
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
                  alt="Divine Industries"
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
                  Sacred Products for Every Spiritual Path
                </motion.h1>
                <motion.p
                  className="text-gray-700 text-base leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Payzon India's Divine Industries division honors the spiritual
                  heritage of India by providing authentic religious and
                  devotional products for all faiths. Our comprehensive catalog
                  includes beautifully crafted deity idols in various sizes and
                  materials, complete puja samagri kits, premium incense and
                  dhoop, sacred texts and scriptures, temple accessories,
                  devotional music, and festival-specific items. Working with
                  traditional artisans and authorized suppliers, we ensure every
                  product meets religious authenticity standards. With 400+
                  retail outlets near temples and pilgrimage sites, plus a
                  growing online presence, we've served over 2 million devotees,
                  making spiritual practice accessible and convenient while
                  preserving traditional values and craftsmanship.
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
                Our Sacred Offerings
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offerings.map((offering, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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
                  Honoring Spiritual Traditions
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  India's spiritual diversity is reflected in our product range,
                  which respects and serves multiple faith traditions including
                  Hinduism, Buddhism, Jainism, Sikhism, and others. We
                  understand the sacred significance of religious articles and
                  maintain strict quality and authenticity standards. Our deity
                  idols are crafted by traditional shilpkars following ancient
                  iconographic guidelines, ensuring proper proportions, mudras,
                  and symbolic details. Incense is made from natural ingredients
                  without harmful chemicals, maintaining purity essential for
                  worship. Sacred texts come from authorized publishers with
                  proper translations and commentaries. Every product is handled
                  with reverence, stored in clean facilities, and packaged
                  respectfully.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1604608672516-f1b9b1a49d7b?w=800&h=400&fit=crop"
                  alt="Religious idols"
                  width={800}
                  height={400}
                  className="w-full rounded-lg object-cover mb-6"
                />
                <div className="bg-orange-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-orange-900">
                        400+ Outlets:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Strategic locations near temples and pilgrimage sites
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-orange-900">
                        2 Million+ Devotees:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Trusted for authentic spiritual products
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-orange-900">
                        Traditional Artisans:
                      </span>
                      <span className="text-gray-700">
                        {" "}
                        Supporting heritage crafts and skilled workers
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
                  Complete Puja & Worship Essentials
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Daily worship requires specific items, and we offer
                  comprehensive puja samagri collections for various rituals and
                  occasions. Our curated puja kits include everything needed for
                  specific ceremonies—housewarming, weddings, festivals, or
                  daily prayers. You'll find quality kumkum, turmeric,
                  sandalwood paste, camphor, cotton wicks, ghee, flowers, sacred
                  threads, coconuts, betel leaves, and countless other
                  traditional items. We also stock specialized items for
                  regional practices and specific deity worship. Brass and
                  copper vessels, puja thalis, bells, diyas, and decorative
                  items are available in various sizes and designs. For temples
                  and institutions, we offer bulk supplies at wholesale prices,
                  ensuring consistent availability of required materials.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1582662822461-6f4176d9cbfc?w=800&h=400&fit=crop"
                  alt="Puja essentials"
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
                  Sacred Fragrances & Aromatics
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Fragrance plays a vital role in creating a conducive
                  atmosphere for prayer and meditation. Our extensive incense
                  collection includes traditional dhoop sticks, cones, and loose
                  powder made from natural ingredients like sandalwood, rose,
                  jasmine, mogra, patchouli, and sacred herbs. We source from
                  renowned manufacturers in Bangalore, Mysore, and other centers
                  of incense craftsmanship. Each variety is carefully selected
                  for its purity, fragrance longevity, and spiritual
                  significance. We also offer essential oils, camphor tablets,
                  and aromatic resins for traditional dhoop ceremonies. For
                  those seeking authenticity, we stock rare varieties like
                  Himalayan juniper, Tibetan incense, and traditional havan
                  samagri. Special festival packs combine multiple fragrances
                  for elaborate celebrations.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=400&fit=crop"
                  alt="Incense and aromatics"
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
                  Spiritual Literature & Devotional Media
                </motion.h3>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Deepen your spiritual understanding with our collection of
                  sacred texts, philosophical works, and devotional literature.
                  We stock the Bhagavad Gita, Upanishads, Puranas, Ramayana,
                  Mahabharata, Buddhist sutras, Jain agamas, and Guru Granth
                  Sahib in multiple languages with scholarly commentaries.
                  Children's versions introduce young minds to spiritual wisdom
                  through engaging stories and illustrations. Our devotional
                  media section includes CDs, USB drives, and digital downloads
                  of mantras, bhajans, aartis, and spiritual discourses by
                  revered teachers. Meditation guides, yoga instruction
                  materials, and spiritual self-help books support personal
                  growth. We regularly update our collection with new
                  publications while preserving access to classic texts and rare
                  manuscripts.
                </motion.p>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
                  alt="Spiritual books"
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
                    Enrich Your Spiritual Practice
                  </motion.h2>
                  <motion.p
                    className="text-gray-700 mb-6 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Discover authentic spiritual products that bring peace,
                    devotion, and positive energy to your life. Visit our stores
                    or order online.
                  </motion.p>
                  <motion.button
                    className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:from-orange-600 hover:to-amber-600 transition-all duration-300 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Our Store <ArrowRight className="w-5 h-5" />
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

export default DivineIndustriesPage;
