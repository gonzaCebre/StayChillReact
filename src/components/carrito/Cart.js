import { useContext, useState } from "react";
import CartItem from "./CartItem";
import { TYPES } from "../context/cart/CartActions";
import CartContext from '../context/cart/CartContext';
import ItemDetailContainer from '../productsDetail/ItemDetailContainer';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Form from "./Form";
import { NavLink } from "react-router-dom";
import Thanks from "../main/Thanks";



const Cart = () => {

    const [state, dispatch] = useContext(CartContext);
    const { products, cart } = state;

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
        console.log('carrito vacio')
    }

    let precios = cart.map((producto) => {
        return parseInt(producto.price * producto.quantity);
    });

    let precioTotal = precios.reduce((a, b) => a + b, 0);

    const db = getFirestore();

    const [compraFinalizada, setCompraFinalizada] = useState(false);

    const [nameBuyer, setNameBuyer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const buyer = { name: e.target[0].value, mail: e.target[1].value };
        let order = {
            buyer: buyer,
            items: cart,
            total: precioTotal
        };
        setNameBuyer(buyer.name);

        const data = collection(db, "orders");
        addDoc(data, order).then((res) => {
            setCompraFinalizada(true)
            console.log(order);
        }).then(() => clearCart());

    }

    if (compraFinalizada) {
        return <Thanks nameBuyer={nameBuyer} />
    } else {
        return (
            <div className="cart">
                <h3>Tu carrito</h3>
                <div className="cart-items">
                    {cart.map((item, index) => <CartItem key={index} data={item} />)}
                </div>
                <div className="total">
                    <p>Total de tu compra</p>
                    <p>${precioTotal}</p>
                </div>
                <Form handleSubmit={handleSubmit} />
                <NavLink to="/"><button className="volver">Seguir comprando</button></NavLink>
                <button onClick={clearCart} className="button-red">Limpiar carrito</button>

            </div>
        )
    }


}

export default Cart;