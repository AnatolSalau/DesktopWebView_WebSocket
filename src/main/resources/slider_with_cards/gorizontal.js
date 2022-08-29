//Смещение от левого края
let offset = 0;
const gap = 120;
//<div class="slider-line">
const sliderLine = document.querySelector(".slider-line");
//collection all images
 var imgs = document.getElementById("slider").getElementsByTagName("img");
console.log(imgs);
//slider animation left
document.getElementById("btn_left").addEventListener(
    "click", function silderanimation() {
        
        let tmp = imgs[0];
        
        offset += gap;
        if (offset > gap) {
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

