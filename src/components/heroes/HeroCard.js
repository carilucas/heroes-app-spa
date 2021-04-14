import React from 'react'
import { Link } from 'react-router-dom'


export const HeroCard = ( {
   id,
   superhero,
   alter_ego,
   first_appearance,
   characters,
   query
} ) => {
   
   return (
      <div className="col-12 col-md-4">
         <div className="card mb-5" >
            <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero} />
            <div className="card-body">
               <h5 className="card-title">{superhero}</h5>
               <p className="card-text">{alter_ego}</p>
               {
                  (alter_ego !== characters)
                     && <p className="card-text">{characters}</p>
               }
               <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
               </p>
               {
                  ( !query )
                  ? <Link to={`heroe/${id}`} className="btn btn-primary">More info</Link>
                  : <Link to={`heroe/${id}/?q=${query}`} className="btn btn-primary">More info</Link>
               }
               
            </div>
         </div>
      </div>
   )
}
