"use client";
import React, { useState, useRef, useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";

// --- MOCK DATA ---
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

const trendingArticle = {
  title: "Trends In AI And Pricing",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: "Admin",
  date: "Sept 20, 2025",
  imageUrl: "https://via.placeholder.com/800x600/EF4444/FFFFFF?text=Trending+Robot+Flower",
};

// --- ARTICLE CARD COMPONENT ---
const ArticleCard: React.FC<Article> = ({ category, title, author, date, imageUrl }) => (
  <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow">
    <div className="relative h-40 w-full overflow-hidden rounded-t-lg bg-gray-100">
      <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
    </div>
    <div className="p-4">
      <p className="text-xs font-medium text-gray-500 uppercase">{category}</p>
      <h3 className="text-base font-semibold text-gray-800 hover:text-indigo-600 cursor-pointer mt-1">{title}</h3>
      <p className="mt-1 text-xs text-gray-500">
        <span className="font-medium">Author</span> {author}
        <span className="mx-1">•</span>
        {date}
      </p>
    </div>
  </div>
);

// --- SIDEBAR COMPONENT ---
const Sidebar: React.FC<{
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}> = ({ activeCategory, setActiveCategory }) => (
  <div className="space-y-8">
    <div className="flex-grow space-y-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-10 text-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        <svg
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <h1 className="text-xl font-bold text-gray-800 pb-2 mb-6 mt-6 md:mt-10">Categories</h1>
      <nav className="pt-2 space-y-1 relative pl-4">
        {/* Vertical line */}
        <div className="absolute left-0 top-6 h-1/2 w-[2px] bg-black rounded hidden md:block" />
        {CATEGORIES.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`w-full text-left py-2 px-3 text-base md:text-xl rounded-md transition-colors ${
              activeCategory === category.name ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {category.name}
          </button>
        ))}
      </nav>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
const ResourcesPage: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredArticles = MOCK_ARTICLES.filter(
    (article) => activeCategory === "All Articles" || article.category === activeCategory
  );

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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Sidebar Vertical Dropdown (desktop only) */}
      <div ref={dropdownRef} className="fixed left-0 top-1/2 z-20 hidden md:block" style={{ transform: "translateY(-50%)" }}>
        <button
          onClick={() => setOpen(!open)}
          className="-rotate-90 flex items-center gap-1 bg-purple-100 text-gray-800 font-medium px-4 py-3 rounded-t-lg shadow w-36 justify-between"
        >
          Case Studies
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <div className="absolute left-full top-0 bg-white border shadow rounded p-3 space-y-2 w-44">
            <Link href="/insights" className="block cursor-pointer hover:text-purple-600">
              Case Studies
            </Link>
          </div>
        )}
      </div>

      {/* Top Section */}
      <section className="relative w-full mx-auto flex flex-col md:flex-row items-start py-12 overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Backgrounds hidden on mobile */}
        <div className="absolute left-0 w-3/4 h-[120%] -translate-y-20 -translate-x-10 hidden md:block">
          <Image src="/img/Frame 130.png" alt="Left Background" fill className="object-contain" priority />
        </div>
        <div className="absolute right-0 top-0 w-3/4 h-[120%] translate-y-20 translate-x-10 hidden md:block">
          <Image src="/img/Frame 131.png" alt="Right Background" fill className="object-contain" priority />
        </div>

        {/* Heading */}
        <div className="flex-1 relative z-10 ml-0 md:ml-40 mt-6 md:mt-10">
          <h4 className="text-gray-500 text-sm mb-2">Insights</h4>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span>News And </span> <br className="hidden md:block" /> Resources
          </h1>
        </div>

        {/* Image + Description */}
        <div className="flex-1 relative z-10 flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-0 md:mr-48">
          <div className="relative w-full md:w-1/2 h-56 md:h-70">
            <Image src="/img/c1.jpg" alt="Trending" fill className="rounded-lg object-cover" />
          </div>
          <div className="flex flex-col justify-between bg-gradient-to-r from-blue-50 to-purple-50 p-4 md:p-6 rounded-lg w-full md:w-1/2">
            <span className="text-xs font-semibold text-red-500 mb-2">Trending Now</span>
            <h2 className="text-lg md:text-2xl font-semibold mb-2">Trends in AI And Pricing</h2>
            <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Author</span>
              <span>Sept 20, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sidebar moves on top in mobile */}
          <aside className="lg:col-span-3">
            <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </aside>

          <div className="lg:col-span-9">
            {/* Small line above heading */}
            <div className="relative mb-4">
              <div className="absolute left-0 mt-4 w-12 h-[2px] bg-black rounded"></div>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 pb-2 mb-6 mt-8 md:mt-12">All Articles</h3>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Form />
      <Footer />
    </div>
  );
};

export default ResourcesPage;
