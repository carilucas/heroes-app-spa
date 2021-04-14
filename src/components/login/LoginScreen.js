import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { path } from '../../path'
import { types } from '../../types/types';

const { login } = types;

export const LoginScreen = ({ history }) => {

   const { dispatch } = useContext(AuthContext);

   const lastPath = localStorage.getItem('lastPath') || '/marvel';

   const handleLogin= ()=>{
      dispatch({
         type: login,
         payload:{
            name: 'Carlos'
         }
      })
      
      history.push(`${path}${lastPath}`)
   }
   return (
      <div className="container mt-5">
         <h1>Login Screen</h1>
         <hr/>
         <button
            className="btn btn-primary"
            onClick={handleLogin}
         >
            Login
         </button>
      </div>
   )
}
