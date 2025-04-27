
function flower_animation(){
    document.getElementById("flower_button").classList.add("flower_animate");
    document.getElementById("flower_picture_happy").classList.add("hide_flower_picture_happy");
    document.getElementById("flower_picture_evil").classList.remove("flower_picture_evil");
}

//Sans text 1
function type() {
    if (i < text[a].length) {
        document.getElementById("sans_text").innerHTML += text[a].charAt(i);
        i++;
        sleep(70).then(() => { type(); });
        if (i >= text[a].length) {

            sleep(5000).then(() => { type_2(); });
            sleep(4950).then(() => { clear_text(); });
        }
    }
}
//Sans text 2
function type_2() {
    if (y < text[b].length) {
        document.getElementById("sans_text").innerHTML += text[b].charAt(y);
        y++;
        sleep(70).then(() => { type_2(); });
        if (y >= text[b].length) {

            sleep(5000).then(() => { type_3(); });
            sleep(4950).then(() => { clear_text(); });
        }    
    }
}
//Sans text 3
function type_3() {
    if (x < text[c].length) {
        document.getElementById("sans_text").innerHTML += text[c].charAt(x);
        x++;
        sleep(70).then(() => { type_3(); });
        if (x >= text[c].length) {

            sleep(5000).then(() => { type_4(); });
            sleep(4950).then(() => { clear_text(); });
        }    
    }
}
//Sans text 4
function type_4() {
    if (w < text[d].length) {
        document.getElementById("sans_text").innerHTML += text[d].charAt(w);
        w++;
        sleep(70).then(() => { type_4(); });
        if (w >= text[d].length) {

            sleep(5000).then(() => { type(); });
            sleep(4950).then(() => { clear_text(); });
        }    
    }
}

//Start Timer
function timer() {
    document.getElementById("time_spent").innerHTML = (h += 1);
    setTimeout(timer,1000);
}


function clear_text() {
    document.getElementById("sans_text").innerHTML = "";
}
//Sleep function for average use
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

function initialize() {
    sleep(7000).then(() => { type(); });
    sleep(6950).then(() => { clear_text(); });
}


function show_box_text(text) {
    document.getElementById("top_left_box_text").innerHTML = text;
}

// Displaying messages
function display_Message(message) {
  const chatMessages = document.getElementById('chat_messages');
  const newMessage = document.createElement('div');
  newMessage.innerText = message;
  chatMessages.appendChild(newMessage);
}



// Sending messages
function send_message(){
    const message = document.getElementById("message_input").value;
    console.log(message);
    //socket.emit('message', message);
    display_Message(`You: ${message}`);
    document.getElementById('message_input').value = '';
}



//Sans text list
const text = ["*...........................", "*Have you seen my dog? He is running ecerywhere these days.......", "*I get the feeling Papyrus is setting some traps for you right now........", "*You've been busy HUH.................................?"];

var a = Math.floor(Math.random() * text.length);
var b = a
var c = a
var d = a
while (b == a) {
    var b = Math.floor(Math.random() * text.length);
}

while (c == b || c == a) {
    var c = Math.floor(Math.random() * text.length);
}

while (d == b || d == a || d == c) {
    var d = Math.floor(Math.random() * text.length);
}
console.log(`a is ${text[a]}`);
console.log(`b is ${text[b]}`);
console.log(`c is ${text[c]}`);
console.log(`d is ${text[d]}`);
let speed = 50;
let start_time = 0;
var y = 0;
var i = 0;
var h = 0;
var x = 0;
var w = 0;

//const socket = io('http://localhost:3000');
/*
socket.on("message", message => {
    console.log(message);
});
*/

document.addEventListener("DOMContentLoaded", function() {
    console.log(document.getElementById("myElement"));
    initialize();
    timer();
});
