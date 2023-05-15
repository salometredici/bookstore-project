import { useContext } from "react";
import CartItem from '../CartItem/CartItem';
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>The cart is empty</h1>
                <Link to="/" className="option">Go back</Link>
            </div>
        )
    }
    return (
        <div>
            { cart.map(prod => <CartItem key={prod.id} {...prod}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="button">Clear Cart</button>
            <Link to="/checkout" className="option">Checkout</Link>
        </div>
    )
}