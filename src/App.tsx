import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom"
import routes from '@/routes';
import RouteWithSubRoutes from '@/components/RouteWithSubRoutes';
import store from "@/store";
import { observer } from "mobx-react"

const App = () => {
  return (
    <HashRouter>
      <div>
        <ul>
          用户：{store.user.userInfo.name}
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

export default observer(App)