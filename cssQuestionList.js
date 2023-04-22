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
'que':'Which of the following are types of length units in CSS?',
'a' : 'Absolute',
'b' : 'Relative',
'c' : 'Both A and B',
'd' : 'None of the above',
'correct': ''
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
'que':'Which of the following are units of relative length in CSS?',
'a' : 'em',
'b' : 'rem',
'c' : 'vmax',
'd' : 'All of the above',
'correct': 'd'
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

let queCssBtn = document.querySelectorAll('.que-css-btn');

for(let i = 0;i<30;++i){
    queCssBtn[i].addEventListener('click', function cb() {
            cssindex = i;
            loadQuestion1();
        })
}

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
    queCssBtn[cssindex].style.backgroundColor = "#ffb405";
}

