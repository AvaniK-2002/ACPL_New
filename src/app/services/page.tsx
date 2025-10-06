"use client";
import React, { useState,  useRef } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Form from "../components/Form";

interface CardData {
  id: number;
  title: string;
  description: string;
  subDescription: string;
  imageAlt: string;
  imageSrc: string;
  isImageRight: boolean;
  gradientClasses: string;
}

const homePageCards: CardData[] = [
  {
    id: 1,
    title: "SCORM e-Learning Development",
    description:
      "We specialize in creating SCORM-compliant e-learning solutions that seamlessly integrate with any Learning Management System (LMS).",
    subDescription:
      "Our team develops SCORM e-learning solutions from scratch, ensuring interactive, trackable, and LMS-ready training modules tailored to your needs.",
    imageAlt: "Young man in glasses using a laptop",
    imageSrc: "/images/card-image-1.png",
    isImageRight: false,
    gradientClasses: "from-purple-800 to-indigo-600",
  },
  {
    id: 2,
    title: "Software Development",
    description:
      "We create cutting-edge software solutions tailored to your business needs.",
    subDescription:
      "Our team develops software with best practices and scalable architecture to help your business thrive.",
    imageAlt: "Laptop with creative development assets",
    imageSrc: "/images/card-image-2.png",
    isImageRight: true,
    gradientClasses: "from-indigo-600 to-fuchsia-500",
  },
];

const ServiceCard: React.FC<{ data: CardData }> = ({ data }) => {
  const {
    title,
    description,
    subDescription,
    imageAlt,
    imageSrc,
    isImageRight,
    gradientClasses,
  } = data;

  const imageOrderClass = isImageRight ? "lg:order-last" : "lg:order-first";
  const contentOrderClass = isImageRight ? "lg:order-first" : "lg:order-last";

  return (
    <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl mx-auto my-12 px-4">
      <div
        className={`relative w-full lg:w-1/2 h-64 lg:h-96 rounded-xl shadow-2xl overflow-hidden bg-gradient-to-br ${gradientClasses} ${imageOrderClass} lg:mx-4`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-cover ${
            isImageRight ? "object-right" : "object-left"
          } opacity-70`}
        />
        <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
      </div>

      <div
        className={`relative w-full lg:w-1/2 bg-white p-8 lg:p-12 rounded-xl shadow-xl -mt-16 lg:mt-0 z-10 ${contentOrderClass} lg:mx-4`}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
        <p className="mb-4 text-gray-600">{description}</p>
        <p className="mb-6 text-gray-600">{subDescription}</p>
        <a
          href="#"
          className="inline-block mt-4 px-6 py-2 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition duration-200 font-medium"
        >
          Request A Quote
        </a>
      </div>
    </div>
  );
};

export default function Services() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services" },
  ];

  // ✅ Add ref for form scrolling
  const formRef = useRef<HTMLDivElement>(null);

  // ✅ Scroll function
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        {/* Left Background */}
        <div className="absolute left-0 w-3/4 h-[180%] opacity-50 lg:opacity-100 -translate-y-50 -translate-x-50 scale-150 lg:scale-100">
          <Image
            src="/img/Frame 130.png"
            alt="Left Background"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Background */}
        <div className="absolute right-0 top-0 w-3/4 h-[180%] opacity-50 lg:opacity-100 translate-y-10 translate-x-70 scale-150 lg:scale-100">
          <Image
            src="/img/Frame 131.png"
            alt="Right Background"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 pt-12 w-full max-w-7xl mx-auto">
          <div className="relative w-full max-w-7xl">
            {/* Breadcrumb - stack on mobile, absolute on large */}
            <div className="mb-2 lg:mb-0 lg:absolute lg:top-[-88px] lg:left-0">
  <Breadcrumb items={breadcrumbItems} />
</div>


            {/* Heading */}
            <h1 className="mt-6 lg:mt-12 text-2xl md:text-4xl lg:text-5xl font-bold text-black md:leading-tight text-center lg:text-left max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
              Driving Digital Growth Through Custom Solutions
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
          <div>
            <h1 className="text-2xl font-bold mb-4 text-center lg:text-left">
              End-to-End Development for a Digital-First World.
            </h1>
            <p className="text-gray-600 mb-6 text-justify mx-auto lg:mx-0 max-w-xl">
              Our services are designed to help businesses thrive in the digital
              age. From custom software development to SCORM-compliant
              e-learning solutions, we combine innovation, clean code, and
              modern technology to deliver results that matter.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-900">
                Learn more
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/img/S1.png"
              alt="hero"
              className="w-70 md:w-100 z-10 hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>


        <section className="bg-gray-90 py-16">
          {/* Adjusted ml-28 to be responsive, and centered on mobile to match image */}
          <div className="flex items-center gap-3 mb-10 **justify-center lg:justify-start ml-6 md:ml-28 lg:ml-30**">
            {/* Line - Hidden on mobile if centered layout is desired */}
            <span className="w-10 h-[1.5px] bg-black **hidden lg:inline-block**"></span>
            {/* Tag */}
            <button className="px-4 py-3 bg-purple-100 text-gray-900 rounded-full text-sm font-medium">
              Our Services
            </button>
            
          </div>

          {/* Heading - Centered on mobile to match image */}
          <h1 className="text-4xl font-bold mb-4 px-6 max-w-xl mx-auto md:mx-0 lg:mr-60 md:ml-28 lg:ml-30 **text-center lg:text-left**">Delivering Excellence in Every Service</h1>
          <br />
          <br />
          {/* Service Cards - Changed grid layout for mobile stack and mid-screen 2-column layout */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {[
              {
                id: 1,
                logo: "/img/S2.png",
                title: "SCORM Development",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                
              },
              {
                id: 2,
                logo: "/img/S3.png",
                title: "Software Development",
                text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                
              },
              {
                id: 3,
                logo: "/img/S4.png",
                title: "UI/UX Design",
                text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
                
              },
              {
                id: 4,
                logo: "/img/S5.png",
                title: "Mobile App Development",
                text: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
                
              },
            ].map((card) => (
              <div
                key={card.id}
                className="relative flex flex-col justify-between p-6 border-blue-300 border-b-3 rounded-lg shadow overflow-hidden group hover:shadow-lg hover:scale-105 transition-transform duration-300 **text-center**" // Added text-center
              >
                {/* Gradient overlay on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-200 to-pink-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></span>
                {/* Blue bottom line on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300"></span>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full items-center"> {/* Centered items */}
                  {/* Logo */}
                  <div className="mb-4 w-12 h-12 relative">
                    <Image src={card.logo} alt="Logo" fill className="object-contain" />
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {card.title}
                  </h3>

                  {/* Text */}
                  <p className="text-gray-700 mb-6">{card.text}</p>

                  
                </div>
              </div>
            ))}
          </div>
        </section>

        <main className="bg-gray-50">
          <section className="py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

            {/* Wrapper for multiple service blocks - Space-y set for all screens to maintain vertical separation */}
            <div className="space-y-12 lg:space-y-38">
              {/* Service Block 1 (Image left, Description right) - Uses flex-row for all screens */}
              <div className="flex flex-row items-start w-full max-w-6xl mx-auto px-2 sm:px-4 rounded-xl">
                {/* Image Card - Uses w-1/2 for all screens. h-64 on mobile, h-72 on sm, h-96 on desktop. */}
                <div className="relative w-1/2 h-44 sm:h-72 lg:h-86 shadow-2xl bg-gradient-to-br from-purple-800 to-indigo-600 mx-1 lg:mx-4 translate-y-2 sm:translate-y-4 lg:translate-y-8 z-10 rounded-xl ">
                  {/* Background Image */}
                  <Image
                    src="/img/Pexels Photo by Christina Morillo.png"
                    alt="Background"
                    fill
                    className="object-cover object-bottom opacity-70 rounded-xl"
                  />

                  {/* Overlay Image - Always visible. Significantly reduced size and adjusted position for mobile. */}
                  <Image
                    src="/img/s6.png"
                    alt="Overlay"
                    // Responsive sizing and positioning for the overlay image
                    width={150}
                    height={150}
                    className="
  absolute -right-10 bottom-3 object-contain drop-shadow-2xl z-50
  md:w-[300px] md:h-[300px] md:-right-20
  lg:w-[620px] lg:h-[620px] lg:-right-40 lg:translate-y-34
"

                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Description Card - Uses w-1/2 for all screens. Negative left margin for overlap. */}
                <div className="relative w-1/2 bg-white p-3 sm:p-4 lg:p-12 rounded-xl shadow-xl mt-2 sm:mt-4 lg:mt-0 -ml-3 sm:-ml-4 lg:-ml-8 z-0">
                  <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-1 sm:mb-2 lg:mb-4 text-gray-800">
                    SCORM e-Learning Development
                  </h2>
                  <p className="mb-1 text-xs sm:text-sm text-gray-600">
                    We specialize in creating SCORM-compliant e-learning solutions that
                    seamlessly integrate with any LMS.
                  </p>
                  <p className="mb-2 text-xs sm:text-sm text-gray-600 hidden sm:block">
                    Our team develops SCORM e-learning solutions from scratch, ensuring
                    interactive, trackable, and LMS-ready training modules tailored to
                    your needs.
                  </p>
                  <a className="inline-block mt-1 sm:mt-2 text-xs sm:text-base px-3 py-1 sm:px-4 sm:py-2 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition duration-200 font-medium whitespace-nowrap">
                    Request A Quote
                  </a>
                </div>
              </div>

              {/* Service Block 2 (Description left, Image right) - Uses flex-row for all screens */}
              <div className="flex flex-row items-start w-full max-w-6xl mx-auto px-2 sm:px-4 rounded-xl">
                {/* Description Card - Uses w-1/2 for all screens. Negative right margin for overlap. */}
                <div className="relative w-1/2 bg-white p-3 sm:p-4 lg:p-12 rounded-xl shadow-xl mt-2 sm:mt-4 lg:mt-0 -mr-3 sm:-mr-4 lg:-mr-8 z-0">
                  <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-1 sm:mb-2 lg:mb-4 text-gray-800">
                    Software Development
                  </h2>
                  <p className="mb-1 text-xs sm:text-sm text-gray-600">
                    We specialize in creating SCORM-compliant e-learning solutions that
                    seamlessly integrate with any LMS.
                  </p>
                  <p className="mb-2 text-xs sm:text-sm text-gray-600 hidden sm:block">
                    Our team develops SCORM e-learning solutions from scratch, ensuring
                    interactive, trackable, and LMS-ready training modules tailored to
                    your needs.
                  </p>
                  <a className="inline-block mt-1 sm:mt-2 text-xs sm:text-base px-3 py-1 sm:px-4 sm:py-2 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition duration-200 font-medium whitespace-nowrap">
                    Request A Quote
                  </a>
                </div>

                {/* Image Card - Uses w-1/2 for all screens. h-64 on mobile, h-72 on sm, h-96 on desktop. */}
                <div className="relative w-1/2 h-44 sm:h-72 lg:h-86 shadow-2xl bg-gradient-to-br from-purple-800 to-indigo-600 mx-1 lg:mx-4 translate-y-2 sm:translate-y-4 lg:translate-y-8 z-10 rounded-xl ">
                  {/* Background Image */}
                  <Image
                    src="/img/Pexels Photo by Christina Morillo.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-70 rounded-xl"
                  />

                  {/* Overlay Image - Always visible. Significantly reduced size and adjusted position for mobile. */}
                  <Image
                    src="/img/S7.png"
                    alt="Overlay"
                    // Responsive sizing and positioning for the overlay image
                    width={150}
                    height={150}
                    className="
  absolute -left-10 bottom-3 object-contain drop-shadow-2xl z-50
  md:w-[250px] md:h-[250px] md:-left-20  md:bottom-2
  lg:w-[480px] lg:h-[480px] lg:-left-40 lg:translate-y-24 lg:translate-x-10
"

                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>

              {/* Service Block 3 (Image left, Description right) - Uses flex-row for all screens */}
              <div className="flex flex-row items-start w-full max-w-6xl mx-auto px-2 sm:px-4 rounded-xl">
                {/* Image Card - Uses w-1/2 for all screens. h-64 on mobile, h-72 on sm, h-96 on desktop. */}
                <div className="relative w-1/2 h-44 sm:h-62 lg:h-86 shadow-2xl bg-gradient-to-br from-purple-800 to-indigo-600 mx-1 lg:mx-4 translate-y-2 sm:translate-y-4 lg:translate-y-8 z-10 rounded-xl ">
                  {/* Background Image */}
                  <Image
                    src="/img/Pexels Photo by Christina Morillo.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-70 rounded-xl"
                  />

                  {/* Overlay Image - Always visible. Significantly reduced size and adjusted position for mobile. */}
                  <Image
                    src="/img/s6.png"
                    alt="Overlay"
                    // Responsive sizing and positioning for the overlay image
                    width={150}
                    height={150}
                    className="
  absolute -right-10 bottom-3 object-contain drop-shadow-2xl z-50
  md:w-[300px] md:h-[300px] md:-right-20
  lg:w-[620px] lg:h-[620px] lg:-right-40 lg:translate-y-34
"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Description Card - Uses w-1/2 for all screens. Negative left margin for overlap. */}
                <div className="relative w-1/2 bg-white p-3 sm:p-4 lg:p-12 rounded-xl shadow-xl mt-2 sm:mt-4 lg:mt-0 -ml-3 sm:-ml-4 lg:-ml-8 z-0">
                  <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-1 sm:mb-2 lg:mb-4 text-gray-800">
                    UI/UX Design
                  </h2>
                  <p className="mb-1 text-xs sm:text-sm text-gray-600">
                    We specialize in creating SCORM-compliant e-learning solutions that
                    seamlessly integrate with any LMS.
                  </p>
                  <p className="mb-2 text-xs sm:text-sm text-gray-600 hidden sm:block">
                    Our team develops SCORM e-learning solutions from scratch, ensuring
                    interactive, trackable, and LMS-ready training modules tailored to
                    your needs.
                  </p>
                  <a className="inline-block mt-1 sm:mt-2 text-xs sm:text-base px-3 py-1 sm:px-4 sm:py-2 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition duration-200 font-medium whitespace-nowrap">
                    Request A Quote
                  </a>
                </div>
              </div>

              {/* Service Block 4 (Description left, Image right) - Uses flex-row for all screens */}
              <div className="flex flex-row items-start w-full max-w-6xl mx-auto px-2 sm:px-4 rounded-xl">
                {/* Description Card - Uses w-1/2 for all screens. Negative right margin for overlap. */}
                <div className="relative w-1/2 bg-white p-3 sm:p-4 lg:p-12 rounded-xl shadow-xl mt-2 sm:mt-4 lg:mt-0 -mr-3 sm:-mr-4 lg:-mr-8 z-0">
                  <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-1 sm:mb-2 lg:mb-4 text-gray-800">
                    Mobile App Development
                  </h2>
                  <p className="mb-1 text-xs sm:text-sm text-gray-600">
                    We specialize in creating SCORM-compliant e-learning solutions that
                    seamlessly integrate with any LMS.
                  </p>
                  <p className="mb-2 text-xs sm:text-sm text-gray-600 hidden sm:block">
                    Our team develops SCORM e-learning solutions from scratch, ensuring
                    interactive, trackable, and LMS-ready training modules tailored to
                    your needs.
                  </p>
                  <a className="inline-block mt-1 sm:mt-2 text-xs sm:text-base px-3 py-1 sm:px-4 sm:py-2 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition duration-200 font-medium whitespace-nowrap">
                    Request A Quote
                  </a>
                </div>

                {/* Image Card - Uses w-1/2 for all screens. h-64 on mobile, h-72 on sm, h-96 on desktop. */}
                <div className="relative w-1/2 h-44 sm:h-72 lg:h-86 shadow-2xl bg-gradient-to-br from-purple-800 to-indigo-600 mx-1 lg:mx-4 translate-y-2 sm:translate-y-4 lg:translate-y-8 z-10 rounded-xl ">
                  {/* Background Image */}
                  <Image
                    src="/img/Pexels Photo by Christina Morillo.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-70 rounded-xl"
                  />

                  {/* Overlay Image - Always visible. Significantly reduced size and adjusted position for mobile. */}
                  <Image
                    src="/img/S7.png"
                    alt="Overlay"
                    // Responsive sizing and positioning for the overlay image
                    width={150}
                    height={150}
                    className="
  absolute -left-10 bottom-3 object-contain drop-shadow-2xl z-50
  md:w-[250px] md:h-[250px] md:-left-20 md:translate-y-100
  lg:w-[480px] lg:h-[480px] lg:-left-40 lg:translate-y-24 lg:translate-x-18
"

                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            </div>
          </section>
        </main>
<div ref={formRef} id="contact-form">
        <Form />
      </div>

      <Footer />
    </div>
  );
}