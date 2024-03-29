import http from "./httpservice";
import { apiUsers } from "../config.json";
const jwtDecode = require("jwt-decode");

http.setJwt(getJwt());

export function getUser(id) {
  return http.get(apiUsers + "/" + id);
}

export async function login(user) {
  const { data: jwt } = await http.post(apiUsers + "/auth/", user);
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

export function getJwt() {
  return localStorage.getItem("token");
}

export function updateUserBookMarked(id, bookMarked) {
  http.put(`${apiUsers}/${id}`, bookMarked);
}

export function updateUserPeace(id, peaceMarked) {
  http.put(apiUsers + "/peace/" + id, peaceMarked);
}

export default {
  login,
  logout,
  getCurrentUser,
  getJwt
};
