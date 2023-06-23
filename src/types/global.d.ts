import type { RouteObject } from "react-router-dom";
import History from "@types/history/index.d.ts";

interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title?: string;
	key?: string;
}

declare type CustomRouteObject = RouteObject & {
	meta?: MetaProps;
};

interface ReactProps {
	[prop: string]: any
}

declare type ReactPropsWithHistory = ReactProps & {
	history: any
}