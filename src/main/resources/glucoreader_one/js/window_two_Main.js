"use strict";
window.addEventListener("load", main);

function main (event) {

/*    let labelOne = document.getElementById("labelOne");
    labelOne.innerText = "Changed text from function"
    labelOne.style.backgroundColor = "lightgreen";*/
    let labelService = new LabelService(document);
    labelService.changeTextLabelById("labelOne","Changed text from class");
    labelService.changeLabelColorById("labelOne", "red");
}


