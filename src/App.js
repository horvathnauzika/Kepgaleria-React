import './App.css';
import Jatekter from './components/Jatekter';
import Nagykartya from './components/Nagykartya';
import { kepekLista } from './kepek'; 

function App() {

  return (
    <div className="App">
      <body>
        <main className='container'>
          <header className="App-header">
            <h1>Képgaléria</h1>
          </header>
          <article className='row'>
            <Nagykartya/>
          </article>
          <article>
            <Jatekter lista={kepekLista}/>
          </article>
          <footer>
            <p>Horváth Nauzika</p>
          </footer>
        </main>
      </body>
    </div>
  );
}

export default App;
