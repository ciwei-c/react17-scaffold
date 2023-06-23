import React from "react"
import lazyLoad from "@/routes/utils/lazyLoad"
import { Redirect } from "react-router-dom";

const routes = [
  // {
  //   path: "/",
  //   component: <Redirect to="/home" />,
  // },
  {
    path: "/home",
    component: lazyLoad(React.lazy(() => import("@/views/home/index"))),
  },
  {
    path: "/about",
    component: lazyLoad(React.lazy(() => import("@/views/about/index"))),
    children: [
      {
        path: "/about/subabout1",
        component: lazyLoad(React.lazy(() => import("@/views/about/children/index"))),
      }
    ]
  }, {
    path: "/403",
    component: lazyLoad(React.lazy(() => import("@/views/error/403"))),
    meta: {
      title: "403页面",
      key: "403"
    }
  },
  {
    path: "/404",
    component: lazyLoad(React.lazy(() => import("@/views/error/404"))),
    meta: {
      requiresAuth: false,
      title: "404页面",
      key: "404"
    }
  },
  {
    path: "/500",
    component: lazyLoad(React.lazy(() => import("@/views/error/500"))),
    meta: {
      requiresAuth: false,
      title: "500页面",
      key: "500"
    }
  },
]

export default routes;