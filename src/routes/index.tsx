import React from "react"
import lazyLoad from "@/routes/utils/lazyLoad"

const routes = [
  {
    path: "/login",
    component: lazyLoad(React.lazy(() => import("@/views/login/index"))),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/home",
    component: lazyLoad(React.lazy(() => import("@/views/home/index"))),
  },
  {
    path: "/todo",
    component: lazyLoad(React.lazy(() => import("@/views/todo/index"))),
    meta: {
      requiresAuth: false
    }
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
    component: lazyLoad(React.lazy(() => import("@/views/error/403")))
  },
  {
    path: "/404",
    component: lazyLoad(React.lazy(() => import("@/views/error/404"))),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/500",
    component: lazyLoad(React.lazy(() => import("@/views/error/500"))),
    meta: {
      requiresAuth: false
    }
  },
]

export default routes;