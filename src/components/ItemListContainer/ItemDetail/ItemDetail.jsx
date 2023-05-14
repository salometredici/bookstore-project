import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({id, title, author, category, img, price, stock, description}) {
    return (
        <article className="cardItem">
            <header className="header">
                <h2 className="item-header">{title}</h2>
            </header>
            <picture>
                <img src={img} alt={title} className="item-img"/>
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Added ' + quantity)}/>
            </footer>
        </article>
    );
}