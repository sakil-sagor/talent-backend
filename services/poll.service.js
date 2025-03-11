const Poll = require("../models/Poll");

exports.createPollDB = async (details) => {
  const action = await Poll.create(details);
  return action;
};
