export default class LabelService {

    #defaultText;
    #thisDocument;

    constructor(thisDocument) {
        this.#defaultText = "Label default text";
        this.#thisDocument = thisDocument;
    }

    changeTextLabelById(idLabel, text) {
        let labelFromDocument = this.#thisDocument.getElementById(idLabel);
        labelFromDocument.innerText = text;
    }

    changeLabelColorById(idLabel, color) {
        let labelFromDocument = this.#thisDocument.getElementById(idLabel);
        labelFromDocument.style.backgroundColor = color;
    }
}