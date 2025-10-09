"use client";
import { BadgeCheck, Crown, Wallet, Truck, Boxes, Handshake } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative">
      <div className="grid gap-10 lg:grid-cols-5">
        {/* Left Half - Image Background */}
        <div
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726395/roughbg_ctd3f3.webp')",
            backgroundSize: "200px",
            mixBlendMode: "multiply",
          }}
          className="bg-[#F7C600] opacity-90 flex items-center justify-center lg:col-span-2 px-4 py-8"
        >
          <div className="relative w-full ">
            <Image
              src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759735071/ChatGPT_1_rzzrrm.webp"
              alt="Why Choose Us"
              width={1000}
              height={1000}
              className="relative w-full max-h-[500] md:max-h-[650px]   object-cover lg:absolute lg:-top-80 lg:left-13"
            />
          </div>
        </div>

        {/* Right Half - Content */}
        <div className="px-4 sm:px-8 md:px-16 py-4 md:py-8 flex flex-col justify-center lg:col-span-3">
          <div className="text-center md:text-start mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-gray-900 tracking-tight relative inline-block">
              Why <span className="text-[#F8CC19]">Choose Us</span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 md:w-24 h-1 bg-[#F8CC19] rounded-full"></span>
            </h2>
          </div>

          <p className="text-black mb-6 text-sm sm:text-base md:text-lg max-w-full sm:max-w-xl">
            Choosing the right{" "}
            <strong className="text-[#F7C600]">Titanium Dioxide wholesaler</strong>{" "}
            is crucial for industries that depend on consistent quality and
            reliable supply. At Aanya Enterprise, we go beyond being just a
            wholesaler—we are a trusted partner dedicated to helping your
            business grow with premium-grade Titanium Dioxide, competitive
            pricing, and world-class service.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <BadgeCheck className="w-10 h-10" />,
                title: "Assured Quality in Every Batch",
                desc: "Quality is at the core of what we do. As a responsible Titanium Dioxide wholesaler, we supply products that meet strict quality checks and international standards, ensuring high purity, brightness, and consistency."
              },
              {
                icon: <Crown className="w-10 h-10" />,
                title: "Trusted Experience as a Wholesaler",
                desc: "With years of experience in the chemical trading industry, we have established ourselves as a dependable Titanium Dioxide wholesaler for businesses in paints, plastics, paper, rubber, and many more sectors."
              },
              {
                icon: <Wallet className="w-10 h-10" />,
                title: "Competitive Bulk Pricing",
                desc: "Being a bulk Titanium Dioxide wholesaler, we offer competitive pricing that allows businesses to maximize value without compromising on quality."
              },
              {
                icon: <Truck className="w-10 h-10" />,
                title: "Reliable Logistics & On-Time Supply",
                desc: "That’s why as a dedicated Titanium Dioxide wholesaler, we maintain a strong logistics network to guarantee timely deliveries across India and global markets."
              },
              {
                icon: <Boxes className="w-10 h-10" />,
                title: "Large-Scale Availability",
                desc: "Our capacity ensures uninterrupted availability to meet your production demands."
              },
              {
                icon: <Handshake className="w-10 h-10" />,
                title: "Customer-Centric Approach",
                desc: "Our focus is on transparent dealings, responsive service, and personalized solutions tailored to every client’s requirement."
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center text-[#01353F] transition-transform duration-700 group-hover:rotate-y-180">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                  <p className="text-sm text-black mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
