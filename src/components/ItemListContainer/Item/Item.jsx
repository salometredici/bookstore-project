import './assets/item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({id, title, author, price, stock, img}) => {
    return (
        <Card className="card-item">
            <Card.Title className="card-title">{title}</Card.Title>
            <Card.Img src={img} alt={title} className="book-img"></Card.Img>
            <Card.Text><span>Author:</span> {author}</Card.Text>
            <Card.Text><span>Price:</span> ${price}</Card.Text>
            <Card.Text><span>Available stock:</span> {stock}</Card.Text>
            <Card.Footer className="card-footer">
                <Link to={`/book/${id}`} className="option">See more</Link>
            </Card.Footer>
        </Card>
    );
}
export default Item;