import http from "../services/httpservice";
import config from "../config.json";

export function getUser(id) {
  return http.get(config.apiUsers + "/" + id);
}
