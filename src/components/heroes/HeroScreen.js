import React, { useMemo } from 'react'
import { Redirect, useLocation, useParams } from 'react-router'
import { path } from '../../path';
import { getHeroById } from '../../selectors/getHerosById';
import queryString from 'query-string';
export const HeroScreen = ({ history }) => {
   
   const location = useLocation();
   const {q} = queryString.parse(location.search);

   const {heroeId} = useParams();
   const heroe = useMemo(() => getHeroById(heroeId), [heroeId]);
   // const heroe = getHeroById(heroeId);

   if (!heroe) {
      return <Redirect to={ path } />
   }

   const {superhero,publisher, alter_ego, first_appearance, characters} = heroe;

   const handleReturn = ()=>{
      if (q) {
         history.push(`/search?q=${q}`);
      } else {
         if (heroe.publisher === 'DC Comics') {
            history.push(`${path}/dc`);
         }else if(heroe.publisher === 'Marvel Comics'){
            history.push(`${path}/marvel`)
         }
      }
   }

   
   return (
      
      <div className="row mt-5">
         <div className="col-4">
            {
               (!q)
               ?<img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} className="img-fluid" />
               :<img src={`http://127.0.0.1:3000/assets/heroes/${heroeId}.jpg`} alt={superhero} className="img-fluid" />
            }
            
         </div>
         <div className="col-8">
            <h3>{superhero}</h3>
            <ul className="list-group list-group-flush">
               <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
               <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
               <li className="list-group-item"><b>First Appearance:</b> {first_appearance}</li>
               <li className="list-group-item"><b>Characters:</b> {characters}</li>               
            </ul>
            <button 
               className="btn btn-outline-info"
               onClick={handleReturn}
            >
               Return
            </button>
         </div>
      </div>
   )
}
