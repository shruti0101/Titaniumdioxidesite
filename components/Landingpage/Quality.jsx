"use client";
import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function QualityTabs() {
  const tabs = [
    {
      id: 1,
      title: "High-Purity Standards",
      desc: "As a responsible Titanium Dioxide wholesaler, we provide only high-grade Rutile and Anatase Titanium Dioxide, ensuring superior brightness, opacity, and durability in every application.",
      image: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726395/purity_iqd7us.avif",
    },
    {
      id: 2,
      title: "Stringent Testing",
      desc: "Each batch is tested for purity, whiteness, and performance. Our role as a Titanium Dioxide wholesaler is to guarantee products that manufacturers can rely on without second-guessing quality.",
      image: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726401/testing_nlsy2k.webp",
    },
    {
      id: 3,
      title: "Global Standard Compliance",
      desc: "We operate as a Titanium Dioxide wholesaler that follows strict quality protocols aligned with international benchmarks, making our products suitable for industries worldwide.",
      image: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726384/global_qyntof.webp",
    },
    {
      id: 4,
      title: "Consistency in Supply",
      desc: "Beyond quality, consistency is key. As a Titanium Dioxide wholesaler, we ensure that every order—big or small—matches the same high-quality standards.",
      image: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726389/indus2_fqqrbm.webp",
    },
    {
      id: 5,
      title: "Safe & Secure Packaging",
      desc: "We understand that packaging plays a major role in product safety. Being a Titanium Dioxide wholesaler, we offer reliable and customizable packaging options to maintain product integrity during transit.",
      image: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726395/packing_cusb46.webp",
    },
    {
      id: 6,
      title: "Building Trust Through Quality",
      desc: "For us, quality is not just a requirement—it is a responsibility. Businesses across paints, plastics, paper, rubber, cosmetics, pharmaceuticals, and construction industries continue to choose Aanya Enterprise as their long-term Titanium Dioxide wholesaler. With every consignment, we deliver not just Titanium Dioxide, but also trust, reliability, and performance.",
      image: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726384/ff_kaucwy.avif",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section
      className="relative w-full bg-cover bg-center bg-fixed py-4 md:py-20 px-6 md:px-12"
      style={{ backgroundImage: "url(https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726389/indus1_mvjyv5.webp)" }}
    >
      {/* Gradient + Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Intro Text */}
        <div className="text-center mb-3 md:mb-10 z-40 ">
          <h2 className="font-serif text-3xl relative md:text-5xl font-extrabold text-white mb-6">
            Quality Assurance

             <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 md:w-26 h-1 bg-[#F8CC19] rounded-full"></span>
          </h2>
          <p className="text-white font-semibold text-md md:text-lg max-w-3xl mx-auto">
            At Aanya Enterprise, we believe that the foundation of a trusted
            Titanium Dioxide wholesaler lies in uncompromised quality. Our
            commitment to excellence ensures that every batch of Titanium
            Dioxide we supply is consistent, pure, and meets international
            standards.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/3 flex md:flex-col gap-4 overflow-x-auto md:overflow-visible z-40 relative">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-3 px-4 py-5 rounded-lg border transition-all duration-300 whitespace-nowrap md:whitespace-normal ${
                  activeTab === tab.id
                    ? "bg-[#F7C600] text-black font-semibold shadow-xl border-yellow-300"
                    : "bg-white text-black hover:bg-yellow-100 border-transparent"
                }`}
              >
                <FaCheckCircle className="text-[#F7C600]" />
                <span className="text-lg">{tab.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="md:w-2/3 bg-[#FDF2E1] rounded-xl shadow-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {tabs
                .filter((t) => t.id === activeTab)
                .map((tab) => (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center gap-6 w-full"
                  >
                    {/* Image */}
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="md:w-1/2 w-full"
                    >
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full h-full shadow-xl"
                      />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="md:w-1/2 w-full"
                    >
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                        {tab.title}
                      </h3>
                      <p className="text-black md:text-lg leading-relaxed">
                        {tab.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        <h3 className=" hidden md:block text-4xl text-center mt-8 md:text-5xl font-extrabold text-white mb-4">
          Building Trust Through Quality
        </h3>
        <p className="hidden md:block text-white text-center  text-xl max-w-6xl mx-auto">
          For us, quality is not just a requirement—it is a responsibility.
          That’s why businesses across paints, plastics, paper, rubber,
          cosmetics, pharmaceuticals, and construction industries continue to
          choose Aanya Enterprise as their long-term Titanium Dioxide
          wholesaler. With every consignment, we deliver not just Titanium
          Dioxide, but also trust, reliability, and performance.
        </p>
      </div>
    </section>
  );
}
