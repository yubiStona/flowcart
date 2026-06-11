"use client";

import { useQuery } from "@tanstack/react-query";
import { FAQ } from "@/types/product";
import { useState } from "react";

async function fetchFAQs(): Promise<FAQ[]> {
  const res = await fetch("/api/faqs");
  if (!res.ok) throw new Error("Failed to fetch FAQs");
  return res.json();
}

export default function FAQSection() {
  const { data: faqs, isLoading } = useQuery({
    queryKey: ["faqs"],
    queryFn: fetchFAQs,
  });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (isLoading) {
    return (
      <section className="py-24 max-w-3xl mx-auto px-margin-mobile">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border-b border-outline-variant py-6">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 max-w-3xl mx-auto px-margin-mobile">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Everything you need to know about shopping with us.
        </p>
      </div>
      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <div key={faq.id} className="border-b border-outline-variant py-6">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left group"
            >
              <span className="font-body-lg text-body-lg font-semibold text-primary">
                {faq.question}
              </span>
              <span
                className={`material-symbols-outlined transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
              >
                {openIndex === index ? "remove" : "add"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 mt-4" : "max-h-0"}`}
            >
              <p className="font-body-md text-body-md text-on-surface-variant">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
