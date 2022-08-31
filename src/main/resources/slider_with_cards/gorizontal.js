
//Смещение от левого края
let offset = 0;
const gap = 112;
//<div class="slider-line">
const sliderLine = document.querySelector(".slider-line");
//collection all images
const slider = document.getElementById("slider");
//quanity images
const quanityButtonsInSlider = slider.childElementCount;
console.log(quanityButtonsInSlider);
//Quanity clicks to left and right
var clicksAllowedRight = 1;
clicksAllowedRight = quanityButtonsInSlider ? (quanityButtonsInSlider - 4) :1;
console.log(clicksAllowedRight);

const clicksAllowedLeft = clicksAllowedRight * -1;
console.log(clicksAllowedLeft);

//slider animation left
let count = 0;
if (count > clicksAllowedLeft ) {
    document.getElementById("turnLeft").addEventListener(
        "click", function silderanimation() {
            offset = offset - gap;
            sliderLine.style.left = offset +"px";
            console.log("Current offset = " + offset);
            count -=1;
            console.log(count)
        }
    )
}

//slider animation right
document.getElementById("turnRight").addEventListener(
    "click", function silderanimation() {
        offset = offset + gap;
        sliderLine.style.left = offset +"px";
    }
)

