const cssQuestions = [
{
'que':'The full form of CSS is:',
'a' : 'Cascading Style Sheets',
'b' : 'Coloured Special Sheets',
'c' : 'Color and Style Sheets',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'How can we change the background color of an element?',
'a' : 'background-color',
'b' : 'color',
'c' : 'Both A and B',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'How can we change the text color of an element?',
'a' : 'background-color',
'b' : 'color',
'c' : 'Both A and B',
'd' : 'None of the above',
'correct': 'b'
},
{
'que':'In how many ways can CSS be written in?',
'a' : '1',
'b' : '2',
'c' : '3',
'd' : '4',
'correct': 'c'
},
{
'que':`What type of CSS is the following code snippet?
<h1 style="color:blue;">A Blue Heading</h1>`,
'a' : 'Inline',
'b' : 'Internal',
'c' : 'External',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'What type of CSS is generally recommended for designing large web pages?',
'a' : 'Inline',
'b' : 'Internal',
'c' : 'External',
'd' : 'None of the above',
'correct': 'c'
},
{
'que':'Which HTML tag is used to declare internal CSS?',
'a' : '<style>',
'b' : '<link>',
'c' : '<script>',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'How can we select an element with a specific ID in CSS?',
'a' : '#',
'b' : '.',
'c' : '^',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'How can we select an element with a specific Class in CSS?',
'a' : '#',
'b' : '.',
'c' : '^',
'd' : 'None of the above',
'correct': 'b'
},
{
'que':'How can we write comments in CSS?',
'a' : '/* */',
'b' : '//',
'c' : '#',
'd' : 'All of the above',
'correct': 'a'
},
{
'que':'Which of the following CSS property specifies the origin of the background image?',
'a' : 'background-origin',
'b' : 'background-size',
'c' : 'origin',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'Can negative values be allowed in padding property?',
'a' : 'Yes',
'b' : 'No',
'c' : 'Depends on property',
'd' : 'None of the above',
'correct': 'b'
},
{
'que':'The CSS property used to specify the transparency of an element is?',
'a' : 'opacity',
'b' : 'visibility',
'c' : 'filter',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'How can we specify the spacing between each letter in a text in CSS?',
'a' : 'alpha-spacing',
'b' : 'letter-spacing',
'c' : 'character-spacing',
'd' : 'None of the above',
'correct': 'b'
},
{
'que':'What is the correct syntax for referring an external CSS?',
'a' : '<link rel="stylesheet" type="text/css" href="style.css">',
'b' : '<style rel="stylesheet" type="text/css" href="style.css">',
'c' : 'Both A and B',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'Which of the following are valid ways to represent a colour in CSS?',
'a' : 'A valid color name',
'b' : 'RGB values',
'c' : 'HEX values',
'd' : 'All of the above',
'correct': 'd'
},
{
'que':'Which of the following is the correct way to select all h1 headers in a div element?',
'a' : 'div h1',
'b' : 'div-h1',
'c' : 'h1',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'We can make rounded borders around elements using which CSS element?',
'a' : 'border-collapse',
'b' : 'border-round',
'c' : 'border-radius',
'd' : 'None of the above',
'correct': 'c'
},
{
'que':'How can we set the maximum width of the elements content box using CSS?',
'a' : 'height property',
'b' : 'max-height property',
'c' : 'max-width property',
'd' : 'None of the above',
'correct': 'c'
},
{
'que':'Which CSS property is used to specify different border styles?',
'a' : 'border-style',
'b' : 'border',
'c' : 'Both A and B',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'Which of the following property specifies the look and design of an outline?',
'a' : 'outline-style',
'b' : 'outline',
'c' : 'outline-font',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'Which of the following are valid CSS position property values?',
'a' : 'static',
'b' : 'relative',
'c' : 'fixed',
'd' : 'All of the above',
'correct': 'd'
},
{
'que':'What does the inherit value for a property do?',
'a' : 'Inherits the value of the parent element.',
'b' : 'Invalid property name.',
'c' : 'Changes the value of the parent element’s property.',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'Setting an inline-block in CSS requires which of the following properties?',
'a' : 'display',
'b' : 'color',
'c' : 'block',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'Which of the following CSS property is used for controlling the layout?',
'a' : 'display',
'b' : 'color',
'c' : 'text',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'Which of the following CSS property specifies the origin of the background image?',
'a' : 'background-origin',
'b' : 'background-size',
'c' : 'origin',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'How are custom fonts defined using CSS?',
'a' : '@font-face rule.',
'b' : 'Custom fonts cannot be defined.',
'c' : 'src tags.',
'd' : 'None of the above',
'correct': 'a'
},
{
'que':'Which of the following are parts of the CSS box model?',
'a' : 'Margins',
'b' : 'Borders',
'c' : 'Padding',
'd' : 'All of the above',
'correct': 'd'
},
{
'que':'Which of the following components of the CSS box model are transparent?',
'a' : 'Padding',
'b' : 'Margin',
'c' : 'Both A and B',
'd' : 'Content',
'correct': 'c'
},
{
'que':'Which of the following are parts of the CSS box model?',
'a' : 'Margins',
'b' : 'Borders',
'c' : 'Padding',
'd' : 'All of the above',
'correct': 'd'
},

]


let cssindex = 0;
let cssQue1 = document.getElementById('css-que');
let cssOptionInputs = document.querySelectorAll('.cssOption')
console.log(cssOptionInputs);

let queCssBtn = document.querySelectorAll('.que-css-btn');

queCssBtn[0].addEventListener('click', function cb() {
    cssindex = 0;
    loadQuestion1();
})

queCssBtn[1].addEventListener('click', function cb() {
    cssindex = 1; loadQuestion1();
})
queCssBtn[2].addEventListener('click', function cb() {
    cssindex = 2;
    loadQuestion1();
})
queCssBtn[3].addEventListener('click', function cb() {
    cssindex = 3;
    loadQuestion1();
})
queCssBtn[4].addEventListener('click', function cb() {
    cssindex = 4;
    loadQuestion1();
})
queCssBtn[5].addEventListener('click', function cb() {
    cssindex = 5;
    loadQuestion1();
})
queCssBtn[6].addEventListener('click', function cb() {
    cssindex = 6;
    loadQuestion1();
})
queCssBtn[7].addEventListener('click', function cb() {
    cssindex = 7;
    loadQuestion1();
})
queCssBtn[8].addEventListener('click', function cb() {
    cssindex = 8;
    loadQuestion1();
})
queCssBtn[9].addEventListener('click', function cb() {
    cssindex = 9;
    loadQuestion1();
})
queCssBtn[10].addEventListener('click', function cb() {
    cssindex = 10;
    loadQuestion1();
})
queCssBtn[11].addEventListener('click', function cb() {
    cssindex = 11;
    loadQuestion1();
})
queCssBtn[12].addEventListener('click', function cb() {
    cssindex = 12;
    loadQuestion1();
})
queCssBtn[13].addEventListener('click', function cb() {
    cssindex = 13;
    loadQuestion1();
})
queCssBtn[14].addEventListener('click', function cb() {
    cssindex = 14;
    loadQuestion1();
})
queCssBtn[15].addEventListener('click', function cb() {
    cssindex = 15;
    loadQuestion1();
})
queCssBtn[16].addEventListener('click', function cb() {
    cssindex = 16;
    loadQuestion1();
})
queCssBtn[17].addEventListener('click', function cb() {
    cssindex = 17;
    loadQuestion1();
})
queCssBtn[18].addEventListener('click', function cb() {
    cssindex = 18;
    loadQuestion1();
})
queCssBtn[19].addEventListener('click', function cb() {
    cssindex = 19;
    loadQuestion1();
})
queCssBtn[20].addEventListener('click', function cb() {
    cssindex = 20;
    loadQuestion1();
})
queCssBtn[21].addEventListener('click', function cb() {
    cssindex = 21;
    loadQuestion1();
})
queCssBtn[22].addEventListener('click', function cb() {
    cssindex = 22;
    loadQuestion1();
})
queCssBtn[23].addEventListener('click', function cb() {
    cssindex = 23;
    loadQuestion1();
})
queCssBtn[24].addEventListener('click', function cb() {
    cssindex = 24;
    loadQuestion1();
})
queCssBtn[25].addEventListener('click', function cb() {
    cssindex = 25;
    loadQuestion1();
})
queCssBtn[26].addEventListener('click', function cb() {
    cssindex = 26;
    loadQuestion1();
})
queCssBtn[27].addEventListener('click', function cb() {
    cssindex = 27;
    loadQuestion1();
})
queCssBtn[28].addEventListener('click', function cb() {
    cssindex = 28;
    loadQuestion1();
})
queCssBtn[29].addEventListener('click', function cb() {
    cssindex = 29;
    loadQuestion1();
})

function loadQuestion1() {

    const data1 = cssQuestions[cssindex];
    // Adding Question
    cssQue1.innerText = `${cssindex + 1}) ${data1.que}`;

    // Adding Options
    cssOptionInputs[0].nextElementSibling.innerText = data1.a;
    cssOptionInputs[1].nextElementSibling.innerText = data1.b;
    cssOptionInputs[2].nextElementSibling.innerText = data1.c;
    cssOptionInputs[3].nextElementSibling.innerText = data1.d;
    cssborder();
}

function cssborder() {
    queCssBtn[cssindex].style.backgroundColor = "yellow";
}

