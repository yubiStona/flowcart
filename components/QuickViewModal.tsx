"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setQuickViewProduct } from "@/store/slices/uiSlice";
import { addToCart } from "@/store/slices/cartSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function QuickViewModal() {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.ui.quickViewProduct);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      }),
    );
    toast.success(`${product.name} added to cart!`);
    dispatch(setQuickViewProduct(null));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => dispatch(setQuickViewProduct(null))}
      />
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        <button
          onClick={() => dispatch(setQuickViewProduct(null))}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-l-2xl"
            />
          </div>
          <div className="md:w-1/2 p-8">
            {product.badge && (
              <span className="inline-block bg-secondary text-white font-label-caps text-xs px-3 py-1 rounded mb-4">
                {product.badge}
              </span>
            )}
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              {product.name}
            </h2>
            <p className="font-headline-md text-headline-md text-secondary mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              {product.description}
            </p>
            <button
              onClick={handleAddToCart}
              className="w-full bg-primary text-on-primary py-4 rounded-lg font-button text-button hover:bg-opacity-90 transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
