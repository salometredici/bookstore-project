import './assets/item-list-container.css';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getAllBooks, getBooksByCategory } from '../../asyncMock';
import ItemList from './ItemList/ItemList';

export default function ItemListContainer({itemListTitle}) {
    
    const [books, setBooks] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const asyncFunc = category ? getBooksByCategory : getAllBooks;
        asyncFunc(category)
            .then(response => {
                setBooks(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, [category]);

    return (
        <div className="item-list-container">
            <div className="item-list-content">
                <h1>{itemListTitle}</h1>
                { category && <h2 className="item-list-category">{category} Books</h2> }
                <ItemList books={books}/>
            </div>
        </div>
    );
}