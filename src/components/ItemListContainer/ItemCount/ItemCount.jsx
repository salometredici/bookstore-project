import React, { useState } from "react";

export default function ItemCount({stock, initial, onAdd}) {

    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={decrement}>-</button>
                <h4 className="number">{quantity}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <div className="button" onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </div>
        </div>
    );
}