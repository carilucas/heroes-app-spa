import React, {  useMemo, useState } from 'react'
import { getHerosByPublisher } from '../../selectors/getHerosByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

   const sortHero = (a,b)=>{
      if (a.superhero < b.superhero) {
         return -1
      }
      if(a.superhero > b.superhero){
         return 1
      }
      return 0
   }
   
   const [sortHeroes, setSortHeroes] = useState({
      heroes:useMemo(() => getHerosByPublisher( publisher ), [publisher])
   })
   
   
   const {heroes} = sortHeroes;
   
   const handleSort = ()=>{  
      setSortHeroes({
         ...heroes,
         heroes: getHerosByPublisher( publisher ).sort(sortHero)
      })
      
   }

   
   // const heroes = getHerosByPublisher( publisher );

   return (
      <>
         <button 
            className="btn btn-success  btn-sm mb-3" 
            onClick={handleSort}
         >
            Sort by name
         </button>
         <div className="row animate__animated animate__fadeIn">
            {
               heroes.map( hero => (
                  <HeroCard 
                  key={hero.id}
                  {...hero}
                  />
               ))
            }
         </div>
      </>
   )
}
