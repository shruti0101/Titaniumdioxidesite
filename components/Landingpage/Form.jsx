"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EnquiryForm = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#F6DB9C] w-full py-12 px-4  overflow-hidden">
      {/* Animated Atom - Top Right */}
      <motion.div
        className="hidden md:block absolute top-0 right-0 z-0"
        animate={{
          y: [0, -20, 0], // float up-down
          rotate: [0, 10, 0], // slight rotation
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759728055/ChatGPT_Image_Oct_3_2025_06_09_31_PM_qgguyj.png"
          width={200}
          height={200}
          alt="Floating Atom"
          className="z-40"
          
        />
      </motion.div>

      {/* Animated Atom - Left Side */}
      <motion.div
        className="hidden md:block absolute top-40 left-0 z-40"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759728055/ChatGPT_Image_Oct_3_2025_06_09_31_PM_qgguyj.png"
          width={200}
          height={200}
          alt="Floating Atom"
        
      
        />
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Quality You Can Trust
        </h2>

        <p className="text-black text-lg leading-relaxed mb-6">
          At <span className="font-semibold text-yellow-500">Aanya Enterprise</span>, we believe that the foundation of a trusted Titanium Dioxide wholesaler lies in 
          <span className="font-semibold"> uncompromised quality</span>. Our commitment 
          to excellence ensures that every batch of Titanium Dioxide we supply is consistent, pure, and meets international standards.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative z-10">
        {/* Left Image */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759736912/Gemini_Generated_Image_hj0r03hj0r03hj0r_bnh9or.webp"
            alt="Application of Titanium Dioxide"
            width={450}
            height={400}
            className="object-cover rounded-xl z-10"
          />
        </div>

        {/* Right Form */}
        <div className="relative w-full max-w-lg border border-white/30 p-8 rounded-xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#333] rounded-xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-serif text-[#F7C600] text-center mb-8 drop-shadow-lg">
              Quick Enquiry
            </h2>

            <form
              className="space-y-5"
              action="https://formsubmit.co/sales@aanyaenterprise.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Product Enquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_nosponsor" value="false" />

              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <select
                  className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
                  defaultValue=""
                >


{/* 
 "Titanium Dioxide (TiO₂)",
        "Titanium Dioxide Rutile",
        "Lithopone",
        "Optical Brighter",
        "Caustic Soda",
        "Carbon",
        "Calcium Carbonate", */}

                  <option value="" disabled>
                    Select Product
                  </option>
                  <option value="Paper Cup Making Machine">Titanium Dioxide (TiO₂)</option>
                  <option value="Paper Die Cutting Machine">Titanium Dioxide Rutile</option>
                  <option value="Paper Plate Making Machine">Lithopone</option>
                  <option value="Bio-degradable Bag Making Machine">Optical Brighter</option>
                  <option value="Flexoprinting Machine">Caustic Soda</option>
                  <option value="Non Woven Bag Making Machines">Calcium Carbonate</option>
             
                </select>
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center border border-gray-300 rounded-md bg-white/95 focus-within:ring-2 focus-within:ring-[#F7C600]">
                  <span className="px-2">🇮🇳</span>
                  <input
                    type="tel"
                    placeholder="081234 56789"
                    className="p-3 flex-1 rounded-md outline-none bg-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
                />
              </div>

              <input
                type="text"
                placeholder="Place"
                className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
              />

              <textarea
                placeholder="Message"
                rows="4"
                className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-[#F7C600] hover:bg-[#e0b000] text-black font-semibold rounded-md shadow-lg transition transform hover:scale-[1.02]"
              >
                ✉️ Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mt-3 mx-auto relative z-10">
        <div className="bg-white text-center shadow-md rounded-2xl p-6 border border-gray-200">
          <p className="text-lg text-gray-700 leading-relaxed">
            Partner with <span className="font-semibold text-yellow-500">Aanya Enterprise</span>,
            your trusted Titanium Dioxide Wholesaler, and get high-quality 
            <span className="font-semibold"> TiO₂</span> for all your industrial applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
