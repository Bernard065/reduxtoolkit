import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './redux/cart/cartSlice'
import modaalReducer from './redux/modal/modalSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modaalReducer,
    },
})

