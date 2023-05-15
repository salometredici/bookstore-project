import { useContext } from 'react';
import { Link } from 'react-router-dom';
import cart from './assets/shopping-cart.svg';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to='/cart' className='cart-widget-container'>
            <img src={cart} alt='cart-widget'/>
            <span className='badge'>{totalQuantity}</span>
        </Link>
    );
}
export default CartWidget;
