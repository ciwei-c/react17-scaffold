import React from 'react';
import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom"
import routes from '@/routes';
import RouteWithSubRoutes from '@/components/RouteWithSubRoutes';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
