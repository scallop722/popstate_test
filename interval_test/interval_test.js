// 30秒
const popup_millisec = 30 * 1000

const showPopup = () => {
  document.getElementById("displayTarget").innerHTML = "30秒経過";
  console.log("30秒経過");
  alert("30秒経過");
}

var myTimer = setInterval(showPopup, popup_millisec);
function clearPopup(){
  clearInterval(myTimer);
  myTimer = setInterval(showPopup, popup_millisec);
}

window.addEventListener('touchstart', function(event) {
  clearPopup();
}, false);

window.addEventListener('touchmove', function(event) {
  clearPopup();
}, false);

window.addEventListener('touchend', function(event) {
  clearPopup();
}, false);

window.addEventListener( "mouseover", function (event) {
  clearPopup();
}, false);

window.addEventListener( "mouseout", function (event) {
  clearPopup();
}, false);

window.addEventListener( "scroll", function (event) {
  clearPopup();
}, false);

window.addEventListener('click', function (event) {
  clearPopup();
}, false);

window.addEventListener('input', function (event) {
  clearPopup();
}, false);

let input = document.querySelector('input');
if (input){
    clearPopup();
    input.onblur = inputBlur;
    input.onfocus = inputFocus;
}

function inputFocus() {
    clearPopup();
}

function inputBlur() {
    clearPopup();
}