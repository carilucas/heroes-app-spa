import React, { useContext } from 'react'
import {
   BrowserRouter as Router,
   Switch,
   // Route
 } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { path } from '../path';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
   const {user} = useContext(AuthContext);
   
   return (
      <Router>
         <div>
            <Switch>
               <PublicRoute 
                  exact 
                  path={`${path}/login`} 
                  component={LoginScreen}
                  isAuthenticated={user.logged}
               />
               <PrivateRoute  
                  isAuthenticated={user.logged}
                  path={ path } 
                  component={DashboardRoutes}
               />
            </Switch>
         </div>
      </Router>
   )
}
