import React from 'react';

export default function Kartya(props){

    return(
        <div className="card">
            <img src={props.obj.src} alt="kep"/>
        </div>
    )
}