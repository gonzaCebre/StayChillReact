import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer, { cartInitialState } from "./CartReducer";

const CartProvider = ({ children }) => {

    const [store, dispatch] = useReducer(CartReducer, cartInitialState);

    return <CartContext.Provider value={[store, dispatch]}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;