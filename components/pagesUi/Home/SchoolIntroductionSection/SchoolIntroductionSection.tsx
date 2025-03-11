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
      title: "Our School History",
      content:
        "Founded in 1975, our school began as a small institution with just 3 classrooms and 5 teachers. Over the decades, we've grown into one of the region's most respected educational institutions. Our commitment to excellence in education has remained unchanged throughout our journey. The school was established by a group of visionary educators with the mission of providing quality education that balances academic achievement with character development.",
    },
    {
      image: "https://i.ibb.co.com/YBQYw6bR/real-2.jpg",
      title: "Academic Excellence",
      content:
        "Our school consistently achieves outstanding academic results, with over 95% of our students qualifying for higher education. We offer a comprehensive curriculum that includes sciences, humanities, arts, and technology. Our teaching methodology emphasizes critical thinking, problem-solving, and creativity. We maintain small class sizes to ensure personalized attention for each student, and our faculty members are highly qualified professionals who regularly participate in professional development programs.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Campus Facilities",
      content:
        "Our campus spans over 5 acres with modern facilities that create an ideal learning environment. We have state-of-the-art science and computer laboratories, a well-stocked library with over 15,000 books, spacious classrooms equipped with digital learning tools, dedicated art and music studios, and extensive sports facilities including a multi-purpose indoor gymnasium and outdoor playing fields for cricket, football, and athletics. We also maintain a cafeteria that serves nutritious meals prepared under strict hygiene standards.",
    },
    {
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
      title: "Community Engagement",
      content:
        "We believe that education extends beyond classroom walls. Our students actively participate in community service projects, environmental initiatives, and cultural exchange programs. Through these activities, they develop empathy, social responsibility, and global awareness. We regularly organize parent-teacher meetings, community events, and open houses to strengthen the bond between the school, parents, and the wider community. Our annual cultural festival showcases student talents and celebrates our diverse heritage.",
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
        className={`w-full md:w-1/2 bg-gray-900 text-white p-8 md:p-12 ${
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
