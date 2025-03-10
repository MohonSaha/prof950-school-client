"use client";
import React, { useState, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Info } from "lucide-react";
import Image from "next/image";

export default function NoticeBoard() {
  const [selectedCategory, setSelectedCategory] = useState("cricket");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const scrollRef = useRef(null);

  // Sample categories to match the image
  const categories = [
    { id: "latest", label: "Latest" },
    { id: "cricket", label: "National cricket team" },
    { id: "mixes", label: "Mixes" },
    { id: "confidence", label: "Self-confidence" },
    { id: "visas", label: "Travel visas" },
    { id: "javascript", label: "JavaScript" },
    { id: "ai", label: "AI" },
    { id: "english", label: "English (United Kingdom)" },
    { id: "live", label: "Live" },
    { id: "goals", label: "Goals" },
    { id: "startup", label: "Startup company" },
  ];

  const introCards = [
    {
      id: "headmaster",
      title: "Headmaster Introduction",
      image: "https://i.ibb.co.com/bs2bL1b/team3.jpg",
      name: "Dr. James Wilson",
      designation: "Headmaster",
    },
    {
      id: "chairman",
      title: "Board Chairman Introduction",
      image: "https://i.ibb.co.com/bs2bL1b/team3.jpg",
      name: "Mr. Robert Johnson",
      designation: "Board Chairman",
    },
  ];

  const generateNotices = () => {
    const notices: {
      id: string;
      title: string;
      content: string;
      category: string;
    }[] = [];

    categories.forEach((category) => {
      for (let i = 1; i <= 10; i++) {
        notices.push({
          id: `${category.id}-notice-${i}`,
          title: `Notice ${i} for ${category.label}`,
          content: `This is an important update related to ${category.label}.`,
          category: category.id,
        });
      }
    });

    return notices;
  };

  // Get all notices
  const allNotices = generateNotices();

  //   const handleScroll = (direction) => {
  //     if (scrollRef.current) {
  //       const scrollAmount = 200;
  //       if (direction === "left") {
  //         scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  //       } else {
  //         scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  //       }
  //     }
  //   };

  // Filter notices based on selected category
  const filteredNotices =
    selectedCategory === "all"
      ? allNotices
      : allNotices.filter((notice) => notice.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full mx-auto p-4 md:px-10 px-4">
      {/* Left side - Notice Board - Set to 500px height */}
      <div className="flex-1 flex flex-col border rounded-sm overflow-hidden shadow-md h-500">
        {/* Categories - Using professional school colors */}
        <div className="bg-teal-600 relative flex items-center px-2">
          {/* Scrollable categories */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-hide py-1 px-1 rounded-lg"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-block px-4 py-1.5 mx-1 rounded-md text-sm font-medium transition-colors
                  ${
                    selectedCategory === category.id
                      ? "bg-white text-teal-700"
                      : "bg-teal-500 text-white hover:bg-teal-400"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notice Content - Professional color scheme */}
        <div className="flex-1 bg-gray-50 p-4">
          <h2 className="text-lg font-bold mb-2 text-gray-800">Notice Board</h2>
          <ScrollArea className="h-[350px] w-full">
            <div className="space-y-2 pr-2">
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="p-3 bg-white border-l-4 border-l-teal-500 border-y border-r border-gray-200 rounded shadow-sm hover:shadow transition-all"
                >
                  <h3 className="font-medium text-gray-800">{notice.title}</h3>
                  <p className="text-sm text-gray-600">{notice.content}</p>
                </div>
              ))}
              {filteredNotices.length === 0 && (
                <div className="p-3 bg-white border border-gray-200 rounded text-center text-gray-600">
                  No notices available for this category.
                </div>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* See More - Professional accent color */}
        <div className="bg-gradient-to-r from-teal-800 to-teal-700 text-white p-2 text-center cursor-pointer hover:from-teal-700 hover:to-teal-600 transition-colors">
          See More
        </div>
      </div>

      {/* Right side - Introduction Cards with Images - Set to match 500px height */}
      <div className="flex flex-col gap-2 w-full md:w-64 h-500">
        {introCards.map((card, index) => {
          const cardHeight =
            (500 - (introCards.length - 1) * 8) / introCards.length; // Calculate height considering gaps (2rem = 8px)
          return (
            <div
              key={card.id}
              className="relative rounded-md overflow-hidden border border-gray-200 shadow-md"
              style={{ height: `${cardHeight}px` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-full w-full relative">
                {/* Using Next.js Image component with proper object positioning */}
                <div className="relative w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 250px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "top center", // Fix for image being cut from top
                    }}
                    priority={index === 0} // Load first image with priority
                  />
                </div>

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 text-white z-10">
                  <p className="font-medium text-center">{card.name}</p>
                  <p className="text-xs text-center">{card.designation}</p>
                </div>

                {/* Info button that appears on hover */}
                {hoveredCard === card.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black opacity-90 z-20">
                    <button className="bg-white bg-opacity-90 text-teal-700 px-4 py-2 rounded-md font-medium hover:bg-opacity-100 transition-colors flex items-center cursor-pointer">
                      <Info className="w-5 h-5 mr-2" /> View Profile
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 text-white z-10">
                      <p className="font-medium text-center">{card.name}</p>
                      <p className="text-xs text-center">{card.designation}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add the CSS for hiding scrollbars and fixed height */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        /* Fixed height classes */
        .h-500 {
          height: 500px;
        }
      `}</style>
    </div>
  );
}
