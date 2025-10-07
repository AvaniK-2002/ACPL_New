// pages/about.tsx
"use client";
import React, { useRef } from "react";
import { Linkedin, Instagram, Quote } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import LandingAccordionItem from "../components/interactive-image-accordion";
import CustomCursor from "../components/CustomCursor";
import { motion, easeOut } from "framer-motion"; // <-- Added for animations


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
  { id: 1, title: "Excellence", description: "We are committed to delivering high-quality learning solutions that exceed expectations and create meaningful impact for learners and organizations." },
  { id: 2, title: "Innovation", description: "We continuously explore new technologies and methodologies to create cutting-edge learning experiences that transform traditional education and training." },
  { id: 3, title: "Integrity", description: "We continuously explore new technologies and methodologies to create cutting-edge learning experiences that transform traditional education and training." },
  { id: 4, title: "Learner-Centric", description: " We place the learner at the center of everything we do, designing solutions that are engaging, accessible, and effective for diverse learning needs." }
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

// ==================== ANIMATION VARIANTS ====================
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 px-4 pt-12 w-full max-w-7xl mx-auto"
        >
          <div className="relative w-full max-w-7xl">
            <div className="mb-2 lg:mb-0 lg:absolute lg:top-[-88px] lg:left-0">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="mt-6 lg:mt-12 text-2xl md:text-4xl lg:text-5xl font-bold text-black md:leading-tight text-center lg:text-left max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
              Driving Digital Growth Through Custom Solutions
            </h1>
          </div>
        </motion.div>
      </section>

      {/* WHO WE ARE & PROCESS STEPS */}
      <motion.section
        className="py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="bg-white overflow-hidden mb-8 -mx-4 sm:mx-0 p-6 sm:p-10 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center sm:text-left">
            Who Are <strong className="text-purple-600">We</strong>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-8 text-center sm:text-left">
            We design, develop and deliver digital brilliance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
            {["Foundation", "Innovation", "Growth", "Future"].map((step, i) => (
              <React.Fragment key={i}>
                <div className="p-[2px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                  <button className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full bg-sky-100 text-gray-800 text-sm sm:text-base md:text-lg font-medium shadow-sm transition-all">
                    {step}
                  </button>
                </div>
                {i < 3 && (
                  <div className="flex flex-col sm:flex-row items-center gap-2">
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
                    <div className="w-[2px] h-6 sm:w-8 sm:h-[2px] bg-sky-200"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CORE VALUES */}
      <motion.section
        className="py-8 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
       

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8 px-8">
          <div>
            <button className="text-2xl sm:text-3xl font-bold text-black bg-purple-200 px-6 py-3 rounded-full shadow-md hover:bg-pink-300 transition duration-300 mb-6">
              Our Core Values
            </button>
            <p className="text-black leading-relaxed mt-4 mb-8">  
              We empower businesses to thrive in the digital era by delivering complete,
              innovative solutions. From custom software development to SCORM-compliant e-learning platforms, 
              our approach blends cutting-edge technology, clean design, and smart coding practices. 
              Every project is crafted to enhance user experience, drive measurable results,
              and support sustainable growth in a rapidly evolving digital landscape.
            </p>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 pt-4">
              {coreValues.map((val) => (
                <motion.div
                  key={val.id}
                  className="p-4 rounded-xl shadow-md border border-gray-100 relative overflow-hidden bg-white"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: val.id * 0.2 }}
                >
                  <div className="relative z-10 space-y-2">
                    <p className="text-2xl font-bold text-gray-900 mb-2">0{val.id}</p>
                    <h4 className="text-lg font-bold text-gray-900">{val.title}</h4>
                    <p className="text-sm text-gray-600 leading-snug">{val.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* VISION & MISSION */}
      <motion.section
        className="py-8 px-4 sm:px-6 lg:px-12 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-3xl mx-auto">
          {[
            {
              title: "Our Vision",
              text: "To be the most trusted partner for AI, SaaS, and eLearning innovations globally.",
              img: "/img/A2.png",
            },
            {
              title: "Our Mission",
              text: "To deliver technology-first solutions that empower businesses to thrive in the digital era.",
              img: "/img/A1.png",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-8 flex flex-col lg:flex-row min-h-[300px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                <p className="leading-relaxed text-gray-700">{item.text}</p>
              </div>
              <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* MESSAGE FROM OUR DIRECTOR */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative bg-gradient-to-b from-white to-blue-100 rounded-xl p-8 shadow-md">
            <Quote className="absolute left-6 top-6 w-16 h-16 text-blue-300 opacity-60 rotate-180" />
            <div className="pl-24 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Message From Our Director
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our director envisions a future where technology empowers businesses and individuals alike. With a focus on innovation, integrity, and excellence, we strive to deliver software solutions that make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FOUNDERS */}
      <motion.section
        className="py-16 px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
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
      </motion.section>

      <motion.section
        className="py-16 px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="col-span-1 lg:col-span-2 text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Faces Behind Our Software Solution
            </h2>
            <p className="text-black leading-relaxed mb-2">
              <span className="block">
                Meet the passionate team driving innovation and delivering exceptional software solutions.
              </span>
              <span className="block">
                Our experts combine creativity, technical expertise, and a commitment to excellence to transform ideas into impactful products.
              </span>
            </p>
          </div>
          <div className="flex justify-end items-center h-64 md:h-96">
            <LandingAccordionItem />
          </div>
        </div>
      </motion.section>

      <div className="h-20 bg-gray-50" />
      <div ref={formRef} id="contact-form">
        <Form />
      </div>
      <CustomCursor />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
