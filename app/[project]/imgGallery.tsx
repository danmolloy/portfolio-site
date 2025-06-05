'use client'

import { useEffect, useRef } from "react";

export default function ImageGallery({images}: {
  images: {
    imgSrc: string;
    imgWidth: string;
    imgHeight: string;
    imgAlt: string;
}[]
}) {
    const galleryRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      let scrollAmount = 0;
      const scrollSpeed = 0.5; // Adjust speed here (lower = slower)
      let animationFrameId: number;

      const scroll = () => {
        if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
          // Reset to start if we've reached the end
          scrollAmount = 0;
          gallery.scrollLeft = 0;
        } else {
          scrollAmount += scrollSpeed;
          gallery.scrollLeft = scrollAmount;
        }
        animationFrameId = requestAnimationFrame(scroll);
      };

      animationFrameId = requestAnimationFrame(scroll);

      // Pause on hover
      const handleMouseEnter = () => {
        cancelAnimationFrame(animationFrameId);
      };
      const handleMouseLeave = () => {
        animationFrameId = requestAnimationFrame(scroll);
      };

      gallery.addEventListener('mouseenter', handleMouseEnter);
      gallery.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        cancelAnimationFrame(animationFrameId);
        gallery.removeEventListener('mouseenter', handleMouseEnter);
        gallery.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);

  return (
    <div ref={galleryRef}
 className="flex flex-row h-1/2 overflow-x-auto my-4 scrollbar-hide snap-x snap-mandatory"> 
        {images.map(i => ( 
          <div key={i.imgSrc} className="m-1 flex-shrink-0 h-[400px] w-[300px] outline outline-zinc-700">
          {/* <Image src={i.imgSrc} fill={true} alt={i.imgAlt}/> */}
          </div>
        ))}
      </div>
  )
}