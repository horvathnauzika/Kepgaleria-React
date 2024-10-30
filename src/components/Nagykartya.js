import { useContext } from "react"
import { KepContext } from '../context/Context';
import { kepekLista } from '../kepek';

export default function Nagykartya(){
    
    const{kivalasztott, kovetkezoKep, elozoKep} = useContext(KepContext);

    return(
        <div className="nagykartya row">
            <button className="bal col-1" onClick={elozoKep}>⇦</button>
            <div className="card col-10">
                <div className="card-body">
                    <h3>{kepekLista[kivalasztott].cim}</h3>
                    <img src={kepekLista[kivalasztott].src} alt="kep" className="card-img-top"/>
                </div>            
            </div>
            <button className="jobb col-1" onClick={kovetkezoKep}>⇨</button>
        </div>
    )
}
