"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation 
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" },
      );

      // Image scale animation
      gsap.fromTo(
        ".hero-image",
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 hero-image">
        <img
          alt="Minimalist product display"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop"
        />
        <div className="absolute inset-0 bg-black/5"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="max-w-2xl">
          <div className="hero-text">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">
              SPRING / SUMMER 2024
            </span>
          </div>
          <div className="hero-text">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-none">
              Shop Smarter.
              <br />
              Live Better.
            </h1>
          </div>
          <div className="hero-text">
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-md">
              Curated lifestyle essentials designed for the modern individual
              who values both form and function.
            </p>
          </div>
          <div className="hero-text flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-lg font-button text-button hover:bg-opacity-90 active:scale-95 transition-all shadow-lg">
              Shop Now
            </button>
            <button className="border border-outline text-primary px-10 py-5 rounded-lg font-button text-button hover:bg-surface-container-low active:scale-95 transition-all">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
