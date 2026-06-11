"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Subscribed to newsletter!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-surface-bright border-t border-outline-variant w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter py-margin-tablet px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col gap-6">
          <div className="font-headline-md text-headline-md font-bold text-primary">
            FlowCart
          </div>
          <p className="font-body-sm text-body-sm text-muted-text">
            Elevating the everyday through curated design and intentional
            shopping.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
              favorite
            </span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
              photo_camera
            </span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
              forum
            </span>
          </div>
        </div>

        <div>
          <h5 className="font-label-caps text-label-caps text-primary mb-6">
            SHOP
          </h5>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="#"
                className="font-body-sm text-body-sm text-muted-text hover:text-primary transition-colors"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-sm text-body-sm text-muted-text hover:text-primary transition-colors"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-sm text-body-sm text-muted-text hover:text-primary transition-colors"
              >
                Featured Collections
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-sm text-body-sm text-muted-text hover:text-primary transition-colors"
              >
                Best Sellers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-label-caps text-label-caps text-primary mb-6">
            HELP
          </h5>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="#"
                className="font-body-sm text-body-sm text-muted-text hover:text-primary transition-colors"
              >
                Shipping Info
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-sm text-body-sm text-muted-text hover:text-primary transition-colors"
              >
                Returns
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-sm text-body-sm text-muted-text hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-body-sm text-body-sm text-muted-text hover:text-primary transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-label-caps text-label-caps text-primary mb-6">
            NEWSLETTER
          </h5>
          <form onSubmit={handleNewsletter} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="bg-surface-container-low border-none rounded-lg px-4 py-3 flex-grow text-sm focus:ring-1 focus:ring-secondary outline-none"
              required
            />
            <button
              type="submit"
              className="bg-primary text-on-primary p-3 rounded-lg hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
          <div className="mt-8">
            <h5 className="font-label-caps text-label-caps text-primary mb-4">
              LEGAL
            </h5>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="font-body-sm text-body-sm text-muted-text hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-body-sm text-body-sm text-muted-text hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-center items-center text-muted-text font-body-sm text-body-sm">
        <p>
          © {new Date().getFullYear()} FlowCart Premium. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
