export default function Nagykartya(props){
    
    return(
        <div className="nagykartya row">
            <button className="bal col-1" onClick={props.elozo}>⇦</button>
            <div className="card col-10">
                <div className="card-body">
                    <h3>{props.obj.cim}</h3>
                    <img src={props.obj.src} alt="kep" className="card-img-top"/>
                </div>            
            </div>
            <button className="jobb col-1" onClick={props.kovetkezo}>⇨</button>
        </div>
    )
}


              