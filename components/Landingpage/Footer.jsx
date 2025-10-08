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

const products = [
  { name: "Titanium Dioxide (TiO₂)", href: "/products/tio2" },
  { name: "Titanium Dioxide Rutile", href: "/products/tio2-rutile" },
  { name: "Lithopone", href: "/products/lithopone" },
  { name: "Optical Brighter", href: "/products/optical-brighter" },
  { name: "Caustic Soda", href: "/products/caustic-soda" },
  { name: "Carbon", href: "/products/carbon" },
  { name: "Calcium Carbonate", href: "/products/calcium-carbonate" },
];

const Footer = () => {
  return (
    <footer
      className="relative text-gray-300 pt-16 pb-8 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6)), url(https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726382/bg-footer_wntkmm.webp)`,
      }}
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D33F00] via-orange-400 to-[#D33F00]"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Column 1: About Us */}
          <div>
            <Image
              src="/logo.webp"
              alt="Aanya Enterprises Logo"
              width={160}
              height={50}
              className="mb-6"
            />
            <h3 className="text-white font-semibold text-xl mb-4">About Us</h3>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              At Aanya Enterprises, we are proud to be recognised as one of
              India’s most trusted suppliers and importers of premium-grade
              chemical compounds.
            </p>
          </div>

          {/* Column 2: Explore Links */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">Explore Links</h3>
            <ul className="space-y-2 text-base md:text-lg text-white">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Our Products", href: "/products" },
                { name: "Our Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Refund & Returns Policy", href: "/refund-policy" },
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
            <h3 className="text-white font-semibold text-xl mb-4">Our Products</h3>
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
            <h3 className="text-white font-semibold text-xl mb-4">Contact Us</h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-6 h-6 text-[#F7C600]" />
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                Plot No 67/2 Kh. No. 154 Village Pooth Khurd, New Delhi – 110039,
                Delhi, India
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#F7C600]" />
                <span className="text-white">+91-85275 57778</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#F7C600]" />
                <span className="text-white">+91-89201 09583</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#F7C600]" />
                <span className="text-white">sales@aanyaenterprise.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#F7C600]" />
                <span className="text-white">info@aanyaenterprise.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-6">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" target="_blank" className="hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 hover:text-[#F7C600] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-600 mt-12 pt-4 text-center text-sm md:text-base text-gray-300">
        <p>Copyright © 2025 Aanya Enterprises. All Rights Reserved.</p>
        <p className="mt-1">
       Website Designed  By Promozione Branding Pvt. Ltd.
          <a href="https://promozionebranding.com/" className="text-[#F7C600] cursor-pointer  underline"> Website Designing Company.</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
