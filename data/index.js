const commentData = require("./comments");
const profileData = require("./profile");

module.exports = {
  comments: commentData,
  profile: profileData,
  posts: require("./posts.js"),
  individualUniversity: require("./individualUniversity.js"),
};
