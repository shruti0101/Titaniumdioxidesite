"use client";
import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      {/* ===== Banner Section ===== */}
      <div
        className="relative bg-cover bg-center h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759728776/aboutbg_xoifk1.webp')" }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3A49]/70 via-[#0A3A49]/60 to-[#0A3A49]/90"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-yellow-400 hover:text-yellow-300 transition underline"
          >
            Home / Contact Us
          </Link>
          <h1 className="text-5xl font-serif md:text-6xl font-extrabold mt-4 tracking-tight drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-white mt-4 max-w-2xl mx-auto text-sm md:text-lg">
            We're here to answer any questions and help you get started on your next project.
          </p>
        </div>
      </div>

      {/* ===== Contact Section ===== */}
      <section  className="w-full bg-gradient-to-b from-white to-[#F6DB9C] py-20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side - Form */}
          <div  className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#002B5B] mb-8 leading-snug">
              We’d Love To Hear From You
            </h2>

            <form className="space-y-5">
              {["Your Name", "Your Email", "Phone Number", "Subject"].map(
                (placeholder, i) => (
                  <input
                    key={i}
                    type={placeholder.includes("Email") ? "email" : "text"}
                    placeholder={placeholder}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F86613] transition shadow-sm hover:shadow-md"
                  />
                )
              )}
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F86613] transition shadow-sm hover:shadow-md"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#F86613] to-[#d7540e] hover:from-[#d7540e] hover:to-[#F86613] transition text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Info */}
          <div className="md:pl-10">
        

        <p className="text-gray-700 text-lg leading-relaxed mb-10 font-medium">
  <span className="block text-[#002B5B] text-2xl md:text-3xl font-extrabold mb-4">
    Aanya Enterprise se contact karein aur apna bulk{" "}
    <span className="text-[#F86613]">Titanium Dioxide</span> ka order ya enquiry start karein!
  </span>

  <span className="block mb-3 text-gray-800">
    Chahe aapko <b>Paint</b>, <b>Plastic</b>, <b>Coatings</b> ya <b>Paper</b> ke liye Titanium Dioxide
    chahiye – <span className="text-[#F86613] font-semibold">Bulk Supply Yahan Milegi!</span>
  </span>

  <span className="block text-gray-600">
    Whether you’re starting a new industrial project or upgrading your existing production,
    we’re here to guide you with the right{" "}
    <span className="text-[#002B5B] font-semibold">Titanium Dioxide bulk supply solutions.</span>{" "}
    Fill out the form below, and our team will get in touch within{" "}
    <span className="text-[#F86613] font-semibold">24 hours.</span>
  </span>
</p>


            {/* Contact Items */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="bg-[#F86613]/10 p-4 rounded-xl group-hover:scale-105 transition">
                  <MapPin className="text-[#F86613] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F86613] mb-1">
                    Address:
                  </h4>
                  <p className="text-black text-xl">
                   Plot No 67/2 Kh. No. 154 Village Pooth Khurd New Delhi-110039, Delhi, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="bg-[#F86613]/10 p-4 rounded-xl group-hover:scale-105 transition">
                  <Phone className="text-[#002B5B] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F86613] mb-1">
                    Phone:
                  </h4>
                  <p className="text-black text-xl">
                    +91-85275 57778 / +91-89201 09583
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="bg-[#F86613]/10 p-4 rounded-xl group-hover:scale-105 transition">
                  <Mail className="text-[#002B5B] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F86613] mb-1">
                    Email:
                  </h4>
                  <p className="text-black text-xl">sales@aanyaenterprise.com
info@aanyaenterprise.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F86613]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#002B5B]/10 rounded-full blur-3xl"></div>



  <div className="w-full h-[450px] md:h-[550px] overflow-hidden mt-16">
  <iframe
    loading="lazy"
    src="https://maps.google.com/maps?q=Aanya%20Enterprise%20-%20Titanium%20Dioxide%20Supplier%2C%20PLOT%20NO%2067%2F2%20KH.%20NO.%20154%2C%20Puth%20Khurd%2C%20Delhi%2C%20110039&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near"
    title="Aanya Enterprise - Titanium Dioxide Supplier, PLOT NO 67/2 KH. NO. 154, Puth Khurd, Delhi, 110039"
    aria-label="Aanya Enterprise - Titanium Dioxide Supplier, PLOT NO 67/2 KH. NO. 154, Puth Khurd, Delhi, 110039"
    className="w-full h-full border-0"
    allowFullScreen
  ></iframe>
</div>

      </section>
    </>
  );
};

export default Contact;
