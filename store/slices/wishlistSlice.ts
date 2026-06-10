import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistState {
  items: number[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<number>) => {
      if (state.items.includes(action.payload)) {
        state.items = state.items.filter(id => id !== action.payload);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;