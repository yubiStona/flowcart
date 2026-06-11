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
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors hover:scale-110 transform duration-200"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors hover:scale-110 transform duration-200"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428-.254.66-.598 1.216-1.153 1.772-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465-.66-.254-1.216-.598-1.772-1.153-.509-.5-.902-1.105-1.153-1.772-.247-.637-.415-1.363-.465-2.428-.05-1.066-.06-1.405-.06-4.122 0-2.717.01-3.056.06-4.122.05-1.065.218-1.79.465-2.428.254-.66.598-1.216 1.153-1.772.5-.509 1.105-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors hover:scale-110 transform duration-200"
              aria-label="X (Twitter)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
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

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16 pt-8 border-t border-outline-variant flex justify-center text-muted-text font-body-sm text-body-sm">
        <p>
          © {new Date().getFullYear()} FlowCart Premium. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
