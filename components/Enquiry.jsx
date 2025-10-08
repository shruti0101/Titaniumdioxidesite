"use client";
import React from "react";

export default function ContactForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
      {/* Form Container with BG */}
      <div
        className="relative rounded-3xl shadow-2xl p-10 w-[350px] md:w-[570px] text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/form.jpg)" }}
      >


        {/* Close button */}
        <button
          className="absolute  cursor-pointer top-4 right-4 text-white hover:text-red-500 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-center text-white text-xl md:text-3xl font-semibold tracking-wide ">
          Get In Touch With Us
        </h2>
        <div className="w-28 h-[4px] bg-[#F7C600] mx-auto mt-3 mb-8 rounded-full"></div>

        {/* Form */}
        <form
          className="space-y-4 "
          action="https://formsubmit.co/sales@aanyaenterprise.com"
          method="POST"
        >
          {/* Hidden configs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Product Enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="product" value="Enquiry From Website" />

      <div className="flex flex-col md:flex-row gap-3 text-white">
  {/* Name Input */}
  <input
    type="text"
    placeholder="Your Name"
    className="flex-1 p-3 placeholder-white rounded-md text-white text-md border border-white bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F7C600] transition"
    required
  />

  {/* Product Select */}
  <select
    className="flex-1 p-3 rounded-md text-white text-md border border-white bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F7C600] transition appearance-none"
    defaultValue=""
    required
  >
    <option value="" disabled hidden>
      Select Product
    </option>
    <option className="text-black" value="Titanium Dioxide (TiO₂)">
      Titanium Dioxide (TiO₂)
    </option>
    <option className="text-black" value="Titanium Dioxide Rutile">
      Titanium Dioxide Rutile
    </option>
    <option className="text-black" value="Lithopone">
      Lithopone
    </option>
    <option className="text-black" value="Optical Brighter">
      Optical Brighter
    </option>
    <option className="text-black" value="Caustic Soda">
      Caustic Soda
    </option>
    <option className="text-black" value="Calcium Carbonate">
      Calcium Carbonate
    </option>
  </select>
</div>


          {/* Phone with flag */}
          <div className="flex placeholder-white items-center bg-blue/30 rounded-md border border-white border-2 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759817850/flag_lbjzee.webp"
              alt="flag"
              className="w-6 h-4 ml-2 object-cover"
            />
            <span className="text-lg placeholder-white ">🇮🇳</span>
            <input
              type="tel"
              maxLength={10}
              placeholder="081234 56789"
              className="w-full bg-blue/10 p-3 backdrop-blur-xs text-black text-md focus:outline-none border-0 placeholder-white"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full placeholder-white p-3 rounded-md text-black text-md border-white border-2 focus:outline-none bg-white-50 backdrop-blur-xs"
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            className="w-full placeholder-white bg-white-50 p-3 rounded-md text-black text-md border-white border-2 focus:outline-none h-28 resize-none backdrop-blur-xs"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#F7C600] to-[#F7C600] hover:opacity-90 transition rounded-md font-semibold text-white text-sm shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
