let html = document.querySelector('.html');
let css = document.querySelector('.css');
let js = document.querySelector('.js');
let hQue = document.querySelector('.html-question');
let cssQue = document.querySelector('.css-question');
let jsQue = document.querySelector('.js-question');

let quehtmlContainer = document.querySelector('.que-html-container');
let quecssContainer = document.querySelector('.que-css-container');
let queJsContainer = document.querySelector('.que-js-container');

html.style.backgroundColor = "#d8ca665c";
function htmlQuestion() {
    hQue.style.display = "flex";
    cssQue.style.display = "none";
    jsQue.style.display = "none";
    quehtmlContainer.style.display = "block";
    quecssContainer.style.display = "none";
    queJsContainer.style.display = "none";
    html.style.backgroundColor = "#d8ca665c";
    css.style.backgroundColor = "white";
    js.style.backgroundColor = "white";
    loadQuestion();
}

function cssQuestion() {
    quecssContainer.style.display = "block";
    quehtmlContainer.style.display = "none";
    queJsContainer.style.display = "none";
    hQue.style.display = "none";
    cssQue.style.display = "flex";
    jsQue.style.display = "none";
    html.style.backgroundColor = "white";
    css.style.backgroundColor = "#d8ca665c";
    js.style.backgroundColor = "white";
    loadQuestion1();
}

function jsQuestion() {
    queJsContainer.style.display = "block";
    quehtmlContainer.style.display = "none";
    quecssContainer.style.display = "none";
    hQue.style.display = "none";
    cssQue.style.display = "none";
    jsQue.style.display = "flex";
    html.style.backgroundColor = "white";
    css.style.backgroundColor = "white";
    js.style.backgroundColor = "#d8ca665c";
    loadQuestion2();
}


// ______________________ Inspect Script _________________________

 document.addEventListener('contextmenu',function cb(e){
     e.preventDefault();
 })
