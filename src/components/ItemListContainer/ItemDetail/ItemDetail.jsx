import './assets/item-detail.css'
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
        <article className="book-detail">
          <div className="book-title">
              <h2>{title}</h2>
          </div>
          <div className="cont-stack">
            <div className="book-picture">
              <picture >
                <img src={img} alt={title}/>
              </picture>
            </div>
            <div className="book-info">
              <section>
                <p><span>Author:</span> {author}</p>
                <p><span>Price:</span> {price} ARS</p>
                <p><span>Available stock:</span> {stock}</p>
                <p><span>Category:</span> {category}</p>
                <p><span>Description:</span> {description}</p>
              </section>
            </div>
            <div className="book-counter">
                {
                    quantityAdded > 0 ? (
                        <div className="book-checkout">
                          <Link to="/cart" className="btn-checkout" type="button">Go to Checkout</Link>
                        </div>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </div>
          </div>
        </article>
    );
}
export default ItemDetail;