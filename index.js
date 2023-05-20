const express = require("express");
const middleware = require("./middleware");

const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const NewMessage = require("./models/NewMessage");
require("dotenv").config();
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "production") {
  console.log("middleware.enforceHTTPS", middleware.enforceHTTPS);

  app.use(middleware.enforceHTTPS);
  app.use(middleware.redirectToNonWWW);
}
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});
// <<<<<<< HEAD
// console.log("process.env.NODE_ENV", process.env.NODE_ENV);

// =======
// >>>>>>> e52fbe99cf448ebffe120fd435bd6221e2b23402
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
app.all("*", (req, res, next) => {
  if (req.method === "GET") {
    return next();
  }
  res.status(404).json({ error: "unknown endpoint" });
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
