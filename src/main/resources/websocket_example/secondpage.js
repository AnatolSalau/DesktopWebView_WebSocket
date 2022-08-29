
//Добавляем обработчик события
document.getElementById("loadtext").addEventListener("click", sendTextToServer);
//ws://
const wsURL = "ws://127.0.0.1:8080/events";
let websocket = new WebSocket(wsURL);

function sendTextToServer() {
    websocket.onmessage = function (event) {
        onMessage(event);
    }
    websocket.onopen = function () {
        onOpen(wsURL);
    }
    send();
    displayText1()
}

function onOpen(wsUrl) {
    console.log("Opened connection" + wsUrl)
}

function onClose(wsUrl) {
    console.log("Closed connection" + wsUrl)
}

function onMessage(event) {
    console.log("Handle event" + event)
    displayText1(event.data)
}

function send() {
    let text = document.getElementById('exampleFormControlTextarea1').value;
    console.log(text);
    websocket.send(text);
}
//Функция загрузки текста в текстовое поле
function displayText1(message) {
    document.getElementById('exampleFormControlTextarea2').value = message;
}
