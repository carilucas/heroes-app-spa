import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'
import { path } from '../path'

export const DashboardRoutes = (  ) => {
   return (
      <>
         <Navbar />
         <div className="container mt-2">
            <Switch>
               <Route exact path={`${path}/marvel`} component={MarvelScreen}/>
               <Route exact path={`${path}/dc`} component={DcScreen}/>
               <Route exact path={`${path}/search`} component={SearchScreen}/>
               <Route exact path={`${path}/heroe/:heroeId`} component={HeroScreen}/>
               <Redirect to={`${path}/marvel`} />
            </Switch>
         </div>
      </>
   )
}
