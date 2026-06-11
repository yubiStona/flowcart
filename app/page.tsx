"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import QuickViewModal from "@/components/QuickViewModal";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <PromoBanner />
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
      <QuickViewModal />
      <CartDrawer />
    </>
  );
}
