"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


const slides = [
  {
    src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819269/70_hdiyek.webp",
    alt: "Caustic Soda",
    cat: "Caustic Soda",
    link:"/categories/caustic-soda"
  },
  {
    src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819180/31_fnfc32.webp",
    alt: "Kronos",
    cat: "Titanium Dioxide",
     link:"/categories/titanium-dioxide-tiO2"
  },
  {
    src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819273/74_s6lfhw.webp",
    alt: "Carbon",
    cat: "Carbon",
     link:"/categories/carbon"
  },
  {
    src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819249/64_pinccw.webp",
    alt: "Lithopone",
    cat: "Lithopone",
     link:"/categories/lithopone"
  },
  {
    src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819188/42_c4yyda.webp",
    alt: "Rutile Titanium",
    cat: "Rutile Titanium",
     link:"/categories/titanium-dioxide-rutile"
  },
  {
    src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819254/67_iyklmr.webp",
    alt: "Optical Brighter",
    cat: "Optical Brighter",
       link:"/categories/optical-brighter"
  },
  {
    src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759819276/76_uskxxg.webp",
    alt: "Calcium Carbonate",
    cat: "Calcium Carbonate",
        link:"/categories/calcium-carbonate"
  },
];

export default function ProductCategorySection() {
  const [startIndex, setStartIndex] = useState(0);

  // Adjust visible slides based on screen width
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) setVisibleSlides(4);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else setVisibleSlides(4);
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? slides.length - visibleSlides : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev >= slides.length - visibleSlides ? 0 : prev + 1
    );
  };

  // Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleSlides]);

  return (
    <section className="relative py-10 bg-[#FFFEF7]">
      {/* Header */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left side */}
        <div className="bg-[#FFFEF7] p-6 sm:p-12 flex flex-col justify-center">
          <p className="uppercase text-sm sm:text-base tracking-widest text-gray-500">
            Explore Our Category
          </p>
          <h2 className="text-3xl font-serif sm:text-4xl md:text-5xl font-bold text-[#00353F] mt-3">
            Take A Look At Our Categories
          </h2>
        </div>

        {/* Right side */}
        <div
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726390/noise_wjihwt.webp')",
          }}
          className="bg-[#00353F] text-white p-6  sm:p-12 flex flex-col justify-center relative"
        >
          <p className="text-sm sm:text-base md:text-base leading-relaxed mb-6">
            At <strong className="text-[#F7C600]">Aanya Enterprise</strong>, we
            offer a wide range of Titanium Dioxide categories to meet the needs
            of different industries. As a trusted Titanium Dioxide wholesaler,
            we ensure every category is carefully selected for quality, purity,
            and performance.
          </p>

          <Link
            href="/products"
            className="inline-block relative bg-[#F7C600] text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
            transition-transform hover:translate-x-1 hover:translate-y-1"
          >
            Browse All Products
          </Link>

          {/* Arrows */}
          <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex gap-3 sm:gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer rounded-full border border-white flex items-center justify-center text-white bg-[#00353F] hover:text-[#F7C600] transition"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer rounded-full border border-white flex items-center justify-center text-white bg-[#00353F] hover:text-[#F7C600] transition"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 mt-6">
        {slides
          .slice(startIndex, startIndex + visibleSlides)
          .map((slide, i) => (
            <div key={i} className="flex flex-col items-center group">
              {/* Card */}
              <Link
                href={slide.link}
                className="relative w-full h-[205px] sm:h-[250px] md:h-[320px] group overflow-hidden rounded-md shadow-md"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  title={slide.alt}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                />

                {/* Bottom overlay */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#F7C600] to-transparent 
                  translate-y-full group-hover:translate-y-0 
                  transition-transform duration-500 opacity-80 flex items-end justify-center"
                >
                  <p className="text-[#00353F] text-lg sm:text-xl font-bold mb-2 sm:mb-4 opacity-0 group-hover:opacity-100 text-center">
                    {slide.cat}
                  </p>
                </div>
              </Link>

              {/* Name below card */}
              <p
                className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-semibold text-transparent bg-clip-text 
                bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 
                tracking-wide uppercase text-center"
              >
                {slide.cat}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
