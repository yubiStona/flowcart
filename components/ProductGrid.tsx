"use client";

import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default function ProductGrid() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = ["all", "Electronics", "Lifestyle", "Fitness"];

  const filteredProducts = products?.filter(
    (product) =>
      selectedCategory === "all" || product.category === selectedCategory,
  );

  useEffect(() => {
    if (gridRef.current && filteredProducts) {
      // Scroll-triggered product reveal animation
      const cards = gridRef.current.querySelectorAll(".reveal");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }
  }, [filteredProducts]);

  if (isLoading) {
    return (
      <div className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-gutter gap-y-12">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-4/5 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error)
    return <div className="text-center py-24">Error loading products</div>;

  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            New Arrivals
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Discover our latest pieces that blend timeless design with modern
            functionality.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-button text-button transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-primary/10"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-gutter gap-y-12"
        >
          {filteredProducts?.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
