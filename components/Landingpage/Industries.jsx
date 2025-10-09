"use client";
import Link from "next/link";
import {
  FaIndustry,
  FaCogs,

  FaCube,
  
  FaOilCan,
  FaPills,
  FaPaintRoller,

  FaBuilding,
  FaDraftingCompass,
} from "react-icons/fa";

export default function IndustryGrid() {
  const items = [
    {
      title: "Interior Architectural",
      desc: "As a reliable Titanium Dioxide wholesaler, we provide materials that improve opacity and brightness for interior paints and coatings.",
      icon: <FaDraftingCompass />,
      isYellow: true,
    },
    {
      title: "Exterior Architectural",
      desc: "Our role as a Titanium Dioxide wholesaler ensures weather-resistant and durable solutions for exterior paints.",
      icon: <FaBuilding />,
      isYellow: false,
    },
    {
      title: "Industrial",
      desc: "Being a bulk Titanium Dioxide wholesaler, we support industrial applications that demand consistency and high performance.",
      icon: <FaIndustry />,
      isYellow: false,
    },
    {
      title: "Plastics",
      desc: "As a Titanium Dioxide wholesaler, we supply grades that enhance whiteness, UV resistance, and durability in plastic manufacturing.",
      icon: <FaCube />,
      isYellow: false,
    },
    {
      title: "Polymers & Paint Industry",
      desc: "Trusted as a Titanium Dioxide wholesaler, we deliver products that create smooth finishes, vibrant colors, and lasting protection.",
      icon: <FaPaintRoller />,
      isYellow: false,
    },
    {
      title: "Rubber Industry",
      desc: "Aanya Enterprise, as a Titanium Dioxide wholesaler, provides solutions that improve performance, strength, and stability in rubber products.",
      icon: <FaCogs />,
      isYellow: false,
    },
    {
      title: "Pharmaceutical Industry",
      desc: "With our expertise as a Titanium Dioxide wholesaler, we deliver high-purity materials suitable for safe pharmaceutical applications.",
      icon: <FaPills />,
      isYellow: false,
    },
    {
      title: "Cement Industry",
      desc: "As a Titanium Dioxide wholesaler, we offer products that enhance surface finish and brightness in cement and construction materials.",
      icon: <FaCube />,
      isYellow: false,
    },
    {
      title: "Oil & Gas",
      desc: "As a trusted Titanium Dioxide wholesaler, we supply materials for protective coatings that withstand harsh oil and gas environments.",
      icon: <FaOilCan />,
      isYellow: false,
    },
    {
      title: "Machinery",
      desc: "High-performance industrial machines for efficient operations.",
      icon: <FaCogs />,
      isYellow: false,
    },
  ];

  return (
    <section className="relative mt-16">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight relative inline-block">
          Industries <span className="text-[#F8CC19]">We Serve</span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 md:w-26 h-1 bg-[#F8CC19] rounded-full"></span>
        </h2>
      </div>

      {/* Main Section */}
      <section style={{backgroundImage:"url(https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726389/industry_wpeuig.webp)"}} className="relative bg-center bg-cover w-full flex flex-col lg:flex-row">
     
     
        <div className="absolute inset-0 bg-[#0A3A49]/40 z-10 "></div>

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-start px-6 md:px-10 py-12 z-30">
          <div className="max-w-lg">
            <h2 className="text-3xl font-serif sm:text-4xl md:text-6xl font-bold text-white mb-6 animate-bounce leading-tight">
              Titanium Dioxide Wholesaler
            </h2>
            <p className="text-white text-base md:text-lg leading-relaxed mb-6">
              At <strong className="text-[#FFCC2E]">Aanya Enterprise</strong>, we are a{" "}
              <strong className="text-[#FFCC2E]">trusted Titanium Dioxide wholesaler</strong> 
              catering to multiple industries across India and global markets. 
              Our bulk Titanium Dioxide (TiO₂) enhances{" "}
              <strong className="text-[#FFCC2E]">
                whiteness, opacity, brightness, and durability,
              </strong>{" "}
              making us the preferred choice for manufacturers across diverse sectors.
            </p>
            <ul className="space-y-2 text-base md:text-lg text-white ">
              <li><span className="text-yellow-400 text-xl">✦</span> Superior whiteness & brightness</li>
              <li><span className="text-yellow-400 text-xl">✦</span> Trusted across multiple industries</li>
              <li><span className="text-yellow-400 text-xl">✦</span> Consistent bulk supply</li>
            </ul>

            <Link href="/contact-us">
                  <button className="mt-8 relative px-6 py-3 font-semibold bg-[#F7C600] text-white cursor-pointer transition-all duration-700 before:content-[''] before:absolute before:inset-0 before:border before:border-[#F7C600] before:transition-transform before:duration-500 before:ease-in-out before:translate-y-2 before:translate-x-2 hover:before:-translate-y-1 hover:before:-translate-x-2">
              Know More
            </button>
            </Link>
      
          </div>
        </div>

        {/* Right Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 z-30 px-2 md:px-0">
          {items.map((item, i) => (
            <a
              href="#"
              key={i}
              className="relative group overflow-hidden flex flex-col items-center justify-center p-2 min-h-[160px] sm:min-h-[190px] md:min-h-[220px]"
            >
              {/* Background */}
              <div
                className={`absolute inset-0 ${
                  item.isYellow
                    ? "bg-[#F7C600]"
                    : "bg-[#0A3A49]/60 backdrop-blur-md"
                }`}
                aria-hidden="true"
              />
              {!item.isYellow && (
                <div className="absolute inset-0 bg-[#F7C600] -translate-x-full group-hover:translate-x-0 transform transition-transform duration-500 ease-in-out" />
              )}

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div
                  className={`text-3xl md:text-4xl mb-2 transition-colors duration-300 ${
                    item.isYellow
                      ? "text-black"
                      : "text-white group-hover:text-black"
                  }`}
                >
                  {item.icon}
                </div>
                <h3
                  className={`text-lg md:text-xl mb-2 font-semibold tracking-wide transition-colors duration-300 ${
                    item.isYellow
                      ? "text-black"
                      : "text-white group-hover:text-black"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm md:text-base transition-colors duration-300 ${
                    item.isYellow
                      ? "text-black"
                      : "text-white group-hover:text-black"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}
