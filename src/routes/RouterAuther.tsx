import { getToken } from "@/utils/auth";
import { ComponentProps, createContext } from "react";

const AuthContext = createContext({})

const AuthRouter = (props: ComponentProps<any>) => {
	const token = getToken();
	const value = {
		isLogin: !!token
	}
	return <AuthContext.Provider value={value}>
		{props.children}
	</AuthContext.Provider>
};

export default AuthRouter;
