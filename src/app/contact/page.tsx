// "use client";
// import React, { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import Breadcrumb from "../components/Breadcrumb";


// import {
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
//   Linkedin,
//   Twitter,
//   Github,
//   MessageCircle,
// } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";

// interface BreadcrumbItem {
//   label: string;
//   href: string;
// }

// const breadcrumbItems: BreadcrumbItem[] = [
//   { label: "Home", href: "/" },
//   { label: "Contact Us", href: "/contact" },
// ];


// function Contact() {
//   const options: string[] = [
//     "Software Development",
//     "E-Learning",
//     "Corporate training",
//   ];
//   const [selected, setSelected] = useState<string>("");

//   return (
//      <div className="relative min-h-screen bg-white ">
//       <Header />
//       <section className="relative min-h-[400px] flex items-center justify-center text-white overflow-hidden">
//               <div className="absolute left-0 w-3/4 h-[180%] opacity-50 lg:opacity-100 -translate-y-50 -translate-x-50 scale-150 lg:scale-100">
//                 <Image src="/img/Frame 130.png" alt="Left Background" fill className="object-contain" priority />
//               </div>
//               <div className="absolute right-0 top-0 w-3/4 h-[180%] opacity-50 lg:opacity-100 translate-y-10 translate-x-70 scale-150 lg:scale-100">
//                 <Image src="/img/Frame 131.png" alt="Right Background" fill className="object-contain" priority />
//               </div>
//               <div className="relative z-10 px-4 pt-12 w-full max-w-7xl mx-auto">
//                 <div className="relative w-full max-w-7xl">
//                   <div className="mb-2 lg:mb-0 lg:absolute lg:top-[-88px] lg:left-0">
//                     <Breadcrumb items={breadcrumbItems} />
//                   </div>
//                   <h1 className="mt-6 lg:mt-12 text-2xl md:text-4xl lg:text-5xl font-bold text-black md:leading-tight text-center lg:text-left max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
//                     Driving Digital Growth Through Custom Solutions
//                   </h1>
//                 </div>
//               </div>
//             </section>

//  <section className="bg-gradient-to-b from-[#f7f9fc] to-[#d9f0fa] py-12 px-6 md:px-12 lg:px-20">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-stretch">
//         {/* ---------- LEFT SIDE: FORM ---------- */}
//         <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col justify-between h-full">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//               Ready to Build Smarter Solutions?
//             </h2>

//             <form className="space-y-5">
//               {/* Full Name */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1 text-sm">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                 />
//               </div>

//               {/* Contact Number */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1 text-sm">
//                   Contact Number *
//                 </label>
//                 <input
//                   type="tel"
//                   required
//                   placeholder="+91"
//                   className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1 text-sm">
//                   Email ID *
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                 />
//               </div>

//               {/* Budget Dropdown */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1 text-sm">
//                   I’m willing to spend *
//                 </label>
//                 <select
//                   required
//                   className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                 >
//                   <option value="">-- Select Budget --</option>
//                   <option value="0-1 lac">0 - 1 Lac</option>
//                   <option value="1-2 lac">1 - 2 Lac</option>
//                   <option value="3-4 lac">3 - 4 Lac</option>
//                   <option value="4 lac plus">4 Lac Plus</option>
//                 </select>
//               </div>

//               {/* Enquiry For */}
//               <div>
//                 <p className="font-medium text-gray-800 mb-3">Enquiry For</p>
//                 <div className="flex flex-wrap gap-3">
//                   {options.map((option) => (
//                     <button
//                       key={option}
//                       type="button"
//                       onClick={() => setSelected(option)}
//                       className={`px-4 py-2 rounded-full shadow-sm text-sm transition ${
//                         selected === option
//                           ? "bg-sky-500 text-white"
//                           : "bg-white text-gray-700 border"
//                       }`}
//                     >
//                       {option}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1 text-sm">
//                   Message
//                 </label>
//                 <textarea
//                   rows={5}
//                   placeholder="Write your message here..."
//                   className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                 ></textarea>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 rounded-md shadow-md transition text-sm"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* ---------- RIGHT SIDE: IMAGE + CONTACT INFO ---------- */}
//         <div className="flex flex-col justify-between h-full">
//           {/* Image */}
//           <div>
//             <img
//               src="/img/ai.png"
//               alt="AI illustration"
//               className="w-full h-auto rounded-xl object-cover"
//             />
//           </div>

//           {/* Contact Info Card */}
//           <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
//             <div className="space-y-4 text-gray-700 text-sm">
//               <div className="flex items-center gap-3">
//                 <Mail className="w-5 h-5 text-purple-600" />
//                 <div>
//                   <p>contact@ajinkyacreation.com</p>
//                   <p>ajinkya.d@ajinkyacreation.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3">
//                 <Phone className="w-5 h-5 text-purple-600" />
//                 <p>+91 9960041473</p>
//               </div>

//               <div className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-purple-600 mt-1" />
//                 <p>
//                   Bremen Chowk, Phase 1, Siddarth Nagar Society, Aundh, Pune,
//                   Maharashtra 411067
//                 </p>
//               </div>

//               <div className="flex items-start gap-3">
//                 <Clock className="w-5 h-5 text-purple-600 mt-1" />
//                 <div>
//                   <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
//                   <p>Saturday: 10:00 AM - 4:00 PM</p>
//                   <p>Sunday: Closed</p>
//                 </div>
//               </div>

//               {/* Social Icons */}
//       <div className="flex gap-4 pt-2">
//         <a
//           href="#"
//           className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-2 transition transform hover:scale-105"
//         >
//           <Linkedin size={18} />
//         </a>
//         <a
//           href="#"
//           className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-2 transition transform hover:scale-105"
//         >
//           <Twitter size={18} />
//         </a>
//           <a
//             href="#"
//             className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-2 transition transform hover:scale-105"
//           >
//             <Github size={18} />
//           </a>
//               <a
//         href="https://wa.me/919960041473" 
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-2 transition transform hover:scale-105"
//       >
//         <FaWhatsapp size={18} />
//       </a>
//      </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <Footer />
//     </div>
//   );
// }

// export default Contact;

"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
];

function Contact() {
  const options: string[] = [
    "Software Development",
    "E-Learning",
    "Corporate Training",
  ];
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="relative min-h-screen bg-white">
      <Header />

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute left-0 w-3/4 h-[180%] opacity-50 lg:opacity-100 -translate-y-50 -translate-x-50 scale-150 lg:scale-100">
          <Image
            src="/img/Frame 130.png"
            alt="Left Background"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute right-0 top-0 w-3/4 h-[180%] opacity-50 lg:opacity-100 translate-y-10 translate-x-70 scale-150 lg:scale-100">
          <Image
            src="/img/Frame 131.png"
            alt="Right Background"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="relative z-10 px-4 pt-12 w-full max-w-7xl mx-auto">
          <div className="relative w-full max-w-7xl">
            <div className="mb-2 lg:mb-0 lg:absolute lg:top-[-88px] lg:left-0">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            {/* <h1 className="mt-6 lg:mt-12 text-2xl md:text-4xl lg:text-5xl font-bold text-black md:leading-tight text-center lg:text-left max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
              Driving Digital Growth Through Custom Solutions
            </h1> */}
            <h1 className="mt-6 lg:mt-12 text-2xl md:text-4xl lg:text-5xl font-bold text-black md:leading-tight text-center lg:text-left max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
  Let’s Build Something Great — Get in Touch With Us
</h1>

          </div>
        </div>
      </section>

      {/* ---------- CONTACT SECTION ---------- */}
      <section className="relative py-16 px-6 md:px-12 lg:px-20 bg-[#f9fafb]">
        {/* ✅ Subtle Dotted Pattern */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#cfd8dc_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 max-w-7xl mx-auto items-stretch">
          {/* ---------- LEFT SIDE: FORM ---------- */}
          <div className="relative flex flex-col justify-center rounded-2xl bg-white/50 backdrop-blur-lg p-8 sm:p-10 shadow-lg border border-white/40">
            {/* Gradient Border Animation */}
           <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 animate-[gradientMove_5s_linear_infinite] opacity-50 -z-10"></div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center lg:text-left leading-tight">
             Let's Bring Your Vision to Life 
            </h2> 
            
            <p className="text-gray-600 text-sm mb-8 text-center lg:text-left">
              Fill out the form below, and our team will connect with you
              shortly.
            </p>

            <form className="space-y-5">
              {/* Floating Label Input - Full Name */}
              <div className="relative">
                <input
                  type="text"
                  required
                  className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-sm text-gray-800 placeholder-transparent focus:border-sky-500 focus:outline-none"
                  placeholder="Full Name"
                />
                <label className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-sky-600">
                  Full Name *
                </label>
              </div>

              {/* Contact Number */}
              <div className="relative">
                <input
                  type="tel"
                  required
                  placeholder="Contact Number"
                  className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-sm text-gray-800 placeholder-transparent focus:border-sky-500 focus:outline-none"
                />
                <label className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-sky-600">
                  Contact Number *
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-sm text-gray-800 placeholder-transparent focus:border-sky-500 focus:outline-none"
                />
                <label className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-sky-600">
                  Email ID *
                </label>
              </div>

              {/* Budget Dropdown */}
              <div>
                <label className="block text-gray-600 text-sm mb-1">
                  I’m willing to spend *
                </label>
                <select
                  required
                  className="w-full border-b-2 bg-transparent border-gray-300 px-0 py-2 text-sm focus:border-sky-500 focus:outline-none"
                >
                  <option value="">-- Select Budget --</option>
                  <option value="0-1 lac">0 - 1 Lac</option>
                  <option value="1-2 lac">1 - 2 Lac</option>
                  <option value="3-4 lac">3 - 4 Lac</option>
                  <option value="4 lac plus">4 Lac Plus</option>
                </select>
              </div>

              {/* Enquiry For */}
              <div>
                <p className="font-medium text-gray-700 mb-3 text-sm">
                  Enquiry For
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelected(option)}
                      className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                        selected === option
                          ? "bg-sky-500 text-white shadow-lg scale-105"
                          : "bg-white/60 text-gray-700 hover:bg-sky-100"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  rows={4}
                  placeholder="Your message"
                  className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-sm text-gray-800 placeholder-transparent focus:border-sky-500 focus:outline-none resize-none"
                ></textarea>
                <label className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-sky-600">
                  Message
                </label>
              </div>

              {/* Submit */}
              <button
  type="submit"
  className="relative w-full text-white font-semibold py-3 rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]"
>
  {/* Animated Gradient Background */}
  <span className="absolute inset-0 animate-gradientMove bg-gradient-to-r from-sky-500 via-blue-500 to-blue-700 bg-[length:200%_200%]"></span>

  {/* Button Text */}
  <span className="relative z-10 flex items-center justify-center">
    ✉️ Send Message
  </span>

  {/* Gradient Animation Style */}
  <style jsx>{`
    @keyframes gradientMove {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 200% 50%;
      }
    }

    .animate-gradientMove {
      animation: gradientMove 4s linear infinite;
    }
  `}</style>
</button>

</form>
</div>

          {/* ---------- RIGHT SIDE: IMAGE & INFO ---------- */}
          <div className="relative flex flex-col justify-between  h-full">
            <div>
              <img
                src="/img/ai.png"
                alt="AI illustration"
                className=" w-full max-w-[590px] h-[400px] rounded-xl object-cover shadow-lg"
              />
            </div>

           <div className="max-w-[590px] h-[400px] bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-2xl shadow-md p-6 mt-6 flex flex-col justify-between">
  <div className="space-y-5 text-gray-700 text-sm">

    {/* Email */}
    <div className="flex items-start gap-3">
      <Mail className="w-5 h-5 text-purple-600 mt-1" />
      <div className="flex flex-col gap-1">
        <p>contact@ajinkyacreation.com</p>
        <p>ajinkya.d@ajinkyacreation.com</p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-3">
      <Phone className="w-5 h-5 text-purple-600" />
      <p>+91 9960041473</p>
    </div>

    {/* Address */}
    <div className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-purple-600 mt-1" />
      <p>
        Bremen Chowk, Phase 1, Siddarth Nagar Society, Aundh, Pune,
        Maharashtra 411067
      </p>
    </div>

    {/* Working Hours */}
    <div className="flex items-start gap-3">
      <Clock className="w-5 h-5 text-purple-600 mt-1" />
      <div className="flex flex-col gap-1">
        <p>Monday - Friday: 10:00 AM - 7:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>

    {/* Social Icons */}
    <div className="flex gap-3 pt-3">
      <a
        href="#"
        className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-2 transition transform hover:scale-105"
      >
        <Linkedin size={18} />
      </a>
      <a
        href="#"
        className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-2 transition transform hover:scale-105"
      >
        <Twitter size={18} />
      </a>
      <a
        href="#"
        className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-2 transition transform hover:scale-105"
      >
        <Github size={18} />
      </a>
      <a
        href="https://wa.me/919960041473"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-2 transition transform hover:scale-105"
      >
        <FaWhatsapp size={18} />
      </a>
    </div>

  </div>
 </div>
</div>
</div>

        {/* Keyframes for gradient border */}
        <style>{`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
