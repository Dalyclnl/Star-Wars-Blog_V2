import React, { useState, useEffect} from "react";
import { Specie } from "../component/Specie";

export const Species = ()=>{
    const [species, setSpecies] = useState([])

    useEffect(()=>{
        fetch('https://www.swapi.tech/api/species/')
        .then(res => res.json())
        .then(data =>console.log(data))
            setSpecies(response.results)
        })
    , []        
        

    return (
       <div className="container">
           <div className="row">
            {
            species.map((species ,index)=>{
                return <div key={index} className="col-12 col-md-4">
                    <Specie image=//{`https://starwars-visualguide.com/assets/img/characters/${/species/}.jpg`}
                     //name={species.name}
                    ""/>
                 </div>
            
             })  }
           </div> 
        </div>
    );
}  