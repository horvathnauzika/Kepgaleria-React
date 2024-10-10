import React from 'react';
import "../css/Kartya.css";
import Kartya from "./Kartya";

const KEPEK = [
    'virag1.jpg',
    'virag2.jpg',
    'virag3.jpg',
    'virag4.jpg',
    'virag5.jpg',
    'virag6.jpg'
];

export default function Kartyak(){
    return(
        <div className="kartyak">
            {KEPEK.map((kep, index) => (
                <Kartya key={index} kep={kep} />
            ))}
        </div>
    )
}