import http from "./httpservice";
import { apiProfiles } from "../config.json";

export function getProfile(id) {
  return http.get(apiProfiles + "/" + id);
}
