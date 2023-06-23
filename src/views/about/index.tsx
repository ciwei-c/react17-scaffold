import RouteWithSubRoutes from "@/components/RouteWithSubRoutes"
import { useState } from "react"
import { Link, Switch } from "react-router-dom"
export default function About(props: any) {
  const [state, setState] = useState('about')

  console.log(props.routes)
  return <div>
    page-{state}
    <li>
      <Link to="/about/subabout1">about-child</Link>
    </li>
    <Switch>
      {props.routes.map((route: any, i: any) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  </div>
}