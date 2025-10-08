"use client";
import { useEffect, useState } from "react";
import { FaLightbulb, FaUsersCog, FaRegStar, FaIndustry } from "react-icons/fa";

// Counter Animation Component
const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 7000;
    const increment = end / (duration / 70);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(counter);
  }, [end]);

  return <span>{count}{suffix}</span>;
};

export default function StatsWithIcons() {
  const stats = [
 
    { icon: <FaLightbulb size={50} />, value: 8, label: "Years of Experience", suffix: "+" },
        { icon: <FaIndustry size={50} />, value: 400, label: "Active Customers", suffix: "+" },

    { icon: <FaUsersCog size={50} />, value: 2, label: "Warehouses", suffix: "+" },
    { icon: <FaRegStar size={50} />, value: 100, label: "Employees", suffix: "+" },
  ];

  return (
    <section style={{ backgroundImage: "url(https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726384/footer5_jxvsw5.webp)" }} className="hidden md:block bg-center bg-cover py-13">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center group transition-transform duration-500">
            {/* Icon Flip Effect */}
            <div className="relative w-16 h-16 mb-4 perspective">
              <div className="w-full h-full transition-transform duration-500 transform group-hover:rotate-y-180">
                <div className="absolute inset-0 flex items-center justify-center text-[#F7C600] backface-hidden">
                  {item.icon}
                </div>
             
              </div>
            </div>

            {/* Counter + Label */}
            <h3 className="text-3xl font-bold text-[#0a1445]">
              <Counter end={item.value} suffix={item.suffix || ""} />
            </h3>
            <p className="text-xl font-semibold text-[#0a1445] mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
