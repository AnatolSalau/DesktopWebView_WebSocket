//Смещение от левого края
let offset = 0;
const gap = 110;
//<div class="slider-line">
const sliderLine = document.querySelector(".slider-line");
//collection all images

//slider animation left
document.getElementById("btn_left").addEventListener(
    "click", function silderanimation() {
        var elem = document.createElement("img");
        elem.setAttribute("src", "../png/mainpage.png");
        elem.setAttribute("alt", "");
        document.getElementById("slider").appendChild(elem);
        offset += gap;
        if (offset > 500) {
            offset = 0;
        }
        sliderLine.style.left = -offset +"px";
    }
)
//slider animation right
document.getElementById("btn_right").addEventListener(
    "click", function silderanimation() {
        offset -= gap;
        if (offset < 0) {
            offset = gap;
        }
        sliderLine.style.left = +offset +"px";
    }
)

