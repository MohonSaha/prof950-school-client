"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Teacher {
  id: string;
  name: string;
  role: string;
  qualification: string;
  imageSrc: string;
}

const TeacherSection: React.FC = () => {
  // Sample data for teachers
  const teachers: Teacher[] = [
    {
      id: "1",
      name: "K.S.A Firzan",
      role: "Assistant Teacher",
      qualification: "BA (Hons), MA (English)",
      imageSrc: "https://i.ibb.co.com/hZ1TDxY/IMG-20211101-175750.jpg",
    },
    {
      id: "2",
      name: "MD FORHAD HOSSAN",
      role: "Assistant Teacher",
      qualification: "B.Sc., MA (Science)",
      imageSrc: "https://i.ibb.co.com/hZ1TDxY/IMG-20211101-175750.jpg",
    },
    {
      id: "3",
      name: "Rashid Hossain",
      role: "Senior Teacher",
      qualification: "B.Ed, M.Ed (Mathematics)",
      imageSrc: "https://i.ibb.co.com/hZ1TDxY/IMG-20211101-175750.jpg",
    },
    {
      id: "4",
      name: "MD Mahmudur Kabir",
      role: "Assistant Teacher",
      qualification: "BSS, MSS (Social Science)",
      imageSrc: "https://i.ibb.co.com/hZ1TDxY/IMG-20211101-175750.jpg",
    },
    {
      id: "5",
      name: "MD Sammiunnoor",
      role: "Assistant Teacher",
      qualification: "BA, MA (Bangla)",
      imageSrc: "https://i.ibb.co.com/hZ1TDxY/IMG-20211101-175750.jpg",
    },
    {
      id: "6",
      name: "Ismaynul Kabir",
      role: "Assistant Teacher",
      qualification: "B.Sc. (Science)",
      imageSrc: "https://i.ibb.co.com/hZ1TDxY/IMG-20211101-175750.jpg",
    },
    {
      id: "7",
      name: "MD Nasimul Islam",
      role: "Academic Teacher",
      qualification: "B.Com, M.Com (Commerce)",
      imageSrc: "https://i.ibb.co.com/hZ1TDxY/IMG-20211101-175750.jpg",
    },
    {
      id: "8",
      name: "MD Shahidul Rahman",
      role: "Assistant Teacher",
      qualification: "BSS, MSS (Social Science)",
      imageSrc: "https://i.ibb.co.com/hZ1TDxY/IMG-20211101-175750.jpg",
    },
    {
      id: "9",
      name: "MD Arifuzzaman (Jibon)",
      role: "Assistant Teacher",
      qualification: "BSS, MSS (Geography)",
      imageSrc: "https://i.ibb.co.com/hZ1TDxY/IMG-20211101-175750.jpg",
    },
    {
      id: "10",
      name: "Moniruj Jahan Mobin",
      role: "Assistant Teacher",
      qualification: "B.Sc, M.Sc (Computer Science)",
      imageSrc: "https://i.ibb.co.com/hZ1TDxY/IMG-20211101-175750.jpg",
    },
  ];

  // Split teachers into two groups for two carousels
  const firstRowTeachers = teachers.slice(0, 5);
  const secondRowTeachers = teachers.slice(5, 10);

  const firstCarouselRef = useRef<HTMLDivElement>(null);
  const secondCarouselRef = useRef<HTMLDivElement>(null);

  const [isFirstHovered, setIsFirstHovered] = useState(false);
  const [isSecondHovered, setIsSecondHovered] = useState(false);

  // Animation for automatic sliding
  useEffect(() => {
    const firstCarousel = firstCarouselRef.current;
    const secondCarousel = secondCarouselRef.current;

    let firstIntervalId: NodeJS.Timeout;
    let secondIntervalId: NodeJS.Timeout;

    if (firstCarousel && !isFirstHovered) {
      firstIntervalId = setInterval(() => {
        firstCarousel.scrollLeft += 1;

        // Reset to beginning when reaching the end
        if (
          firstCarousel.scrollLeft >=
          firstCarousel.scrollWidth - firstCarousel.clientWidth
        ) {
          firstCarousel.scrollLeft = 0;
        }
      }, 25);
    }

    if (secondCarousel && !isSecondHovered) {
      // Make the second carousel move in the opposite direction
      secondIntervalId = setInterval(() => {
        secondCarousel.scrollLeft -= 1;

        // Reset to end when reaching the beginning
        if (secondCarousel.scrollLeft <= 0) {
          secondCarousel.scrollLeft =
            secondCarousel.scrollWidth - secondCarousel.clientWidth;
        }
      }, 25);
    }

    return () => {
      clearInterval(firstIntervalId);
      clearInterval(secondIntervalId);
    };
  }, [isFirstHovered, isSecondHovered]);

  // Manual navigation controls
  //   const scroll = (
  //     carousel: HTMLDivElement | null,
  //     direction: "left" | "right"
  //   ) => {
  //     if (!carousel) return;
  //     const scrollAmount = 320; // Width of a card + gap

  //     if (direction === "left") {
  //       carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  //     } else {
  //       carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  //     }
  //   };

  return (
    <div className="w-full px-4 py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-gray-800">একাডেমিক আমাদের</span>
            <span className="text-purple-600"> শিক্ষক </span>
            <span className="text-gray-800">মন্ডলী</span>
          </h2>
          <p className="text-gray-600">সকল একটি শিক্ষক এবং শিক্ষিত</p>
        </div>

        {/* First Carousel */}
        <div className="relative mb-0">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsFirstHovered(true)}
            onMouseLeave={() => setIsFirstHovered(false)}
          >
            <div
              ref={firstCarouselRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Add duplicate items at the beginning for infinite effect */}
              {firstRowTeachers.map((teacher) => (
                <TeacherCard
                  key={`duplicate-start-${teacher.id}`}
                  teacher={teacher}
                />
              ))}

              {/* Original items */}
              {firstRowTeachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}

              {/* Add duplicate items at the end for infinite effect */}
              {firstRowTeachers.map((teacher) => (
                <TeacherCard
                  key={`duplicate-end-${teacher.id}`}
                  teacher={teacher}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Second Carousel */}
        <div className="relative">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsSecondHovered(true)}
            onMouseLeave={() => setIsSecondHovered(false)}
          >
            <div
              ref={secondCarouselRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Add duplicate items at the beginning for infinite effect */}
              {secondRowTeachers.map((teacher) => (
                <TeacherCard
                  key={`duplicate-start-${teacher.id}`}
                  teacher={teacher}
                />
              ))}

              {/* Original items */}
              {secondRowTeachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} />
              ))}

              {/* Add duplicate items at the end for infinite effect */}
              {secondRowTeachers.map((teacher) => (
                <TeacherCard
                  key={`duplicate-end-${teacher.id}`}
                  teacher={teacher}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Teachers Button */}
        <div className="flex justify-center mt-8">
          <Button className="bg-gray-700 hover:bg-gray-800 text-white rounded-md py-2 px-8">
            সকল শিক্ষক দেখুন
          </Button>
        </div>
      </div>
    </div>
  );
};

// TeacherCard Component with Overlay
const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  return (
    <Card className="flex-shrink-0 w-52 h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer p-0">
      <CardContent className="p-0 relative h-full ">
        <div className="relative h-full overflow-hidden">
          <img
            src={teacher.imageSrc || "/api/placeholder/150/180"}
            alt={teacher.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />

          {/* Overlay gradient at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-semibold text-white">{teacher.name}</h3>
            <p className="text-sm text-gray-200">{teacher.qualification}</p>
            <p className="text-xs text-gray-300 mt-1">{teacher.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeacherSection;
