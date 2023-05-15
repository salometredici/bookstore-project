import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = ({id, title, author, category, img, price, stock, description}) => {

    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = {
            id, title, price
        };
        addItem(item, quantity);
    };

    return (
        <article className="cardItem">
            <header className="header">
                <h2 className="item-header">{title}</h2>
            </header>
            <picture>
                <img src={img} alt={title} className="book-img"/>
            </picture>
            <section>
                <p className="info">
                    Author: {author}
                </p>
                <p className="info">
                    Category: {category}
                </p>
                <p className="info">
                    Description: {description}
                </p>
                <p className="info">
                    Price: {price}
                </p>
                <p className="info">
                    Available stock: {stock}
                </p>
            </section>
            <footer className="item-footer">
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className="option">Go to cart</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    );
}
export default ItemDetail;