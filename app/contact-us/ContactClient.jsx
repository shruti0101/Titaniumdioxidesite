"use client";
import React, { useState, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch("https://formsubmit.co/sales@aanyaenterprise.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        formRef.current.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Submission failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ===== Banner Section ===== */}
      <div
        className="relative bg-cover bg-center h-[40vh] sm:h-[50vh] md:h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759728776/aboutbg_xoifk1.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3A49]/70 via-[#0A3A49]/60 to-[#0A3A49]/90"></div>
        <div className="relative z-10 text-white px-4">
          <Link
            href="/"
            className="text-sm sm:text-base md:text-xl font-semibold text-yellow-400 hover:text-yellow-300 transition underline"
          >
            Home / Contact Us
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-3 md:mt-4 tracking-tight drop-shadow-lg font-serif">
            Contact Us
          </h1>
        </div>
      </div>

      {/* ===== Contact Section ===== */}
      <section className="w-full bg-gradient-to-b from-white to-[#F6DB9C] py-12 sm:py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Side - Form */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#002B5B] mb-6 md:mb-8 leading-snug text-center md:text-left">
              We’d Love To Hear From You
            </h2>

            {!submitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name & Product */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    required
                    className="flex-1 p-3 rounded-lg text-gray-800 text-sm sm:text-base border border-gray-300 focus:ring-2 focus:ring-[#F86613] focus:outline-none bg-white/90 shadow-sm transition"
                  />
                  <select
                    name="products"
                    required
                    className="flex-1 p-3 rounded-lg text-gray-800 text-sm sm:text-base border border-gray-300 focus:ring-2 focus:ring-[#F86613] focus:outline-none bg-white/90 shadow-sm transition"
                  >
                    <option value="">Select Product</option>
                    <option value="Titanium Dioxide (TiO₂)">Titanium Dioxide (TiO₂)</option>
                    <option value="Titanium Dioxide Rutile">Titanium Dioxide Rutile</option>
                    <option value="Lithopone">Lithopone</option>
                    <option value="Optical Brighter">Optical Brighter</option>
                    <option value="Caustic Soda">Caustic Soda</option>
                    <option value="Calcium Carbonate">Calcium Carbonate</option>
                  </select>
                </div>

                {/* Email & Phone */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    required
                    className="flex-1 p-3 rounded-lg text-gray-800 text-sm sm:text-base border border-gray-300 focus:ring-2 focus:ring-[#F86613] focus:outline-none bg-white/90 shadow-sm transition"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    required
                    className="flex-1 p-3 rounded-lg text-gray-800 text-sm sm:text-base border border-gray-300 focus:ring-2 focus:ring-[#F86613] focus:outline-none bg-white/90 shadow-sm transition"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 sm:py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F86613] transition shadow-sm hover:shadow-md text-sm sm:text-base"
                ></textarea>

                {/* Hidden FormSubmit settings */}
               <input type="hidden" name="_captcha" value="false" />
            
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_nosponsor" value="true" />
              <input type="hidden" name="_cc" value="inquiry.promozione@gmail.com" />
              <input type="hidden" name="product" value="Enquiry From Website" />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full sm:w-auto bg-gradient-to-r from-[#F86613] to-[#d7540e] hover:from-[#d7540e] hover:to-[#F86613] transition text-white font-semibold py-3 px-8 sm:px-10 rounded-lg shadow-md hover:shadow-lg text-sm sm:text-base ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-[#002B5B] mb-4">
                  🎉 Thank you for contacting us!
                </h3>
                <p className="text-gray-700 text-base">
                  Your message has been successfully sent. Our team will get in touch with you soon.
                </p>
              </div>
            )}
          </div>

          {/* Right Side - Info */}
          <div className="md:pl-6 lg:pl-10">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-medium text-center md:text-left">
              <span className="block text-[#002B5B] text-xl sm:text-2xl md:text-3xl font-extrabold mb-4">
                Aanya Enterprises se contact karein aur apna bulk{" "}
                <span className="text-[#F86613]">Titanium Dioxide</span> ka order ya enquiry start karein!
              </span>
              <span className="block mb-3 text-gray-800">
                Chahe aapko <b>Paint</b>, <b>Plastic</b>, <b>Coatings</b> ya <b>Paper</b> ke liye Titanium Dioxide chahiye –{" "}
                <span className="text-[#F86613] font-semibold">Bulk Supply Yahan Milegi!</span>
              </span>
              <span className="block text-gray-600">
                Fill out the form below, and our team will get in touch within{" "}
                <span className="text-[#F86613] font-semibold">24 hours.</span>
              </span>
            </p>

            {/* Contact Items */}
            <div className="space-y-6 sm:space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="bg-[#F86613]/10 p-3 sm:p-4 rounded-xl group-hover:scale-105 transition">
                  <MapPin className="text-[#F86613] w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#F86613] mb-1">Address:</h4>
                  <p className="text-black text-sm sm:text-base md:text-lg leading-snug">
                    Plot No 67/2 Kh. No. 154 Village Pooth Khurd New Delhi-110039, Delhi, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="bg-[#F86613]/10 p-3 sm:p-4 rounded-xl group-hover:scale-105 transition">
                  <Phone className="text-[#002B5B] w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#F86613] mb-1">Phone:</h4>
                  <a href="tel:+918527557778" className="text-black text-sm sm:text-base md:text-lg leading-snug">
                    +91-85275 57778
                  </a>{" "}
                  ,{" "}
                  <a href="tel:+918920109583" className="text-black text-sm sm:text-base md:text-lg leading-snug">
                    +91-89201 09583
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="bg-[#F86613]/10 p-3 sm:p-4 rounded-xl group-hover:scale-105 transition">
                  <Mail className="text-[#002B5B] w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#F86613] mb-1">Email:</h4>
                  <p className="text-black text-sm sm:text-base md:text-lg leading-snug break-words">
                    sales@aanyaenterprise.com <br />
                    info@aanyaenterprise.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-24 h-24 sm:w-40 sm:h-40 bg-[#F86613]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-6 right-6 w-40 h-40 sm:w-56 sm:h-56 bg-[#002B5B]/10 rounded-full blur-3xl"></div>

        {/* Map */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden mt-12 sm:mt-16">
          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=Aanya%20Enterprise%20-%20Titanium%20Dioxide%20Supplier%2C%20PLOT%20NO%2067%2F2%20KH.%20NO.%20154%2C%20Puth%20Khurd%2C%20Delhi%2C%20110039&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near"
            title="Aanya Enterprise - Titanium Dioxide Supplier"
            aria-label="Aanya Enterprise - Titanium Dioxide Supplier"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
