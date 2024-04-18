import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import restaurantSlice from "./slices/restaurantSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
});

export default store;
