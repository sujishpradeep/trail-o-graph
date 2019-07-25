const reviewInfoDb = [
  {
    _id: "R1",
    user_id: "P1",
    user_name: "Sujish Pradeep",
    trail_id: "A1",
    trail_name: "Skandagiri Hills",
    trail_state: "Karnataka",
    trail_height: "2200",
    content:
      "First review of Amazing place to visit with family. The place is kids friendly, although one cannot take pets along. "
  },

  {
    _id: "R2",
    user_id: "P2",
    user_name: "Amrutha Muraleedharan",
    trail_id: "A1",
    trail_name: "Skandagiri Hills",
    trail_state: "Karnataka",
    trail_height: "2200",
    content:
      "Second review of Amazing place to visit with family. The place is kids friendly, although one cannot take pets along. "
  },
  {
    _id: "R3",
    user_id: "P1",
    user_name: "Sujish Pradeep",
    trail_id: "A4",
    trail_name: "Kodaikanal",
    trail_state: "Tamil Nadu",
    trail_height: "7700",

    content:
      "Third review of Amazing place to visit with family. The place is kids friendly, although one cannot take pets along. "
  }
];

export function getReviewByTrail(id) {
  return reviewInfoDb.filter(r => r.trail_id === id) || {};
}

export function getReviewByUser(id) {
  return reviewInfoDb.filter(r => r.user_id === id) || {};
}
