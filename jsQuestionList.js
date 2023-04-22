const jsQuestions = [
   {
      'que': 'Javascript is an _______ language?',
      'a': 'Object-Oriented',
      'b': 'Object-Based',
      'c': 'Procedural',
      'd': 'None of the above',
      'correct': 'a'
   },
   {
      'que': 'Which of the following keywords is used to define a variable in Javascript?',
      'a': 'var',
      'b': 'let',
      'c': 'Both A and B',
      'd': 'None of the above',
      'correct': 'c'
   },
   {
      'que': 'Which of the following methods is used to access HTML elements using Javascript?',
      'a': 'getElementbyId()',
      'b': 'getElementsByClassName()',
      'c': 'Both A and B',
      'd': 'None of the above',
      'correct': 'c'
   },
   {
      'que': 'Upon encountering empty statements, what does the Javascript Interpreter do?',
      'a': 'Throws an error',
      'b': 'Ignores the statements',
      'c': 'Gives a warning',
      'd': 'None of the above',
      'correct': 'b'
   },
   {
      'que': 'Which of the following methods can be used to display data in some form using Javascript?',
      'a': 'document.write()',
      'b': 'console.log()',
      'c': 'window.alert()',
      'd': 'All of the above',
      'correct': 'd'
   },
   {
      'que': 'How can a datatype be declared to be a constant type?',
      'a': 'const',
      'b': 'var',
      'c': 'let',
      'd': 'constant',
      'correct': 'a'
   },
   {
      'que': 'Which object in Javascript doesn’t have a prototype?',
      'a': 'Base Object',
      'b': 'All objects have a prototype',
      'c': 'None of the objects have a prototype',
      'd': 'None of the above',
      'correct': 'a'
   },
   {
      'que': 'Which of the following are not server-side Javascript objects?',
      'a': 'Date',
      'b': 'FileUpload',
      'c': 'Function',
      'd': 'All of the above',
      'correct': 'd'
   },
   {
      'que': ' How do we write a comment in javascript?',
      'a': '/* */',
      'b': '//',
      'c': '#',
      'd': '$ $',
      'correct': 'b'
   },
   {
      'que': 'When the switch statement matches the expression with the given labels, how is the comparison done?',
      'a': 'Both the datatype and the result of the expression are compared.',
      'b': 'Only the datatype of the expression is compared.',
      'c': 'Only the value of the expression is compared.',
      'd': 'None of the above.',
      'correct': 'a'
   },
   {
      'que': 'What keyword is used to check whether a given property is valid or not?',
      'a': 'in',
      'b': 'is in',
      'c': 'exists',
      'd': 'lies',
      'correct': 'a'
   },
   {
      'que': 'What is the use of the <noscript> tag in Javascript?',
      'a': 'None of the above.',
      'b': 'Clears all the cookies and cache.',
      'c': 'Both A and B.',
      'd': 'The contents are displayed by non-JS-based browsers.',
      'correct': 'd'
   },
   {
      'que': 'Which one of the following is not a example of closures?',
      'a': 'Graphics',
      'b': 'Variables',
      'c': 'Functions',
      'd': 'Objects',
      'correct': 'a'
   },
   {
      'que': 'What is the primary rule of the Lexical Scoping?',
      'a': 'Functions are always declared in the scope',
      'b': 'Variables are declared inside the function',
      'c': 'Functions are always declared outside the scope',
      'd': 'Functions gets executes using scope chain',
      'correct': 'd'
   },
   {
      'que': 'What is required in order to implement the Lexical Scoping?',
      'a': 'To reference the current scope chain',
      'b': 'Dereference the current scope chain',
      'c': 'Get the object',
      'd': 'Return the value',
      'correct': 'a'
   },
   {
      'que': 'Which one of the following utilize the CPU cycles in a massive manner?',
      'a': 'GUI (Graphic User Interface)',
      'b': 'Statically generated graphics',
      'c': 'Generic scoping',
      'd': 'Dynamically generated graphics',
      'correct': 'd'
   },
   {
      'que': 'When an operator’s value is NULL, the type of returned by the unary operator is:',
      'a': 'Boolean',
      'b': 'Undefined',
      'c': 'Object',
      'd': 'Integer',
      'correct': 'c'
   },
   {
      'que': 'Which one of the following can be considered as the opposite approach of the Lexical Scoping?',
      'a': 'Dynamic scoping',
      'b': 'Literal scoping',
      'c': 'Static scoping',
      'd': 'Generic scoping',
      'correct': 'a'
   },
   {
      'que': 'What does the Javascript “debugger” statement do?',
    'a' : 'It will debug all the errors in the program at runtime.',
    'b' : 'It acts as a breakpoint in a program.',
    'c' : 'It will debug error in the current statement if any.',
    'd' : 'All of the above.',
      'correct': 'b'
   },
   {
      'que': 'Which one of the following algorithmic languages is not the lexical scoping standardized in?',
      'a': 'Html',
      'b': 'Ada',
      'c': 'Pascal',
      'd': 'Modula2',
      'correct': 'a'
   },
   {
      'que': 'In JavaScript, what kind of scoping is used?',
      'a': 'Literal scoping',
      'b': 'Sequential scoping',
      'c': 'Segmental scoping',
      'd': 'Lexical scoping',
      'correct': 'd'
   },
   {
      'que': `What will be the output of the following code snippet?
    var a = true + true + true * 3;
    print(a)`,
      'a': '3',
      'b': '0',
      'c': 'Error',
      'd': '5',
      'correct': 'd'
   },
   {
      'que': `What is the output of the following code snippet?
    
    print(NaN === NaN);`,
      'a': 'true',
      'b': 'false',
      'c': 'undefined',
      'd': 'Error',
      'correct': 'b'
   },
   {
      'que': `What will be the output of the following code snippet?
    
    print(typeof(NaN));`,
      'a': 'Object',
      'b': 'Number',
      'c': 'String',
      'd': 'None of the above',
      'correct': 'b'
   },
   {
      'que': 'What does the ‘toLocateString()’ method do in JS?',
      'a': 'Returns a localised object representation.',
      'b': 'Returns a parsed string.',
      'c': 'Returns a localized string representation of an object.',
      'd': 'None of the above.',
      'correct': 'c'
   },
   {
      'que': 'What are the different types of Pop up boxes available in JavaScript?',
      'a': 'Alert',
      'b': 'Prompt',
      'c': 'Confirm',
      'd': 'All of the above',
      'correct': 'd'
   },
   {
      'que': 'Which function is used to serialize an object into a JSON string in Javascript?',
      'a': 'stringify()',
      'b': 'parse()',
      'c': 'convert()',
      'd': 'None of the above',
      'correct': 'a'
   },
   {
      'que': 'The 3 basic object attributes in Javascript are:',
      'a': 'Class, prototype, objects parameters.',
      'b': 'Class, prototype, objects extensible flag.',
      'c': 'Class, parameters, objects extensible flag.',
      'd': 'Classes, Native object',
      'correct': 'b'
   },
   {
      'que': 'Which of the following POSIX signals generate events?',
      'a': 'SIGINT',
      'b': 'SIGDOWN',
      'c': 'SIGFLOAT',
      'd': 'SIGSHORT',
      'correct': 'a'
   },
   {
      'que': `What will be the output of the following code snippet?
    a = [1, 2, 3, 4, 5];
    print(a.slice(2, 4));`,
      'a': '3, 4',
      'b': '2, 3',
      'c': '3, 4, 5',
      'd': '2, 3, 4',
      'correct': 'a'
   },
   {
      'que': 'Which of the following is the correct syntax to print a page using JavaScript?',
      'a': 'print();',
      'b': 'print();',
      'c': 'print();',
      'd': 'print();',
      'correct': 'b'
   },
   {
      'que': 'Which of the following are closures in Javascript?',
      'a': 'Variables',
      'b': 'Functions',
      'c': 'Objects',
      'd': 'All of the above',
      'correct': 'd'
   },
   {
      'que': 'Which of the following is not a Javascript framework?',
      'a': 'Node',
      'b': 'Vue',
      'c': 'React',
      'd': 'Cassandra',
      'correct': 'd'
   },
   {
      'que': 'Which HTML element is used to put the JavaScript code?',
      'a': '<javascript>',
      'b': '<js>',
      'c': '<scripting>',
      'd': '<script>',
      'correct': 'd'
   },
   {
      'que': 'What keyword is used to declare an asynchronous function in Javascript?',
      'a': 'async',
      'b': 'await',
      'c': 'setTimeout',
      'd': 'None of the above',
      'correct': 'a'
   },
   {
      'que': 'How to stop an interval timer in Javascript?',
      'a': 'clearInterval',
      'b': 'clearTimer',
      'c': 'intervalOver',
      'd': 'None of the above',
      'correct': 'a'
   },
   {
      'que': 'Which of the following is not a JavaScript Data Types?',
      'a': 'Boolean',
      'b': 'Undefined',
      'c': 'Number',
      'd': 'Float',
      'correct': 'd'
   },
   {
      'que': 'What was the original name of JavaScript when it discovered?',
      'a': 'LiveScript',
      'b': 'EScript',
      'c': 'JScript',
      'd': 'Mocha',
      'correct': 'd'
   },
   {
      'que': 'What does ... operator do in JS',
      'a': 'It is used to spread iterables to individual elements',
      'b': 'It is used to describe a datatype of undefined size',
      'c': 'No such operator exists',
      'd': 'None of the above',
      'correct': 'a'
   },
   {
      'que':'Which of the following is not a JavaScript framework or library?',
      'a': 'Polymer',
      'b': 'Meteor',
      'c': 'jQuery',
      'd': 'Cassandra',
      'correct': 'd'
   },

]


let jsindex = 0;
let jsQue1 = document.getElementById('js-que');
let jsOptionInputs = document.querySelectorAll('.jsOption')

let quejsBtn = document.querySelectorAll('.que-js-btn');

for(let i = 0;i<40;++i){
   quejsBtn[i].addEventListener('click', function cb() {
           jsindex = i;
           loadQuestion2();
       })
}


function loadQuestion2() {

   const data1 = jsQuestions[jsindex];
   // Adding Question
   jsQue1.innerText = `${jsindex + 1}) ${data1.que}`;

   // Adding Options
   jsOptionInputs[0].nextElementSibling.innerText = data1.a;
   jsOptionInputs[1].nextElementSibling.innerText = data1.b;
   jsOptionInputs[2].nextElementSibling.innerText = data1.c;
   jsOptionInputs[3].nextElementSibling.innerText = data1.d;
   jsborder();
}

function jsborder() {
   quejsBtn[jsindex].style.backgroundColor = "#ffb405";
}
