//Изменение ширины колонок
$('.table td').resizable({
    resize: function (event, ui) {
        let col = $(this).index() + 1;
        $(this).closest('table').find('tr td:nth-child(' + col + ')').width(ui.size.width);
        $(this).parent().find('td').height(ui.size.height);
    }
});
//Динамический поиск в таблице
let inputSearch;
let buttonSearch;
//Запускаем функцию только когда страница загружена
window.onload = function () {
    inputSearch = document.querySelector("#inputSearch");
    //text from search
    //input - отслеживает любые изменения
    let arraWithIndexes = [];
    let arrayWithout = [];
    inputSearch.addEventListener("input",search);
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


