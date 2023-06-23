import React, { Suspense } from "react";
import { Spin } from "antd";

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyLoad = (Comp: React.LazyExoticComponent<any>): Function => {
	return (props: any) => {
		return (
			<Suspense
				fallback={
					<Spin
						size="large"
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							height: "100%"
						}}
					/>
				}
			>
				<Comp {...props} />
			</Suspense>
		);
	}
};

export default lazyLoad;
