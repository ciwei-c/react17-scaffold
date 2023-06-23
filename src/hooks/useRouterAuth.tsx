import { CustomRouteObject } from "@/types/global";
import { getToken } from "@/utils/auth";
import { useLocation } from "react-router-dom";
import type H from 'history';

interface IResult {
  next: boolean,
  location: H.Location
}
export default function (route: CustomRouteObject): IResult {
  const location = useLocation()
  const token = getToken()
  const meta = route.meta || {};
  let data: IResult = {
    next: true,
    location
  }
  if (!token && meta.requiresAuth !== false) {
    data.next = false;
  }
  return data
}