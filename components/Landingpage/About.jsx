import {
  FaGlobeAmericas,
  FaHandshake,
  FaCertificate,
  FaTruckMoving,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";
import Image from "next/image";
import Ti from "@/components/Animations/Ti";
import Link from "next/link";

export default function AboutUs() {
 const features = [
  {
    icon: <FaGlobeAmericas className="w-6 h-6 text-[#00537B]" />,
    title: "Global Expertise",
    desc: "Extensive international trade experience ensures access to top-grade titanium dioxide.",
  },
  {
    icon: <FaHandshake className="w-6 h-6 text-[#00537B]" />,
    title: "Trusted Network",
    desc: "Long-standing relationships with manufacturers across Europe, Asia, and the Middle East.",
  },
  {
    icon: <FaCertificate className="w-6 h-6 text-[#00537B]" />,
    title: "Commitment to Quality",
    desc: "Strict quality control measures guarantee products that meet global standards.",
  },
  {
    icon: <FaTruckMoving className="w-6 h-6 text-[#00537B]" />,
    title: "Reliability",
    desc: "Consistent supply chain management minimizes disruptions for clients in India.",
  },
  {
    icon: <FaCogs className="w-6 h-6 text-[#00537B]" />,
    title: "Tailored Solutions",
    desc: "Flexible supply options designed to meet specific client requirements.",
  },
  {
    icon: <FaLightbulb className="w-6 h-6 text-[#00537B]" />,
    title: "Collaborative Support",
    desc: "Guidance on TiO₂ applications, technical insights, and industry trends.",
  },
];

  return (
    <section
    
      className="relative   bg-center bg-cover pb-3 md:py-8"
    >
      {/* Decorative background image */}
      <Image
        src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726382/behind-bg_1_pcbihm.webp"
        width={220}
        height={120}
        alt="Background"
        className="hidden md:block absolute top-0 left-0 opacity-70"
      />

      {/* Main container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6">
        {/* Left content (animation / image) */}
        <div className="flex justify-center">
          <Ti />
        </div>

        {/* Right content (text + button + contact) */}
        <div>
          <h2 className="font-serif text-2xl lg:text-4xl font-bold text-gray-900">
         About Us - 
          </h2>
          <h1 className="text-[#F7C600]  font-bold text-2xl lg:text-4xl mb-2 md:mb-6">
           Titanium Dioxide wholesaler
          </h1>

          <p className="text-lg text-black leading-relaxed mb-4">
            <strong>Aanya Enterprise </strong> is a trusted <strong >Titanium Dioxide (TiO₂) wholesaler in India, </strong> 
            serving a wide range of industries with consistent quality and reliability. Over the years, we have built a strong reputation by offering high-purity Titanium Dioxide in bulk at competitive prices, backed by efficient service and timely delivery.
          </p>

          <p className="text-lg text-black leading-relaxed mb-4">
            We understand that Titanium Dioxide plays a vital role in enhancing the 
            <strong>brightness, opacity, and durability</strong>of finished products. That’s why we focus on providing manufacturers in 
            <strong>
             paints, plastics, paper, rubber, cosmetics, and printing inks 
            </strong>
          with premium-grade materials that meet global standards.
          </p>

          <p className="text-lg text-black leading-relaxed mb-6">
           At <strong>Aanya Enterprise</strong>{" "}
           , we are committed to long-term business relationships built on trust, integrity, and customer satisfaction. Whether you are a small manufacturer or a large-scale industry, we are here to be your reliable 
            <strong>Titanium Dioxide wholesaler.</strong>
          </p>

          {/* Actions */}
          <div className="flex flex-nowrap items-center gap-3">
            {/* Button */}
            <Link href="/about"
              className="relative px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold
      bg-[#00537B] text-white rounded-md
      transition-all duration-700
      before:content-[''] before:absolute before:inset-0
      before:border before:border-[#00537B]
      before:transition-transform before:duration-500
      before:translate-y-1 before:translate-x-1 
      hover:before:-translate-y-1 hover:before:-translate-x-1"
            >
              Know More
            </Link>

            {/* Phone Info */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#F7C600] border-2 border-[#F7C600]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 sm:w-6 h-5 sm:h-6 text-[#00537B] animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.2 3.6a1 1 0 01-.27 1.06l-2.1 2.1a16 16 0 007.07 7.07l2.1-2.1a1 1 0 011.06-.27l3.6 1.2a1 1 0 01.684.95V20a2 2 0 01-2 2h-1C8.82 22 2 15.18 2 7V5z"
                  />
                </svg>
              </div>
              <div className="text-sm sm:text-base">
                <p className="text-gray-700">Call 24/7</p>

                <a href="tel:+9185275205777"
                className="font-bold underline text-[#00537B] text-base sm:text-lg">
                  +91 85275205777
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="mt-5 md:mt-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 border-2 border-gray-400 rounded-xl  transition-transform duration-300 hover:scale-105 group"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F7C600] shrink-0">
                  {feature.icon}
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="relative text-lg font-semibold text-gray-800
                      after:content-[''] after:absolute after:left-0 after:bottom-0
                      after:w-0 after:h-[2px] after:bg-[#F7C600]
                      after:transition-all after:duration-500
                      group-hover:after:w-full"
                  >
                    {feature.title}
                  </h3>
                  <p className="text-MD text-black mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
