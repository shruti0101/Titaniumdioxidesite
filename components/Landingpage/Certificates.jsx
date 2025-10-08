import React from "react";
import Image from "next/image";

const Certificates = () => {
  const certificates = [
    { id: 1, src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726382/certificate1_mrpclq.webp", alt: "Certificate 1" },
    { id: 2, src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726383/cetificate-2_lpwo9t.webp", alt: "Certificate 2" },
    { id: 3, src: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726382/certificate-3_zawsem.webp", alt: "Certificate 3" },
  ];

  return (
    <section className="w-full relative bg-[#FEF3E2] py-8 sm:py-10 px-4 sm:px-6 md:px-12">
      {/* Heading */}
      <h2 className="font-bold relative text-3xl sm:text-4xl md:text-5xl mb-5 sm:mb-16 text-center text-gray-900">
        Our Certificates
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-1 bg-[#F8CC19] rounded-full"></span>
      </h2>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
        {certificates.map((cert) => (
          <div key={cert.id} className="flex justify-center">
            <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-lg border border-gray-200 transition duration-300 hover:shadow-2xl hover:border-yellow-400 hover:scale-105 w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
