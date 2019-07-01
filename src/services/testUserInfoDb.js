const userInfoDb = [
  {
    _id: "P1",
    name: "Sujish",
    trailsPeaced: ["A1", "A3"]
  },

  {
    _id: "P2",
    name: "Amrutha",
    trailPeaced: ["A3", "A4"]
  }
];

export function getUserInfoById(id) {
  return userInfoDb.find(t => t._id === id);
}

export function getUserPeaceState(id) {
  let userProfile = userInfoDb.find(u => u._id === id) || {};
  return userProfile.trailsPeaced;
}
