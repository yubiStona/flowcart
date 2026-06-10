import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

interface UIState {
  isMobileMenuOpen: boolean;
  isCartDrawerOpen: boolean;
  quickViewProduct: Product | null;
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  isCartDrawerOpen: false,
  quickViewProduct: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setCartDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartDrawerOpen = action.payload;
    },
    setQuickViewProduct: (state, action: PayloadAction<Product | null>) => {
      state.quickViewProduct = action.payload;
    },
  },
});

export const { toggleMobileMenu, setCartDrawerOpen, setQuickViewProduct } =
  uiSlice.actions;
export default uiSlice.reducer;
