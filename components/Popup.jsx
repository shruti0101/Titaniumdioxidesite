'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

const handleSubmit = async (e) => {
  e.preventDefault(); // prevent page reload
  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch("https://formsubmit.co/ajax/sales@aanyaenterprise.com", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setSubmitted(true);
      setSuccessMessage("✅ Your enquiry has been submitted successfully!");
      form.reset();
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
      }, 8000);
    } else {
      setSuccessMessage("❌ Submission failed. Please try again.");
    }
  } catch (error) {
    console.error(error);
    setSuccessMessage("❌ An error occurred. Please try again.");
  }
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl md:max-w-5xl h-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/90 to-white/80">

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-800 hover:text-red-500 text-2xl z-50"
          onClick={handleClose}
        >
          ✕
        </button>

        {/* Left Side - Image */}
        <div className="hidden md:block w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759744551/Gemini_Generated_Image_fpz1x1fpz1x1fpz1_1_lpjciw.webp"
            alt="Contact Us"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white/90 backdrop-blur-sm relative z-30 overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">
            Get In Touch With Us
          </h2>
          <div className="w-20 h-[3px] bg-[#F7C600] mx-auto mb-6 rounded-full"></div>

          {!submitted ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Product Enquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_nosponsor" value="true" />
              <input type="hidden" name="_cc" value="inquiry.promozione@gmail.com" />
              <input type="hidden" name="product" value="Enquiry From Website" />

              {/* Name & Product select */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="flex-1 p-3 rounded-lg text-black text-sm border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-white/90 shadow-sm transition"
                  required
                />
                <select
                  name="products"
                  className="flex-1 p-3 rounded-lg text-black text-sm border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-white/90 shadow-sm transition"
                  required
                >
                  <option value="">
                    Select Product
                  </option>
                  <option value="Titanium Dioxide (TiO₂)">Titanium Dioxide (TiO₂)</option>
                  <option value="Titanium Dioxide Rutile">Titanium Dioxide Rutile</option>
                  <option value="Lithopone">Lithopone</option>
                  <option value="Optical Brighter">Optical Brighter</option>
                  <option value="Caustic Soda">Caustic Soda</option>
                  <option value="Calcium Carbonate">Calcium Carbonate</option>
                </select>
              </div>

              {/* Phone & Email */}
              <input
                type="tel"
                name="phone"
                maxLength={10}
                minLength={10}
                placeholder="081234 56789"
                className="w-full p-3 rounded-lg text-black text-sm border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-white/90 shadow-sm transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg text-black text-sm border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-white/90 shadow-sm transition"
                required
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 rounded-lg text-black text-sm border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-white/90 shadow-sm transition h-28 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#F7C600] to-[#F7A400] hover:opacity-90 transition rounded-lg font-semibold text-white text-sm shadow-lg"
              >
                Send Message
              </button>
            </form>
          ) : (
            <p className="text-center text-green-600 font-semibold text-lg">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
