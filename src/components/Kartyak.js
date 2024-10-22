import React from 'react';
import "../css/Kartya.css";
import Kartya from "./Kartya";


export default function Kartyak(props){
    return(
        <div className="kartyak">
            {props.lista.map((elem, index) => (
                <Kartya obj={elem} key={index} />
            ))}
        </div>
    )
}