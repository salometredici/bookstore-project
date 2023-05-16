import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomeCarousel from './components/HomeCarousel/HomeCarousel';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <HomeCarousel />
          <Routes>
            <Route path='/' element={<ItemListContainer itemListTitle={'All products'}/>} />
            <Route path='/category/:category' element={<ItemListContainer itemListTitle={'Products by category'}/>} />
            <Route path='/book/:bookId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h4>404 NOT FOUND</h4>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}