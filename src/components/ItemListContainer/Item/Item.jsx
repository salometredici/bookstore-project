import './assets/item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({id, title, author, price, stock, img}) => {
    return (
        // <article className="card-item">
        //     <header className="header">
        //         <h2 className="item-header">{title}</h2>
        //     </header>
        //     <picture>
        //         <img src={img} alt={title} className="book-img"/>
        //     </picture>
        //     <section>
        //         <p className="info">
        //             Author: {author}
        //         </p>
        //         <p className="info">
        //             Price: ${price}
        //         </p>
        //         <p className="info">
        //             Available stock: {stock}
        //         </p>
        //     </section>
        //     <footer className="item-footer">
        //         <Link to={`/book/${id}`}>See more</Link>
        //     </footer>
        // </article>
        <Card className="card-item">
            <Card.Title className="card-title">{title}</Card.Title>
            <Card.Img src={img} alt={title} className="book-img"></Card.Img>
            <Card.Body className="info">
                <Card.Text>Author: {author}</Card.Text>
                <Card.Text>Price: ${price}</Card.Text>
                <Card.Text>Available stock: {stock}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={`/book/${id}`}>Prueba card link</Card.Link>
                <Link to={`/book/${id}`}>See more</Link>
            </Card.Body>
        </Card>
    );
}
export default Item;