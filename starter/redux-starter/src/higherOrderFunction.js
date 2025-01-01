const io = require("socket.io")(3001);

//send message
function sendMessageToGroup(message, group, callback) {
  //send message all group member
  group.forEach((userSocket) => {
    userSocket.emit("newMessage", message);
  });

  //callback invocation
  callback(message);
}

//user on
io.on("connection", (socket) => {
  console.log("a new user is connected");

  //listen to messages from the user
  socket.on("sendMessage", (message, group) => {
    sendMessageToGroup(message, group, function (message) {
      console.log(`Send message success: ${message}`);
    });
  });
});

let userName = "John";
let message = "Hello, how are you?" + userName.trim() + "!";

const trim = (name) => name.trim();
const generateMessage = (name) => name.toUpperCase();

const result = generateMessage(trim(userName));
console.log(result);
