import logo from './logo.svg';
import './App.css';
import Kartyak from './components/Kartyak';
import { kepekLista } from './kepek';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <main>
        <article>
          <Kartyak lista={kepekLista}/>
        </article>
        <footer><p>Horváth Nauzika</p></footer>
      </main>
    </div>
  );
}

export default App;
