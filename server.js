const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const con = require("./db.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//save message in database
app.post("/public-chat", (req, res) => {
  const params = req.body;
  con.query("insert into publicchat SET ?", params, (err, rows, fields) => {
    if (!err) {
      // console.log(rows);
      res.send(`chat message sent from : ${params.userId} successfully`);
    } else {
      // console.log(err);
    }
  });
});

// Serve only the static files form the dist directory
app.use(express.static(path.resolve(__dirname, "./dist/SportsGeek-WebApp")));

app.get("/*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./dist/SportsGeek-WebApp","index.html"))
);

// Start the app by listening on the default Heroku port
http.listen(process.env.PORT || 8080);

// Socket
const io = require("socket.io")(http);

let users = [];

const addUser = (userData, socketId) => {
  userData.socketId = socketId;
  !users.some(user => user.userId === userData.userId) &&
  users.push(userData);
}

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  // console.log('A Connected...');
  let noww = new Date();
  let neww = noww.toUTCString();
  // let localtime = new Date(neww.toUTCString());
  // let neww = noww.getUTCDate() + '' + noww.getUTCDay;
  // console.log(neww);

  socket.on("addUser", (userData) => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMsg", (data) => {
    // socket.broadcast.emit('message', data);
    io.emit("newMsg", {
      userId: data.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      profilePicture: data.profilePicture,
      message: data.message,
      status: data.status,
      chatTimestamp: neww,
      status: data.status,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    // console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
