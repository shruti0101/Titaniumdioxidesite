"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    desktop: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1760072255/desk-banner-2_aekeg9.webp",
    mobile: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1760072289/mobile-2_uvkqov.webp",
    alt: "Slide 1",
    name:"Titanium Dioxide"
  },
  {
    desktop: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726384/home1_rtnart.webp",
    mobile: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1760072289/mobile-1_vjnmtq.webp",
    alt: "Slide 2",
     name:"Titanium Dioxide"
  },
  {
    desktop: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1760072256/desk-banner_mjl3as.webp",
    mobile: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1760072256/bg2_fa1vlu.jpg",
    alt: "Slide 3",
     name:"Titanium Dioxide"
  },
];

const ArrowCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full overflow-hidden bg-[#F3F5F7]">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            {/* Desktop Image */}
            <Image
              src={slide.desktop}
              alt={slide.alt}
              title={slide.name}
            width={1200} height={600}
              className="hidden md:block w-full object-contain"
              priority
            />

            {/* Mobile Image */}
            <Image
              src={slide.mobile}
              alt={slide.alt + " Mobile"}
              width={600}
              height={1200}
              className="block md:hidden w-full mt-24 object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8">
        <button
          onClick={prevSlide}
          className="btn btn-circle bg-white/50 hover:bg-white"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle bg-white/50 hover:bg-white"
        >
          ❯
        </button>
      </div>

 
    </div>
  );
};

export default ArrowCarousel;
