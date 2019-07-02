const trailCards = [
  {
    _id: "A1",
    name: "Skandagiri hills",
    state: "Karnataka",
    height: 2200,
    publishDate: "2018-01-03T19:04:28.809Z",
    coverPhoto: "/images/skandagiri.jpeg",
    coverPhotoUploader: "Sujish",
    peaceCount: 214
  },

  {
    _id: "A2",
    name: "Thekkadi trek",
    state: "Kerala",
    height: 4350,
    publishDate: "2018-01-03T19:04:28.809Z",
    coverPhoto: "/images/thekkadi.jpeg",
    coverPhotoUploader: "Amrutha",
    peaceCount: 315
  },

  {
    _id: "A3",
    name: "Ziro",
    state: "Arunachal",
    height: 5500,
    publishDate: "2018-01-03T19:04:28.809Z",
    coverPhoto: "/images/ziro.jpeg",
    coverPhotoUploader: "Kiran",
    peaceCount: 450
  },

  {
    _id: "A4",
    name: "Kodaikanal",
    state: "Tamil Nadu",
    height: 7700,
    publishDate: "2018-01-03T19:04:28.809Z",
    coverPhoto: "/images/kodai.jpeg",
    coverPhotoUploader: "Raihan",
    peaceCount: 157
  }
];

export function getTrails() {
  return trailCards;
}

export function getTrailById(id) {
  return trailCards.find(t => t._id === id);
}

export function saveTrails(trailCard) {
  let trailInDb = trailCards.find(t => t._id === trailCard._id) || {};
  trailInDb = trailCard;

  if (!trailInDb._id) {
    trailInDb._id = Date.now().toString();
    trailCards.push(trailInDb);
  }

  return trailInDb;
}

export function updatePeace(id, counter) {
  const index = trailCards.findIndex(t => t._id === id);

  trailCards[index].peaceMakers += counter;

  return trailCards[index];
}

// export function deleteMovie(id) {
//   let movieInDb = movies.find(m => m._id === id);
//   movies.splice(movies.indexOf(movieInDb), 1);
//   return movieInDb;
// }
