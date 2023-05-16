import './assets/item-list.css';
import Item from '../Item/Item';

const ItemList = ({books}) => {
    console.log('mi lista de items tenia:');
    console.log(books);
    return (
        <div className="item-list">
            {books.map(book => <Item key={book.id} {...book} />)}
        </div>
    );
}
export default ItemList;