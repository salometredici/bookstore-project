import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import HomeCarousel from './components/HomeCarousel/HomeCarousel'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeCarousel />
      <ItemListContainer greeting={'Welcome'} />
    </div>
  );
}

export default App;
