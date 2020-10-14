/**
 * Author: Sanjay Kumar (Sanjay2028@gmail.com)
 * Date Created: 10-13-2020
 * Purpose: Defines the default layout of the application
 */


import React, {Fragment}  from 'react';
import {BodyContent, Breadcrumbs, AppFooter, AppHeader} from '../common';
import {Switch, Route} from 'react-router-dom';
import routes from '../../routes';
export default (props) => {
  return (
    <Fragment>
    <AppHeader />
        <Breadcrumbs />
        <BodyContent>
        <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )} />
                ) : (null);
              })}
            </Switch>
        </BodyContent>
        <AppFooter />
    </Fragment>
  )

}


    