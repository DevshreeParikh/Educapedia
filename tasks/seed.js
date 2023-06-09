const mongoConnection = require("../config/mongoConnection");
const mongoCollections = require("../config/mongoCollections");
const universitiesMongo = mongoCollections.universities;
const commentsMongo = mongoCollections.comments;
const postsMongo = mongoCollections.posts;
const profilesMongo = mongoCollections.profiles;
const fs = require("fs");
const bcrypt = require("bcrypt");

async function main() {
  const db = await mongoConnection.connectToDb();
  await db.dropDatabase();
  let rawData;

  rawData = fs.readFileSync("./json/universitiesCollection.json");
  const { universities } = JSON.parse(rawData);

  rawData = fs.readFileSync("./json/postsCollection.json");
  const { posts } = JSON.parse(rawData);

  rawData = fs.readFileSync("./json/commentsCollection.json");
  const { comments } = JSON.parse(rawData);

  rawData = fs.readFileSync("./json/profilesCollection.json");
  const { profiles } = JSON.parse(rawData);
  const profilesCollection = await profilesMongo();
  const profilesInsertInfo = await profilesCollection.insertMany(profiles);

  comments[0].userId = profilesInsertInfo.insertedIds['0'];
  comments[1].userId = profilesInsertInfo.insertedIds['1'];
  comments[2].userId = profilesInsertInfo.insertedIds['2'];
  comments[3].userId = profilesInsertInfo.insertedIds['3'];
  comments[4].userId = profilesInsertInfo.insertedIds['4'];
  comments[5].userId = profilesInsertInfo.insertedIds['0'];
  comments[6].userId = profilesInsertInfo.insertedIds['1'];
  comments[7].userId = profilesInsertInfo.insertedIds['2'];
  comments[8].userId = profilesInsertInfo.insertedIds['0'];
  comments[9].userId = profilesInsertInfo.insertedIds['1'];
  comments[10].userId = profilesInsertInfo.insertedIds['1'];
  comments[11].userId = profilesInsertInfo.insertedIds['2'];


  const commentsCollection = await commentsMongo();
  const commentsInsertInfo = await commentsCollection.insertMany(comments); //comment collecn completed

  universities[30].comments.push(commentsInsertInfo.insertedIds['4']);
  universities[21].comments.push(commentsInsertInfo.insertedIds['5']);
  universities[21].comments.push(commentsInsertInfo.insertedIds['6']);
  universities[33].comments.push(commentsInsertInfo.insertedIds['7']);

  universities[1].rating.push({ "userId": profilesInsertInfo.insertedIds['0'], "givenRating": 4 });
  universities[1].rating.push({ "userId": profilesInsertInfo.insertedIds['2'], "givenRating": 4 });
  universities[1].overallRating = 4; //average of the three ratings calculated manually
  universities[2].rating.push({ "userId": profilesInsertInfo.insertedIds['3'], "givenRating": 5 });
  universities[2].rating.push({ "userId": profilesInsertInfo.insertedIds['4'], "givenRating": 5 });
  universities[2].rating.push({ "userId": profilesInsertInfo.insertedIds['1'], "givenRating": 5 });
  universities[2].overallRating = 5;

  const universitiesCollection = await universitiesMongo();
  const uniInsertInfo = await universitiesCollection.insertMany(universities); //university collln completed

  posts[0].userId = profilesInsertInfo.insertedIds['0'];
  posts[1].userId = profilesInsertInfo.insertedIds['1'];
  posts[2].userId = profilesInsertInfo.insertedIds['2'];
  posts[3].userId = profilesInsertInfo.insertedIds['3'];
  posts[4].userId = profilesInsertInfo.insertedIds['4'];

  posts[0].comments.push(commentsInsertInfo.insertedIds['0']);
  posts[1].comments.push(commentsInsertInfo.insertedIds['2']);
  posts[3].comments.push(commentsInsertInfo.insertedIds['1']);
  posts[4].comments.push(commentsInsertInfo.insertedIds['3']);
  posts[2].comments.push(commentsInsertInfo.insertedIds['9']);
  posts[4].comments.push(commentsInsertInfo.insertedIds['10']);
  posts[1].comments.push(commentsInsertInfo.insertedIds['11']);
  posts[3].comments.push(commentsInsertInfo.insertedIds['8']);

  posts[0].likes.push(profilesInsertInfo.insertedIds['2']);
  posts[1].likes.push(profilesInsertInfo.insertedIds['1']);
  posts[1].likes.push(profilesInsertInfo.insertedIds['2']);
  posts[2].likes.push(profilesInsertInfo.insertedIds['3']);
  posts[3].likes.push(profilesInsertInfo.insertedIds['0']);
  posts[3].likes.push(profilesInsertInfo.insertedIds['1']);
  posts[3].likes.push(profilesInsertInfo.insertedIds['2']);
  posts[4].likes.push(profilesInsertInfo.insertedIds['3']);
  posts[4].likes.push(profilesInsertInfo.insertedIds['2']);

  const postsCollection = await postsMongo();
  const postsInsertInfo = await postsCollection.insertMany(posts); //post colln completed

  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['0'] }, { $push: { favouriteUniversities: "The University of Texas at Dallas" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['0'] }, { $push: { favouriteUniversities: "Stevens Institute of Technology" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['0'] }, { $push: { favouriteUniversities: "Rutgers, The State University of New Jersey" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['0'] }, { $push: { favouriteUniversities: "Montclair State University" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['0'] }, { $push: { favouriteUniversities: "University of Southern California" } });

  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['1'] }, { $push: { favouriteUniversities: "Rutgers, The State University of New Jersey" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['1'] }, { $push: { favouriteUniversities: "University of California, Santa Barbara" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['1'] }, { $push: { favouriteUniversities: "Massachusetts Institute of Technology" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['2'] }, { $push: { favouriteUniversities: "Fairleigh Dickinson University" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['2'] }, { $push: { favouriteUniversities: "University of Southern California" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['2'] }, { $push: { favouriteUniversities: "Seton Hall University" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['2'] }, { $push: { favouriteUniversities: "New Jersey Institute of Technology" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['2'] }, { $push: { favouriteUniversities: "University at Albany" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['3'] }, { $push: { favouriteUniversities: "Rutgers, The State University of New Jersey" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['3'] }, { $push: { favouriteUniversities: "Boston University" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['4'] }, { $push: { favouriteUniversities: "University of Southern California" } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['4'] }, { $push: { favouriteUniversities: "University of California, Santa Barbara" } });

  let hash = await bcrypt.hash('Group5@123', 16);

  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['0'] }, { $set: { hashedPassword: hash } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['1'] }, { $set: { hashedPassword: hash } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['2'] }, { $set: { hashedPassword: hash } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['3'] }, { $set: { hashedPassword: hash } });
  await profilesCollection.updateOne({ _id: profilesInsertInfo.insertedIds['4'] }, { $set: { hashedPassword: hash } });
  console.log("Db seeded successfully")
  await mongoConnection.closeConnection();
}


main();
