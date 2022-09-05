"use strict";
window.addEventListener("load", main);

function main (event) {
    console.log("window loaded")
    enableTabs("menu");

    setTabsIsActiveByClick();

}

function enableTabs(idContainerForTabs) {
    $('#'+ idContainerForTabs + ' .menu .item').tab();
}

function setTabsIsActiveByClick() {
    //Все корешки
    let itemsTab = document.getElementsByClassName("item");
    console.log(itemsTab)
    //Все табы
    let segmentsTab = document.getElementsByClassName("segment");
    console.log(segmentsTab);
    //Левая кнопка 
    let leftButton = document.getElementById("leftButton");
    console.log(leftButton);
    //Правая кнопка 
    let rightButton = document.getElementById("rightButton");
    console.log(rightButton);
    
    //Добавляем для левой кнопки событие клик
    leftButton.addEventListener("click", setTabsIsActiveLeft);
    rightButton.addEventListener("click", setTabsIsActiveRight);
    
    function setTabsIsActiveLeft(event) {
        console.log("Click");
        console.log(event);
        let activeTabIndex = getActiveIndex();
        console.log(activeTabIndex);
        
        if (activeTabIndex >= 1 && activeTabIndex <=2 ) {
            itemsTab[activeTabIndex].classList.remove("active");
            segmentsTab[activeTabIndex].classList.remove("active");
            itemsTab[activeTabIndex - 1].classList.add("active");
            segmentsTab[activeTabIndex - 1].classList.add("active");
        }
    }
    function setTabsIsActiveRight(event) {
        console.log("Click");
        console.log(event);
        let activeTabIndex = getActiveIndex();
        console.log(activeTabIndex);

        if (activeTabIndex <=1 && activeTabIndex >=0 ) {
            itemsTab[activeTabIndex].classList.remove("active");
            segmentsTab[activeTabIndex].classList.remove("active");
            itemsTab[activeTabIndex + 1].classList.add("active");
            segmentsTab[activeTabIndex + 1].classList.add("active");
        }
    }
    function getActiveIndex() {
        let indexActive = 0;
        //Узнаем индекс активного корешка
        for (let i = 0; i < itemsTab.length; i++) {
            let isActive = itemsTab[i].classList.contains("active");
            if (isActive) {
                indexActive = i;
                break;
            }
        }
        return indexActive;
    }
    
}