"use client";

import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleMobileMenu, setCartDrawerOpen } from "@/store/slices/uiSlice";
import Link from "next/link";

export default function Header() {
  const dispatch = useAppDispatch();
  const { totalQuantity } = useAppSelector((state) => state.cart);
  const isMobileMenuOpen = useAppSelector((state) => state.ui.isMobileMenuOpen);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full bg-glass-fill backdrop-blur-xl border-b border-glass-stroke shadow-sm z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
          <Link
            href="/"
            className="font-headline-md text-headline-md font-bold text-primary"
          >
            FlowCart
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/"
              className="font-body-md text-body-md text-secondary font-bold border-b-2 border-secondary pb-1"
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors"
            >
              Categories
            </Link>
            <Link
              href="#"
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors"
            >
              Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
              search
            </span>
            <div
              className="relative cursor-pointer hover:scale-110 transition-transform"
              onClick={() => dispatch(setCartDrawerOpen(true))}
            >
              <span className="material-symbols-outlined text-primary">
                shopping_cart
              </span>
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </div>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
              account_circle
            </span>

            <button
              className="md:hidden"
              onClick={() => dispatch(toggleMobileMenu())}
            >
              <span className="material-symbols-outlined text-primary">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => dispatch(toggleMobileMenu())}
        />
        <div className="relative w-4/5 max-w-sm h-full bg-white shadow-xl p-8 flex flex-col gap-6">
          <Link
            href="/"
            className="font-body-lg text-body-lg text-primary hover:text-secondary"
            onClick={() => dispatch(toggleMobileMenu())}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="font-body-lg text-body-lg text-primary hover:text-secondary"
            onClick={() => dispatch(toggleMobileMenu())}
          >
            Shop
          </Link>
          <Link
            href="/categories"
            className="font-body-lg text-body-lg text-primary hover:text-secondary"
            onClick={() => dispatch(toggleMobileMenu())}
          >
            Categories
          </Link>
          <Link
            href="/dashboard"
            className="font-body-lg text-body-lg text-primary hover:text-secondary"
            onClick={() => dispatch(toggleMobileMenu())}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
