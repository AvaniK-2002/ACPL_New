
"use client";
import React, { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  <article className="flex flex-col overflow-hidden bg-white rounded-lg shadow hover:shadow-md transition">
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
  </article>
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

  // ✅ Add ref for form scrolling
  const formRef = useRef<HTMLDivElement>(null);

  // ✅ Scroll function
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

      {/* ---------- Desktop button (visible md+ only) ---------- */}
<div className="hidden md:block">
  <div className="fixed left-0 top-1/2 z-40 -translate-y-1/2">
    <Link href="/insights">
      <button
        className="-rotate-90 flex items-center gap-1 bg-purple-100 text-gray-800 font-medium px-4 py-3 rounded-t-lg shadow w-36 justify-between"
      >
        Case Studies
      </button>
    </Link>
  </div>
</div>





      {/* ---------- Top section: responsive ---------- */}
      <section className="relative w-full mx-auto flex flex-col lg:flex-row items-start py-10 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decorations (desktop only) */}
        <div className="absolute left-0 w-3/4 h-[160%] -translate-y-100 -translate-x-40 hidden lg:block pointer-events-none">
          <Image src="/img/Frame 130.png" alt="Left background" fill className="object-contain" priority />
        </div>
        <div className="absolute right-0 top-0 w-3/4 h-[160%] translate-y-10 translate-x-50 hidden lg:block pointer-events-none">
          <Image src="/img/Frame 131.png" alt="Right background" fill className="object-contain" priority />
        </div>

        {/* Heading (always visible) */}
        <div className="flex-1 relative z-10 mt-6 md:mt-10 text-center lg:text-left flex flex-col items-center lg:items-start lg:ml-40">
          <h4 className="text-gray-500 text-sm mb-2">Insights</h4>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span>News And </span>
            <br className="hidden lg:block" /> Resources
          </h1>
          <div className="flex gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
          </div>
        </div>

        {/* Featured image + description (desktop only) */}
        <div className="hidden lg:flex flex-1 relative z-10 flex-col lg:flex-row gap-6 lg:gap-10 mt-8 lg:mt-0 lg:mr-40">
          <div className="relative w-full lg:w-1/2 h-56 lg:h-72">
            <Image src="/img/c1.jpg" alt="Trending" fill className="rounded-lg object-cover" />
          </div>
          <div className="flex flex-col justify-between bg-gradient-to-r from-blue-50 to-purple-50 p-4 lg:p-6 rounded-lg w-full lg:w-1/2">
            <span className="text-xs font-semibold text-red-500 mb-2">Trending Now</span>
            <h2 className="text-lg lg:text-2xl font-semibold mb-2">Trends in AI And Pricing</h2>
            <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Author</span>
              <span>Sept 20, 2025</span>
            </div>
          </div>
        </div>

        
      </section>

      {/* Mobile-friendly horizontal button (visible on small screens) */}
<div className="relative z-20 mx-24 mt-4  block md:hidden">
  <Link href="/insights">
    <button className="flex items-center gap-1 bg-purple-100 text-gray-800 font-medium px-4 py-3 rounded-lg shadow w-full justify-between">
      Case studies
      
    </button>
  </Link>
</div>

      {/* ---------- Main content (sidebar + article grid) ---------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
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
      </main>

      <div ref={formRef} id="contact-form">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesPage;

