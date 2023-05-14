const Item = ({id, title, author, price, stock, img}) => {
    return (
        <article className="card-item">
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
                    Price: ${price}
                </p>
                <p className="info">
                    Available stock: {stock}
                </p>
            </section>
            <footer className="item-footer">
                <button className="option">See more</button>
            </footer>
        </article>
    );
}
export default Item;