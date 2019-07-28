import http from "../services/httpservice";
import { apiReviews } from "../config.json";

export function getReviewsByUser(id) {
  return http.get(apiReviews + "/users/" + id);
}

export function getReviewsByTrail(id) {
  return http.get(apiReviews + "/trails/" + id);
}

export function deleteReview(id) {
  return http.delete(apiReviews + "/" + id);
}
