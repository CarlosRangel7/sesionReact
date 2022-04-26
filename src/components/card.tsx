import React from "react";

const Card = (props: any) => {
    return (
            <div className="card mb-5" style={{ width: "18rem" }}>
                <img src={props.image.url} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <ul className="card-text">
                        <li><span>Temperament:</span> {props.temperament}</li>
                        <li><span>Life span:</span> {props.life_span}</li>
                        {props.origin ? <li><span>From:</span> {props.origin}</li> : null}
                        {props.bred_for ? <li><span>Bred for:</span> {props.bred_for}</li> : null}
                    </ul>
                </div>
            </div>
    );
}

export default Card