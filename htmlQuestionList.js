const htmlQuestions = [
    {
        'que': 'What does the abbreviation HTML stand for? ',
        'a': 'HyperText Markup Language.',
        'b': 'HighText Markup Language.',
        'c': 'HyperText Markdown Language.',
        'd': 'None of the above.',
        'correct': 'a'
    },
    {
        'que': 'How many sizes of headers are available in HTML by default?',
        'a': '5',
        'b': '1',
        'c': '3',
        'd': '6',
        'correct': 'd'
    },

    {
        'que': 'What is the smallest header in HTML by default?',
        'a': 'h1',
        'b': 'h2',
        'c': 'h6',
        'd': 'h4',
        'correct': 'c'
    },

    {
        'que': 'What are the types of lists available in HTML?',
        'a': 'Ordered, Unordered Lists.',
        'b': 'Bulleted, Numbered Lists.',
        'c': 'Named, Unnamed Lists.',
        'd': 'None of the above.',
        'correct': 'a'
    },

    {
        'que': 'How to create an ordered list in HTML?',
        'a': '<ul>',
        'b': '<ol>',
        'c': '<href>',
        'd': '<b>',
        'correct': 'b '
    },

    {
        'que': 'HTML files are saved by default with the extension?',
        'a': '.html',
        'b': '.h',
        'c': '.ht',
        'd': 'None of the above',
        'correct': 'a'
    },

    {
        'que': 'We enclose HTML tags within?',
        'a': '{ }',
        'b': '< >',
        'c': '! !',
        'd': 'None of the above',
        'correct': 'b'
    },

    {
        'que': 'What is the effect of the <b> tag?',
        'a': 'It converts the text within it to bold font.',
        'b': 'It is used to write black-colored font.',
        'c': 'It is used to change the font size.',
        'd': 'None of the above.',
        'correct': 'a'
    },

    {
        'que': 'Which of the following is correct about HTML?',
        'a': 'HTML uses User Defined Tags.',
        'b': 'HTML uses tags defined within the language.',
        'c': 'Both A and B.',
        'd': 'None of the above.',
        'correct': 'b'
    },

    {
        'que': 'How to display preformatted text in HTML?',
        'a': '<p>',
        'b': '<pre>',
        'c': '<hr>',
        'd': 'All of the above',
        'correct': 'b'
    },

    {
        'que': 'Which of the following tags doesn’t require a closing tag?',
        'a': '<br>',
        'b': '<hr>',
        'c': 'Both A and B',
        'd': 'None of the above',
        'correct': 'c'
    },

    {
        'que': 'What is meant by an empty tag in HTML?',
        'a': 'There is no such concept of an empty tag in HTML',
        'b': 'An empty tag does not require a closing tag',
        'c': 'An empty tag cannot have any content within it',
        'd': 'None of the above',
        'correct': 'b'
    },

    {
        'que': 'What are the attributes used to change the size of an image?',
        'a': 'Width and height',
        'b': 'Big and Small',
        'c': 'Top and bottom',
        'd': 'None of the above',
        'correct': 'a'
    },

    {
        'que': 'Which attribute is used to provide a unique name to an HTML element?',
        'a': 'id',
        'b': 'class',
        'c': 'type',
        'd': 'None of the above',
        'correct': 'a'
    },

    {
        'que': 'What is the function of the HTML style attribute?',
        'a': 'It is used to add styles to an HTML element.',
        'b': 'It is used to uniquely identify some specific styles of some element.',
        'c': 'Both A and B.',
        'd': 'None of the above.',
        'correct': 'a'
    },

    {
        'que': 'Which of the following is the correct syntax for using the HTML style attribute?',
        'a': '<tagname style = “property: value;”>',
        'b': '<tagname style = “property;”>',
        'c': '<tagname style >',
        'd': 'None of the above',
        'correct': 'a'
    },
    {
        'que': 'Which HTML element is used to define description data?',
        'a': '<li>',
        'b': '<ol>',
        'c': '<dd>',
        'd': '<dl>',
        'correct': 'c'
    },

    {
        'que': 'Which of the following properties is used to change the font of text?',
        'a': 'font-family',
        'b': 'font-size',
        'c': 'text-align',
        'd': 'None of the above',
        'correct': 'a'
    },

    {
        'que': 'How are quotations defined in HTML?',
        'a': '<quote>',
        'b': '<block>',
        'c': '<blockquote>',
        'd': 'None of the above',
        'correct': 'c'
    },

    {
        'que': 'What tag is used to render an image on a webpage?',
        'a': 'img',
        'b': 'src',
        'c': 'image',
        'd': 'None of the above',
        'correct': 'a'
    },
    {
        'que': 'Apart from <i> tag, which of the following tag is used to render a text in italics?',
        'a': '<em>',
        'b': '<strong>',
        'c': '<b>',
        'd': 'None of the above',
        'correct': 'a'
    },
    {
        'que': 'What is the correct syntax to write an HTML comment?',
        'a': '<!-- Comment -->',
        'b': '// Comment',
        'c': '# Comment',
        'd': '/* Comment */',
        'correct': 'a'
    },
    {
        'que': 'Colors are defined in HTML using?',
        'a': 'RGB Values',
        'b': 'HEX Values',
        'c': 'RGBA values',
        'd': 'All of the above',
        'correct': 'd'
    },
    {
        'que': 'Which property is used to set colors in HTML?',
        'a': 'color',
        'b': 'background-color',
        'c': 'font-color',
        'd': 'text-color',
        'correct': 'a'
    },
    {
        'que': 'What are the types of unordered lists in HTML?',
        'a': 'Circle, square, disc.',
        'b': 'Triangle, Square, disc.',
        'c': 'Triangle, Circle, Disc.',
        'd': 'All of the above.',
        'correct': 'a'
    },
    {
        'que': 'Which property is used to set border colors in HTML?',
        'a': 'border-color',
        'b': 'border',
        'c': 'Both A and B',
        'd': 'None of the above',
        'correct': 'b'
    },
    {
        'que': 'Which of the following things are necessary to create an HTML page?',
        'a': 'A text editor.',
        'b': 'Web Browser',
        'c': 'Both A and B',
        'd': 'None of the above',
        'correct': 'c'
    },
    {
        'que': 'Which of the following tags is used to indicate the page’s start and endpoints?',
        'a': '<body>',
        'b': '<html>',
        'c': '<head>',
        'd': '<doctype>',
        'correct': 'b'
    },
    {
        'que': 'Which of the following is true about HTML tags?',
        'a': 'Are case sensitive',
        'b': 'Are not case sensitive',
        'c': 'Are in uppercase',
        'd': 'Are in lowercase',
        'correct': 'b'
    },
    {
        'que': 'Which HTML tag is called the root element of an HTML document?',
        'a': '<html>',
        'b': '<body>',
        'c': '<title>',
        'd': '<head>',
        'correct': 'a'
    }

]

let index = 0;
let htmlQue = document.getElementById('html-que');
let optionInputs = document.querySelectorAll('.option')

let queHtmlBtn = document.querySelectorAll('.que-html-btn');

queHtmlBtn[0].addEventListener('click', function cb() {
    index = 0;
    loadQuestion();
})

queHtmlBtn[1].addEventListener('click', function cb() {
    index = 1; loadQuestion();
})
queHtmlBtn[2].addEventListener('click', function cb() {
    index = 2;
    loadQuestion();
})
queHtmlBtn[3].addEventListener('click', function cb() {
    index = 3;
    loadQuestion();
})
queHtmlBtn[4].addEventListener('click', function cb() {
    index = 4;
    loadQuestion();
})
queHtmlBtn[5].addEventListener('click', function cb() {
    index = 5;
    loadQuestion();
})
queHtmlBtn[6].addEventListener('click', function cb() {
    index = 6;
    loadQuestion();
})
queHtmlBtn[7].addEventListener('click', function cb() {
    index = 7;
    loadQuestion();
})
queHtmlBtn[8].addEventListener('click', function cb() {
    index = 8;
    loadQuestion();
})
queHtmlBtn[9].addEventListener('click', function cb() {
    index = 9;
    loadQuestion();
})
queHtmlBtn[10].addEventListener('click', function cb() {
    index = 10;
    loadQuestion();
})
queHtmlBtn[11].addEventListener('click', function cb() {
    index = 11;
    loadQuestion();
})
queHtmlBtn[12].addEventListener('click', function cb() {
    index = 12;
    loadQuestion();
})
queHtmlBtn[13].addEventListener('click', function cb() {
    index = 13;
    loadQuestion();
})
queHtmlBtn[14].addEventListener('click', function cb() {
    index = 14;
    loadQuestion();
})
queHtmlBtn[15].addEventListener('click', function cb() {
    index = 15;
    loadQuestion();
})
queHtmlBtn[16].addEventListener('click', function cb() {
    index = 16;
    loadQuestion();
})
queHtmlBtn[17].addEventListener('click', function cb() {
    index = 17;
    loadQuestion();
})
queHtmlBtn[18].addEventListener('click', function cb() {
    index = 18;
    loadQuestion();
})
queHtmlBtn[19].addEventListener('click', function cb() {
    index = 19;
    loadQuestion();
})
queHtmlBtn[20].addEventListener('click', function cb() {
    index = 20;
    loadQuestion();
})
queHtmlBtn[21].addEventListener('click', function cb() {
    index = 21;
    loadQuestion();
})
queHtmlBtn[22].addEventListener('click', function cb() {
    index = 22;
    loadQuestion();
})
queHtmlBtn[23].addEventListener('click', function cb() {
    index = 23;
    loadQuestion();
})
queHtmlBtn[24].addEventListener('click', function cb() {
    index = 24;
    loadQuestion();
})
queHtmlBtn[25].addEventListener('click', function cb() {
    index = 25;
    loadQuestion();
})
queHtmlBtn[26].addEventListener('click', function cb() {
    index = 26;
    loadQuestion();
})
queHtmlBtn[27].addEventListener('click', function cb() {
    index = 27;
    loadQuestion();
})
queHtmlBtn[28].addEventListener('click', function cb() {
    index = 28;
    loadQuestion();
})
queHtmlBtn[29].addEventListener('click', function cb() {
    index = 29;
    loadQuestion();
})

function loadQuestion() {

    const data = htmlQuestions[index];
    // Adding Question
    htmlQue.innerText = `${index + 1}) ${data.que}`;

    // Adding Options
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    border();
}

loadQuestion();

function border() {
    queHtmlBtn[index].style.backgroundColor = "yellow";
}

