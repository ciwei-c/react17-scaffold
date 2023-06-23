import jsCookies from "js-cookie";

const USER_TOKEN = "Authrization";

export const getToken = (): string => {
  return jsCookies.get(USER_TOKEN) || '';
}

export const setToken = (token: string) => {
  jsCookies.set(USER_TOKEN, token);
}