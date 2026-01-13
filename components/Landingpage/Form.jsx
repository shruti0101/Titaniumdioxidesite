"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

const EnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const product = form.products.value;
    const message = form.message.value;
    const place = form.place.value;

    setLoading(true);
    setSuccessMessage("Sending...");

    try {
      const { data } = await axios.post("https://brandbnalo.com/api/form/add", {
        platform: "Titanium wholesaler city page Enquiry Form",
        platformEmail: "sales@aanyaenterprise.com",
        name,
        phone,
        email,
        place,
        product,
        message,
      });

      if (data?.success) {
        setSubmitted(true);
        setSuccessMessage("✅ Your enquiry has been submitted successfully!");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}
Place: ${place}
Message: ${message}
Contact: ${phone}`;

        setTimeout(() => {
          window.open(
            `https://wa.me/918527557778?text=${encodeURIComponent(
              whatsappText
            )}`,
            "_blank"
          );
        }, 1000);

        form.reset();
      } else {
        setSuccessMessage("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726382/bg-layer_xpdfhz.webp)",
      }}
      className="relative bg-center bg-cover w-full py-12 px-4"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Quality You Can Trust
        </h2>

        <p className="text-black text-lg leading-relaxed mb-6">
          At <span className="font-semibold text-yellow-500">Aanya Enterprise</span>, we believe that the foundation of a trusted Titanium Dioxide wholesaler lies in
          <span className="font-semibold"> uncompromised quality</span>.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative z-10">
        {/* Left Image */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759736912/Gemini_Generated_Image_hj0r03hj0r03hj0r_bnh9or.webp"
            alt="Application of Titanium Dioxide"
            width={450}
            height={400}
            className="object-cover rounded-xl z-10"
          />
        </div>

        {/* Right Form */}
        <div className="relative w-full max-w-lg border border-white/30 p-8 rounded-xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#333] rounded-xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-serif text-[#F7C600] text-center mb-8 drop-shadow-lg">
              Quick Enquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Product Enquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_nosponsor" value="false" />
              <input type="hidden" name="_cc" value="inquiry.promozione@gmail.com" />

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="products"
                  className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Product
                  </option>
                  <option value="Titanium Dioxide (TiO₂)">Titanium Dioxide (TiO₂)</option>
                  <option value="Titanium Dioxide Rutile">Titanium Dioxide Rutile</option>
                  <option value="Lithopone">Lithopone</option>
                  <option value="Optical Brighter">Optical Brighter</option>
                  <option value="Caustic Soda">Caustic Soda</option>
                  <option value="Calcium Carbonate">Calcium Carbonate</option>
                </select>

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
                  required
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center border border-gray-300 rounded-md bg-white/95 focus-within:ring-2 focus-within:ring-[#F7C600]">
                  <span className="px-2">🇮🇳</span>
                  <input
                    type="tel"
                    name="phone"
                    maxLength={10}
                    minLength={10}
                    placeholder="081234 56789"
                    className="p-3 flex-1 rounded-md outline-none bg-transparent"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
                  required
                />
              </div>

              <input
                type="text"
                name="place"
                placeholder="Place"
                className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-sm font-medium transition"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
            </form>

            {successMessage && (
              <p className="text-center text-white mt-4">{successMessage}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
