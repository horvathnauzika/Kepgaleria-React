import './App.css';
import { kepekLista } from './kepek';
import Jatekter from './components/Jatekter';
import Nagykartya from './components/Nagykartya';


function App() {
  return (
    <div className="App">
      <body>
        <main className='container'>
          <header className="App-header">
            <h1>Képgaléria</h1>
          </header>
          <article className='row'>
            <Nagykartya obj={kepekLista[0]}/>
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
