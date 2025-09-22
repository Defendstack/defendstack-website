"use client";
import { useState } from "react";
import TestimonialCard from "@/components/SuccessStories/TestimonialCard";
import { motion } from "framer-motion";
import stories from "@/components/SuccessStories/TestomnialsData";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1); // move by 1
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1); // move by 1
    }
  };

  const visibleStories = stories.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="md:pt-40 pt-9" id="testimonials">
      <div className="container lg:px-16 px-4">
        <div className="text-center">
          {/* Heading */}
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted sm:text-28 text-18 mb-8 font-semibold">
              Our <span className="text-primary">Testimonials</span>
            </p>
            <h2 className="text-white sm:text-40 text-30 font-medium lg:w-4/5 mx-auto">
              Discover how our platform streamlines security workflows —
              straight from our users
            </h2>
            <p className="text-gray-300 sm:text-lg text-base lg:w-3/4 mx-auto mt-1 leading-6">
              We partner with teams of all sizes to simplify security, reduce
              risks, and empower developers. Our users share their experiences,
              challenges, and how DefendStack has transformed their workflows.
              Read their stories and see the impact firsthand.
            </p>
          </motion.div>

          {/* Cards + Navigation */}
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mt-12 flex gap-6 items-center justify-center">
              {/* Prev Button (only show if enough stories) */}
              {stories.length > itemsPerPage && (
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`px-3 py-3 rounded-full transition ${
                    currentIndex === 0
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-gray-800 text-primary hover:bg-primary hover:text-white"
                  }`}
                  aria-label="Previous"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M15 19l-7-7 7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}

              {/* Cards */}
              <div className="flex justify-center gap-6">
                {visibleStories.map((story, index) => (
                  <div className="w-1/3" key={index}>
                    <TestimonialCard story={story} />
                  </div>
                ))}
              </div>

              {/* Next Button (only show if enough stories) */}
              {stories.length > itemsPerPage && (
                <button
                  onClick={handleNext}
                  disabled={currentIndex + itemsPerPage >= stories.length}
                  className={`px-3 py-3 rounded-full transition ${
                    currentIndex + itemsPerPage >= stories.length
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-gray-800 text-primary hover:bg-primary hover:text-white"
                  }`}
                  aria-label="Next"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
