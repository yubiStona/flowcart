export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  badge?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
