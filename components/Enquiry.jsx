"use client";
import React from "react";

export default function ContactForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30  z-50">
      {/* Form Container with Overlay */}
      <div
        className="relative rounded-3xl shadow-2xl p-8 md:p-10 w-[350px] md:w-[570px] text-white bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url(/Titanium_Dioxide.png)" }}
      >
        {/* Overlay to enhance readability */}
        <div className="absolute inset-0 bg-black/30  rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-red-500 text-xl cursor-pointer"
            onClick={onClose}
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="text-center text-white text-xl md:text-3xl font-semibold tracking-wide">
            Get In Touch With Us
          </h2>
          <div className="w-28 h-[4px] bg-[#F7C600] mx-auto mt-3 mb-8 rounded-full"></div>

          {/* Form */}
          <form
            className="space-y-4"
            action="https://formsubmit.co/sales@aanyaenterprise.com"
            method="POST"
          >
            {/* Hidden configs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Product Enquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="product" value="Enquiry From Website" />

            {/* Name + Product */}
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 p-3 placeholder-gray-700 rounded-md text-black text-lg border-2 border-[#F7C600] focus:outline-none bg-white/90"
                required
              />

              <select
                className="flex-1 p-3 rounded-md text-black text-md border-2 border-[#F7C600] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#F7C600] transition appearance-none"
                defaultValue=""
                required
              >
                <option value="" disabled hidden>
                  Select Product
                </option>
                <option value="Titanium Dioxide (TiO₂)">
                  Titanium Dioxide (TiO₂)
                </option>
                <option value="Titanium Dioxide Rutile">
                  Titanium Dioxide Rutile
                </option>
                <option value="Lithopone">Lithopone</option>
                <option value="Optical Brighter">Optical Brighter</option>
                <option value="Caustic Soda">Caustic Soda</option>
                <option value="Calcium Carbonate">Calcium Carbonate</option>
              </select>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 bg-white/90 p-3 rounded-md border-2 border-[#F7C600]">
              <img
                src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759817850/flag_lbjzee.webp"
                alt="flag"
                className="w-6 h-4 object-cover"
              />
              <span className="text-black text-lg">🇮🇳</span>
              <input
                type="tel"
                maxLength={10}
                placeholder="081234 56789"
                className="w-full bg-transparent p-1 text-black text-lg focus:outline-none"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md text-black text-lg border-2 border-[#F7C600] focus:outline-none bg-white/90"
              required
            />

            {/* Message */}
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-md text-black text-md border-2 border-[#F7C600] focus:outline-none h-28 resize-none bg-white/90"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#F7C600] hover:bg-[#d6ac00] transition rounded-md font-semibold text-white text-md shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
