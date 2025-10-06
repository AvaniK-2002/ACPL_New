"use client";
import React, { useState } from "react";

interface AccordionItemType {
  id: number;
  imageUrl: string;
}

const accordionItems: AccordionItemType[] = [
  { id: 1, imageUrl: "/img/face1.png" },
  { id: 2, imageUrl: "/img/face2.png" },
  { id: 3, imageUrl: "/img/face3.png" },
  { id: 4, imageUrl: "/img/face4.png" },
  { id: 5, imageUrl: "/img/face5.png" },
];

interface AccordionItemProps {
  item: AccordionItemType;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isActive,
  onMouseEnter,
}) => {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out flex-shrink-0
        ${isActive ? "w-[180px] md:w-[320px] h-[220px] md:h-[250px]" : "w-[50px] md:w-[40px] h-[220px] md:h-[250px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={`Image ${item.id}`}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placehold.co/400x450/2d3748/ffffff?text=Image+Error";
        }}
      />
      
    </div>
  );
};

export const ImageAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-row md:flex-row items-center justify-center gap-4 overflow-x-auto md:overflow-x-visible p-2">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageAccordion;
