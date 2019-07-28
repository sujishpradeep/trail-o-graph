import http from "../services/httpservice";
import { apiUsers } from "../config.json";

export function getUser(id) {
  return http.get(apiUsers + "/" + id);
}

export function updateUserBookMarked(id, bookMarked) {
  http.put(`${apiUsers}/${id}`, bookMarked);
}

export function updateUserPeace(id, peaceMarked) {
  http.put(apiUsers + "/peace/" + id, peaceMarked);
}
