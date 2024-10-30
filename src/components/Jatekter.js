import React from 'react';
import Kartya from "./Kartya";


export default function Jatekter(props){
    return(
        <div className="jatekter row">
            {props.lista.map((elem, index) => (
                <Kartya obj={elem} key={index} />
            ))}
        </div>
    )
}