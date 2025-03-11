"use client"; // Add this for client-side component in Next.js

import React, { useState, useEffect } from "react";
import { BadgeInfo, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const properties = [
    {
      id: 1,
      title: "আধুনিক শিক্ষা ব্যবস্থা",
      schoolInfo: "শিক্ষা ও প্রশিক্ষণ",
      description:
        "আমাদের স্কুলে রয়েছে অত্যাধুনিক শিক্ষা ব্যবস্থা যেখানে ব্যবহার করা হয় মাল্টিমিডিয়া ক্লাসরুম, স্মার্ট বোর্ড এবং ই-লার্নিং প্ল্যাটফর্ম।",
      imageUrl: "https://i.ibb.co.com/Z1Xc7pr8/image-1.jpg",
    },
    {
      id: 2,
      title: "নিয়মিত পরীক্ষার ব্যবস্থা",
      schoolInfo: "পরীক্ষা ও মূল্যায়ন",
      description:
        "শিক্ষার্থীদের নিয়মিত মূল্যায়নের জন্য মাসিক, ত্রৈমাসিক ও বার্ষিক পরীক্ষা নেওয়া হয়। পরীক্ষার ফলাফল বিশ্লেষণ করে দুর্বল শিক্ষার্থীদের জন্য বিশেষ কোচিং ব্যবস্থা রয়েছে।",
      imageUrl:
        "https://i.ibb.co.com/C3j5KNBB/414953596-3633051243632926-4580349660113298640-n.jpg",
    },
    {
      id: 3,
      title: "সহ-পাঠ কার্যক্রম",
      schoolInfo: "ক্লাব ও সংগঠন",
      description:
        "শিক্ষার্থীদের সৃজনশীল বিকাশের জন্য বিতর্ক ক্লাব, বিজ্ঞান ক্লাব, সাংস্কৃতিক সংগঠন ও খেলাধুলার ক্লাব রয়েছে।",
      imageUrl: "https://i.ibb.co.com/ymh9Ptjt/image-3.jpg",
    },
  ];

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  }, [properties.length]);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  }, [properties.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="w-full">
      {/* <h1 className="text-4xl font-bold text-center mb-2">
        Explore New Property Listings
      </h1>
      <p className="text-center text-gray-600 mb-8">
        From cozy apartments to spacious family homes, our diverse listings
        cater to various needs and preferences.
      </p> */}

      <div className="relative">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {properties.map((property) => (
              <div key={property.id} className="w-full flex-shrink-0">
                <Card className="relative border-0 shadow-xl h-96 md:min-h-[80vh] overflow-hidden rounded-none">
                  <CardContent className="p-0">
                    <div className="relative w-full h-96 md:min-h-[80vh]">
                      <Image
                        src={property.imageUrl}
                        alt={property.title}
                        fill
                        className="object-cover rounded-none"
                        priority
                      />

                      <div className="py-8 absolute inset-0 bg-gradient-to-b from-transparent to-black/90 flex items-end w-full">
                        <div className="p-6 text-white mx-auto text-center w-full">
                          <h2 className="text-2xl font-bold mb-2">
                            {property.title}
                          </h2>
                          <div className="flex items-center mb-3 justify-center">
                            <BadgeInfo className="w-4 h-4 mr-1" />
                            <span className="text-sm text-center">
                              {property.schoolInfo}
                            </span>
                          </div>
                          <p className="text-sm text-gray-200 mx-auto text-center">
                            {property.description}
                          </p>
                        </div>
                      </div>

                      {/* <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white rounded-full w-24 h-24">
                        <Link href="/listings">Details</Link>
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full shadow-md h-10 w-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800 rounded-full shadow-md h-10 w-10"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {properties.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
