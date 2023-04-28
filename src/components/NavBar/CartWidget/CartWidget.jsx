import cart from './assets/shopping-cart.svg'

export default function CartWidget() {
    return (
        <div className='cart-widget-container'>
            <img src={cart} alt='cart-widget' type="button"/>
            <span className='badge'>0</span>
        </div>
    )
}
