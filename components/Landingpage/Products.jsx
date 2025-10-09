"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
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

  // { title: "Green Optical Brighter", subtitle: "Infrastructure Reliability", image: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759751316/67_pw25m7.webp" },
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(index)}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
            >
              <Link href={service.link}>
 {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                title={service.title}
                className={`w-full h-80 object-cover transition-all duration-500
                ${activeCard === index ? "scale-105" : "group-hover:scale-105 "}`}
              />
              </Link>

             

              {/* Content */}
              <div className="absolute bottom-3 left-3 text-black">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm">{service.subtitle}</p>
              </div>

              {/* Arrow */}
              {activeCard !== index && (
                <div className="absolute top-3 right-3 bg-[#F8CC19] p-2 rounded-full transition-opacity group-hover:opacity-100 opacity-90">
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
