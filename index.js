const type = document.getElementById("type");
const input = document.querySelector(".form-control");
const mess = document.querySelector(".chat-messages");

var ws = new WebSocket("ws://localhost:8001");
ws.onopen = function() {
    console.log("Connection open");
    type.onclick = function() {
        const p =document.createElement("div");
        p.innerText = input.value;
        p.classList.add("mess-left");
        mess.append(p)
        ws.send(input.value);
        input.value = "";
    }
};
ws.onmessage = function(e) {
    const p =document.createElement("div");
    p.innerText = "...";
    p.className = "mess-right";
    mess.appendChild(p);
    setTimeout(() => {
        p.innerText = "... ...";
    }, 600);
    setTimeout(() => {
        p.innerText = e.data;
    }, 1200);
};
ws.onclose = function() {
    console.log("Connection closed");
};