"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function NewsPage() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Add ref for form scrolling
  const formRef = useRef<HTMLDivElement>(null);

  // ✅ Scroll function
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative min-h-screen bg-white ">
      <Header />

      

{/* Desktop rotated button (visible on md+ screens) */}
<div className="fixed left-0 top-1/2 -rotate-90 z-20 hidden md:block">
  <Link href="/Blogs">
    <button className="flex items-center gap-1 bg-purple-100 text-gray-800 font-medium px-4 py-3 rounded-t-lg shadow w-36 justify-between">
      Blogs
      
    </button>
  </Link>
</div>


      {/* Top Section */}
      <section className="relative w-full mx-auto flex flex-col md:flex-row items-start py-12 overflow-hidden px-4 md:px-0">
        {/* Background images - Hidden on mobile for performance/clutter */}
        <div className="absolute left-0 w-3/4 h-[120%] -translate-y-70 -translate-x-50 hidden md:block">
          <Image
            src="/img/Frame 130.png"
            alt="Left Background"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="absolute right-0 top-0 w-3/4 h-[120%] translate-y-40 translate-x-70 hidden md:block">
          <Image
            src="/img/Frame 131.png"
            alt="Right Background"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Heading */}
        <div className="flex-1 relative z-10 ml-0 mt-0 md:ml-40 md:mt-10 mb-8 md:mb-0">
          <h4 className="text-gray-500 text-sm mb-2">Insights</h4>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span>News And </span> <br /> Resources
          </h1>

          {/* Three small blue dots */}
          <div className="flex mt-4 gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        {/* Image + Description */}
        <div className="flex-1 relative z-10 flex flex-col sm:flex-row mr-0 md:mr-48 gap-4">
          {/* Image */}
          <div className="relative w-full h-48 sm:w-90 sm:h-70 order-2 sm:order-1">
            <Image
              src="/img/c1.jpg"
              alt="Trending"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>

          {/* Description */}
          <div className="flex flex-col justify-between bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg w-full sm:w-120 order-1 sm:order-2">
            <span className="text-xs font-semibold text-red-500 mb-2">
              Trending Now
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Trends in AI And Pricing
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet.
            </p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Author</span>
              <span>Sept 20, 2025</span>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile-friendly horizontal button (visible on small screens) */}
<div className="relative z-20 mx-34 mt-4  block md:hidden">
  <Link href="/Blogs">
    <button className="flex items-center gap-1 bg-purple-100 text-gray-800 font-medium px-4 py-3 rounded-lg shadow w-full justify-between">
      Blogs
      
    </button>
  </Link>
</div>

      {/* Divider - This seems misplaced/redundant in the original, keeping it minimally visible */}
      <div className="hidden border-l-4 border-gray-500 pl-4"></div>

      {/* Explore Case Studies */}
      <section className="container mx-auto flex flex-col md:flex-row gap-6 px-4 mt-12 md:mt-28">
        {/* Left Content (Title/Button) */}
        <div className="w-full md:w-1/3 space-y-6 md:sticky md:top-24 h-fit">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 -mt-0 md:-mt-20">
            <button className="bg-purple-200 text-gray-600 px-6 py-2 rounded-md">
              Explore Case Studies
            </button>
            <div className="hidden md:block h-[2px] bg-black flex-1 w-12 ml-auto"></div>
          </div>

          <div className="w-full p-0 md:p-6 rounded-lg flex mt-4 md:mt-0">
            <div className="border-l-4 border-gray-500 pl-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                Explore how our <div><span>expertise translates</span></div> into tangible results
              </h2>
            </div>
          </div>
        </div>

        {/* Blog List (Right Content) */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          {/* Blog Card 1 */}
          <div className="flex flex-col sm:flex-row gap-4 bg-white shadow border rounded-lg overflow-hidden">
            <div className="w-full sm:w-1/3 relative h-48 sm:h-auto">
              <Image src="/img/c2.jpg" alt="Blog 1" fill className="object-cover" priority />
            </div>
            <div className="w-full sm:w-2/3 p-4">
              <p className="text-xs text-gray-400">Category</p>
              <h3 className="font-semibold text-gray-800">
                Challenge: The business obstacle faced
              </h3>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                Low learner engagement and high churn.
              </p>
              <span className="text-xs text-gray-400 block mt-2">Sept 20, 2025</span>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="flex flex-col sm:flex-row gap-4 bg-white shadow border rounded-lg overflow-hidden">
            <div className="w-full sm:w-1/3 relative h-48 sm:h-auto">
              <Image src="/img/c3.jpg" alt="Blog 2" fill className="object-cover" priority />
            </div>
            <div className="w-full sm:w-2/3 p-4">
              <p className="text-xs text-gray-400">Category</p>
              <h3 className="font-semibold text-gray-800">
                Solution: How our technology or AI-driven product solved it.
              </h3>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                Implemented AI-driven personalized learning.
              </p>
              <span className="text-xs text-gray-400 block mt-2">Sept 20, 2025</span>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="flex flex-col sm:flex-row gap-4 bg-white shadow border rounded-lg overflow-hidden">
            <div className="w-full sm:w-1/3 relative h-48 sm:h-auto">
              <Image src="/img/c4.jpg" alt="Blog 3" fill className="object-cover" priority />
            </div>
            <div className="w-full sm:w-2/3 p-4">
              <p className="text-xs text-gray-400">Category</p>
              <h3 className="font-semibold text-gray-800">
                Results: Measurable impact with real data
              </h3>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                45% increase in retention and 80% boost in user adoption.
              </p>
              <span className="text-xs text-gray-400 block mt-2">Sept 20, 2025</span>
            </div>
          </div>
        </div>
      </section>
      
      <div className="mt-12 md:mt-20">
        <div ref={formRef} id="contact-form">
        <Form />
      </div>
      </div>
      <Footer />
    </div>
  );
}