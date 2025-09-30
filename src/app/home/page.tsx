"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Settings, Clock, Sun, BarChart, DollarSign, Laptop } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";


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


  return (
    <div>
      {/* Hero Section */}
      <h1 className="text-align-Center mt-5 container mx-auto pt-24 z-10 mr-800 text-align-Center ml-10  ">
        <span className="text-black font-bold text-4xl">
          We deliver measurable business    
        </span>
        <br />
       
        <span className="text-black font-bold text-4xl">impact through </span>
        <span className="relative inline-block text-4xl font-bold text-black px-4 py-1">
  <span className="absolute inset-0 bg-purple-200 -skew-x-16 skew-y-2 rounded"></span>
  <span className="relative">custom-built in</span>
</span>

        <br />
        
        <span className="text-black text-4xl font-bold">software, strategy, and</span>
        <br/>
        <span className="text-black text-4xl font-bold">innovation.</span>
      </h1>

      

      <p className="mt-4 text-align-Center container mx-auto text-2xl mr-800 text-align-Center ml-10">
        Accelerate your growth and drive innovation
      </p>

      <button className="mt-8 ml-10 mr-48 mb-10 border border-gray-1.5 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-900 ">
        Contact us
      </button>

      <div className="flex justify-center items-center gap-2 mt-12 mb-6 mr-188">
  <button className="border border-gray-300 px-4 py-2 rounded-3xl">
    <span className="inline-flex bg-blue-200 text-black rounded-full w-6 h-6 items-center justify-center text-sm">+</span> Digital transformation
  </button>

  <button className="border border-gray-300 px-4 py-2 rounded-3xl">
    <span className="inline-flex bg-blue-200 text-black rounded-full w-6 h-6 items-center justify-center text-sm">+</span> Adaptive Learning
  </button>

  <button className="border border-gray-300 px-4 py-2 rounded-3xl">
    <span className="inline-flex bg-blue-200 text-black rounded-full w-6 h-6 items-center justify-center text-sm">+</span> Data Driven
  </button>
</div>


      {/* Backgrounds */}
      <div className="absolute top-10 right-0 w-[29%] h-full bg-blue-50 -z-10 pt-24"></div>
      <div className="absolute top-0 right-30 w-[39%] h-full flex justify-center items-center z-10">
        <img
          src="/img/Frame 253.png"
          alt="hero"
          className="rounded-lg w-[90%] h-auto z-10 hover:scale-110 transition duration-300 ease-in-out"
        />
      </div>

      {/* Overlapping Card */}
      <div className="absolute top-45 left-180 bg-white/20 rounded-lg p-6 shadow-lg w-64 h-40 flex flex-col items-start z-20">


       <div className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center mb-3 overflow-hidden">
  <img
    src="/img/h1.png"
    alt="Custom Icon"
    className="w-6 h-6  object-contain"
  />



        </div>
        <h3 className="text-lg font-bold mb-2 text-gray-900">End-to-End Solution</h3>
        <button className="mt-2 ml-10 px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm ">
          Get started
        </button>
      </div>
  

      <div className="bg-white border border-gray-1.5 px-4 py-16 mt-16 mb-10"></div>

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
        <div className="mt-16 ml-100">
          <div className="bg-white shadow-md rounded-xl p-8 flex flex-wrap justify-around items-center">
            <div className="text-center px-6">
              <h3 className="text-2xl font-bold text-purple-700">2023</h3>
              <p className="text-gray-600">Founded</p>
            </div>
            <span className="hidden sm:block w-px h-12 bg-gray-300"></span>

            <div className="text-center px-6">
              <h3 className="text-2xl font-bold text-purple-700">4</h3>
              <p className="text-gray-600">Divisions</p>
            </div>
            <span className="hidden sm:block w-px h-12 bg-gray-300"></span>

            <div className="text-center px-6">
              <h3 className="text-2xl font-bold text-purple-700">6+</h3>
              <p className="text-gray-600">Services</p>
            </div>
            <span className="hidden sm:block w-px h-12 bg-gray-300"></span>

            <div className="text-center px-6">
              <h3 className="text-2xl font-bold text-purple-700">100%</h3>
              <p className="text-gray-600">Innovation</p>
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
      className="w-full h-full object-cover"
    />
{/* Overlay Card */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg w-64 h-38  text-center  mb-20">
      
      <p className="text-gray-700 text-base font-medium">
        Data-driven optimization turned visitors into customers more effectively that ever before
      </p>
    </div>
  </div>
    
    
  </div>
</div>
      {/* Card 3 */}
<div className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition">
  <h3 className="font-semibold text-lg mb-2 px-2 pt-2">
    ⚡ 50% Increase in Efficiency
  </h3>

  <div className="relative w-full h-64 rounded-lg overflow-hidden">
    <img
      src="/img/home4.jpg"
      alt="Team efficiency background"
      className="w-full h-full object-cover"
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
          {/* Line */}
          <span className="w-10 h-[1.5px] bg-black"></span>
          {/* Tag */}
          <button className="px-4 py-1 bg-purple-100 text-gray-900 rounded-md text-sm font-medium">
            Testimonials
          </button>
        </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
<div className="flex justify-center gap-6 mt-8 mr-248">
  <motion.button
    whileHover={{ scale: 1.2 }}
    whileTap={{
      scale: 0.95,
      backgroundColor: "#2563eb", // Tailwind blue-600
      transition: { duration: 0.2 },
    }}
    className="w-10 h-10 flex items-center justify-center border border-blue-400 rounded-full"
  >
    <FaArrowLeft className="text-blue-500 motion-safe:group-hover:text-white" />
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.2 }}
    whileTap={{
      scale: 0.95,
      backgroundColor: "#2563eb", // Tailwind blue-600
      transition: { duration: 0.2 },
    }}
    className="w-10 h-10 flex items-center justify-center border border-blue-400 rounded-full"
  >
    <FaArrowRight className="text-blue-500 motion-safe:group-hover:text-white" />
  </motion.button>
</div>
</div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-6xl mx-auto py-24 px-4 ">
        <div className="text-center mb-10">
          <div className="flex items-center gap-3 ml-120">
          {/* Line */}
          <span className="w-10 h-[1.5px] bg-black"></span>
          {/* Tag */}
          <button className="px-4 py-1 bg-purple-100 text-gray-900 rounded-md text-sm font-medium ">
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
     <section className="bg-gradient-to-b from-[#f7f9fc] to-[#d9f0fa] py-0 px-6 md:px-12 lg:px-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[400px]">
    
    {/* Left Side - Form */}
    <div className="flex flex-col justify-center p-12 bg-gradient-to-b from-[#f7f9fc] to-[#d9f0fa]">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Ready to Build Smarter Solutions?
      </h2>

      {/* Form Fields */}
      <form className="space-y-4 w-100 mx-auto">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 text-sm">
            Full Name *
          </label>
          <input
            type="text"
            required
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 text-sm">
            Contact Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 9876543210"
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 text-sm">
            Email ID *
          </label>
          <input
            type="email"
            required
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Budget Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium mb-1 text-sm">
            I’m willing to spend *
          </label>
          <select
            required
            className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">-- Select Budget --</option>
            <option value="0-1 lac">0 - 1 Lac</option>
            <option value="1-2 lac">1 - 2 Lac</option>
            <option value="3-4 lac">3 - 4 Lac</option>
            <option value="4 lac plus">4 Lac Plus</option>
          </select>
        </div>

        {/* Enquiry For */}
        <div className="mb-6">
          <p className="font-medium text-gray-800 mb-3">Enquiry For</p>
          <div className="grid grid-cols-2 gap-4">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSelected(option)}
                className={`px-4 py-2 rounded-full shadow-md text-sm transition-colors ${
                  selected === option
                    ? "bg-sky-500 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div>
  <label className="block text-gray-700 font-medium mb-1 text-sm">
    Message
  </label>
  <textarea
    rows={5}
    placeholder="Write your message here..."
    className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
  ></textarea>
</div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 rounded-md shadow-md transition text-sm"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Right Side - Image */}
    <div className="hidden lg:block h-full">
      <img
        src="/img/Group 23.png"
        alt="AI illustration"
        className="w-full h-full object-cover ml-20"
      />
    </div>
  </div>
</section>


    </div>
  );
};

export default Home;
