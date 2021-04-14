import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import queryString from 'query-string'
import { getHeroByName } from '../../selectors/getHeroByName';
// import { heroes } from '../../data/heroes';

export const SearchScreen = ( { history } ) => {
   
   
   const location = useLocation();
   const {q=''} = queryString.parse(location.search);
   
   const [inputValues, handleInputChange] = useForm({
      searchText:q,
   })
   const { searchText } = inputValues;
   
   const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

   

   const [errors, setErrors] = useState({
      errorSearch:''
   });
   const{ errorSearch } = errors;


   const handleSubmit = (e)=>{
      e.preventDefault();

      if (!searchText) {
       setErrors({
          ...errors,
          errorSearch: 'Enter a hero name'
       })
      }else{
         setErrors({
            ...errors,
            errorSearch:''
         })
      }
      history.push(`?q=${searchText}`);
   }
   
   
   return (
      <div className="row">
         <h1>Search Screen</h1>
         <hr/>
         <div className="col-5">
            <form onSubmit={ handleSubmit }>
               <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Search form</label>
                  <input 
                     type="text" 
                     name="searchText"
                     className="form-control" 
                     autoComplete="off"  
                     onChange={handleInputChange} 
                     value={ searchText }
                  />
               </div>
               {
                  errorSearch !== ''
                     && 
                     <div className="alert alert-danger" role="alert">
                        {errorSearch}
                     </div>
               }
               <button type="submit" className="btn btn-primary">Search...</button>
            </form>
         </div>
         <div className="col-7">
            <h4>Results</h4>
            {
               (q==='')
               &&
               <div className="alert alert-info">Enter a hero term</div>
            }
            {
               (q !== '' && heroesFiltered.length === 0)
               &&
               <div className="alert alert-danger">
                  There is no a hero with {q} name.
               </div>
            }
            {
               heroesFiltered.map(heroes=>(
                  <HeroCard 
                     key={heroes.id}
                     {...heroes}
                     query={q}
                  />
               ))
            }
         </div>
      </div>
   )
}
