"use client";

import { Product } from "@/types/product";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { toggleWishlist } from "@/store/slices/wishlistSlice";
import { setQuickViewProduct } from "@/store/slices/uiSlice";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const isWishlisted = wishlistItems.includes(product.id);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      }),
    );
    toast.success(`${product.name} added to cart!`, {
      duration: 2000,
      icon: "🛒",
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleQuickView = () => {
    dispatch(setQuickViewProduct(product));
  };

  return (
    <div
      className="product-card group cursor-pointer reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-4/5 overflow-hidden rounded-lg bg-surface-container-low mb-4">
        <img
          alt={product.name}
          className="product-card-image w-full h-full object-cover"
          src={product.image}
        />
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-secondary text-white font-label-caps text-[10px] px-2 py-1 rounded">
              {product.badge}
            </span>
          </div>
        )}
        <button
          onClick={handleQuickView}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
        >
          <span className="material-symbols-outlined text-primary text-xl">
            visibility
          </span>
        </button>
        <button
          onClick={() => dispatch(toggleWishlist(product.id))}
          className="absolute top-4 right-16 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
        >
          <span className="material-symbols-outlined text-primary text-xl">
            {isWishlisted ? "favorite" : "favorite_border"}
          </span>
        </button>
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-on-primary py-3 font-button text-button rounded-lg shadow-lg active:scale-95 transition-transform"
          >
            Quick Add
          </button>
        </div>
      </div>
      <h4 className="font-body-md text-body-md text-primary font-semibold">
        {product.name}
      </h4>
      <p className="font-label-caps text-label-caps text-muted-text mt-1">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
}
