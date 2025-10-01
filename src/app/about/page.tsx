// pages/about.tsx
"use client";
import React, { useRef } from "react";
import { Linkedin, Instagram, Quote } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

// ==================== TYPES ====================
type CoreValue = {
  id: number;
  title: string;
  description: string;
};

type Founder = {
  name: string;
  title: string;
  linkedin: string;
  instagram: string;
  image: string;
};

// ==================== DATA ====================
const coreValues: CoreValue[] = [
  { id: 1, title: "Excellence", description: "Delivering impactful learning solutions that exceed expectations." },
  { id: 2, title: "Innovation", description: "Innovating with technology to deliver next-gen learning experiences." },
  { id: 3, title: "Integrity", description: "Delivering impactful learning solutions that exceed expectations." },
  { id: 4, title: "Learner-Centric", description: "Delivering impactful learning solutions that exceed expectations." },
];

const founders: Founder[] = [
  { name: "Ajinkya D. Deshmukh", title: "Founder, Director & CEO", image: "/img/F1.png", linkedin: "#", instagram: "#" },
  { name: "Hrishikesh D. Mohite", title: "Founder, Director & COO", image: "/img/F2.png", linkedin: "#", instagram: "#" },
  { name: "Ruturaj Y. Kale", title: "Co-Founder, Director & CFO", image: "/img/F3.png", linkedin: "#", instagram: "#" },
];

// ==================== COMPONENTS ====================
const FounderCard: React.FC<Founder> = ({ name, title, image, linkedin, instagram }) => (
  <div className="p-4 flex flex-col items-start">
    <Image
      src={image}
      alt={name}
      width={300}
      height={400}
      className="w-full h-96 object-cover rounded-xl border border-gray-300"
    />

    {/* Text + icons with vertical line */}
    <div className="relative mt-4 pl-4 border-l-4 border-blue-500">
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600 text-sm mb-2">{title}</p>

      <div className="flex gap-4 mt-1">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-500">
          <Linkedin size={20} />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-500">
          <Instagram size={20} />
        </a>
      </div>
    </div>
  </div>
);


// ==================== MAIN PAGE ====================
const AboutUsPage: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute left-0 w-3/4 h-[180%] opacity-50 lg:opacity-100 -translate-y-50 -translate-x-50 scale-150 lg:scale-100">
          <Image src="/img/Frame 130.png" alt="Left Background" fill className="object-contain" priority />
        </div>
        <div className="absolute right-0 top-0 w-3/4 h-[180%] opacity-50 lg:opacity-100 translate-y-10 translate-x-70 scale-150 lg:scale-100">
          <Image src="/img/Frame 131.png" alt="Right Background" fill className="object-contain" priority />
        </div>
        <div className="relative z-10 px-4 pt-12 w-full max-w-7xl mx-auto">
          <div className="relative w-full max-w-7xl">
            <div className="mb-2 lg:mb-0 lg:absolute lg:top-[-88px] lg:left-0">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="mt-6 lg:mt-12 text-2xl md:text-4xl lg:text-5xl font-bold text-black md:leading-tight text-center lg:text-left max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
              Driving Digital Growth Through Custom Solutions
            </h1>
          </div>
        </div>
      </section>

      {/* WHO WE ARE & PROCESS STEPS */}
<section className="py-8">
  <div className="bg-white overflow-hidden mb-8 -mx-4 sm:mx-0 p-6 sm:p-10 md:p-12">
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center sm:text-left">
      Who Are <strong className="text-purple-600">We</strong>
    </h2>
    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-8 text-center sm:text-left">
      We design, develop and deliver digital brilliance.
    </p>

    {/* Steps */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
      {["Foundation", "Innovation", "Growth", "Future"].map((step, i) => (
        <React.Fragment key={i}>
          {/* Step Button */}
          <div className="p-[2px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
            <button className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full bg-sky-100 text-gray-800 text-sm sm:text-base md:text-lg font-medium shadow-sm transition-all">
              {step}
            </button>
          </div>

          {/* Arrow (hidden for last step) */}
          {i < 3 && (
            <div className="flex flex-col sm:flex-row items-center gap-2">
              {/* Circle with arrow */}
              <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-sky-100 text-sky-500 border border-sky-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              {/* Line */}
              <div className="w-[2px] h-6 sm:w-8 sm:h-[2px] bg-sky-200"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
</section>


      {/* CORE VALUES */}
      <section className="py-8 bg-white">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8 px-8">
          <div>
            <button className="text-2xl sm:text-3xl font-bold text-black bg-purple-200 px-6 py-3 rounded-full shadow-md hover:bg-pink-300 transition duration-300 mb-6">
              Our Core Values
            </button>
            <p className="text-black leading-relaxed mt-4 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 pt-4">
              {coreValues.map((val) => (
                <div key={val.id} className="p-4 rounded-xl bg-white shadow-md border border-gray-100 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500" />
                  <div className="relative z-10 space-y-2">
                    <p className="text-2xl font-bold text-gray-900 mb-2">0{val.id}</p>
                    <h4 className="text-lg font-bold text-gray-900">{val.title}</h4>
                    <p className="text-sm text-gray-600 leading-snug">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
<section className="py-8 px-4 sm:px-6 lg:px-12 bg-gray-50">
  <div className="max-w-3xl mx-auto">
    {["Our Vision", "Our Mission"].map((title, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-8 flex flex-col lg:flex-row min-h-[300px]"
      >
        {/* Left: Text */}
        <div className="flex-1 p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>

        {/* Right: Image full height */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src={i === 0 ? "/img/A2.png" : "/img/A1.png"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ))}
  </div>
</section>


      {/* MESSAGE FROM OUR DIRECTOR */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="relative bg-gradient-to-b from-white to-blue-100 rounded-xl p-8 shadow-md">
      {/* Inverted comma (left side) */}
      <Quote className="absolute left-6 top-6 w-16 h-16 text-blue-300 opacity-60 rotate-180" />

      <div className="pl-24 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Message From Our Director
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* FOUNDERS */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The visionary founders behind <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Ajinkya</span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Creatiion</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {founders.map((founder) => (
              <FounderCard key={founder.name} {...founder} />
            ))}
          </div>
        </div>
      </section>

      {/* FACES BEHIND */}
      <section className="py-16 px-8 bg-white">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Faces Behind Our Software Solution</h2>
            <p className="text-black leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing.
            </p>
          </div>

          <div className="flex space-x-4 h-64">
            <img src="/img/face1.png" alt="Frame 155" className="w-1/2 h-full rounded-xl object-cover flex-shrink-0" />
            <div className="w-1/2 grid grid-cols-4 gap-4">
              <img src="/img/face2.png" alt="Frame 156" className="w-full h-full rounded-xl object-cover" />
              <img src="/img/face3.png" alt="Frame 157" className="w-full h-full rounded-xl object-cover" />
              <img src="/img/face4.png" alt="Frame 157" className="w-full h-full rounded-xl object-cover" />
              <img src="/img/face5.png" alt="Frame 158" className="w-full h-full rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div className="h-20 bg-gray-50" />
      <div ref={formRef} id="contact-form">
        <Form />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
