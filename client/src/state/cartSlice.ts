import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { count } from "console";

export interface Item {
  id: string;
  attributes: {
    category: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    name: string;
    price: number;
    shortDescription: string;
    longDescription: string;
  };
}

export interface CartItem {
  id: string;
  count: number;
}

export interface CartState {
  isCartOpen: boolean;
  items: Item[]; // All available items
  cart: CartItem[]; // Items in users cart
}

const initialState: CartState = {
  isCartOpen: false,
  items: [],
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
    addToCart: (state, action: PayloadAction<Item>) => {
      const cartItem: CartItem = {
        id: action.payload.id,
        count: 1,
      };

      state.cart = [...state.cart, cartItem];
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action: PayloadAction<CartItem>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action: PayloadAction<CartItem>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    toggleIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  addToCart,
  setItems,
  removeFromCart,
  increaseCount,
  decreaseCount,
  toggleIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
