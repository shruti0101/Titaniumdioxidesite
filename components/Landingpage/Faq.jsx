"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "1. Who is a Titanium Dioxide Wholesaler?",
    answer:
      "A Titanium Dioxide Wholesaler is a company or supplier that specializes in distributing high-quality Titanium Dioxide (TiO₂) in bulk quantities to various industries. A reliable Titanium Dioxide Wholesaler ensures that manufacturers in paints, plastics, coatings, cosmetics, food, and paper industries receive consistent, tested, and pure TiO₂ for their production processes.",
  },
  {
    question: "2. What grades of Titanium Dioxide does a Titanium Dioxide Wholesaler offer?",
    answer:
      "A professional Titanium Dioxide Wholesaler typically supplies multiple grades to suit different industrial needs:\n• Industrial-grade: Ideal for paints, plastics, and paper.\n• Food-grade: Approved by FDA and EFSA for use in food products.\n• Cosmetic-grade: Safe for creams, sunscreens, and powders.\n• Rutile and Anatase forms: Selected depending on opacity, UV resistance, and photocatalytic properties.",
  },
  {
    question: "3. Which industries purchase from a Titanium Dioxide Wholesaler?",
    answer:
      "A Titanium Dioxide Wholesaler serves a wide range of industries, including:\n• Paints & coatings for opacity and whiteness.\n• Plastics and rubber for brightness and UV stability.\n• Paper for brightness and print quality.\n• Cosmetics and personal care for safe whitening and sunscreen formulations.\n• Food and pharmaceutical industries for coloring and additive purposes.",
  },
  {
    question: "4. Can a Titanium Dioxide Wholesaler handle bulk orders?",
    answer:
      "Yes, one of the primary roles of a Titanium Dioxide Wholesaler is to provide bulk supply efficiently. A professional wholesaler maintains large inventory stocks and works with manufacturers to supply tons of TiO₂ on a consistent basis.",
  },
  {
    question: "5. Does a Titanium Dioxide Wholesaler provide samples before bulk purchase?",
    answer:
      "Most reputable Titanium Dioxide Wholesalers provide small quantity samples so clients can test the product in their specific applications.",
  },
  {
    question: "6. What packaging options are available from a Titanium Dioxide Wholesaler?",
    answer:
      "A Titanium Dioxide Wholesaler typically offers:\n• Small bags (25–50 kg) for lab or small-scale testing.\n• Bulk jumbo bags (500–1000 kg) for large-scale manufacturing.\n• Containerized bulk shipments for international delivery.",
  },
  {
    question: "7. How does a Titanium Dioxide Wholesaler ensure product quality?",
    answer:
      "A reliable Titanium Dioxide Wholesaler ensures consistent quality through:\n• Certificates of Analysis (COA) for each batch.\n• Batch testing for particle size, brightness, purity, and dispersibility.\n• Compliance with ISO, ASTM, and local regulatory standards.",
  },
  {
    question: "8. Is Titanium Dioxide from a Titanium Dioxide Wholesaler safe for food and cosmetic applications?",
    answer:
      "Yes, a professional Titanium Dioxide Wholesaler supplies food-grade and cosmetic-grade TiO₂ that complies with FDA, EFSA, and EU regulations.",
  },
  {
    question: "9. What forms of Titanium Dioxide does a Titanium Dioxide Wholesaler supply?",
    answer:
      "A Titanium Dioxide Wholesaler provides both Rutile and Anatase forms:\n• Rutile: High durability and UV resistance.\n• Anatase: Higher photocatalytic activity, used in sunscreens and coatings.",
  },
  {
    question: "10. How should Titanium Dioxide be stored after purchase?",
    answer:
      "Titanium Dioxide should be stored in dry, cool, and ventilated areas, away from moisture, heat, and direct sunlight.",
  },
  {
    question: "11. Can a Titanium Dioxide Wholesaler provide technical support?",
    answer:
      "Yes, an experienced wholesaler offers technical support and guidance for dispersion, formulation, and troubleshooting.",
  },
  {
    question: "12. What is the typical delivery timeline?",
    answer:
      "A Titanium Dioxide Wholesaler usually delivers within 1–3 weeks, depending on order size, grade, and destination.",
  },
  {
    question: "13. Does a Titanium Dioxide Wholesaler accept custom orders?",
    answer:
      "Yes, wholesalers can accommodate custom orders based on grade, particle size, or packaging requirements.",
  },
  {
    question: "14. How do I place an order?",
    answer:
      "You can place an order via email, phone, or online inquiry with details such as required grade, quantity, and delivery location.",
  },

];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // Split the FAQ list into two columns
  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  return (
    <section className="py-12 md:py-20 relative bg-gradient-to-b from-white to-[#fff8e1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Floating Decor Images */}
        <motion.div
          className="hidden md:block absolute top-0 right-0 z-0 "
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759728055/ChatGPT_Image_Oct_3_2025_06_09_31_PM_qgguyj.png"
            width={200}
            height={200}
            alt="Decor"
          />
        </motion.div>


    <motion.div
          className="hidden md:block absolute top-30 left-0 z-0 "
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759728055/ChatGPT_Image_Oct_3_2025_06_09_31_PM_qgguyj.png"
            width={200}
            height={200}
            alt="Decor"
          />
        </motion.div>
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 font-serif">
          FAQs for{" "}
          <span className="text-[#F7C600]">Titanium Dioxide Wholesaler</span>
        </h2>
        <p className="text-center text-black max-w-2xl mx-auto mb-12">
          Get clear answers to the most common questions about our Titanium
          Dioxide supply and wholesale services.
        </p>

        {/* FAQ Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[col1, col2].map((col, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {col.map((faq, index) => {
                const actualIndex = colIndex === 0 ? index : index + half;
                const isOpen = openIndex === actualIndex;
                return (
                  <div
                    key={faq.question}
                    className={`rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden ${
                      isOpen ? "bg-[#FFF4ED]" : "bg-white"
                    }`}
                  >
                    <button
                      className="w-full flex justify-between items-center px-5 py-4 text-left"
                      onClick={() => toggleFAQ(actualIndex)}
                    >
                      <span className="text-base md:text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#F7C600]" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`px-5 overflow-hidden transition-all duration-500 ${
                        isOpen ? "max-h-[500px] pb-4" : "max-h-0"
                      }`}
                    >
                      <p className="text-black text-sm whitespace-pre-line leading-relaxed font-serif">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
