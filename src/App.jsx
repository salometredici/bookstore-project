import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Welcome'} />
      <Home />
    </div>
  );
}

export default App;
