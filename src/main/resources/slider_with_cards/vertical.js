//Смещение от верхнего края
let offset = 0;
const gap = 112;
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