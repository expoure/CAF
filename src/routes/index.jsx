import React from 'react'

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { PrivateRoute } from './modules/PrivateRoute'
import { useAuth } from '../contexts/auth.context'
import { routesTypes } from '../resources/routesTypes'
import { LoginPage } from '../pages/LoginPage'
import { ListReportsPage } from '../pages/ListReportsPage'
import { ListExecutionsPage } from '../pages/ListExecutionsPage'
import { HomePage } from '../pages/HomePage'

const Routes = () => {
  const { token } = useAuth()
  return (
    <HashRouter>
      <Switch>
        {!token && (
          <Route path={routesTypes.LOGIN} component={LoginPage} />
        )}
        
        <PrivateRoute
          path={routesTypes.HOME}
          component={props => <HomePage {...props}/>}
        />

        <PrivateRoute
          exact path={routesTypes.REPORTS}
          component={props => <ListReportsPage {...props}/>}
        />

        <PrivateRoute
          exact path={routesTypes.EXECUTIONS}
          component={props => <ListExecutionsPage {...props}/>}
        />

        <Redirect
          from="/"
          to={token ? routesTypes.REPORTS : routesTypes.LOGIN}
        />
      </Switch>
    </HashRouter>
  )
}

export { Routes }