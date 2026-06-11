# FlowCart – E-Commerce Landing Page

A modern, fully responsive landing page for **FlowCart**, a fictional lifestyle brand.
Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Redux Toolkit**, **TanStack Query**, and **GSAP**.

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+ and npm / yarn / pnpm

### Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/yubiStona/flowcart.git
cd flowcart

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open http://localhost:3000 to see the app.

---

## 🎞️ GSAP Usage (Animations)

GSAP is used with the ScrollTrigger plugin to create smooth, scroll-driven animations.

| Component / File           | Animation Description                                                                                                      |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| components/Hero.tsx        | Hero entrance – text elements stagger into place (opacity + Y movement). Image scale – background image scales in on load. |
| components/ProductGrid.tsx | Scroll-triggered product cards – each product card fades in and moves up when it enters the viewport.                      |

---

## 📡 TanStack Query Usage (Data Fetching)

TanStack Query handles async data fetching with built-in caching, loading, and error states.

| Section / Component        | Endpoint                  | What it does                                                                                                  |
| -------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| components/ProductGrid.tsx | /api/products (local API) | Fetches the list of products. Shows a skeleton loader while loading and displays an error message on failure. |
| components/FAQSection.tsx  | /api/faqs (local API)     | Fetches FAQ items. Implements loading skeletons and error handling.                                           |

Both endpoints are implemented as Next.js API routes inside app/api/.

---

## 🧠 State Management Usage (Redux Toolkit)

Redux Toolkit is used to manage global application state across three feature slices.

### store/slices/cartSlice.ts

State: cart items array (with quantities), total quantity, total amount.

Actions: addToCart, removeFromCart, updateQuantity, clearCart.

Used in: ProductCard (add to cart), CartDrawer (display/update/remove), Header (cart badge).

---

### store/slices/wishlistSlice.ts

State: array of wishlisted product IDs.

Actions: toggleWishlist.

Used in: ProductCard (heart icon toggles wishlist state).

---

### store/slices/uiSlice.ts

State: mobile menu open/close, cart drawer visibility, quick-view modal product data.

Actions: toggleMobileMenu, setCartDrawerOpen, setQuickViewProduct.

Used in: Header (mobile menu), CartDrawer, QuickViewModal, ProductCard (opens quick-view).

---

Redux hooks (useAppDispatch, useAppSelector) are exported from store/hooks.ts for type-safe usage.
