"use client";
import React, { useState, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Info } from "lucide-react";
import Image from "next/image";

export default function NoticeBoard() {
  const [selectedCategory, setSelectedCategory] = useState("exam");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const scrollRef = useRef(null);

  // Sample categories to match the image
  const categories = [
    { id: "latest", label: "সর্বশেষ বিজ্ঞপ্তি" },
    { id: "admission", label: "ভর্তি সংক্রান্ত" },
    { id: "exam", label: "পরীক্ষা সম্পর্কিত" },
    { id: "result", label: "ফলাফল প্রকাশ" },
    { id: "holiday", label: "ছুটির নোটিশ" },
    { id: "events", label: "অনুষ্ঠান ও কর্মসূচি" },
    { id: "sports", label: "ক্রীড়া সংক্রান্ত" },
    { id: "scholarship", label: "বৃত্তি ও অনুদান" },
    { id: "teachers", label: "শিক্ষক ও কর্মচারী নোটিশ" },
    { id: "meeting", label: "সভা ও কার্যক্রম" },
    { id: "rules", label: "নিয়ম ও নির্দেশিকা" },
    { id: "misc", label: "অন্যান্য" },
  ];

  const introCards = [
    {
      id: "headmaster",
      title: "Headmaster Image",
      image:
        "https://i.ibb.co.com/993bjTXy/462719185-3803756793225010-4459295209552193269-n.jpg",
      name: "Abdur Razzak",
      designation: "Headmaster",
    },
    {
      id: "chairman",
      title: "Chairman Image",
      image:
        "https://i.ibb.co.com/fGCj8CG5/461855137-3835728690031846-2516803301414542884-n.jpg",
      name: "আলহাজ্ব নুরুল ইসলাম",
      designation: "মাননীয় প্রতিষ্ঠাতা সভাপতি সাহেব",
    },
  ];

  const notices = [
    {
      id: "exam-001",
      title: "ফাইনাল পরীক্ষা সংক্রান্ত বিজ্ঞপ্তি",
      content:
        "সকল শিক্ষার্থীদের জানানো যাচ্ছে যে, আগামী ১০ ডিসেম্বর থেকে ফাইনাল পরীক্ষা শুরু হবে। পরীক্ষার রুটিন পরবর্তীতে প্রকাশ করা হবে।",
      category: "exam",
    },
    {
      id: "exam-002",
      title: "মিডটার্ম পরীক্ষার সময়সূচী প্রকাশ",
      content:
        "মিডটার্ম পরীক্ষা আগামী ৫ নভেম্বর শুরু হবে। শিক্ষার্থীরা রুটিন একাডেমিক ওয়েবসাইট থেকে ডাউনলোড করতে পারবেন।",
      category: "exam",
    },
    {
      id: "exam-003",
      title: "প্রাক-পরীক্ষা নির্দেশনা",
      content:
        "পরীক্ষার হলে নির্ধারিত নিয়মাবলী মেনে চলার নির্দেশ দেওয়া হচ্ছে। মোবাইল ফোন ব্যবহার সম্পূর্ণ নিষিদ্ধ।",
      category: "exam",
    },
    {
      id: "holiday-001",
      title: "বিজয় দিবসের ছুটির নোটিশ",
      content:
        "১৬ ডিসেম্বর, মহান বিজয় দিবস উপলক্ষে সকল একাডেমিক কার্যক্রম ও অফিস বন্ধ থাকবে।",
      category: "holiday",
    },
    {
      id: "holiday-002",
      title: "ঈদ-উল-ফিতরের ছুটি",
      content:
        "আগামী ২৭ রমজান থেকে ঈদের ছুটি শুরু হবে এবং ৭ দিন পর একাডেমিক কার্যক্রম পুনরায় শুরু হবে।",
      category: "holiday",
    },
    {
      id: "holiday-003",
      title: "স্বাধীনতা দিবসের ছুটি",
      content:
        "২৬ মার্চ স্বাধীনতা দিবস উপলক্ষে কলেজ বন্ধ থাকবে এবং সকাল ৮ টায় পতাকা উত্তোলন ও আলোচনা সভা অনুষ্ঠিত হবে।",
      category: "holiday",
    },
    {
      id: "events-001",
      title: "আন্তঃকলেজ সাংস্কৃতিক প্রতিযোগিতা",
      content:
        "আগামী ২৫ ডিসেম্বর আমাদের কলেজে আন্তঃকলেজ সাংস্কৃতিক প্রতিযোগিতা অনুষ্ঠিত হবে। সকল শিক্ষার্থী ও শিক্ষকবৃন্দকে অংশগ্রহণের জন্য আমন্ত্রণ জানানো হচ্ছে।",
      category: "events",
    },
    {
      id: "events-002",
      title: "বিজ্ঞান মেলা ২০২৫",
      content:
        "আগামী মাসে বিজ্ঞান মেলার আয়োজন করা হবে। আগ্রহী শিক্ষার্থীরা তাদের প্রজেক্ট নিয়ে অংশগ্রহণ করতে পারবেন।",
      category: "events",
    },
    {
      id: "events-003",
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
      content:
        "আগামী জানুয়ারি মাসে বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে। অংশগ্রহণের জন্য নাম নিবন্ধন করুন।",
      category: "events",
    },
    {
      id: "sports-001",
      title: "ইউনিভার্সিটি ফুটবল টুর্নামেন্ট",
      content:
        "আগামী সপ্তাহে বিশ্ববিদ্যালয় পর্যায়ের ফুটবল টুর্নামেন্ট অনুষ্ঠিত হবে। আগ্রহী খেলোয়াড়রা দ্রুত নাম নিবন্ধন করুন।",
      category: "sports",
    },
    {
      id: "sports-002",
      title: "ক্রিকেট প্রতিযোগিতার রেজিস্ট্রেশন শুরু",
      content:
        "কলেজ পর্যায়ের ক্রিকেট প্রতিযোগিতার জন্য দল নিবন্ধন শুরু হয়েছে। শেষ তারিখ ১৫ নভেম্বর।",
      category: "sports",
    },
    {
      id: "sports-003",
      title: "দৌড় প্রতিযোগিতার সময়সূচী",
      content:
        "দৌড় প্রতিযোগিতা আগামী ২০ ডিসেম্বর অনুষ্ঠিত হবে। অংশগ্রহণকারীদের নির্দিষ্ট সময়ে উপস্থিত থাকতে অনুরোধ করা হলো।",
      category: "sports",
    },
    {
      id: "scholarship-001",
      title: "মেধাবৃত্তি পরীক্ষার আবেদন",
      content:
        "২০২৫ শিক্ষাবর্ষের জন্য মেধাবৃত্তি পরীক্ষার আবেদন শুরু হয়েছে। আগ্রহী শিক্ষার্থীরা ৩০ নভেম্বরের মধ্যে আবেদন করতে পারবেন।",
      category: "scholarship",
    },
    {
      id: "scholarship-002",
      title: "অর্থনৈতিক সহায়তা আবেদন",
      content:
        "অসচ্ছল শিক্ষার্থীদের জন্য অর্থনৈতিক সহায়তার আবেদন শুরু হয়েছে। আবেদন করতে হলে প্রশাসনিক কার্যালয়ে যোগাযোগ করুন।",
      category: "scholarship",
    },
    {
      id: "scholarship-003",
      title: "গবেষণা অনুদান ঘোষণা",
      content:
        "২০২৫ শিক্ষাবর্ষে গবেষণা অনুদানের জন্য আবেদন গ্রহণ শুরু হয়েছে। আগ্রহীদের দয়া করে নির্ধারিত ফর্ম পূরণ করতে অনুরোধ করা হলো।",
      category: "scholarship",
    },
    {
      id: "teachers-001",
      title: "শিক্ষক সভার বিজ্ঞপ্তি",
      content:
        "আগামী ৫ নভেম্বর শিক্ষকদের জন্য বিশেষ সভার আয়োজন করা হয়েছে। সকল শিক্ষককে সময়মতো উপস্থিত থাকার অনুরোধ করা হলো।",
      category: "teachers",
    },
    {
      id: "teachers-002",
      title: "নতুন শিক্ষক নিয়োগ বিজ্ঞপ্তি",
      content:
        "শিক্ষা প্রতিষ্ঠানটিতে নতুন শিক্ষক নিয়োগ দেওয়া হবে। আগ্রহী প্রার্থীরা আবেদনপত্র জমা দিন।",
      category: "teachers",
    },
    {
      id: "teachers-003",
      title: "শিক্ষক প্রশিক্ষণ কর্মশালা",
      content:
        "শিক্ষকদের দক্ষতা বৃদ্ধির জন্য ৩ দিনের প্রশিক্ষণ কর্মশালা আয়োজন করা হয়েছে।",
      category: "teachers",
    },
    {
      id: "meeting-001",
      title: "একাডেমিক কমিটির সভা",
      content:
        "আগামী সপ্তাহে একাডেমিক কমিটির সভা অনুষ্ঠিত হবে। সকল সদস্যকে সময়মতো উপস্থিত থাকতে অনুরোধ করা হলো।",
      category: "meeting",
    },
    {
      id: "meeting-002",
      title: "অভিভাবক-শিক্ষক সভা",
      content:
        "শিক্ষার্থীদের একাডেমিক পারফরম্যান্স বিষয়ে অভিভাবক-শিক্ষক সভার আয়োজন করা হয়েছে।",
      category: "meeting",
    },
    {
      id: "meeting-003",
      title: "পরিচালনা পর্ষদের বিশেষ সভা",
      content:
        "বিশ্ববিদ্যালয়ের পরিচালনা পর্ষদের বিশেষ সভা আগামী ১০ ডিসেম্বর অনুষ্ঠিত হবে।",
      category: "meeting",
    },
    {
      id: "rules-001",
      title: "নতুন একাডেমিক নিয়মাবলী",
      content:
        "২০২৫ শিক্ষাবর্ষ থেকে একাডেমিক কার্যক্রমে নতুন কিছু নিয়মাবলী সংযোজন করা হয়েছে। বিস্তারিত নোটিশ বোর্ডে পাওয়া যাবে।",
      category: "rules",
    },
    {
      id: "rules-002",
      title: "পরীক্ষা হলে আচরণবিধি",
      content:
        "পরীক্ষা হলে মোবাইল ফোন ব্যবহার নিষিদ্ধ এবং নির্ধারিত পোশাক পরিধান বাধ্যতামূলক।",
      category: "rules",
    },
    {
      id: "rules-003",
      title: "লাইব্রেরির নতুন সময়সূচী",
      content:
        "কলেজ লাইব্রেরির সময়সূচী পরিবর্তন করা হয়েছে। এখন সকাল ৯টা থেকে সন্ধ্যা ৭টা পর্যন্ত খোলা থাকবে।",
      category: "rules",
    },
    {
      id: "misc-001",
      title: "কলেজ ক্যান্টিনের নতুন মেনু",
      content:
        "কলেজ ক্যান্টিনে নতুন কিছু আইটেম সংযোজন করা হয়েছে। মেনু দেখতে ক্যান্টিন নোটিশ বোর্ড দেখুন।",
      category: "misc",
    },
    {
      id: "misc-002",
      title: "পরিবেশ সচেতনতা কর্মসূচি",
      content:
        "আগামী ৫ ডিসেম্বর ক্যাম্পাসে পরিবেশ সচেতনতা কর্মসূচি অনুষ্ঠিত হবে। সকল শিক্ষার্থীকে অংশগ্রহণের অনুরোধ করা হচ্ছে।",
      category: "misc",
    },
  ];

  // Filter notices based on selected category
  const filteredNotices =
    selectedCategory === "all"
      ? notices
      : notices.filter((notice) => notice.category === selectedCategory);

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full mx-auto p-4 md:px-10 px-4">
      {/* Left side - Notice Board - Set to 500px height */}
      <div className="flex-1 flex flex-col border rounded-sm overflow-hidden shadow-md h-500">
        {/* Categories - Using professional school colors */}
        <div className="bg-green-700 relative flex items-center px-2">
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
                      ? "bg-white text-green-700"
                      : "bg-green-600 text-white hover:bg-green-500"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notice Content - Professional color scheme */}
        <div className="flex-1 bg-gray-50 p-4">
          <h2 className="text-xl font-bold mb-2 text-gray-800">নোটিশ বোর্ড</h2>
          <ScrollArea className="h-[350px] w-full">
            <div className="space-y-2 pr-2">
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="p-3 bg-white border-l-4 border-l-green-600 border-y border-r border-gray-200 rounded shadow-sm hover:shadow transition-all cursor-pointer hover:border-blue-600 duration-300"
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
        <div className="bg-gradient-to-r from-green-800 to-green-700 text-white p-2 text-center cursor-pointer hover:from-green-700 hover:to-green-600 transition-colors">
          সকল নোটিশ দেখুন
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
                      <Info className="w-5 h-5 mr-2" /> বিস্তারিত
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
