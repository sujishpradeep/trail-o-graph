const userInfoDb = [
  {
    _id: "P1",
    name: "Sujish",
    peaceMarked: ["A1", "A3"],
    bookMarked: ["A1", "A2"]
  },

  {
    _id: "P2",
    name: "Amrutha",
    peaceMarked: ["A3", "A4"],
    bookMarked: ["A3", "A4"]
  }
];

export function getUserInfoById(id) {
  return userInfoDb.find(t => t._id === id);
}
