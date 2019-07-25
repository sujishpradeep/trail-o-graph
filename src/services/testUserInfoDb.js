const userInfoDb = [
  {
    _id: "P1",
    name: "Sujish Pradeep",
    peaceMarked: ["A1", "A3"],
    bookMarked: ["A2", "A4"],
    place: "Kerala",
    bio: "Passionate about travel, food"
  },

  {
    _id: "P2",
    name: "Amrutha Muraleedharan",
    peaceMarked: ["A3", "A4"],
    bookMarked: ["A3", "A4"],
    place: "Sydney",
    bio: "Passionate about art, cooking"
  }
];

export function getUserInfoById(id) {
  return userInfoDb.find(t => t._id === id);
}
