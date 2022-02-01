import React, { useContext, useEffect, useState } from "react";
import { TYPES } from "../context/cart/CartActions";
import CartContext from '../context/cart/CartContext';
import { UilTrashAlt } from "@iconscout/react-unicons";

function ItemCount({ quantity, data }) {

    const [state, dispatch] = useContext(CartContext);

    const [contador, setContador] = useState(quantity)

    const addOne = (id) => {
        dispatch({ type: TYPES.ADD_ONE, payload: id })
        setContador(contador + 1)
    }

    const delFromCart = (id, all = false) => {
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
        }
    }

    let { id } = data;

    return (
        <div className="contador-card">
            <div className="contador">
                <button onClick={() => delFromCart(id)} className="count-button">-</button>
                <p>{contador}</p>
                <button onClick={() => addOne(id)} className="count-button">+</button>
            </div>
            <button onClick={() => delFromCart(id, true)} ><UilTrashAlt className="trash" /></button>
        </div>
    )
}

export default ItemCount;