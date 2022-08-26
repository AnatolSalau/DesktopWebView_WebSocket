//Функция загрузки текста в текстовое поле
function insertText1() {
    document.getElementById('exampleFormControlTextarea1').value = 'Hello, this is text from js';
}
insertText1();

//Добавляем обработчик события
document.getElementById("loadtext").addEventListener("click", loadText);

function loadText() {
    //ws://
    const wsURL = "ws://127.0.0.1:8080/events";
    let websocket = new WebSocket(wsURL);

    websocket.onmessage = function (event) {
        onMessage(event);
    }
    websocket.onopen = function () {
        onOpen(wsURL);
    }


    //document.getElementById('exampleFormControlTextarea2').value = 'Hello, this is text from js';
}

function onOpen(wsUrl) {
    console.log("Opened connection" + wsUrl)
}

function onClose(wsUrl) {
    console.log("Closed connection" + wsUrl)
}

function onMessage(event) {
    console.log("Handle event" + event)
}

function send() {

}