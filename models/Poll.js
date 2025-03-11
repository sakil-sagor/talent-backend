const mongoose = require("mongoose");

const pollSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  options: [
    {
      text: { type: String, required: true },
      votes: { type: Number, default: 0 },
    },
  ],
  expiryTime: {
    type: Date,
    required: true,
  },
  allowMultipleVotes: {
    type: Boolean,
    default: false,
  },
  showResultsAfterVoting: {
    type: Boolean,
    default: true,
  },
  reactions: {
    likes: { type: Number, default: 0 },
    trending: { type: Number, default: 0 },
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "86400s",
  },
});

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;
