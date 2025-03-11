const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");

app.use(
  cors({
    origin: ["http://localhost:3000"],

    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Origin",
      "X-Requested-With",
      "Accept",
      "x-client-key",
      "x-client-token",
      "x-client-secret",
      "Authorization",
    ],
    credentials: true,
  })
);

app.use(express.json());

// api link
const usersRoute = require("./routes/v1/users.route");

// routes
app.use("/api/v1/users", usersRoute);

module.exports = app;
