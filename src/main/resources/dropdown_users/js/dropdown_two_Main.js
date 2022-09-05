"use strict";
window.addEventListener("load", main);

function main (event) {
    console.log("window loaded")
    
    enableDropdownAnimationSUI("firstDropdown");
}

function enableDropdownAnimationSUI (idDropdown) {
    $('#' + idDropdown).dropdown();
/*    let divDefaultText = document.querySelectorAll(".text");
    for (let i = 0; i < divDefaultText.length; i++) {
        divDefaultText[i].insertAdjacentHTML(
            'afterbegin',
            '<i class="user md icon"></i>',
        );
    }
    console.log(elementsByClassName)*/
}
