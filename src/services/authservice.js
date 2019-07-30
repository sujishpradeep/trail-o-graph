import http from "./httpservice";
import { apiUsers } from "../config.json";
const jwtDecode = require("jwt-decode");

export async function login(user) {
  const { data: jwt } = await http.post(apiUsers + "/auth/", user);
  console.log("jwt", jwt);
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export async function signUp(user) {
  const response = await http.post(apiUsers, user);
  localStorage.setItem("token", response.headers["x-auth-token"]);
  window.location = "/";
}

export default {
  login,
  logout,
  getCurrentUser
};
