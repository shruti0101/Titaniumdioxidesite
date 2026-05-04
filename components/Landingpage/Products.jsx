"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const services = [
  {
    title: "Ti-Pure R902",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819161/1_fyfvb1.webp",
      link:"/products/titanium-dioxide-rutile-dawn-r2195"
  },

  {
    title: "Titanium Dioxide Kronos R1000",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819180/31_fnfc32.webp",
      link:"/products/titanium-dioxide-kronos-r2220"
  },

  {
    title: "Lithopone B-301",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819249/64_pinccw.webp",
      link:"/products/lithopone-b301"
  },

  {
    title: "Caustic Soda Flakes",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819269/70_hdiyek.webp",
      link:"/products/caustic-soda-flakes"
  },

   {
    title: "Carbon Black Printex",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819273/73_utpvky.webp",
      link:"/products/carbon-black-printex-35"
  },

   {
    title: "Optical Brightener",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819254/68_dk2dkc.webp",
      link:"/products/optical-brightener-masterbatch"
  },

  { title: "Calcium Carbonate", image: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819276/76_uskxxg.webp",
       link:"/products/calcium-carbonate-bp"
   },
  

  { title: "Titanium Dioxide-TRONOX CR826",  image: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819240/50_qt0w5q.webp",
       link:"/products/titanium-dioxide-tiO2-tronox-cr826"
   },

];

export default function ServicesGrid() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <section className="relative bg-[#EFE8D7] px-6 py-5 md:py-20 lg:px-12">
        {/* Content */}
        <div className="relative text-center mb-12">
          <h2 className="text-3xl font-serif md:text-5xl font-extrabold text-black tracking-tight inline-block relative">
            Our <span className="text-[#F8CC19]"> Products</span>
            {/* Accent underline */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#F8CC19] rounded"></span>
          </h2>
        </div>

      
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((service, index) => (
        <div
          key={index}
          onClick={() => setActiveCard(index)}
          className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Image */}
          <Link href={service.link}>
            <img
              src={service.image}
              alt={service.title}
              title={service.title}
              className={`w-full object-contain transition-all duration-500
              ${
                activeCard === index
                  ? "scale-105"
                  : "group-hover:scale-105"
              }`}
            />
          </Link>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

          {/* Content */}
          <div className="absolute bottom-3 left-0 w-full px-3 text-center text-white z-10">
            <h3 className="text-lg md:text-2xl font-semibold">
              {service.title}
            </h3>


            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/+918527557778?text=Hi, I'm interested in ${service.title}`}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="mt-2 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm md:text-lg px-3 py-1.5 rounded-full shadow-md transition-all duration-300 opacity-1000"
            >
              <FaWhatsapp className="text-md" />
              WhatsApp Now
            </a>
          </div>

          {/* Arrow */}
          {activeCard !== index && (
            <div className="absolute top-3 right-3 bg-[#F8CC19] p-2 md:p-3 rounded-full transition-all duration-300 opacity-90 group-hover:opacity-100 z-10">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
      ))}
    </div>


        <div className="mt-8 flex justify-center items-center">
          <Link
            href="/products"
            className="relative px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold
            bg-[#00537B] text-white rounded-md
            transition-all duration-700
            before:content-[''] before:absolute before:inset-0
            before:border before:border-[#00537B]
            before:transition-transform before:duration-500
            before:translate-y-1 before:translate-x-1 
            hover:before:-translate-y-1 hover:before:-translate-x-1 hover:scale-105"
          >
            Explore All Products
          </Link>
        </div>
      </section>
    </>
  );
}
