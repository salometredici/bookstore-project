import { useState, useEffect } from "react";
import { getBookById } from "../../../asyncMock";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [book, setBook] = useState(null);
    const { bookId } = useParams();

    useEffect(() => {
        getBookById(bookId)
            .then(response => {
                setBook(response);
            })
            .catch(error => {
                console.error(error);
            })
        }, [bookId]);
    
    return (
        <div className="item-detail-container">
            <ItemDetail {...book}/>
        </div>
    );
}
export default ItemDetailContainer;