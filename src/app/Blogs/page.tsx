"use client";
import React, { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import { motion } from "framer-motion";

/* -------------------- MOCK DATA -------------------- */
interface Article {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
}

const CATEGORIES = [
  { name: "All Articles", href: "#" },
  { name: "Artificial Intelligence", href: "#" },
  { name: "Engineering", href: "#" },
  { name: "Government", href: "#" },
];

const MOCK_ARTICLES: Article[] = [
  { id: 1, category: "Artificial Intelligence", title: "Trends In AI And Pricing", author: "John Doe", date: "Sept 20, 2025", imageUrl: "/img/b3.jpg" },
  { id: 2, category: "Engineering", title: "Software Best Practices", author: "Jane Smith", date: "Sept 20, 2025", imageUrl: "/img/b4.jpg" },
  { id: 3, category: "Artificial Intelligence", title: "Trends In AI And Pricing", author: "Mark Lee", date: "Sept 20, 2025", imageUrl: "/img/b2.jpg" },
  { id: 4, category: "Engineering", title: "Software Best Practices", author: "Sarah Connor", date: "Sept 20, 2025", imageUrl: "/img/b1.jpg" },
  { id: 5, category: "Artificial Intelligence", title: "Trends In AI And Pricing", author: "David Kim", date: "Sept 20, 2025", imageUrl: "/img/b5.jpg" },
  { id: 6, category: "Engineering", title: "Software Best Practices", author: "Lisa Ray", date: "Sept 20, 2025", imageUrl: "/img/b6.jpg" },
];

/* -------------------- UI PARTS -------------------- */
const ArticleCard: React.FC<Article> = ({ category, title, author, date, imageUrl }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col overflow-hidden bg-white rounded-lg shadow hover:shadow-md transition"
  >
    <div className="relative h-40 sm:h-48 md:h-56 w-full overflow-hidden rounded-t-lg bg-gray-100">
      <Image src={imageUrl} alt={title} fill className="object-cover" />
    </div>
    <div className="p-4">
      <p className="text-xs font-medium text-gray-500 uppercase">{category}</p>
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 hover:text-indigo-600 cursor-pointer mt-1">
        {title}
      </h3>
      <p className="mt-1 text-xs sm:text-sm text-gray-500 flex flex-wrap gap-x-1">
        <span className="font-medium">Author</span> {author}
        <span>•</span>
        {date}
      </p>
    </div>
  </motion.article>
);

/* Sidebar with vertical line (desktop only) */
const Sidebar: React.FC<{ activeCategory: string; setActiveCategory: (c: string) => void; }> = ({ activeCategory, setActiveCategory }) => (
  <aside>
    <div className="space-y-6 md:space-y-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-10 text-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        <svg className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <h2 className="text-lg md:text-xl font-bold text-gray-800 pb-2 mb-4 md:mb-6 mt-4 md:mt-10">Categories</h2>

      <nav className="pt-2 space-y-1 relative pl-2 md:pl-4">
        <div className="absolute left-0 top-6 h-1/2 w-[2px] bg-black rounded hidden md:block" />
        {CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`w-full text-left py-2 px-2 md:px-3 text-sm md:text-lg rounded-md transition-colors ${
              activeCategory === cat.name ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </nav>
    </div>
  </aside>
);

/* -------------------- MAIN PAGE -------------------- */
const ResourcesPage: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All Articles");
  const [openDesktop, setOpenDesktop] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  const filteredArticles = MOCK_ARTICLES.filter(
    (a) => activeCategory === "All Articles" || a.category === activeCategory
  );

  const formRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (desktopRef.current && !desktopRef.current.contains(target)) setOpenDesktop(false);
      if (mobileRef.current && !mobileRef.current.contains(target)) setOpenMobile(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ---------- Desktop button ---------- */}
      <div className="hidden md:block">
        <div className="fixed left-0 top-1/2 z-40 -translate-y-1/2">
          <Link href="/insights">
            <button className="-rotate-90 flex items-center gap-1 bg-purple-100 text-gray-800 font-medium px-4 py-3 rounded-t-lg shadow w-36 justify-between">
              Case Studies
            </button>
          </Link>
        </div>
      </div>

      {/* ---------- Top Section ---------- */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full mx-auto flex flex-col md:flex-row items-start py-12 overflow-hidden px-4 md:px-0"
      >
        <div className="absolute left-0 w-3/4 h-[120%] -translate-y-70 -translate-x-50 hidden md:block">
          <Image src="/img/Frame 130.png" alt="Left Background" fill className="object-contain" priority />
        </div>

        <div className="absolute right-0 top-0 w-3/4 h-[120%] translate-y-40 translate-x-70 hidden md:block">
          <Image src="/img/Frame 131.png" alt="Right Background" fill className="object-contain" priority />
        </div>

        <div className="flex-1 relative z-10 ml-0 mt-0 md:ml-40 md:mt-10 mb-8 md:mb-0">
          <h4 className="text-gray-500 text-sm mb-2">Insights</h4>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span>News And </span> <br /> Resources
          </h1>

          <div className="flex mt-4 gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        <div className="flex-1 relative z-10 flex flex-col sm:flex-row mr-0 md:mr-48 gap-4">
          <div className="relative w-full h-48 sm:w-90 sm:h-70 order-2 sm:order-1">
            <Image src="/img/c1.jpg" alt="Trending" fill className="rounded-lg object-cover" priority />
          </div>

          <div className="flex flex-col justify-between bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg w-full sm:w-120 order-1 sm:order-2">
            <span className="text-xs font-semibold text-red-500 mb-2">Trending Now</span>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Trends in AI And Pricing</h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              Artificial Intelligence is transforming how businesses approach pricing. By analyzing market trends, customer behavior, and demand patterns, AI helps companies set smarter, dynamic prices in real time.
            </p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Author</span>
              <span>Sept 20, 2025</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ---------- Mobile button ---------- */}
      <div className="relative z-20 mx-24 mt-4 block md:hidden">
        <Link href="/insights">
          <button className="flex items-center gap-1 bg-purple-100 text-gray-800 font-medium px-4 py-3 rounded-lg shadow w-full justify-between">
            Case studies
          </button>
        </Link>
      </div>

      {/* ---------- Main content ---------- */}
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-3 mb-8 lg:mb-0">
            <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </aside>

          <section className="lg:col-span-9">
            <div className="relative mb-4">
              <div className="absolute left-0 mt-2 md:mt-4 w-10 md:w-12 h-[2px] bg-black rounded"></div>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-gray-800 pb-2 mb-6 mt-6 md:mt-12">{activeCategory}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {filteredArticles.map((a) => (
                <ArticleCard key={a.id} {...a} />
              ))}
            </div>
          </section>
        </div>
      </motion.main>

      <motion.div
        ref={formRef}
        id="contact-form"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Form />
      </motion.div>

      <CustomCursor />
      <Footer />
    </div>
  );
};

export default ResourcesPage;
