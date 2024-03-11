import React from "react";


export const Cardimg =(props) => {
    //const {image, name, uid} =props;

return(
    
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )

}