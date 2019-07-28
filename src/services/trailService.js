import http from "../services/httpservice";
import { apiTrails } from "../config.json";

export function getTrails() {
  return http.get(apiTrails);
}

export function getTrail(id) {
  return http.get(apiTrails + "/" + id);
}

export function postTrails(trailCard) {
  http.post(apiTrails, trailCard);
}

export function updateTrailPeace(id, counter) {
  http.put(apiTrails + "/peace/" + id, {
    counter: counter
  });
}
