
//Смещение от левого края
let offset = 0;
const gap = 115;
//<div class="slider-line">
const sliderLine = document.querySelector(".slider-line");
//collection all images

//slider animation left
document.getElementById("btn_left").addEventListener(
    "click", function silderanimation() {
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
            offset = 500;
        }
        sliderLine.style.left = +offset +"px";
    }
)

