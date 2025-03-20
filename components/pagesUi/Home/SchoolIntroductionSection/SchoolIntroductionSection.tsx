"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SchoolContent {
  image: string;
  title: string;
  content: string;
}

const SchoolIntroductionSection = ({ rounded }: { rounded?: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample school content with images and descriptions
  const schoolContent: SchoolContent[] = [
    {
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
      title: "আমাদের স্কুলের ইতিহাস",
      content:
        "১৯৭৫ সালে প্রতিষ্ঠিত, আমাদের স্কুল একটি ছোট প্রতিষ্ঠান হিসেবে শুরু হয়েছিল যেখানে মাত্র ৩টি শ্রেণিকক্ষ এবং ৫ জন শিক্ষক ছিলেন। বছরের পর বছর ধরে, আমরা অঞ্চলের অন্যতম সম্মানিত শিক্ষাপ্রতিষ্ঠানে পরিণত হয়েছি। শিক্ষার উৎকর্ষ সাধনে আমাদের প্রতিশ্রুতি সবসময় অটুট থেকেছে। একটি দূরদর্শী শিক্ষাবিদের দল এই স্কুলটি প্রতিষ্ঠা করেছিলেন, যার লক্ষ্য ছিল মানসম্পন্ন শিক্ষার মাধ্যমে শিক্ষার্থীদের একাডেমিক দক্ষতা ও নৈতিক গুণাবলির বিকাশ ঘটানো।",
    },
    {
      image: "https://i.ibb.co.com/YBQYw6bR/real-2.jpg",
      title: "একাডেমিক উৎকর্ষতা",
      content:
        "আমাদের স্কুল ধারাবাহিকভাবে অসাধারণ একাডেমিক ফলাফল অর্জন করে আসছে, যেখানে ৯৫% এর বেশি শিক্ষার্থী উচ্চশিক্ষার জন্য যোগ্যতা অর্জন করে। আমরা একটি বিস্তৃত পাঠ্যক্রম অফার করি যা বিজ্ঞান, মানবিক, শিল্প এবং প্রযুক্তি অন্তর্ভুক্ত করে। আমাদের শিক্ষণ পদ্ধতি সমালোচনামূলক চিন্তাভাবনা, সমস্যা সমাধান এবং সৃজনশীলতাকে গুরুত্ব দেয়। শিক্ষার্থীদের ব্যক্তিগত মনোযোগ নিশ্চিত করতে আমরা ছোট শ্রেণির আয়োজন করি এবং আমাদের শিক্ষকরা পেশাগত উন্নয়ন কর্মসূচিতে নিয়মিত অংশগ্রহণ করেন।",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ক্যাম্পাস সুবিধাসমূহ",
      content:
        "আমাদের ক্যাম্পাসটি ৫ একরেরও বেশি এলাকা জুড়ে বিস্তৃত, যা একটি আদর্শ শিক্ষার পরিবেশ তৈরি করে। এখানে রয়েছে অত্যাধুনিক বিজ্ঞান ও কম্পিউটার ল্যাব, ১৫,০০০ এরও বেশি বই সমৃদ্ধ একটি সমৃদ্ধ গ্রন্থাগার, ডিজিটাল লার্নিং টুলসসহ সুসজ্জিত শ্রেণিকক্ষ, শিল্প ও সংগীত স্টুডিও, এবং বিস্তৃত ক্রীড়া সুবিধা। এছাড়াও, আমাদের একটি বহুমুখী ইনডোর জিমনেসিয়াম এবং আউটডোর খেলার মাঠ রয়েছে, যেখানে ক্রিকেট, ফুটবল এবং অ্যাথলেটিকস অনুশীলনের সুযোগ রয়েছে। আমাদের ক্যাফেটেরিয়া স্বাস্থ্যকর পরিবেশে পুষ্টিকর খাবার সরবরাহ করে।",
    },
    {
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
      title: "সামাজিক সম্পৃক্ততা",
      content:
        "আমরা বিশ্বাস করি, শিক্ষা শুধু শ্রেণিকক্ষে সীমাবদ্ধ নয়। আমাদের শিক্ষার্থীরা সক্রিয়ভাবে সামাজিক সেবামূলক কার্যক্রম, পরিবেশ রক্ষা উদ্যোগ এবং সাংস্কৃতিক বিনিময় প্রোগ্রামে অংশগ্রহণ করে। এর মাধ্যমে তারা সহমর্মিতা, সামাজিক দায়বদ্ধতা এবং বিশ্বজনীন সচেতনতা অর্জন করে। আমরা নিয়মিত অভিভাবক-শিক্ষক সভা, কমিউনিটি ইভেন্ট এবং উন্মুক্ত আলোচনা সভার আয়োজন করি, যা স্কুল, অভিভাবক ও বৃহত্তর সমাজের মধ্যে সম্পর্ক দৃঢ় করে। আমাদের বার্ষিক সাংস্কৃতিক উৎসবে শিক্ষার্থীদের প্রতিভা প্রদর্শিত হয় এবং আমাদের বৈচিত্র্যময় ঐতিহ্য উদযাপন করা হয়।",
    },
  ];


  const nextContent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === schoolContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevContent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? schoolContent.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[90vh] rounded-md">
      {/* Left side - Image */}
      <div className="relative w-full md:w-1/2 h-96 md:h-auto bg-amber-50">
        <img
          src={schoolContent[currentIndex].image}
          alt={`School view - ${schoolContent[currentIndex].title}`}
          className={`w-full h-full object-cover ${
            rounded ? "rounded-l-sm" : ""
          }`}
        />

        {/* Navigation buttons */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Button
            onClick={prevContent}
            variant="outline"
            size="icon"
            className="bg-white/70 hover:bg-white rounded-full h-10 w-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={nextContent}
            variant="outline"
            size="icon"
            className="bg-white/70 hover:bg-white rounded-full h-10 w-10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Right side - School Information */}
      <div
        className={`w-full md:w-1/2 bg-green-900 text-white p-8 md:p-12 ${
          rounded ? "rounded-r-sm" : ""
        }`}
      >
        <div className="max-w-md mx-auto h-full flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {schoolContent[currentIndex].title}
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                {schoolContent[currentIndex].content}
              </p>
            </div>
          </div>

          {/* Pagination indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {schoolContent.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-600"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolIntroductionSection;
