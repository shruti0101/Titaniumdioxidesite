"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

const products = [
  { name: "Titanium Dioxide (TiO₂)", href: "/categories/titanium-dioxide-tiO2" },
  { name: "Titanium Dioxide Rutile", href: "/categories/titanium-dioxide-rutile" },
  { name: "Lithopone", href: "/categories/lithopone" },
  { name: "Optical Brighter", href: "/categories/optical-brighter" },
  { name: "Caustic Soda", href: "/categories/caustic-soda" },
  { name: "Carbon", href: "/categories/carbon" },
  { name: "Calcium Carbonate", href: "/categories/calcium-carbonate" },
];

const Footer = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer
      className=" relative text-gray-300 pt-16 pb-8 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6)), url(https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726382/bg-footer_wntkmm.webp)`,
      }}
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D33F00] via-orange-400 to-[#D33F00]"></div>

      {/* Content */}
      <div className="relative w-full mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-7">
          {/* Column 1: About Us */}
          <div>
            <Image
              src="/logo.webp"
              alt="Aanya Enterprises Logo"
              width={160}
              height={50}
              className="mb-6"
            />
            <h3 className="text-white font-semibold text-xl mb-4 font-serif">About Us</h3>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              At Aanya Enterprises, we are proud to be recognised as one of
              India’s most trusted suppliers and importers of premium-grade
              chemical compounds.
            </p>
          </div>

          {/* Column 2: Explore Links */}
          <div> 
            <h3 className="text-white font-semibold text-xl mb-4 font-serif">Explore Links</h3>
            <ul className="space-y-2 text-base md:text-lg text-white">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Our Products", href: "/products" },
                { name: "Our Blog", href: "/blogs" },
                { name: "Contact Us", href: "/contact-us" },
                // { name: "Privacy Policy", href: "/privacy-policy" },
                // { name: "Terms & Conditions", href: "/terms" },
              
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F7C600] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4 font-serif">Our Products</h3>
            <ul className="space-y-2 text-base md:text-lg text-white">
              {products.map((p, i) => (
                <li key={i}>
                  <Link
                    href={p.href}
                    className="hover:text-[#F7C600] transition-colors duration-300"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4 font-serif">Contact Us</h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-11 h-11 text-[#F7C600]" />
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                Plot No 67/2 Kh. No. 154 Village Pooth Khurd, New Delhi – 110039,
                Delhi, India
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#F7C600]" />
                <a href="tel:+918527557778" className="text-white underline">+91-85275 57778</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#F7C600]" />
                <a href="tel:+918920109583" className="text-white underline">+91-89201 09583</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#F7C600]" />
              <a href="mailto:sales@aanyaenterprise.com ">sales@aanyaenterprise.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#F7C600]" />
                <a href="mailto:info@aanyaenterprise.com">info@aanyaenterprise.com</a>
              </div>
            </div>

          </div>


  {/* Trust Elite Section */}
        <div className="px-2  items-center md:pb-8">
          <div>
            <h3 className="text-xl font-serif text-white font-semibold  mb-3">
              Trust Elite Certificate
            </h3>
            <p className="text-base text-white leading-relaxed">
            We are proud to present the TrustElite Certificate of Excellence to Aanya Enterprises , recognizing their commitment to exceptional customer service, outstanding business practices, and a dedication to building trust with their customers.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726401/trustseal_vltgii.webp"
              alt="Trust Elite"
              className="w-28 h-28 object-contain cursor-pointer hover:scale-105 transition"
              onClick={() => setIsModalOpen(true)}
            />

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <div className="relative">
                  <button
                    className="absolute top-2 right-2 text-white text-2xl font-bold"
                    onClick={() => setIsModalOpen(false)}
                  >
                    ✕
                  </button>
                  <img
                    src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1760078054/WhatsApp_1_liz2am.webp"
                    alt="Trust Elite Full"
                    className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t px-2 border-gray-600 mt-12 pt-4 text-center text-sm md:text-base text-gray-300">
        <p>Copyright © 2025 Aanya Enterprises. All Rights Reserved.</p>
        <p className="mt-1">
       Website Designed  By Promozione Branding Pvt. Ltd.
          <a href="https://promozionebranding.com/" className="text-[#F7C600] cursor-pointer  underline font-serif"> Website Designing Company.</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
