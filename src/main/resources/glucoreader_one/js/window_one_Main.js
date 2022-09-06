"use strict";
window.addEventListener("load", main);

function main (event) {
    console.log("window loaded");
    enableSliderAnimation();
    enableButtonsEffects();
    enableHeaderButtonEffects();
    enableResizableColomnsTable();
    enableSearch();
}

function enableSliderAnimation() {
    //Смещение от верхнего края
    console.log("hello from slider")
    let offset = 0;
    const gap = 95;
//<div class="slider-line">
    const sliderLine = document.querySelector(".slider-line");
//slider animation top
    document.getElementById("turnTop").addEventListener(
        "click", function silderanimation() {
            offset = offset - gap;
            sliderLine.style.top = + offset +"px";
        }
    )
//slider animation bottom
    document.getElementById("turnDown").addEventListener(
        "click", function silderanimation() {
            offset = offset + gap;
            sliderLine.style.top = offset +"px";
        }
    )
}

function enableButtonsEffects() {
    let buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("waves-effect");
        buttons[i].classList.remove("waves-light");
    }
    $.ripple(".btn", {
        debug: false, // Turn Ripple.js logging on/off
        on: 'mousedown', // The event to trigger a ripple effect

        opacity: 0.4, // The opacity of the ripple
        color: "hsla(0, 0%, 100%, 0.2)", // Set the background color. If set to "auto", it will use the text color
        multi: false, // Allow multiple ripples per element

        duration: 0.5, // The duration of the ripple

        // Filter function for modifying the speed of the ripple
        rate: function(pxPerSecond) {
            return pxPerSecond;
        },
        easing: 'linear' // The CSS3 easing function of the ripple
    });
}

function enableHeaderButtonEffects() {
    let buttons = document.getElementsByClassName("nav-link");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("waves-effect");
        buttons[i].classList.remove("waves-light");
    }
    $.ripple(".nav-link", {
        debug: false, // Turn Ripple.js logging on/off
        on: 'mousedown', // The event to trigger a ripple effect

        opacity: 0.4, // The opacity of the ripple
        color: "hsla(0, 0%, 100%, 0.2)", // Set the background color. If set to "auto", it will use the text color
        multi: false, // Allow multiple ripples per element

        duration: 0.5, // The duration of the ripple

        // Filter function for modifying the speed of the ripple
        rate: function(pxPerSecond) {
            return pxPerSecond;
        },

        easing: 'linear' // The CSS3 easing function of the ripple
    });
}

function enableResizableColomnsTable() {
    console.log("Enable Table function")
    $('.table td').resizable({
        resize: function (event, ui) {
            let col = $(this).index() + 1;
            $(this).closest('table').find('tr td:nth-child(' + col + ')').width(ui.size.width);
            $(this).parent().find('td').height(ui.size.height);
        }
    });
}

//Запускаем функцию только когда страница загружена
function enableSearch ()  {
    let inputSearch;
    let buttonSearch;
        inputSearch = document.querySelector("#inputSearch");
        //text from search
        //input - отслеживает любые изменения
        let arraWithIndexes = [];
        let arrayWithout = [];
        inputSearch.addEventListener("input",search);
        console.log(inputSearch);

        //arra vithIndexes
        function search (e){
            /*        arraWithIndexes = [];
                    arrayWithout = [];*/
            let text = "";
            text = e.target.value;
            console.log(text);
            //all user rows from table
            let userRows = document.querySelectorAll('.userRow');

            //is void input text
            if (text === "" || text === " " || text === "  " || text === "   " || text === "    " || text === "     "
                || text === "      " || text === "       " || text === "        " || text === "         ") {
                console.log("Строка поиска пуста - проверка не запущенна")
                arraWithIndexes = [];
                arrayWithout = [];
                let userRows = document.querySelectorAll('.userRow');
                for (let userRowNumber = 0; userRowNumber < userRows.length; userRowNumber++) {
                    userRows[userRowNumber].classList.remove("hiddenUserRow");
                }

            }
            else {
                console.log("Проверка запущенна")
                for (let userRowNumber = 0; userRowNumber < userRows.length; userRowNumber++) {
                    //All inner text from row
                    let rowInnerText = userRows[userRowNumber].innerText;

                    //Array with inner texts without nex line and tabulation
                    let separatedStringArray = rowInnerText.split("\n\t");
                    //run by cicle throw separatedStringArray
                    for (let colNumber = 0; colNumber < separatedStringArray.length; colNumber++) {
                        let isStarts = separatedStringArray[colNumber].startsWith(text);
                        console.log(isStarts === true);
                        if (isStarts) {
                            let isInclude = arraWithIndexes.includes(userRowNumber);
                            if (isInclude !== true) {
                                arraWithIndexes.push(userRowNumber);
                            }

                            break;
                        }
                        else {
                            let isInclude = arrayWithout.includes(userRowNumber);
                            if (isInclude !== true) {
                                arrayWithout.push(userRowNumber);
                            }

                            break;
                        }
                    }
                }
            }
            console.log(arraWithIndexes);
            console.log(arrayWithout);
            for (let i = 0; i < arrayWithout.length; i++) {
                userRows[arrayWithout[i]].classList.add("hiddenUserRow");
            }
        }
    }

