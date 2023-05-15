import './assets/item-list.css';
import Item from '../Item/Item';

const ItemList = ({books}) => {
    return (
        <div className="item-list">
            {
                books.map(book => 
                    <Item key={book.id} {...book} />
                )
            }
        </div>
    );
}
export default ItemList;