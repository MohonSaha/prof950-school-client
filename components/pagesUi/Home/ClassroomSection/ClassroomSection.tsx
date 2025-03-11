"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Define types for the classroom data
interface Classroom {
  id: number;
  title: string;
  count: number;
  description: string;
  imageUrl: string;
  buttonText: string;
}

interface ClassroomCarouselProps {
  classrooms: Classroom[];
  title: string;
  subtitle: string;
  autoplayInterval?: number; // Time in milliseconds between auto slides
}

const ClassroomCarousel: React.FC<ClassroomCarouselProps> = ({
  classrooms,
  title,
  subtitle,
  autoplayInterval = 3000, // Default 3 seconds
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calculate items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 4; // Desktop
    }
    return 4; // Default for SSR
  };

  const [itemsPerView, setItemsPerView] = useState(4);

  // Navigate to the next card
  const handleNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= classrooms.length ? 0 : nextIndex;
    });
  }, [classrooms.length]);

  // Navigate to the previous card
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIdx = prevIndex - 1;
      return prevIdx < 0 ? classrooms.length - 1 : prevIdx;
    });
  };

  // Handle user navigation with autoplay pausing
  const handleUserNavigation = (action: () => void) => {
    setAutoplayPaused(true);
    action();

    // Resume autoplay after 5 seconds of no interaction
    setTimeout(() => {
      setAutoplayPaused(false);
    }, 5000);
  };

  // Update items per view on window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set up autoplay
  useEffect(() => {
    if (autoplayPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplayInterval, autoplayPaused, handleNext]);

  // Create a circular array for smooth infinite scrolling
  const getCircularClassrooms = () => {
    // Create a new array with duplicates to handle wraparound
    let result = [...classrooms];

    // Create a duplicate of the first n items at the end
    result = [...result, ...result.slice(0, itemsPerView)];

    return result;
  };

  // Handle touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setAutoplayPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === 0) return;

    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setTouchStartX(0);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(0);
    setTimeout(() => setAutoplayPaused(false), 5000);
  };

  // Calculate the transform position
  const getTransformValue = () => {
    // Calculate percentage to move
    const cardWidth = 100 / itemsPerView;
    const translateX = currentIndex * cardWidth;
    return `translateX(-${translateX}%)`;
  };

  const circularClassrooms = getCircularClassrooms();

  return (
    <div className="w-full bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-gray-800">
              {title.split(" ").slice(0, -1).join(" ")}
            </span>
            <span className="text-purple-600">
              {title.split(" ").slice(-1)}
            </span>
          </h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        {/* Carousel Container with Overflow Hidden */}
        <div className="relative overflow-hidden">
          {/* Touch-enabled Carousel Track */}
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: getTransformValue() }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {circularClassrooms.map((classroom, idx) => (
              <div
                key={`${classroom.id}-${idx}`}
                className={`flex-shrink-0 px-2`}
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <Card className="overflow-hidden h-full py-4">
                  <div className="relative h-40 overflow-hidden mx-4 rounded-lg">
                    <Image
                      src={classroom.imageUrl}
                      alt={classroom.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg "
                    />
                  </div>
                  <CardContent className="px-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-purple-600 font-bold">
                        {classroom.title}
                      </h3>
                      <span className="text-purple-600 font-bold">
                        {classroom.count}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {classroom.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      {classroom.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6  flex  justify-center items-center space-x-16 md:space-x-32 px-2  ">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white hover:bg-gray-100 border-purple-200 shadow-md cursor-pointer pointer-events-auto"
              onClick={() => handleUserNavigation(handlePrev)}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-10 w-10 text-purple-600" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full bg-white hover:bg-gray-100 border-purple-200 shadow-md pointer-events-auto"
              onClick={() => handleUserNavigation(handleNext)}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-purple-600" />
            </Button>
          </div>
        </div>

        {/* Indicator dots */}
        <div className=" justify-center mt-8 space-x-2 hidden">
          {classrooms.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "bg-purple-600 w-6" : "bg-gray-300 w-2"
              }`}
              onClick={() => handleUserNavigation(() => setCurrentIndex(idx))}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassroomCarousel;
