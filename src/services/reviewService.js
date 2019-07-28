import http from "../services/httpservice";
import config from "../config.json";

export function getReviewsByUser(id) {
  return http.get(config.apiReviews + "/users/" + id);
}

export function deleteReview(id) {
  return http.delete(config.apiReviews + "/" + reviewId);
}
