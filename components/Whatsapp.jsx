'use client'
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <>
      {/* WhatsApp Floating Button (Right side) */}
      <a
        href="https://wa.me/+918527557778"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Aanya Enterprises"
        className="fixed bottom-5 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Call Floating Button (Left side) */}
      <a
        href="tel:+918920109583"
        aria-label="Call Aanya Enterprises"
        className="fixed bottom-21 right-4 z-50 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition animate-bounce"
      >
        <FaPhoneAlt size={27} />
      </a>
    </>
  );
};

export default Whatsapp;
