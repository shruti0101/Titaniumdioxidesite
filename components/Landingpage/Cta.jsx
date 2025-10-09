import React from "react";

const Cta = () => {
  return (
    <section
      className="relative w-full h-[45vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726383/cta_xyfvix.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-12 md:px-20">
        <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Partner with <span className="text-[#F7C600] font-serif">Aanya Enterprise</span>, your reliable Titanium Dioxide wholesaler, and let’s build long-term success together.
        </h2>
        <p className="text-white text-lg sm:text-3xl mb-1 font-serif">📞 +91-85275 57778</p>
        <p className="text-white text-base sm:text-lg mb-6 font-serif">For more details, contact us now!</p>

        <a
          href="tel:+918527557778"
          className="inline-block bg-[#F7C600] text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          Contact Now
        </a>
      </div>
    </section>
  );
};

export default Cta;
