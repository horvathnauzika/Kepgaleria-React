import React from 'react';

export default function Kartya(props){

    return(
            <div className='card col-lg-3 col-md-4 col-sm-6'>
                <div className="card-body">
                    <img src={props.obj.src} alt="kep" className='card-img-top'/>
                </div>
            </div>
    )
}