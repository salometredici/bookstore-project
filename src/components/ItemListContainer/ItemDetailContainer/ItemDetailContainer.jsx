import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { getBookById } from "../../../asyncMock";

const ItemDetailContainer = () => {
    const [book, setBook] = useState(null);
    const { bookId } = useParams();

    useEffect(() => {
        getBookById(bookId)
            .then(response => {
                setBook(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className="item-detail-container">
            <ItemDetail {...book}/>
        </div>
    )
}
export default ItemDetailContainer;