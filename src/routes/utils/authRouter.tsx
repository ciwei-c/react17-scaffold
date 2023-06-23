import { useLocation, Redirect } from "react-router-dom";
import { searchRoute } from "@/utils";
import routes from "@/routes/index";
import { getToken } from "@/utils/auth";

// /**
//  * @description 路由守卫组件
//  * */
const AuthRouter = (props: { children: any }) => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, routes);
	if (route.meta !== undefined && route.meta.requiresAuth === false) return props.children;

	const token = getToken();
	if (!token) return <Redirect to="/login" />;

	return props.children;
};

export default AuthRouter;
