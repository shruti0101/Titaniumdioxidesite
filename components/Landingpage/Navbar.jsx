"use client";
import { useState, useEffect } from "react";
import { ChevronDown, MapPin, Mail, Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { categories } from "@/Data";
import Enquiry from "@/components/Enquiry"

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about-us" },
    {
      label: "Products",
      link: "/products",
      dropdown: [
        "Titanium Dioxide (TiO₂)",
        "Titanium Dioxide Rutile",
        "Lithopone",
        "Optical Brighter",
        "Caustic Soda",
        "Carbon",
        "Calcium Carbonate",
      ],
    },
    { label: "Blogs", link: "/blogs" },
    { label: "Contact Us", link: "/contact-us" },
  ];

  return (

    <>
    
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg text-black" : "bg-transparent text-white"
      }`}
    >
      {/* Top Info Bar */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[#F7C600] border-b border-gray-200 text-black"
            : "bg-[#00537B] backdrop-blur-md border-b border-white/20 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 text-sm font-medium">
          {/* Desktop Info */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Plot No 67/2, Pooth Khurd, New Delhi-110039, India</span>
            </div>
            <div className="flex items-center gap-2 border-l pl-4">
              <Mail size={16} />
              <span>sales@aanyaenterprise.com</span>
            </div>
            <div className="flex items-center gap-2 border-l pl-4">
              <Phone size={16} />
              <span>+91-85275 57778</span>
            </div>
            <div className="flex items-center gap-2 border-l pl-4">
              <Phone size={16} />
              <span>+91-89201 09583</span>
            </div>
          </div>

          {/* Mobile Info */}
          <div className="flex lg:hidden items-center gap-5 overflow-x-auto no-scrollbar">
            <a
              href="https://maps.google.com"
              className="flex items-center gap-1 text-xs"
            >
              <MapPin size={14} /> <span>Delhi</span>
            </a>
            <a
              href="mailto:sales@aanyaenterprise.com"
              className="flex items-center gap-1 text-xs"
            >
              <Mail size={14} /> <span>Email</span>
            </a>
            <a
              href="tel:+918527557778"
              className="flex items-center gap-1 text-xs"
            >
              <Phone size={14} /> <span>Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-white text-black border-b border-gray-200"
            : " bg-black/20 backdrop-blur-xs text-white "
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-1">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                className="w-20 md:w-auto  md:h-auto"
                src="/logo.webp"
                alt="Logo"
                width={110}
                height={50}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex text-xl font-medium">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="relative group px-6"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {item.dropdown ? (
                  <Link
                    href={item.link}
                    className="flex items-center gap-1 py-5 hover:text-[#F7C600] transition cursor-pointer"
                  >
                    {item.label}

                    <ChevronDown size={14} />
                  </Link>
                ) : (
                  <Link
                    href={item.link}
                    className="flex items-center gap-1 py-5 hover:text-[#F7C600] transition"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.dropdown && openMenu === item.label && (
                  <div className=" absolute left-0 top-full mt-0 w-60 bg-[#00537B] text-white shadow-lg border-2 border-yellow-400 before:content-[''] before:absolute before:inset-0 before:border-2 before:border-yellow-500 before:z-160 before:translate-x-2 before:translate-y-2 before:block before:z-[-1] ">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/categories/${cat.id}`}
                        className={`block cursor-pointer text-lg  px-3 py-2  transition-all  hover:bg-[#F7C600]
                      
                      
                    `}
                      >
                        {cat.name} 
                        <span className="text-white ml-2">→</span>
                        
                      
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => setIsFormOpen(true)} className=" relative px-6 py-3 font-semibold bg-[#F7C600] text-white cursor-pointer transition-all duration-700 before:content-[''] before:absolute before:inset-0 before:border-1 before:border-[#F7C600] before:transition-transform before:duration-500 before:ease-in-out before:translate-y-2 before:translate-x-2 hover:before:-translate-y-1 hover:before:-translate-x-2 ">
              {" "}
              Request A Quote{" "}
            </button>

            <a
              href="https://wa.me/918527557778?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold bg-[#25D366] text-white cursor-pointer transition-all duration-700 before:content-[''] before:absolute before:inset-0 before:border before:border-[#25D366] before:transition-transform before:duration-500 before:ease-in-out before:translate-y-2 before:translate-x-2 hover:before:-translate-y-1 hover:before:-translate-x-2 hover:shadow-lg hover:bg-[#20ba5a] "
            >
              <FaWhatsapp size={20} className="text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setMobileNavOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileNavOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute left-0 top-0 h-full w-3/4 max-w-xs bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
              <Image src="/logo.webp" alt="Logo" width={90} height={45} />
              <button onClick={() => setMobileNavOpen(false)}>
                <X size={26} />
              </button>
            </div>

            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item, idx) => (
                <div key={idx}>
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex justify-between w-full py-2 text-lg font-medium"
                        onClick={() =>
                          openMenu === item.label
                            ? setOpenMenu(null)
                            : setOpenMenu(item.label)
                        }
                      >
                        {item.label}
                        <ChevronDown size={16} />
                      </button>
                      {openMenu === item.label && (
                        <div className="pl-4 space-y-2">
                          {item.dropdown.map((d, i) => (
                            <Link
                              key={i}
                              href={`/products/${d
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                              className="block py-1 text-sm hover:text-yellow-400"
                            >
                              {d}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.link}
                      className="block py-2 text-lg font-medium"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-6 space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                  Request a Quote
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


    </header>


     {/* Pass isOpen + onClose to ContactForm */}
                  {isFormOpen && (
                    <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
                  )}
    </>
  );
}
