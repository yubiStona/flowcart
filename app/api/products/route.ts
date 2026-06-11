import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    name: "Chronos Minimalist Watch",
    price: 245.00,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&h=800&fit=crop",
    description: "A sleek, minimalist analog wristwatch with premium finish. Perfect for the modern professional.",
    badge: "NEW"
  },
  {
    id: 2,
    name: "Evolve Wireless Audio",
    price: 320.00,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=800&fit=crop",
    description: "High-fidelity wireless over-ear headphones with noise cancellation."
  },
  {
    id: 3,
    name: "Velocity Active Runner",
    price: 180.00,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop",
    description: "Performance running shoes with advanced cushioning technology."
  },
  {
    id: 4,
    name: "Urban Leather Tote",
    price: 450.00,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop",
    description: "Premium leather tote bag for everyday elegance."
  },
  {
    id: 5,
    name: "Aether Smart Speaker",
    price: 199.00,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=800&fit=crop",
    description: "Smart speaker with exceptional sound quality."
  },
  {
    id: 6,
    name: "Zen Yoga Mat",
    price: 89.00,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=600&h=800&fit=crop",
    description: "Eco-friendly, non-slip yoga mat for your practice."
  },
  {
    id: 7,
    name: "Minimalist Backpack",
    price: 129.00,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
    description: "Water-resistant backpack for daily commutes."
  },
  {
    id: 8,
    name: "Nordic Water Bottle",
    price: 45.00,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=800&fit=crop",
    description: "Insulated stainless steel bottle keeps drinks cold for 24 hours."
  }
];

export async function GET() {
  return NextResponse.json(products);
}