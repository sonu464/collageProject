let html = document.querySelector('.html');
let css = document.querySelector('.css');
let js = document.querySelector('.js');
let hQue = document.querySelector('.html-question');
let cssQue = document.querySelector('.css-question');
let jsQue = document.querySelector('.js-question');

let quehtmlContainer = document.querySelector('.que-html-container');
let quecssContainer = document.querySelector('.que-css-container');
let queJsContainer = document.querySelector('.que-js-container');


function htmlQuestion() {
    hQue.style.display = "block";
    cssQue.style.display = "none";
    jsQue.style.display = "none";
    quehtmlContainer.style.display = "block";
    quecssContainer.style.display = "none";
    queJsContainer.style.display = "none";

}

function cssQuestion() {
    quecssContainer.style.display = "block";
    quehtmlContainer.style.display = "none";
    queJsContainer.style.display = "none";
    hQue.style.display = "none";
    cssQue.style.display = "block";
    jsQue.style.display = "none";
    loadQuestion1();
}

function jsQuestion() {
    queJsContainer.style.display = "block";
    quehtmlContainer.style.display = "none";
    quecssContainer.style.display = "none";
    hQue.style.display = "none";
    cssQue.style.display = "none";
    jsQue.style.display = "block";
}






// ______________________ Inspect Script _________________________

// document.addEventListener('contextmenu',function cb(e){
//     e.preventDefault();
// })