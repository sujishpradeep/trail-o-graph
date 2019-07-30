import http from "./httpservice";
import { apiProfiles } from "../config.json";

export function getProfile(id) {
  return http.get(apiProfiles + "/" + id);
}

export function updateProfileBookMarked(id, bookMarked) {
  http.put(`${apiProfiles}/${id}`, bookMarked);
}

export function updateProfilePeace(id, peaceMarked) {
  http.put(apiProfiles + "/peace/" + id, peaceMarked);
}
