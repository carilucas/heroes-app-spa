import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { path } from '../../path';
import { types } from '../../types/types';

const { logout } = types;

export const Navbar = (  ) => {
    const {user:{name}, dispatch} = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = ()=>{
        dispatch({
            type: logout,
        });
        history.replace('/login');
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4">
            
            <Link 
                className="navbar-brand" 
                to={ path }
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse justify-content-start">
                <div className="navbar-nav ">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={`${ path }/marvel`}
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={`${ path }/dc`}
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to={`${ path }/search`}
                    >
                        Search
                    </NavLink>
                </div>
            </div>
            <div className="navbar-collapse justify-content-end">
                <div className="navbar-nav ">
                    <span className="nav-item nav-link text-info">{name}</span>
                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </div>
            </div>

           
        </nav>
    )
}