"use client";
import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
import Enquiry from "@/components/Enquiry";
import { ArrowUpRight } from "lucide-react";
export default function ProductPage({ params }) {
  const { productId } = React.use(params);
  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);
  const [activeImage, setActiveImage] = useState(product?.image[0]);
     const [isFormOpen, setIsFormOpen] = useState(false)

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;
  }

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>
        <meta name="description" content={product.metaDescription || product.name} />
      </Head>

      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759831101/banner_lklwmi.webp')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="bg-white font-serif text-[#B57E1F] text-2xl md:text-5xl p-2 rounded font-bold">{product.name}</h1>
        </div>
      </section>

      {/* Main Product Area */}
      <section className=" w-full mx-auto px-4 py-16 space-y-16">
        
        {/* Top Section: Images + Specs */}
        <div className="flex flex-col lg:flex-row gap-15 items-center justify-center">
          {/* Image Gallery */}
          <div className=" space-y-4">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">

              
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={500}
                height={500}
                className="object-contain  "
                unoptimized
              />
            </div>
          
          </div>

          {/* Specifications Card */}
          <div className=" bg-white rounded-xl shadow-lg p-6 md:p-10">
            <h2 className="text-2xl  md:text-3xl font-semibold mb-6 text-[#B57E1F] border-b pb-2 font-serif">Product Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full  border-collapse">
                <tbody>
                  {product.specs?.map((spec, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-[#00537B]/20"} hover:bg-[#F7C600]`}>
                      <td className="p-4  text-lg font-medium text-[#00537B] w-1/3">{spec.label}</td>
                      <td className="p-4 text-lg text-black">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


              <p className="mt-2 text-gray-600 text-sm md:text-base">
              For more information about the product, please contact us.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <button  onClick={() => setIsFormOpen(true)} className="flex-1 cursor-pointer text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow hover:from-blue-600 hover:to-cyan-700 transition font-semibold">
                Enquire Now
              </button>
              <a
                href={`https://wa.me/+917042039777?text=Hello, I am interested in ${encodeURIComponent(
                  product.name
                )} (Model: ${product.model}). Please provide more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow hover:from-green-600 hover:to-green-700 transition font-semibold"
              >
                WhatsApp Now
              </a>
          </div>
        </div>
        </div>

 {/* Bottom Section: Description + Enquiry */}
<div className="flex flex-col lg:flex-row gap-5">
  {/* Product Description */}
  <div className="lg:w-2/2 bg-white rounded-xl shadow-lg p-6 md:p-10 overflow-y-auto max-h-[700px]">
    <h2 className="text-2xl md:text-4xl font-semibold text-[#B57E1F] mb-6 border-b pb-2 font-serif">Product Description</h2>
    <div className="space-y-10">
      {Array.isArray(product.description) ? (
        product.description.map((block, i) => {
          if (block.type === "h2") return <h3 key={i} className="text-xl md:text-2xl font-bold my-4 text-red-600">{block.text}</h3>;

          if (block.type === "p") return <p key={i} className="text-black text-lg leading-relaxed">{block.text}</p>;

          if (block.type === "ul") return (
            <ul key={i} className="list-disc space-y-3 text-lg my-4 ml-6 text-black mb-4">
              {block.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          );
        })
      ) : (
        <p className="text-gray-800">{product.description}</p>
      )}
    </div>
  </div>

  {/* Enquiry Form Card */}
  <div className="lg:w-1/3 bg-[#00537B]/20 rounded-xl shadow-lg p-6 md:p-8 flex flex-col">
    <h2 className="text-2xl md:text-3xl  font-semibold text-[#00537B] mb-6 border-b pb-2 text-center">Enquiry Form</h2>
    
    {/* Fixed height + scrollable form */}
    <form className="space-y-6 overflow-y-auto mt-4 flex-1 max-h-[600px]">
      <input type="text" placeholder="Your Name" className="w-full placeholder-black p-3 border-2 border-black rounded-lg focus:outline-none focus:border-white " />
       
      <input type="email" placeholder="Your Email" className="w-full placeholder-black p-3 border-2 border-black rounded-lg focus:outline-none focus:border-white " />

      <input type="tel" placeholder="Mobile Number" className="w-full placeholder-black p-3 border-2 border-black rounded-lg focus:outline-none focus:border-white " />

      <select className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:border-white" defaultValue="">
        <option value="" disabled>Select Product</option>
        <option value="Titanium Dioxide (TiO₂)">Titanium Dioxide (TiO₂)</option>
        <option value="Titanium Dioxide Rutile">Titanium Dioxide Rutile</option>
        <option value="Lithopone">Lithopone</option>
        <option value="Optical Brighter">Optical Brighter</option>
        <option value="Caustic Soda">Caustic Soda</option>
        <option value="Calcium Carbonate">Calcium Carbonate</option>
      </select>
      <textarea placeholder="Your Message" rows={4} className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:border-white placeholder-black" />
      <button type="submit" className="w-full mt-4 py-3 bg-[#00537B] text-white rounded-lg font-semibold hover:bg-[#004061] transition cursor-pointer">Submit Enquiry</button>
    </form>
  </div>
</div>

  {/* Pass isOpen + onClose to ContactForm */}
              {isFormOpen && (
                <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
              )}
      </section>
    </>
  );
}
