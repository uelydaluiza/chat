const express = require("express");
const path = require("path");
const { Socket } = require("dgram");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//TODO: check if the user is logged in when accessing other than "/index" page (IMPORTANT)

app.use("/index", (req, res) => {
  res.render("index.html");
});

app.use("/buscar_psicologo", (req, res) => {
  res.render("buscar_psicologo.html");
});

app.use("/lista_psico", (req, res) => {
  res.render("lista_psico.html");
});

app.use("/chat", (req, res) => {
  res.render("chat.html");
});


let messages = [];
io.on("connection", (socket) => {
  console.log(`Socket conectado: ${socket.id}`);
  
  socket.emit("previousMessages", messages);
  socket.on("sendMessage", (data) => {
    messages.push(data);
    socket.broadcast.emit("receivedMessage", data);
  });
});

server.listen(3000);
