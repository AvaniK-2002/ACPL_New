"use client";
import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Settings, Clock, Sun, BarChart, DollarSign, Laptop } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import Form from "../components/Form";
import { CardsParallax, cardsData } from "../components/scroll-cards"; // adjust path if needed


const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet.",
    name: "Jerry Welsom",
    role: "Manager, Software Company",
    image: "/img/home2.jpg",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet.",
    name: "Jerry Welsom",
    role: "Manager, Software Company",
    image: "/img/home2.jpg",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet.",
    name: "Jerry Welsom",
    role: "Manager, Software Company",
    image: "/img/home2.jpg",
  },
];

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "1. What services does Ajinkya Creatiion provide?",
    answer:
      "We specialize in end-to-end creative solutions — including branding, graphic design, packaging, digital campaigns, event creatives,  and UI/UX design. Every project is custom-crafted to elevate your brand’s presence.",
  },
  {
    question: "2. How is Ajinkya Creatiion different from other design agencies?",
    answer:
      "Our approach blends strategy with creativity. We don’t just create visuals — we create brand experiences that connect emotionally with your audience. With uncompromising attention to detail and timely execution, we deliver designs that are both impactful and enduring.",
  },
  {
    question: "3. Do you work with startups as well as established brands?",
    answer:
      "Absolutely. We partner with both emerging businesses and industry leaders. Whether you’re building your brand identity from scratch or refining an existing one, we adapt our process to suit your vision and stage of growth.",
  },
  {
    question: "4. How does the design process work at Ajinkya Creatiion?",
    answer:
      "Our process begins with understanding your goals and audience. We then develop concepts, refine them through collaborative feedback, and craft final deliverables ready for print, digital, or campaign launch. Transparency and communication are central at every stage.",
  },
  {
    question: "5. What industries do you serve?",
    answer:
      "We have experience working across diverse industries including real estate, hospitality, retail, fashion, education, IT, and more. Our adaptability ensures that no matter the sector, your brand story is told with clarity and creativity.",
  },
 
  {
    question: "6. How do I get started with Ajinkya Creatiion?",
    answer:
      "Simply connect with us through our website’s contact page or email. Share your requirements, and our team will schedule a consultation to understand your needs, propose solutions, and create a tailored roadmap for your project."
  },
];



const Home = () => {
  // ✅ Added state for FAQ toggle
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name, value, type } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" && "checked" in target ? (target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // TODO: send to backend (Ajinkya & Sumedh emails)
    alert("✅ Your query has been sent to Ajinkya & Sumedh!");
  };


  const [style, setStyle] = useState({ transform: "rotateX(0deg) rotateY(0deg)" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;

    setStyle({ transform: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)` });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
  };


  return (
    <div>
      <section className="relative container mx-auto px-1 pt-32 md:pt-40 pb-16 md:pb-24 min-h-[600px]">

  {/* Hero Heading */}
<div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-black">
    <span>We deliver measurable business</span>
    <br />
    <span>impact through</span>

    <span className="relative inline-block px-2 sm:px-4 py-1">
      <span className="absolute inset-0 bg-purple-200 -skew-x-16 skew-y-2 rounded"></span>
      <span className="relative">custom-built in</span>
    </span>

    <br />
    <span>software, strategy, and</span>
    <br />
    <span>innovation.</span>
  </h1>

  {/* Sub Text */}
  <p className="mt-4 text-lg sm:text-xl text-gray-600">
    Accelerate your growth and drive innovation
  </p>

  {/* CTA Button */}
  <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-900 text-sm sm:text-base">
    Contact us
  </button>
</div>

  {/* Tags (buttons) */}
  <div className="flex flex-wrap justify-start items-center gap-3 mt-10 ml-2 md:ml-10">
    {["Digital transformation", "Adaptive Learning", "Data Driven"].map((text, idx) => (
      <button
        key={idx}
        className="border border-gray-300 px-4 py-2 rounded-3xl flex items-center gap-2 text-sm sm:text-base"
      >
        <span className="inline-flex bg-blue-200 text-black rounded-full w-6 h-6 items-center justify-center text-sm">
          +
        </span>
        {text}
      </button>
    ))}
  </div>

  {/* Large Screen Background Shape */}
{/* Large Screen Background Shape */}
<div className="hidden xl:block absolute top-0 right-0 lg:-right-24 xl:-right-32 2xl:-right-40 w-[30vw] h-[130%] bg-blue-50 -z-10"></div>




  <div
      className="w-full lg:absolute lg:top-20 lg:right-10 lg:w-[39%] flex justify-center items-center z-10 mt-8 lg:mt-0 perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="/img/Frame 253.png"
        alt="hero"
        className="rounded-lg w-full md:w-3/4 lg:w-full h-auto transition-transform duration-300 ease-out"
        style={style}
      />
    </div>
  {/* Overlapping Card - visible only on desktop and larger */}
<div className="hidden xl:flex absolute top-[15%] xl:left-[640px] 2xl:left-[720px] bg-white/20 rounded-lg p-6 shadow-lg w-64 h-40 flex-col items-start z-20">
  <div className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center mb-3 overflow-hidden">
    <img src="/img/h1.png" alt="Custom Icon" className="w-6 h-6 object-contain" />
  </div>

  <h3 className="text-lg font-bold mb-2 text-gray-900">
    End-to-End Solution
  </h3>

  <button className="mt-2 ml-10 px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm">
    Get started
  </button>
</div>


  


</section>

<section>
  <div className="bg-white border border-gray-300 w-screen mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-8 md:mb-10 py-8 sm:py-12 md:py-16">
  <div className="max-w-6xl mx-auto px-4">
    {/* Content goes here */}
  </div>
</div>
</section>
  

      


      
  

      


       <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* ----------------- CARD 1 ----------------- */}
        <div className="relative flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-xl shadow-md p-10 overflow-visible">
          {/* decorative notch (overlaps card corner and 'cuts' it) */}
          <div className="absolute -top-6 -right-6 w-14 h-14 rounded-full bg-gray-50 border-4 border-gray-200 shadow-sm z-20" />

          {/* Left image / mockup area */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-100 h-66 rounded-lg flex items-center justify-center">
              <img src="/img/Frame 107.png" alt="" />
            </div>
          </div>

          {/* Right content */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
            <h3 className="text-xl font-bold text-gray-900">
              SCORM e-Learning Development
            </h3>
            <p className="mt-3 text-gray-600">
              We specialize in creating SCORM-compliant eLearning solutions that
              seamlessly integrate with any Learning Management System (LMS).
            </p>
            <p className="mt-2 text-gray-600">
              Our team develops SCORM e-learning solutions from scratch — ensuring
              immersive, trackable and LMS-ready training modules tailored to
              your needs.
            </p>
            <button className="mt-5 px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>

        {/* ----------------- CARD 2 (reversed) ----------------- */}
        <div className="relative flex flex-col md:flex-row-reverse items-center bg-white border border-gray-200 rounded-xl shadow-md p-10 overflow-visible">
          {/* decorative notch on left for reversed card */}
          <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-gray-50 border-4 border-gray-200 shadow-sm z-20" />

          {/* Right image / mockup area */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-100 h-66 rounded-lg  flex items-center justify-center">
              <div className="w-64 h-40 bg-white rounded-md shadow-lg" />
              <img src="/img/Frame 110.png" alt="" />
            </div>
          </div>

          {/* Left content */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pr-8">
            <h3 className="text-xl font-bold text-gray-900">Software Development</h3>
            <p className="mt-3 text-gray-600">
              We offer end-to-end custom software development services tailored to
              your business needs — from analysis and UI/UX to backend coding,
              API integration, and deployment.
            </p>
            <p className="mt-2 text-gray-600">
              Our services include scalable, secure, and high-performance
              applications.
            </p>
            <button className="mt-5 px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>

        {/* See All Services */}
        <div className="flex justify-center mt-10">
  <Link href="/services">
    <button className="px-6 py-2 rounded-full border border-gray-300 text-purple-600 hover:bg-gray-100">
      See All Services
    </button>
  </Link>
</div>
      </div>
    </section>



      {/* Why Choose Us  */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-6">
          
          <div>
            
            <div className="flex items-center gap-3">
          {/* Line */}
          <span className="w-10 h-[1.5px] bg-black"></span>
          {/* Tag */}
          <button className="px-4 py-3 bg-purple-100 text-gray-900 rounded-md text-sm font-medium ">
            Why Choose Us
          </button>
        </div>

            <h1 className="text-4xl font-bold mb-4">
              Bringing Quality and Innovation
            </h1>
            <p className="text-gray-600 mb-6">
              Transforming education through technology and creative learning
              solution
            </p>

            <p className="text-gray-600 mb-6 text-justify">
              Ajinkya Creatiion is a premium design and branding studio driven by the belief that creativity, 
              when executed with precision, has the power to transform businesses into unforgettable brands.For over a decade, 
              we have partnered with startups, established enterprises, and visionary leaders to craft design solutions that inspire,
               engage, and deliver results. From brand identity and packaging to digital campaigns and event creatives, our portfolio
                reflects a balance of imagination and strategy.
            </p>

            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-900">
              Learn more
            </button>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative flex justify-center">
            <img
              src="/img/home1.png"
              alt="hero"
              className="rounded-lg w-96 sm:w-[500px] md:w-[650px] h-auto z-10 hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        </div>
         {/* Stats Section */}
<div className="mt-16 px-4 sm:px-6 lg:px-0 flex justify-end">
  <div className="bg-white shadow-md rounded-xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center sm:justify-center space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-10 min-w-full sm:min-w-[700px] md:min-w-[800px]">

    {/* Stat 1 */}
    <div className="text-center px-4 sm:px-8 md:px-12">
      <h3 className="text-3xl sm:text-4xl font-bold text-purple-700">2023</h3>
      <p className="text-base sm:text-lg text-gray-600">Founded</p>
    </div>

    {/* Divider */}
    <div className="hidden sm:block w-px h-12 sm:h-16 bg-gray-300"></div>

    {/* Stat 2 */}
    <div className="text-center px-4 sm:px-8 md:px-12">
      <h3 className="text-3xl sm:text-4xl font-bold text-purple-700">4</h3>
      <p className="text-base sm:text-lg text-gray-600">Divisions</p>
    </div>

    {/* Divider */}
    <div className="hidden sm:block w-px h-12 sm:h-16 bg-gray-300"></div>

    {/* Stat 3 */}
    <div className="text-center px-4 sm:px-8 md:px-12">
      <h3 className="text-3xl sm:text-4xl font-bold text-purple-700">6+</h3>
      <p className="text-base sm:text-lg text-gray-600">Services</p>
    </div>

    {/* Divider */}
    <div className="hidden sm:block w-px h-12 sm:h-16 bg-gray-300"></div>

    {/* Stat 4 */}
    <div className="text-center px-4 sm:px-8 md:px-12">
      <h3 className="text-3xl sm:text-4xl font-bold text-purple-700">100%</h3>
      <p className="text-base sm:text-lg text-gray-600">Innovation</p>
    </div>

  </div>
</div>

        </section>

      



      <section className="bg-[#f2f8fc] py-16 px-6 md:px-12 lg:px-24">
          <div className="mb-12">
        <div className="flex items-center gap-3">
          {/* Line */}
          <span className="w-10 h-[1.5px] bg-black"></span>
          {/* Tag */}
          <button className="px-4 py-1 bg-purple-100 text-gray-900 rounded-md text-sm font-medium">
            See How AI Revolutionized
          </button>
        </div>

        {/* Main Heading */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Our Client’s Success
        </h2>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-6">
            💰 25% Growth in Revenue
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center justify-center w-20 h-20 border border-gray-300 rounded-lg">
              <Settings className="w-10 h-10 text-gray-700" />
            </div>
            <div className="flex items-center justify-center w-20 h-20 border border-gray-300 rounded-lg">
              <Clock className="w-10 h-10 text-gray-700" />
            </div>
            <div className="flex items-center justify-center w-20 h-20 border border-gray-300 rounded-lg">
              <Sun className="w-10 h-10 text-yellow-500" />
            </div>
            <div className="flex items-center justify-center w-20 h-20 border border-gray-300 rounded-lg">
              <BarChart className="w-10 h-10 text-blue-600" />
            </div>
            <div className="flex items-center justify-center w-20 h-20 border border-gray-300 rounded-lg">
              <DollarSign className="w-10 h-10 text-green-600" />
            </div>
            <div className="flex items-center justify-center w-20 h-20 border border-gray-300 rounded-lg">
              <Laptop className="w-10 h-10 text-purple-600" />
            </div>
          </div>
        </div>
{/* Card 2 */}
<div className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition relative">
  <h3 className="font-semibold text-lg mb-2 px-2 pt-2">
    🚀 40% More Conversions
  </h3>

  <div className="relative w-full h-64 rounded-lg overflow-hidden">
    {/* Background image */}
    <img
      src="/img/home3.jpg"
      alt="Conversion optimization background"
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:grayscale"
    />

    {/* Overlay Card */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg w-64 h-38 text-center mb-20">
        <p className="text-gray-700 text-base font-medium">
          Data-driven optimization turned visitors into customers more effectively than ever before
        </p>
      </div>
    </div>
  </div>
</div>

{/* Card 3 */}
<div className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition relative">
  <h3 className="font-semibold text-lg mb-2 px-2 pt-2">
    ⚡ 50% Increase in Efficiency
  </h3>

  <div className="relative w-full h-64 rounded-lg overflow-hidden">
    <img
      src="/img/home4.jpg"
      alt="Team efficiency background"
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:grayscale"
    />
  </div>
</div>

</div>
</section>

      {/* ✅ Testimonials Section */}
<section className="w-full bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <span className="w-10 h-[1.5px] bg-black"></span>
        <button className="px-4 py-1 bg-purple-100 text-gray-900 rounded-md text-sm font-medium">
          Testimonials
        </button>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        What Our Clients Say
      </h2>
    </div>

    {/* Scrollable Testimonials Grid */}
    <div className="relative">
      <div
        ref={scrollRef}
        className="scroll-container flex gap-6 overflow-x-auto scroll-smooth"
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white border rounded-lg shadow-sm p-6 flex flex-col justify-between"
          >
            <p className="text-gray-600 mb-4">“{t.text}”</p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-6 mt-8">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95, backgroundColor: "#2563eb", transition: { duration: 0.2 } }}
          onClick={() => {
            scrollRef.current?.scrollBy({
              left: -350,
              behavior: "smooth"
            });
          }}
          className="w-10 h-10 flex items-center justify-center border border-blue-400 rounded-full"
        >
          <FaArrowLeft className="text-blue-500" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95, backgroundColor: "#2563eb", transition: { duration: 0.2 } }}
          onClick={() => {
            scrollRef.current?.scrollBy({
              left: 350,
              behavior: "smooth"
            });
          }}
          className="w-10 h-10 flex items-center justify-center border border-blue-400 rounded-full"
        >
          <FaArrowRight className="text-blue-500" />
        </motion.button>
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="w-full max-w-6xl mx-auto py-24 px-4 ">
        <div className="text-center mb-10">
          <div className="flex items-center gap-3 justify-center w-full">
  {/* Line */}
  <span className="w-10 h-[1.5px] bg-black"></span>

  {/* Button */}
  <button className="px-4 py-1 bg-purple-100 text-gray-900 rounded-md text-sm font-medium whitespace-nowrap">
    FAQs
  </button>
</div>


          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Questions? Look Here
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
     <div ref={formRef} id="contact-form">
        <Form />
      </div>


    </div>
  );
};

export default Home;
