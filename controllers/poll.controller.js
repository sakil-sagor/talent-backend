const { createPollDB } = require("../services/poll.service");

exports.createPoll = async (req, res) => {
  try {
    const result = await createPollDB(req.body);
    res.status(200).json({
      status: "success",
      message: "Successfully Create ",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getPoll = async (req, res) => {};
