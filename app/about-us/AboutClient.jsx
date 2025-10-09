"use client";

export const dynamic = "force-dynamic";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Form from "@/components/Landingpage/Form";
import { Eye, Gem, Target } from "lucide-react";
import { CheckCircle, CheckCircle2 } from "lucide-react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const features = [
    "Years of industry experience make us a reliable Titanium Dioxide Wholesaler.",
    "Every batch of Titanium Dioxide is tested for purity, brightness, and particle size.",
    "Maintain large inventory stocks to efficiently fulfill bulk orders.",
    "Expert guidance on dispersion, formulation, and application for best results.",
    "Serving manufacturers in paints, coatings, plastics, paper, cosmetics, and food.",
    "Personalized solutions, flexible packaging, and timely delivery.",
  ];

  const tabs = [
    {
      id: "vision",
      icon: <Eye className="w-14 h-14" />,
      title: "VISION",
      color: "#F7C600",
      content: (
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold text-[#F7C600]">
            Our Vision as a Titanium Dioxide Wholesaler
          </h2>
          <p>
            At <b>Aanya Enterprise</b>, our vision is to become the globally
            recognized Titanium Dioxide Wholesaler, known for excellence,
            innovation, and sustainable practices. As a forward-thinking
            Titanium Dioxide Wholesaler, we focus on helping our clients achieve
            success by supplying high-quality Titanium Dioxide (TiO₂) that meets
            international standards and diverse industrial requirements.
          </p>
          <p>
            We aim to lead the industry as a responsible Titanium Dioxide
            Wholesaler, combining technical expertise, ethical practices, and
            consistent product quality to create value for every client we
            serve. Our goal as a Titanium Dioxide Wholesaler is to provide
            solutions that empower manufacturers across paints, coatings,
            plastics, paper, cosmetics, and food industries to excel in their
            respective markets.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Become the globally recognized Titanium Dioxide Wholesaler,
              setting benchmarks for quality and service.
            </li>
            <li>
              Provide innovative solutions as a forward-thinking Titanium
              Dioxide Wholesaler to meet evolving industry needs.
            </li>
            <li>
              Ensure sustainable and ethical practices in all operations as a
              responsible Titanium Dioxide Wholesaler.
            </li>
            <li>
              Supply premium-quality Titanium Dioxide consistently, reflecting
              the standards of a trusted Titanium Dioxide Wholesaler.
            </li>
            <li>
              Support clients in optimizing their products and processes as a
              knowledgeable Titanium Dioxide Wholesaler.
            </li>
            <li>
              Build long-term partnerships through reliability and excellence as
              a professional Titanium Dioxide Wholesaler.
            </li>
          </ul>
          <p>
            As a dedicated Titanium Dioxide Wholesaler, <b>Aanya Enterprise</b>{" "}
            envisions creating lasting impact, innovation, and growth for our
            clients and the industries we serve.
          </p>
        </div>
      ),
    },
    {
      id: "mission",
      icon: <Target className="w-14 h-14" />,
      title: "MISSION",
      color: "#F7C600",
      content: (
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold text-[#F7C600]">
            Our Mission as a Titanium Dioxide Wholesaler
          </h2>
          <p>
            At <b>Aanya Enterprise</b>, our mission is to be the most trusted
            Titanium Dioxide Wholesaler, providing high-quality bulk Titanium
            Dioxide (TiO₂) that enhances product performance and reliability for
            industries worldwide. As a professional Titanium Dioxide Wholesaler,
            we are committed to delivering consistent supply, technical
            expertise, and tailored solutions to meet the unique needs of every
            client.
          </p>
          <p>
            We strive to help manufacturers across paints, coatings, plastics,
            paper, cosmetics, and food industries achieve superior results by
            providing premium-grade Titanium Dioxide that meets international
            quality standards. Our goal as a Titanium Dioxide Wholesaler is to
            combine quality, reliability, and customer-focused service in every
            transaction, ensuring long-term partnerships and client
            satisfaction.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Be recognized as the most trusted Titanium Dioxide Wholesaler for
              industrial and commercial clients.
            </li>
            <li>
              Deliver high-quality Titanium Dioxide consistently as a
              professional Titanium Dioxide Wholesaler.
            </li>
            <li>
              Provide expert guidance, technical support, and practical
              solutions as a reliable Titanium Dioxide Wholesaler.
            </li>
            <li>
              Ensure timely delivery and dependable bulk supply as a leading
              Titanium Dioxide Wholesaler.
            </li>
            <li>
              Maintain long-term partnerships by offering personalized service
              as a customer-focused Titanium Dioxide Wholesaler.
            </li>
            <li>
              Help clients optimize the use of Titanium Dioxide in their
              products as a knowledgeable Titanium Dioxide Wholesaler.
            </li>
          </ul>
          <p>
            As a dedicated Titanium Dioxide Wholesaler, <b>Aanya Enterprise</b>{" "}
            is committed to excellence, consistency, and client satisfaction,
            making us a reliable partner for all your Titanium Dioxide needs.
          </p>
        </div>
      ),
    },

    {
      id: "values",
      icon: <Gem className="w-14 h-14" />,
      title: "VALUES",
      color: "#f59e0b",
      content: (
        <div className="space-y-4 text-left">
          <h2 className="text-2xl font-semibold text-[#F7C600]">
            Our Core Values as a Titanium Dioxide Wholesaler
          </h2>
          <p>
            At <b>Aanya Enterprise</b>, our values form the foundation of
            everything we do as a <b>Titanium Dioxide Wholesaler</b>. We believe
            in building trust, ensuring consistency, and maintaining integrity
            in every aspect of our business. Our values guide us in serving our
            clients and creating long-term growth.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>Integrity:</b> Conducting business with honesty, transparency,
              and accountability at every stage.
            </li>
            <li>
              <b>Quality First:</b> Delivering Titanium Dioxide that
              consistently meets international standards.
            </li>
            <li>
              <b>Customer-Centric Approach:</b> Placing our clients at the
              center of every decision to ensure satisfaction and trust.
            </li>
            <li>
              <b>Innovation:</b> Continuously improving processes and solutions
              to meet evolving industry demands.
            </li>
            <li>
              <b>Sustainability:</b> Operating responsibly with a focus on
              environmental care and ethical sourcing.
            </li>
            <li>
              <b>Reliability:</b> Ensuring timely supply and dependable service
              for every client, every time.
            </li>
            <li>
              <b>Partnership:</b> Building long-term relationships through
              respect, collaboration, and shared growth.
            </li>
          </ul>
          <p>
            Guided by these values, <b>Aanya Enterprise</b> continues to grow as
            a dependable Titanium Dioxide Wholesaler, ensuring that our partners
            and clients can always count on us for excellence.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* ===== Banner Section ===== */}
      <div
        className="relative bg-cover bg-center h-[60vh] md:h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759728776/aboutbg_xoifk1.webp')",
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3A49]/70 via-[#0A3A49]/60 to-[#0A3A49]/90"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-yellow-400 hover:text-yellow-300 transition underline"
          >
            Home / About Us
          </Link>
          <h1 className="text-5xl font-serif md:text-6xl font-extrabold  tracking-tight drop-shadow-lg">
            About Us
          </h1>
          <p className="text-white mt-4 max-w-2xl mx-auto text-sm md:text-lg">
            Partner with Aanya Enterprise, your trusted Titanium Dioxide
            Wholesaler, and get high-quality TiO₂ for all your industrial
            applications.
          </p>
        </div>
      </div>

      {/* About Content Section */}
      <section className="relative ">
        <div className="w-full  mx-auto px-6 py-4   grid md:grid-cols-2  items-center">
          {/* Left Side - Image */}
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759736753/Gemini_Generated_Image_4jb15o4jb15o4jb1_bi9hlm.webp "
              alt="About Aanya Enterprise"
              className=" w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
              Welcome to{" "}
              <span className="font-semibold text-[#F7C600]">
                Aanya Enterprise
              </span>{" "}
              – Your Leading Titanium Dioxide Wholesaler.
            </h2>

            <p className="text-lg text-black leading-relaxed ">
              At{" "}
              <span className="font-semibold text-[#F7C600]">
                Aanya Enterprise
              </span>{" "}
              we take pride in being a{" "}
              <span className="font-semibold text-[#F7C600]">
                trusted Titanium Dioxide Wholesaler,{" "}
              </span>{" "}
              supplying
              <span className="font-semibold text-[#F7C600]">
                {" "}
                premium-quality Titanium Dioxide (TiO₂) in bulk
              </span>{" "}
              to industries across the globe. As a professional Titanium Dioxide
              Wholesaler, we are committed to delivering products that meet
              international quality standards, ensuring every batch maintains
              consistent purity, brightness, and performance for all industrial
              applications.
            </p>
            <p className="text-lg text-black leading-relaxed mb-4">
              Being a reliable{" "}
              <span className="font-semibold text-[#F7C600]">
                Titanium Dioxide Wholesaler{" "}
              </span>{" "}
              Aanya Enterprise understands the diverse needs of industries such
              as{" "}
              <span className="font-semibold text-[#F7C600]">
                {" "}
                paints, coatings, plastics, paper, cosmetics, and food
                processing.
              </span>{" "}
              Every product we supply reflects the expertise and dedication
              expected from a leading Titanium Dioxide Wholesaler, giving our
              clients confidence in their production processes.
            </p>
            <p className="text-lg text-black leading-relaxed">
              As a dedicated Titanium Dioxide Wholesaler, we go beyond just
              supplying TiO₂. Aanya Enterprise provides technical guidance,
              application support, and customized bulk solutions, ensuring our
              clients receive the best value from every order. Choosing Aanya
              Enterprise as your{" "}
              <span className="font-semibold text-[#F7C600]">
                Titanium Dioxide Wholesaler means partnering with a company that
                delivers reliability, consistency, and excellence in every
                transaction.{" "}
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F0F5FC] py-5 md:py-10 text-center">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <h5 className="text-[#F7C600] font-semibold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="h-[1px] w-10 bg-[#F7C600] font-serif"></span>
            Our Core Features
            <span className="h-[1px] w-10 bg-[#F7C600]"></span>
          </h5>

          <h2 className="text-[20px] sm:text-[30px] md:text-[35px] leading-tight font-light text-[#0b2341] mb-6">
            We ensure high-level quality control in compliance with both
            national and international regulations and standards, guaranteeing
            that
            <br className="hidden md:block" /> our Titanium Dioxide meets the
            highest industry benchmarks.
          </h2>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row justify-center items-center border-t border-gray-200 md:pt-12 gap-10">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 px-6 ${
                  activeTab === tab.id
                    ? "scale-105 text-[#F7C600]"
                    : "text-black "
                }`}
              >
                <div className="mb-4 text-4xl">{tab.icon}</div>
                <h3 className="font-bold text-xl text-center tracking-wide font-serif">{tab.title}</h3>
                {activeTab === tab.id && (
                  <div className="h-[3px] w-10 bg-[#F7C600] mt-2 rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl text-center mx-auto mt-12 text-black text-xl leading-relaxed animate-fadeIn">
            {tabs.find((t) => t.id === activeTab)?.content}
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726390/molecule_igbmpw.webp)",
        }}
        className="bg-center bg-fixed   bg-cover py-9 md:py-20 px-6 md:px-20 relative"
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content container */}
        <div className="max-w-6xl mx-auto relative z-20 text-center md:text-left">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-6">
            Who We Are – <br />{" "}
            <span className="text-[#F7C600]">
              A Trusted Titanium Dioxide Wholesaler
            </span>
          </h2>

          {/* Intro paragraphs */}
          <p className="text-white text-lg md:text-xl mb-6 leading-relaxed">
            Aanya Enterprise has established itself as a professional Titanium
            Dioxide Wholesaler with years of experience in the chemical supply
            sector. We are committed to providing high-quality Titanium Dioxide
            (TiO₂) in bulk to industries worldwide. Our dedication to quality,
            consistency, and customer satisfaction makes us a preferred partner
            for manufacturers across paints, coatings, plastics, paper,
            cosmetics, and food industries.
          </p>
          <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
            We focus on delivering not just products but complete solutions and
            support, ensuring our clients benefit from a trusted Titanium
            Dioxide Wholesaler who understands their industrial needs.
          </p>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3  p-4 rounded-lg shadow-lg bg-white/30 transition hover:bg-yellow-500/30"
              >
                <CheckCircle className="text-[#F7C600] w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-white text-base md:text-xl">{feature}</p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <p className="mt-10 text-white text-lg md:text-xl font-medium">
            As a dedicated Titanium Dioxide Wholesaler, Aanya Enterprise ensures
            consistent quality, dependable supply, and expert support for all
            Titanium Dioxide needs, making us the ideal partner for your
            business.
          </p>
        </div>
      </section>

      <Form></Form>

      <section
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726401/titanium_lj5cbc.webp)",
        }}
        className="relative bg-fixed  bg-center bg-cover w-full pb-3 md:py-20"
      >
        <div className="absolute inset-0 bg-white/40 z-0"></div>

        <div className="max-w-7xl  mx-auto grid md:grid-cols-2 gap-5 px-6 md:px-15 items-center">
          {/* Right Images */}
          <div className="flex ">
            <div className="relative">
              {/* Frame behind image */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-xl border-4 border-yellow-400 z-0"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 z-10">
                <Image
                  src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759737702/Gemini_Generated_Image_d30356d30356d303_tpmoyy.webp"
                  alt="Industrial Crane"
                  title="Titanium Dioxide "
                  width={800}
                  height={800}
                  className="hidden md:block object-cover h-full w-full transform hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#002B5B] leading-snug mb-6">
              Why Choose{" "}
              <span className="text-[#F7A400]">Aanya Enterprise</span> as Your
              Titanium Dioxide Wholesaler
            </h2>

            <p className="text-xl text-black leading-relaxed mb-6">
              <b className="text-[#002B5B]">High-Quality Titanium Dioxide:</b>{" "}
              As a reliable Titanium Dioxide Wholesaler, Aanya Enterprise
              ensures every batch of Titanium Dioxide is tested for purity,
              particle size, brightness, and dispersibility, providing
              consistent performance for all industrial applications.
            </p>

            <p className="text-xl text-black leading-relaxed mb-6">
              <b className="text-[#002B5B]">Consistent Bulk Supply:</b> We
              maintain large inventory stocks to meet both domestic and
              international bulk orders, ensuring supply and timely delivery
            </p>

            <p className="text-xl text-black leading-relaxed mb-6">
              <b className="text-[#002B5B]">Technical Expertise:</b> Our experts
              provide guidance on dispersion, formulation, and application,
              helping clients achieve exceptional results with their Titanium
              Dioxide products.
            </p>

            <p className="text-xl text-black leading-relaxed mb-6">
              <b className="text-[#002B5B]">Global Reach:</b> Aanya Enterprise
              supplies Titanium Dioxide worldwide, trusted by industries
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {[
                "100% Quality Assurance",
                "Consistent Global Supply",
                "Technical Expertise",
                "Customer Satisfaction",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 group transition-all duration-300"
                >
                  <div className="bg-[#F7A400]/10 p-2 rounded-full group-hover:bg-[#F7A400]/20 transition">
                    <CheckCircle2 className="text-[#F7A400] w-5 h-5" />
                  </div>
                  <span className="font-semibold text-gray-800 group-hover:text-[#002B5B] transition text-base md:text-lg">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Accent Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#F7A400] to-[#002B5B]" />
      </section>
    </div>
  );
};

export default AboutPage;
