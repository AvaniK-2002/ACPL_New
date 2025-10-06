"use client";
import { FC } from "react";
import Image from "next/image";

// Types
interface iCardItem {
  title: string;
  description: string;
  src: string;
  buttonText: string;
  buttonLink: string;
}

// Card Component
const Card: FC<iCardItem> = ({ title, description, src, buttonText, buttonLink }) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 px-4">
      <div className="relative flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-xl shadow-md p-10 overflow-visible w-full max-w-6xl">
        {/* Left / Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <div className="w-full md:w-[500px] h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image src={src} alt={title} fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* Right / Content */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
          <p className="mt-3 text-gray-600">{description}</p>
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className="mt-5 px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

// CardsParallax Component
interface iCardSlideProps {
  items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  return (
    <div className="min-h-screen">
      {items.map((card, i) => (
        <Card key={`card_${i}`} {...card} />
      ))}
    </div>
  );
};

// Example usage with your previous cards content
const cardsData: iCardItem[] = [
  {
    title: "SCORM e-Learning Development",
    description:
      "We specialize in creating SCORM-compliant eLearning solutions that seamlessly integrate with any Learning Management System (LMS). Our team develops SCORM e-learning solutions from scratch — ensuring immersive, trackable and LMS-ready training modules tailored to your needs.",
    src: "/img/Frame 107.png",
    buttonText: "Learn More",
    buttonLink: "/services/scorm",
  },
  {
    title: "Software Development",
    description:
      "We offer end-to-end custom software development services tailored to your business needs — from analysis and UI/UX to backend coding, API integration, and deployment. Our services include scalable, secure, and high-performance applications.",
    src: "/img/Frame 110.png",
    buttonText: "Learn More",
    buttonLink: "/services/software",
  },
];

export { CardsParallax, cardsData, type iCardItem };
