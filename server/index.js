const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const port = process.env.PORT || 4000;
const index = require("./app/routes/index");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log("db connected"))
  .catch(e => {
    console.log("Error, exiting", e);
    process.exit();
  });

const app = express();
app.use(index);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routes/questions.routes.js")(app);
require("./app/routes/answers.routes.js")(app);

const server = http.createServer(app);

const io = socketIo(server); // initialiseer socket

io.on("connection", socket => {
  console.log(`socket id`, socket.id);

  // Join a custom room created by the admin
  socket.on("join", room => {
    socket.join(room);
    console.log("room: " + room + " joined by:" + socket.id);

    // Vraag doorsturen
    socket.on("question", ({ question, room }) => {
      console.log(`question emit`, room);
      io.to(room).emit("question", question);
    });
    // Antwoord doorsturen
    socket.on("answer", msg => {
      console.log(`answer emit`);
      io.emit("answer", msg);
    });
    // Projectie clearen
    socket.on("clear", msg => {
      console.log(`clear emit`);
      io.emit("clear", msg);
    });
  });
  // User connected
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
