"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Cooper",
    location: "Yogyakarta",
    image: "/testimonial-1.jpg",
    quote:
      "Wild and Organic has become my skincare sanctuary! The commitment to using natural, organic ingredients is evident in the incredible results. My skin feels truly nurtured, and I love knowing that I'm embracing the untamed beauty of nature in every product.\n\nA brand that speaks to my soul!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "Jakarta",
    image: "/testimonial-2.jpg",
    quote:
      "The natural ingredients have transformed my skincare routine. My skin has never felt better, and I appreciate the brand's commitment to organic beauty solutions.",
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Surabaya",
    image: "/testimonial-3.jpg",
    quote:
      "Finding Wild and Organic was a game-changer for my sensitive skin. The products are gentle yet effective, and I can feel the difference organic ingredients make.",
  },
  {
    id: 4,
    name: "Maria Garcia",
    location: "Bali",
    image: "/testimonial-4.jpg",
    quote:
      "I've tried many skincare brands, but Wild and Organic stands out for its purity and effectiveness. The results speak for themselves!",
  },
  {
    id: 5,
    name: "Lisa Park",
    location: "Bandung",
    image: "/testimonial-5.jpg",
    quote:
      "The attention to detail in each product is remarkable. My skin has never looked more radiant, and I love supporting a brand that prioritizes natural ingredients.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

  // Calculate indices for the carousel
  const getCircularIndex = (index: number) => {
    return (index + testimonials.length) % testimonials.length;
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevTestimonial();
      } else if (e.key === "ArrowRight") {
        nextTestimonial();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-light">Your Skin, Your Story</h2>
      </div>

      <div
        className="relative max-w-4xl mx-auto"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Decorative elements */}
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-[24px] text-gray-300 font-light hidden md:block">
          +
        </div>
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[24px] text-gray-300 font-light hidden md:block">
          +
        </div>

        {/* Navigation buttons - Hidden on mobile */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 hover:text-yellow-500 transition-colors hidden md:block"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 hover:text-yellow-500 transition-colors hidden md:block"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Mobile navigation indicators */}
        <div className="flex justify-center gap-2 mb-4 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-yellow-500" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Testimonial content */}
        <div className="space-y-8">
          <div className="border border-gray-200 p-4 md:p-8 text-center">
            <p className="text-base md:text-lg font-light leading-relaxed whitespace-pre-line">
              {testimonials[currentIndex].quote}
            </p>
          </div>

          {/* Profile images carousel */}
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const testimonialIndex = getCircularIndex(currentIndex + offset);
              const testimonial = testimonials[testimonialIndex];
              const isCenter = offset === 0;

              return (
                <div
                  key={testimonial.id}
                  className={`relative rounded-full overflow-hidden transition-all duration-300
                    ${
                      isCenter
                        ? "h-16 w-16 md:h-24 md:w-24"
                        : "h-8 w-8 md:h-12 md:w-12 opacity-60"
                    }
                  `}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes={
                      isCenter
                        ? "(max-width: 768px) 64px, 96px"
                        : "(max-width: 768px) 32px, 48px"
                    }
                  />
                </div>
              );
            })}
          </div>

          {/* Author info */}
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-medium">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm md:text-base text-gray-600 font-light">
              {testimonials[currentIndex].location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
