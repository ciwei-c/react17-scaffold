import { Route } from "react-router-dom";

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.children} />
      )}
    />
  );
}

export default RouteWithSubRoutes;