"use client";
import React, { useState } from "react";
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
    title: 'SCORM e-Learning Development',
    description: 'We specialize in creating SCORM-compliant e-learning solutions that seamlessly integrate with any Learning Management System (LMS).',
    subDescription: 'Our team develops SCORM e-learning solutions from scratch, ensuring interactive, trackable, and LMS-ready training modules tailored to your needs.',
    imageAlt: 'Young man in glasses using a laptop',
    imageSrc: '/images/card-image-1.png',
    isImageRight: false,
    gradientClasses: 'from-purple-800 to-indigo-600',
  },
  {
    id: 2,
    title: 'Software Development',
    description: 'We create cutting-edge software solutions tailored to your business needs.',
    subDescription: 'Our team develops software with best practices and scalable architecture to help your business thrive.',
    imageAlt: 'Laptop with creative development assets',
    imageSrc: '/images/card-image-2.png',
    isImageRight: true,
    gradientClasses: 'from-indigo-600 to-fuchsia-500',
  },
];

const ServiceCard: React.FC<{ data: CardData }> = ({ data }) => {
  const { title, description, subDescription, imageAlt, imageSrc, isImageRight, gradientClasses } = data;

  const imageOrderClass = isImageRight ? 'lg:order-last' : 'lg:order-first';
  const contentOrderClass = isImageRight ? 'lg:order-first' : 'lg:order-last';

  const [selected, setSelected] = useState<string>(""); // track selected button
  
    const options: string[] = [
      
      "Software Development",
      "E-Learning",
      "Corporate training",
    ];
    const [formData, setFormData] = useState({
      fullName: "",
      phone: "",
      email: "",
      subscribe: false,
      service: "",
      details: "",
      budget: "",
    });

  return (
    <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl mx-auto my-12 px-4">
      <div className={`relative w-full lg:w-1/2 h-64 lg:h-96 rounded-xl shadow-2xl overflow-hidden bg-gradient-to-br ${gradientClasses} ${imageOrderClass} lg:mx-4`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-cover ${isImageRight ? 'object-right' : 'object-left'} opacity-70`}
        />
        <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
      </div>

      <div className={`relative w-full lg:w-1/2 bg-white p-8 lg:p-12 rounded-xl shadow-xl -mt-16 lg:mt-0 z-10 ${contentOrderClass} lg:mx-4`}>
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
  // Move options and selected state here so the form can access them
  const options: string[] = [
    "Software Development",
    "E-Learning",
    "Corporate training",
  ];
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section with two background images */}
      <section className="relative min-h-[400px] flex items-center justify-center text-white overflow-hidden ">
        {/* Left Background - Adjusted for safe mobile display */}
        <div className="absolute left-0 w-3/4 h-[180%] opacity-50 lg:opacity-100 -translate-y-50 -translate-x-50 scale-150 lg:scale-100">
              <Image
                src="/img/Frame 130.png"
                alt="Left Background"
                fill
                className="object-contain"
                priority
              />
            </div>
        
            {/* Right Background - Adjusted for safe mobile display */}
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
       <div className="relative z-10 px-4 pt-8 w-full max-w-7xl mx-auto lg:mr-auto">
            <div className="relative w-full max-w-7xl lg:mr-90 **text-center lg:text-left**"> {/* Added text-center for mobile */}
              {/* Breadcrumb positioned top-left - Keeping it left for design consistency */}
              <div className="absolute top-0 **left-4 lg:left-0 w-full lg:w-auto**">
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
              </div>

              {/* Heading - Centered on mobile, left on desktop */}
              <h1 className="mt-6 md:mt-12 text-2xl md:text-4xl font-bold text-black md:leading-tight **text-center lg:text-left** max-w-lg mx-auto lg:mx-0">
                Driving Digital Growth Through Custom Solutions
              </h1>
            </div>
        </div>

      </section>
      <section className="w-full bg-white py-16">
        <div className="container mx-auto grid **grid-cols-1** lg:grid-cols-2 gap-12 items-center px-6">
          
          <div>
            
            
          <br/>
            {/* End-to-End Development... Text - Centered on mobile to match image */}
            <h1 className="text-2xl font-bold mb-4 **text-center lg:text-left**">
              End-to-End Development for a Digital-First World.
            </h1>
            
            {/* Paragraph Text - Centered on mobile to match image */}
            <p className="text-gray-600 mb-6 text-justify **mx-auto lg:mx-0** max-w-xl">
              Our services are designed to help businesses thrive in the digital age.
                From custom software development to SCORM-compliant e-learning solutions, we combine innovation,
                clean code, and modern technology to deliver results that matter.
            </p>

            {/* Button - Centered on mobile to match image */}
            <div className="flex justify-center lg:justify-start">
              <button className="px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-900">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Image Placeholder - Centered on mobile */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/img/S1.png"
              alt="hero"
              className="w-40 md:w-60 z-10 hover:scale-110 transition duration-300 ease-in-out"
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
                buttonText: "Learn More",
              },
              {
                id: 2,
                logo: "/img/S3.png",
                title: "Software Development",
                text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                buttonText: "Discover",
              },
              {
                id: 3,
                logo: "/img/S4.png",
                title: "UI/UX Design",
                text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
                buttonText: "Explore",
              },
              {
                id: 4,
                logo: "/img/S5.png",
                title: "Mobile App Development",
                text: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
                buttonText: "Get Started",
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

                  {/* Button */}
                  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-md">
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <main className="bg-gray-50">
          <section className="py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

            {/* Wrapper for multiple service blocks - Reduced space-y for mobile, kept 48 for desktop */}
            <div className="space-y-16 lg:space-y-48">
              {/* Service Block 1 (Image left, Description right) - Preserves original HTML order */}
              <div className="flex flex-col lg:flex-row items-start w-full max-w-6xl mx-auto px-4 rounded-xl">
                {/* Image Card - Original lg:translate-y-8 is preserved */}
                <div className="relative w-full lg:w-1/2 h-72 lg:h-96 shadow-2xl bg-gradient-to-br from-purple-800 to-indigo-600 lg:mx-4 lg:translate-y-8 lg:z-10 rounded-xl">
                  {/* Background Image */}
                  <Image
                    src="/img/Pexels Photo by Christina Morillo.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-70 rounded-xl"
                  />

                  {/* Overlay Image - HIDDEN on mobile to prevent overflow, visible on lg screens. Original positioning preserved. */}
                  <Image
                    src="/img/s6.png"
                    alt="Overlay"
                    width={620}
                    height={620}
                    className="absolute -right-40 bottom-0 object-contain drop-shadow-2xl z-50 hidden lg:block"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Description Card - ADJUSTED mobile negative margin for better vertical stacking */}
                <div className="relative w-full lg:w-1/2 bg-white p-8 lg:p-12 rounded-xl shadow-xl -mt-8 sm:-mt-16 lg:mt-0 mb-8 lg:mb-0 lg:-ml-8 lg:z-0">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    SCORM e-Learning Development
                  </h2>
                  <p className="mb-4 text-gray-600">
                    We specialize in creating SCORM-compliant e-learning solutions that
                    seamlessly integrate with any LMS.
                  </p>
                  <p className="mb-6 text-gray-600">
                    Our team develops SCORM e-learning solutions from scratch, ensuring
                    interactive, trackable, and LMS-ready training modules tailored to
                    your needs.
                  </p>
                  <a className="inline-block mt-4 **w-full text-center lg:w-auto lg:text-left** lg:ml-24 px-8 py-2 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition duration-200 font-medium">
                    Request A Quote
                  </a>
                </div>
              </div>

              {/* Service Block 2 (Description left, Image right) - Preserves original HTML order */}
              <div className="flex flex-col lg:flex-row items-start w-full max-w-6xl mx-auto px-4 rounded-xl space-y-4 lg:space-y-0">
                {/* Description Card - Applied mobile stack spacing. Original lg:-mr-8 is preserved. */}
                <div className="relative w-full lg:w-1/2 bg-white p-8 lg:p-12 rounded-xl shadow-xl -mb-8 sm:-mb-16 lg:mb-0 mt-8 lg:mt-0 lg:-mr-8 lg:z-0">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    Software Development
                  </h2>
                  <p className="mb-4 text-gray-600">
                    We specialize in creating SCORM-compliant e-learning solutions that
                    seamlessly integrate with any LMS.
                  </p>
                  <p className="mb-6 text-gray-600">
                    Our team develops SCORM e-learning solutions from scratch, ensuring
                    interactive, trackable, and LMS-ready training modules tailored to
                    your needs.
                  </p>
                  <a className="inline-block mt-4 **w-full text-center lg:w-auto lg:text-left** lg:ml-24 px-8 py-2 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition duration-200 font-medium">
                    Request A Quote
                  </a>
                </div>

                {/* Image Card - Original lg:translate-y-8 is preserved */}
                <div className="relative w-full lg:w-1/2 h-72 lg:h-96 shadow-2xl bg-gradient-to-br from-purple-800 to-indigo-600 lg:mx-4 lg:translate-y-8 lg:z-10 rounded-xl">
                  {/* Background Image */}
                  <Image
                    src="/img/Pexels Photo by Christina Morillo.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-70 rounded-xl"
                  />

                  {/* Overlay Image - HIDDEN on mobile to prevent overflow, visible on lg screens. Original positioning preserved. */}
                  <Image
                    src="/img/S7.png"
                    alt="Overlay"
                    width={480}
                    height={480}
                    className="absolute -left-40 top-0 bottom-2 object-contain drop-shadow-2xl z-50 hidden lg:block"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            
              {/* Service Block 3 (Image left, Description right) - Duplicated content, only responsive adjustments */}
              <div className="flex flex-col lg:flex-row items-start w-full max-w-6xl mx-auto px-4 rounded-xl">
                {/* Image Card - Original lg:translate-y-8 is preserved */}
                <div className="relative w-full lg:w-1/2 h-72 lg:h-96 shadow-2xl bg-gradient-to-br from-purple-800 to-indigo-600 lg:mx-4 lg:translate-y-8 lg:z-10 rounded-xl">
                  {/* Background Image */}
                  <Image
                    src="/img/Pexels Photo by Christina Morillo.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-70 rounded-xl"
                  />

                  {/* Overlay Image - HIDDEN on mobile to prevent overflow, visible on lg screens. Original positioning preserved. */}
                  <Image
                    src="/img/s6.png"
                    alt="Overlay"
                    width={620}
                    height={620}
                    className="absolute -right-40 bottom-0 object-contain drop-shadow-2xl z-50 hidden lg:block"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Description Card - ADJUSTED mobile negative margin for better vertical stacking */}
                <div className="relative w-full lg:w-1/2 bg-white p-8 lg:p-12 rounded-xl shadow-xl -mt-8 sm:-mt-16 lg:mt-0 mb-8 lg:mb-0 lg:-ml-8 lg:z-0">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    UI/UX Design
                  </h2>
                  <p className="mb-4 text-gray-600">
                    We specialize in creating SCORM-compliant e-learning solutions that
                    seamlessly integrate with any LMS.
                  </p>
                  <p className="mb-6 text-gray-600">
                    Our team develops SCORM e-learning solutions from scratch, ensuring
                    interactive, trackable, and LMS-ready training modules tailored to
                    your needs.
                  </p>
                  <a className="inline-block mt-4 **w-full text-center lg:w-auto lg:text-left** lg:ml-24 px-8 py-2 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition duration-200 font-medium">
                    Request A Quote
                  </a>
                </div>
              </div>

              {/* Service Block 4 (Description left, Image right) - Duplicated content, only responsive adjustments */}
              <div className="flex flex-col lg:flex-row items-start w-full max-w-6xl mx-auto px-4 rounded-xl space-y-4 lg:space-y-0">
                {/* Description Card - Applied mobile stack spacing. Original lg:-mr-8 is preserved. */}
                <div className="relative w-full lg:w-1/2 bg-white p-8 lg:p-12 rounded-xl shadow-xl -mb-8 sm:-mb-16 lg:mb-0 mt-8 lg:mt-0 lg:-mr-8 lg:z-0">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    Mobile App Development
                  </h2>
                  <p className="mb-4 text-gray-600">
                    We specialize in creating SCORM-compliant e-learning solutions that
                    seamlessly integrate with any LMS.
                  </p>
                  <p className="mb-6 text-gray-600">
                    Our team develops SCORM e-learning solutions from scratch, ensuring
                    interactive, trackable, and LMS-ready training modules tailored to
                    your needs.
                  </p>
                  <a className="inline-block mt-4 **w-full text-center lg:w-auto lg:text-left** lg:ml-24 px-8 py-2 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition duration-200 font-medium">
                    Request A Quote
                  </a>
                </div>

                {/* Image Card - Original lg:translate-y-8 is preserved */}
                <div className="relative w-full lg:w-1/2 h-72 lg:h-96 shadow-2xl bg-gradient-to-br from-purple-800 to-indigo-600 lg:mx-4 lg:translate-y-8 lg:z-10 rounded-xl">
                  {/* Background Image */}
                  <Image
                    src="/img/Pexels Photo by Christina Morillo.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-70 rounded-xl"
                  />

                  {/* Overlay Image - HIDDEN on mobile to prevent overflow, visible on lg screens. Original positioning preserved. */}
                  <Image
                    src="/img/S7.png"
                    alt="Overlay"
                    width={480}
                    height={480}
                    className="absolute -left-40 top-0 bottom-2 object-contain drop-shadow-2xl z-50 hidden lg:block"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Form/>


      <Footer />
    </div>
  );
}