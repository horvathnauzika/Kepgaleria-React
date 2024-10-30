import './App.css';
import { kepekLista } from './kepek';
import Jatekter from './components/Jatekter';
import Nagykartya from './components/Nagykartya';
import { useState } from 'react';


function App() {

  const [kivalasztott, setkivalasztott]=useState(0);

  const kovetkezoKep = () => {
    setkivalasztott((elozoKep) => {
        if (elozoKep + 1 < kepekLista.length) {
            return elozoKep + 1;
        } else {
            return 0; // végén visszaáll az első képre
        }
    });
};

  const elozoKep = () => {
    setkivalasztott((elozoKep) => {
        if (elozoKep === 0) {
            return kepekLista.length - 1;
        } else {
            return elozoKep - 1;
        }
    });
};


  return (
    <div className="App">
      <body>
        <main className='container'>
          <header className="App-header">
            <h1>Képgaléria</h1>
          </header>
          <article className='row'>
            <Nagykartya obj={kepekLista[kivalasztott]} kovetkezo={kovetkezoKep} elozo={elozoKep}/>
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
