const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const NewMessage = require("./models/NewMessage");
require("dotenv").config();
const middleware = require("./middleware");
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});
// console.log("hi");
console.log("NODE_ENV:", process.env.NODE_ENV);
const enforceHTTPS = (req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(["https://", req.get("Host"), req.url].join(""));
  }
  next();
};
const redirectToNonWWW = (req, res, next) => {
  if (req.headers.host.slice(0, 4) === "www.") {
    const nonWWWHost = req.headers.host.slice(4);
    console.log("Redirecting to non-www:", nonWWWHost, req.url); // Debug log

    return res.redirect(["https://", nonWWWHost, req.url].join(""));
  }
  next();
};

if (process.env.NODE_ENV === "production") {
  app.use(enforceHTTPS);
  app.use(redirectToNonWWW);
}

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  const newMessage = new NewMessage({
    name,
    email,
    subject,
    message,
  });
  console.log("newMessage", newMessage);
  try {
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Catch-all route for all other requests
app.all("*", (req, res, next) => {
  if (req.method === "GET") {
    return next(); // Proceed to the app.get("*", ...) route
  }
  res.status(404).json({ error: "unknown endpoint" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
