'use client';

import { useRef } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  speed?: number; // in milliseconds
  imageAlt?: string;
  className?: string;
}

export default function ImageCarousel({
  images,
  speed = 30000, // Time to complete one full cycle
  imageAlt = 'Carousel image',
  className = '',
}: ImageCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // We need to duplicate the images array to create a seamless loop
  const duplicatedImages = [...images, ...images];
  
  // Calculate the total width of all images
  const totalWidth = duplicatedImages.length * 100;
  
  // Define the animation style with the provided speed
  const animationStyle = {
    animation: `scrollImages ${speed / 1000}s linear infinite`,
    width: `${totalWidth}%`
  };

  return (
    <>
      {/* Define the CSS animation */}
      <style jsx global>{`
        @keyframes scrollImages {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      
      <div 
        className={`overflow-hidden absolute top-0 left-0 w-full h-full ${className}`}
        ref={carouselRef}
      >
        <div 
          className="flex h-full"
          style={animationStyle}
        >
          {duplicatedImages.map((image, index) => (
            <div 
              key={`${image}-${index}`} 
              className="flex-shrink-0 w-full h-full relative"
              style={{ width: `${100 / duplicatedImages.length}%` }}
            >
              <Image 
                src={image} 
                alt={`${imageAlt} ${(index % images.length) + 1}`}
                fill
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
