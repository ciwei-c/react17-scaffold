import useRouterAuth from "@/hooks/useRouterAuth";
import { CustomRouteObject } from "@/types/global";
import { Redirect, Route } from "react-router-dom";

function RouteWithSubRoutes(route: CustomRouteObject) {
  const { next } = useRouterAuth(route)
  return (
    next ? <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.children} />
      )
      }
    /> : <Redirect to="/login"></Redirect>
  );
}

export default RouteWithSubRoutes;