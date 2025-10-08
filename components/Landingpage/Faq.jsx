"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "1. Who is a Titanium Dioxide Wholesaler?",
    answer:
      "A Titanium Dioxide Wholesaler is a company or supplier that specializes in distributing high-quality Titanium Dioxide (TiO₂) in bulk quantities to various industries. A reliable Titanium Dioxide Wholesaler ensures that manufacturers in paints, plastics, coatings, cosmetics, food, and paper industries receive consistent, tested, and pure TiO₂ for their production processes.",
  },
  {
    question: "2. What grades of Titanium Dioxide does a Titanium Dioxide Wholesaler offer?",
    answer:
      "A professional Titanium Dioxide Wholesaler typically supplies multiple grades to suit different industrial needs:\n• Industrial-grade: Ideal for paints, plastics, and paper.\n• Food-grade: Approved by FDA and EFSA for use in food products.\n• Cosmetic-grade: Safe for creams, sunscreens, and powders.\n• Rutile and Anatase forms: Selected depending on opacity, UV resistance, and photocatalytic properties.\nThis variety allows a Titanium Dioxide Wholesaler to meet diverse client requirements.",
  },
  {
    question: "3. Which industries purchase from a Titanium Dioxide Wholesaler?",
    answer:
      "A Titanium Dioxide Wholesaler serves a wide range of industries, including:\n• Paints & coatings for opacity and whiteness.\n• Plastics and rubber for brightness and UV stability.\n• Paper for brightness and print quality.\n• Cosmetics and personal care for safe whitening and sunscreen formulations.\n• Food and pharmaceutical industries for coloring and additive purposes.\nBy offering specialized grades, a Titanium Dioxide Wholesaler supports both industrial and consumer-facing products.",
  },
  {
    question: "4. Can a Titanium Dioxide Wholesaler handle bulk orders?",
    answer:
      "Yes, one of the primary roles of a Titanium Dioxide Wholesaler is to provide bulk supply efficiently. A professional wholesaler maintains large inventory stocks and works with manufacturers to supply tons of TiO₂ on a consistent basis. This ensures production lines are never interrupted due to shortage or quality issues.",
  },
  {
    question: "5. Does a Titanium Dioxide Wholesaler provide samples before bulk purchase?",
    answer:
      "Most reputable Titanium Dioxide Wholesalers provide small quantity samples so clients can test the product in their specific applications. For example, a paint manufacturer may test TiO₂ for opacity, brightness, and dispersibility, while a cosmetic company may check for safety and skin compatibility.",
  },
  {
    question: "6. What packaging options are available from a Titanium Dioxide Wholesaler?",
    answer:
      "A Titanium Dioxide Wholesaler typically offers:\n• Small bags (25–50 kg) for lab or small-scale testing.\n• Bulk jumbo bags (500–1000 kg) for large-scale manufacturing.\n• Containerized bulk shipments for international delivery.\nFlexible packaging ensures the Titanium Dioxide Wholesaler can cater to both local and global clients efficiently.",
  },
  {
    question: "7. How does a Titanium Dioxide Wholesaler ensure product quality?",
    answer:
      "A reliable Titanium Dioxide Wholesaler ensures consistent quality through:\n• Certificates of Analysis (COA) for each batch.\n• Batch testing for particle size, brightness, purity, and dispersibility.\n• Compliance with ISO, ASTM, and local regulatory standards.\nThis ensures that manufacturers using a Titanium Dioxide Wholesaler’s product can trust its performance in critical applications.",
  },
  {
    question: "8. Is Titanium Dioxide from a Titanium Dioxide Wholesaler safe for food and cosmetic applications?",
    answer:
      "Yes, a professional Titanium Dioxide Wholesaler supplies food-grade and cosmetic-grade TiO₂ that complies with FDA, EFSA, and EU regulations. This guarantees that the Titanium Dioxide is safe for use in products like candies, tablets, creams, and sunscreens without risk to consumers.",
  },
  {
    question: "9. What forms of Titanium Dioxide does a Titanium Dioxide Wholesaler supply?",
    answer:
      "A Titanium Dioxide Wholesaler provides both Rutile and Anatase forms:\n• Rutile: Known for high durability and UV resistance, suitable for paints, coatings, and plastics.\n• Anatase: Has higher photocatalytic activity, used in sunscreens, specialty coatings, and environmental applications.\nThis enables clients to choose the form best suited for their specific product.",
  },
  {
    question: "10. How should Titanium Dioxide be stored after purchase from a Titanium Dioxide Wholesaler?",
    answer:
      "Titanium Dioxide purchased from a Titanium Dioxide Wholesaler should be stored in dry, cool, and ventilated areas, away from moisture, heat, and direct sunlight. Proper storage ensures the brightness, dispersibility, and chemical stability of the TiO₂ for long-term use.",
  },
  {
    question: "11. Can a Titanium Dioxide Wholesaler provide technical support?",
    answer:
      "Yes, an experienced Titanium Dioxide Wholesaler offers technical support and guidance for:\n• Dispersion and mixing in paints, coatings, and plastics.\n• Formulation adjustments for cosmetic and food-grade applications.\n• Troubleshooting issues like clumping, settling, or color variation.\nThis ensures clients get maximum performance from the Titanium Dioxide supplied.",
  },
  {
    question: "12. What is the typical delivery timeline from a Titanium Dioxide Wholesaler?",
    answer:
      "A Titanium Dioxide Wholesaler usually delivers within 1–3 weeks, depending on order size, grade, and destination. For urgent requirements, express delivery options can be arranged to ensure production continuity.",
  },
  {
    question: "13. Does a Titanium Dioxide Wholesaler accept custom orders?",
    answer:
      "Yes, a Titanium Dioxide Wholesaler can accommodate custom orders based on specific grade, particle size, or packaging requirements. This flexibility allows manufacturers to receive exactly what they need for specialized applications.",
  },
  {
    question: "14. How do I place an order with a Titanium Dioxide Wholesaler?",
    answer:
      "You can place an order with a Titanium Dioxide Wholesaler via email, phone, or online inquiry. Providing details such as required grade, quantity, and delivery location ensures the wholesaler can prepare a customized quote and timely delivery schedule.",
  },
  {
    question: "15. Why should I choose your services as a Titanium Dioxide Wholesaler?",
    answer:
      "Choosing our services as a Titanium Dioxide Wholesaler ensures:\n• High-quality, tested Titanium Dioxide.\n• Competitive pricing and bulk discounts.\n• Reliable delivery schedules for uninterrupted production.\n• Technical support for formulation and application.\n• Compliance with international safety and regulatory standards.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-7 md:py-16 relative bg-white">

   
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2
          className="text-3xl  md:text-4xl font-bold text-center text-black mb-4"
          data-aos="fade-down"
        >
            FAQs for <span className="text-[#F7C600]">Titanium Dioxide Wholesaler</span>  
       </h2>
        <p className="hidden md:block text-center text-black max-w-3xl mx-auto mb-8">
          Explore frequently asked questions about our Titanium Dioxide products and wholesale services.
        </p>

        {/* FAQs */}
        <div className="space-y-3 ">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`rounded-2xl border border-gray-200 transition-all duration-300 shadow-sm 
                  hover:shadow-md cursor-pointer
                  ${isOpen ? "bg-[#FFF4ED]" : "bg-white hover:bg-[#FFF4ED]"}`}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-2 md:py-5 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-md md:text-xl font-medium text-black">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-black transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#F7C600]" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[600px] py-3" : "max-h-0"
                  }`}
                >
                  <p className="text-black  whitespace-pre-line">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
