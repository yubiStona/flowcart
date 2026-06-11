"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Design Lead, TechCorp",
    content:
      "The attention to detail in every product I've purchased is unmatched. FlowCart isn't just a shop; it's a lifestyle upgrade.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "Content Creator",
    content:
      "Incredible shipping speed and the packaging is beautiful. You can tell they really care about the customer experience.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "David Kim",
    role: "Entrepreneur",
    content:
      "Best investment I've made this year. The quality is exceptional and customer service is top-notch.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealElements = () => {
      const reveals = sectionRef.current?.querySelectorAll(".reveal") || [];
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    };

    revealElements();

    window.addEventListener("scroll", revealElements);
    return () => window.removeEventListener("scroll", revealElements);
  }, []);
  return (
    <section ref={sectionRef} className="py-24 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row gap-gutter">
          <div className="md:w-1/3">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              What Our Community Says
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Join thousands of satisfied customers who have elevated their
              lifestyle with FlowCart.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="glass-card p-10 rounded-2xl reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex text-secondary mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-lg text-body-lg text-primary mb-8 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-outline-variant">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-body-md text-body-md font-bold">
                      {testimonial.name}
                    </p>
                    <p className="font-label-caps text-label-caps text-muted-text">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
