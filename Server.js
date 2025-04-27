const path = require('path');
const express = require('express');
const app = express();
//const http = require('http');

//const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
const io = require('socket.io')(server);

const users = [];

// Server listen on port 3000
//server.listen(PORT, () => {
//  console.log(`Server is running on port ${PORT}`);
//});




//This will serve the 'public' folder as a static element so we can access the filesw within. Otherwise the paths cannot be accessed.
app.use(express.static('public'));
app.use(express.static('Fonts'));
//Here I am fetching the main html document in the working directory where I excecuted my 'npm init -y' command and created the json files.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/Home.html'));
});

///io is for server-side
io.emit('message', 'everyone');
io.on('connection', (socket) => {
  console.log(socket.id);
  socket.emit('message', 'everyone');
  console.log("New user has connected");
    /*
    socket.on("add_user", username => {
        socket.user = username;
        users.push(username);
        io.sockets.emit("users", users);
    });
    */
});
///socket is for client-side
///socket.on("connect", () => {
///    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
///  });
  /*
socket.on("connect", () => {
    console.log(socket.id);
    io.sockets.emit("message", {
      message,
      user: socket.user,
      id: socket.id,
    });
});
*/
