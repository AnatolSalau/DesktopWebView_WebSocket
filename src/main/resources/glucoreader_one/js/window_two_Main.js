"use strict";
import LabelService from './LabelService.js';

window.addEventListener("load", main);

function main (event) {
    let labelService = new LabelService(document);
    labelService.changeTextLabelById("labelOne","Changed text from class");
    labelService.changeLabelColorById("labelOne", "green");
}


