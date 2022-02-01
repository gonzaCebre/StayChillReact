import ItemCount from "./ItemCount";


const CartItem = ({ data }) => {

    let { id, title, price, quantity, imageUrl } = data;

    return (
        <div className="item-cart" key={id} id={id}>
            <img src={imageUrl} className="cart-img" alt={title} />
            <div className="detalles-item-cart">
                <p className="detalle">{title} ${price}</p>
                <ItemCount quantity={quantity} data={data} />
                <p className="detalle">Subtotal: ${price * quantity}</p>
            </div>

        </div>

    )
}

export default CartItem;