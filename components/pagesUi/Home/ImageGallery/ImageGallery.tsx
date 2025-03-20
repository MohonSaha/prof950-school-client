"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

interface CustomLayoutGalleryProps {
  images: GalleryImage[];
  title?: string;
}

const CustomLayoutGallery: React.FC<CustomLayoutGalleryProps> = ({
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // Make sure we have enough images
  if (images.length < 10) {
    console.warn("Gallery requires at least 10 images for the layout");
  }

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(-1);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (images.length <= 1) return;

    let newIndex = selectedIndex;
    if (direction === "prev") {
      newIndex = (selectedIndex - 1 + images.length) % images.length;
    } else {
      newIndex = (selectedIndex + 1) % images.length;
    }

    setSelectedImage(images[newIndex]);
    setSelectedIndex(newIndex);
  };

  // Create the image card component to avoid repetition
  const ImageCard = ({
    image,
    index,
    size = "medium",
  }: {
    image: GalleryImage;
    index: number;
    size?: "big" | "medium";
  }) => (
    <Card
      key={image.id}
      className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg p-0 ${
        size === "big" ? "h-full" : ""
      }`}
      onClick={() => openModal(image, index)}
    >
      <CardContent className="p-0 relative h-full ">
        <div
          className={`relative overflow-hidden ${
            size === "big" ? "h-full" : "h-full"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes={size === "big" ? "50vw" : "25vw"}
          />
        </div>
        {image.caption && (
          <div className="bg-gradient-to-t from-black to-transparent text-white p-2 absolute bottom-0 left-0 right-0">
            <p className="text-sm text-center">{image.caption}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  // Ensure we have the minimum needed images
  const safeImages = images.slice(0, Math.min(10, images.length));

  // Fill in with duplicates if necessary
  while (safeImages.length < 10) {
    safeImages.push({
      ...images[safeImages.length % images.length],
      id: `duplicate-${safeImages.length}`,
    });
  }

  return (
    <div className="py-8 md:px-10 px-4">
      <header className="py-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-gray-800">একনজরে স্কুলের</span>
            <span className="text-green-600"> গ্যালারি </span>
            <span className="text-gray-800">দেখুন</span>
          </h2>
          <p className="text-gray-600">স্কুলের অনুষ্ঠান এবং বিভিন্ন সেলিব্রেশন পিকচার গুলো</p>
        </div>
      </header>

      <div className="space-y-4">
        {/* First row - 1 big image on left, 4 medium images on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left side - Big image */}
          <div className="md:h-96">
            <ImageCard image={safeImages[0]} index={0} size="big" />
          </div>

          {/* Right side - 2x2 medium images */}
          <div className="grid md:grid-cols-2 gap-4 md:h-96">
            <ImageCard image={safeImages[1]} index={1} />
            <ImageCard image={safeImages[2]} index={2} />
            <ImageCard image={safeImages[3]} index={3} />
            <ImageCard image={safeImages[4]} index={4} />
          </div>
        </div>

        {/* Second row - 4 medium images on left, 1 big image on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left side - 2x2 medium images */}
          <div className="grid md:grid-cols-2 gap-4 md:h-96">
            <ImageCard image={safeImages[5]} index={5} />
            <ImageCard image={safeImages[6]} index={6} />
            <ImageCard image={safeImages[7]} index={7} />
            <ImageCard image={safeImages[8]} index={8} />
          </div>

          {/* Right side - Big image */}
          <div className="md:h-96">
            <ImageCard image={safeImages[9]} index={9} size="big" />
          </div>
        </div>
      </div>

      {/* Modal for enlarged view */}
      <Dialog open={!!selectedImage} onOpenChange={() => closeModal()}>
        <DialogContent className="max-w-4xl p-0 bg-black/90 border-none">
          {/* <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 z-10 text-white bg-black/20 hover:bg-black/40"
            onClick={closeModal}
          >
            <X />
          </Button> */}

          <div className="relative w-full h-[80vh] flex items-center justify-center">
            {selectedImage && (
              <>
                <div className={`relative w-full h-full`}>
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                {selectedImage.caption && (
                  //   <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                  //     <p></p>
                  //   </div>
                  <div className="bg-gradient-to-t from-black to-transparent text-white p-2 absolute bottom-0 left-0 right-0">
                    <p className="text-sm text-center">
                      {selectedImage.caption}
                    </p>
                  </div>
                )}

                {images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/20 hover:bg-black/40"
                      onClick={() => navigateImage("prev")}
                    >
                      <ChevronLeft size={24} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/20 hover:bg-black/40"
                      onClick={() => navigateImage("next")}
                    >
                      <ChevronRight size={24} />
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomLayoutGallery;
