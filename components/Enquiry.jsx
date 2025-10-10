'use client';
import React, { useState } from "react";

export default function ContactForm({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/sales@aanyaenterprise.com", {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        setSuccessMessage("✅ Your enquiry has been submitted successfully!");
        form.reset();
        setTimeout(() => {
          setSubmitted(false);
          onClose();
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
    <div className="fixed inset-0 flex items-center justify-center bg-black/30  z-50">
      <div
        className="relative rounded-3xl shadow-2xl p-8 md:p-10 w-[350px] md:w-[570px] text-white bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url(https://res.cloudinary.com/dzbkxqqo9/image/upload/v1760072301/Titanium_Dioxide_bijcv9.png)" }}
      >
        <div className="absolute inset-0 bg-black/30  rounded-3xl"></div>

        <div className="relative z-10">
          <button
            className="absolute top-4 right-4 text-white hover:text-red-500 text-xl cursor-pointer"
            onClick={onClose}
          >
            ✕
          </button>

          <h2 className="text-center text-white text-xl md:text-3xl font-semibold tracking-wide">
            Get In Touch With Us
          </h2>
          <div className="w-28 h-[4px] bg-[#F7C600] mx-auto mt-3 mb-8 rounded-full"></div>

          {!submitted ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Product Enquiry" />
              <input type="hidden" name="_nosponsor" value="true" />
              <input type="hidden" name="_cc" value="inquiry@promozionebranding.com" />
              <input type="hidden" name="product" value="Enquiry From Website" />

              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="flex-1 p-3 placeholder-gray-700 rounded-md text-black text-lg border-2 border-[#F7C600] focus:outline-none bg-white/90"
                  required
                />

                <select
                  name="machine"
                  className="flex-1 p-3 rounded-md text-black text-md border-2 border-[#F7C600] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#F7C600] transition appearance-none"
                  defaultValue=""
                  required
                >
                  <option value="" disabled hidden>
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

              <input
                type="tel"
                name="phone"
                maxLength={10}
                placeholder="081234 56789"
                className="w-full p-3 rounded-md text-black text-lg border-2 border-[#F7C600] focus:outline-none bg-white/90"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 rounded-md text-black text-lg border-2 border-[#F7C600] focus:outline-none bg-white/90"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 rounded-md text-black text-md border-2 border-[#F7C600] focus:outline-none h-28 resize-none bg-white/90"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-[#F7C600] hover:bg-[#d6ac00] transition rounded-md font-semibold text-white text-md shadow-md"
              >
                Send Message
              </button>
            </form>
          ) : (
            <p className="text-center text-white font-semibold text-lg">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
