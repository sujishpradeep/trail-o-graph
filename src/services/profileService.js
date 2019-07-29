import http from "./httpservice";
import { apiUsers } from "../config.json";

export function getProfile(id) {
  return http.get(apiUsers + "/" + id);
}

export function updateProfileBookMarked(id, bookMarked) {
  http.put(`${apiUsers}/${id}`, bookMarked);
}

export function updateProfilePeace(id, peaceMarked) {
  http.put(apiUsers + "/peace/" + id, peaceMarked);
}
