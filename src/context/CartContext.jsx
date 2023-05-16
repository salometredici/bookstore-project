import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    console.log(cart);

    const addItem = (item, quantity) => {
        if (!alreadyInCart(item.id))
        {
            setCart(prev => [...prev, {...item, quantity}]);
        } 
        else
        {
            console.error('The product already exists');
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter(prod => prod.id !== itemId));
    }

    const clearCart = () => {
        setCart([]);
    }

    const alreadyInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}