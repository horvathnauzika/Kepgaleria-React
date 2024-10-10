import React from 'react';

export default function Kartya({kep}){
    return(
        <div className="card">
            <img src={`/kepek/${kep}`} alt="kep"/>
        </div>
    )
}