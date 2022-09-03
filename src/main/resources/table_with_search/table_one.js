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
//Запускаем функцию только когда страница загружена
window.onload = function () {
    inputSearch = document.querySelector("#inputSearch");
    console.log(inputSearch);
    let text = "";
    //input - отслеживает любые изменения
    inputSearch.addEventListener("input", (e) => {
        //Обращаемся к элементу который вызвал это событие
        text = e.target.value;
        console.log(text);
        let userRows = document.querySelectorAll('.userRow');
        let resizable = document.querySelectorAll('.ui-resizable');

        resizable.forEach((item, index) => {
            if (item.innerText === text) {
                console.log(item);
                let parent = item.parentNode;
                parent.classList.add('hid');
            }
        })
    })

}

