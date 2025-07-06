/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-m"
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 font-sans antialiased" suppressHydrationWarning>
      <div className="relative">
        {/* Main testimonial card */}
        <div className="relative h-80 md:h-96 w-full">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              isActive(index) && (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 h-full flex flex-col justify-between">
                    {/* Header with avatar and user info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <Image
                          src={testimonial.src}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-black">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial quote */}
                    <div className="flex-1 flex items-center">
                      <motion.p 
                        className="text-xl md:text-2xl font-medium text-black leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {testimonial.quote}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Previous button */}
          <button
            onClick={handlePrev}
            className="group/button flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md active:scale-95 transition-all"
            name="Previous"
            title="Previous"
          >
            <IconArrowLeft className="h-5 w-5 text-gray-600 transition-transform duration-300 group-hover/button:-translate-x-0.5" />
          </button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive(index) 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                name={`Go to testimonial ${index + 1}`}
                title={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="group/button flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md active:scale-95 transition-all"
            name="Next"
            title="Next"
          >
            <IconArrowRight className="h-5 w-5 text-gray-600 transition-transform duration-300 group-hover/button:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};