
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListCointainer from './components/ItemListCointainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListCointainer  greeting={'Bienvenidos'}/>
     
    </div>
  );
}

export default App;
