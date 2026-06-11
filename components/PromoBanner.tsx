"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PromoBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div
          ref={bannerRef}
          className="relative h-500px rounded-2xl overflow-hidden"
        >
          <img
            alt="Summer Sale Banner"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=500&fit=crop"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-12">
            <div>
              <span className="font-label-caps text-label-caps text-tertiary-fixed mb-4 block">
                LIMITED TIME OFFER
              </span>
              <h2 className="font-display-lg-mobile md:font-headline-lg text-white mb-6">
                Summer Sale: Up to 40% Off
              </h2>
              <p className="font-body-lg text-body-lg text-white/90 mb-8">
                Refresh your seasonal wardrobe with our premium selection of
                light-weight essentials and performance gear.
              </p>
              <button className="bg-white text-black px-12 py-5 rounded-lg font-button text-button hover:bg-opacity-90 active:scale-95 transition-all shadow-xl">
                Shop the Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
