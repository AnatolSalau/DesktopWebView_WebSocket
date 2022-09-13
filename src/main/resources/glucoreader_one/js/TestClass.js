class TestClass {   
    #test = "Hohohoho";
    #changeColor(item) {
        item.body.style.backgroundColor = "red";
    }
    printInConsole(item) {
        console.log(this.#test)
        this.#changeColor(item);
    }
}