import { NextResponse } from "next/server";

const faqs = [
  {
    id: 1,
    question: "What is your shipping policy?",
    answer:
      "We offer free express shipping on all orders over $150. Standard delivery typically takes 3-5 business days within the continental US. International shipping rates vary by destination.",
  },
  {
    id: 2,
    question: "Can I return my order?",
    answer:
      "Yes, we offer a 30-day hassle-free return window for all items in their original condition. Return shipping labels are provided free of charge for domestic customers.",
  },
  {
    id: 3,
    question: "Are your products sustainable?",
    answer:
      "We are committed to ethical sourcing. 80% of our products are made with sustainable materials, and we work exclusively with fair-labor certified manufacturers.",
  },
  {
    id: 4,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. Shipping costs and delivery times vary by region. You can see exact rates at checkout.",
  },
];

export async function GET() {
  return NextResponse.json(faqs);
}
