const jsQuestions = [
    {
    'que':'Javascript is an _______ language?',
    'a' : 'Object-Oriented',
    'b' : 'Object-Based',
    'c' : 'Procedural',
    'd' : 'None of the above',
    'correct': 'a'
    },
    {
    'que':'Which of the following keywords is used to define a variable in Javascript?',
    'a' : 'var',
    'b' : 'let',
    'c' : 'Both A and B',
    'd' : 'None of the above',
    'correct': 'c'
    },
    {
    'que':'Which of the following methods is used to access HTML elements using Javascript?',
    'a' : 'getElementbyId()',
    'b' : 'getElementsByClassName()',
    'c' : 'Both A and B',
    'd' : 'None of the above',
    'correct': 'c'
    },
    {
    'que':'Upon encountering empty statements, what does the Javascript Interpreter do?',
    'a' : 'Throws an error',
    'b' : 'Ignores the statements',
    'c' : 'Gives a warning',
    'd' : 'None of the above',
    'correct': 'b'
    },
    {
    'que':'Which of the following methods can be used to display data in some form using Javascript?',
    'a' : 'document.write()',
    'b' : 'console.log()',
    'c' : 'window.alert()',
    'd' : 'All of the above',
    'correct': 'd'
    },
    {
    'que':'How can a datatype be declared to be a constant type?',
    'a' : 'const',
    'b' : 'var',
    'c' : 'let',
    'd' : 'constant',
    'correct': 'a'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    <script type="text/javascript">
    a = 5 + "9";
    document.write(a);
    </script>`,
    'a' : 'Compilation Error',
    'b' : '14',
    'c' : 'Runtime Error',
    'd' : '59',
    'correct': 'd'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    <script type="text/javascript" language="javascript">
      
    var a = "Scaler";
    var result = a.substring(2, 4);
    document.write(result);
      
    </script>`,
    'a' : 'al',
    'b' : 'ale',
    'c' : 'cal',
    'd' : 'caler',
    'correct': 'a'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    <script type="text/javascript" language="javascript">
     
    var x=12;
    var y=8;
    var res=eval("x+y");
    document.write(res);
     
    </script>`,
    'a' : '20',
    'b' : 'x+y',
    'c' : '128',
    'd' : 'None of the above',
    'correct': 'a'
    },
    {
    'que':'When the switch statement matches the expression with the given labels, how is the comparison done?',
    'a' : 'Both the datatype and the result of the expression are compared.',
    'b' : 'Only the datatype of the expression is compared.',
    'c' : 'Only the value of the expression is compared.',
    'd' : 'None of the above.',
    'correct': 'a'
    },
    {
    'que':'What keyword is used to check whether a given property is valid or not?',
    'a' : 'in',
    'b' : 'is in',
    'c' : 'exists',
    'd' : 'lies',
    'correct': 'a'
    },
    {
    'que':'What is the use of the <noscript> tag in Javascript?',
    'a' : 'None of the above.',
    'b' : 'Clears all the cookies and cache.',
    'c' : 'Both A and B.',
    'd' : 'The contents are displayed by non-JS-based browsers.',
    'correct': 'd'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    (function(){
     setTimeout(()=> console.log(1),2000);
     console.log(2);
     setTimeout(()=> console.log(3),0);
     console.log(4);
    })();`,
    'a' : '1 2 3 4',
    'b' : '2 3 4 1',
    'c' : '2 4 3 1',
    'd' : '4 3 2 1',
    'correct': 'c'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    (function(a){
     return (function(){
       console.log(a);
       a = 6;
     })()
    })(21);`,
    'a' : '6',
    'b' : 'NaN',
    'c' : '21',
    'd' : 'None of the above',
    'correct': 'c'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    function solve(arr, rotations){
     if(rotations == 0) return arr;
     for(let i = 0; i < rotations; i++){
       let element = arr.pop();
       arr.unshift(element);
     }
     return arr;
    }
    // solve([44, 1, 22, 111], 5);`,
    'a' : '[111, 44, 1, 22]',
    'b' : '[44, 1, 22, 111]',
    'c' : '[111, 44, 1, 22]',
    'd' : '[1, 22, 111, 44]',
    'correct': 'a'
    },
    {
    'que':`What will be the output for the following code snippet?
    
    <p id="example"></p>  
    <script>  
    function Func()  
    {  
    document.getElementById("example").innerHTML=Math.sqrt(81);  
    }  
    </script>`,
    'a' : '9',
    'b' : '81',
    'c' : 'Error',
    'd' : '0',
    'correct': 'a'
    },
    {
    'que':'When an operator’s value is NULL, the type of returned by the unary operator is:',
    'a' : 'Boolean',
    'b' : 'Undefined',
    'c' : 'Object',
    'd' : 'Integer',
    'correct': 'c'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    var a = 1;  
    var b = 0;  
    while (a <= 3)  
    {  
       a++;  
       b += a * 2;  
       print(b);
    }`,
    'a' : '4 10 18',
    'b' : '1 2 3',
    'c' : '1 4 7',
    'd' : 'None of the above',
    'correct': 'a'
    },
    {
    'que':`What does the Javascript “debugger” statement do?',
    'a' : 'It will debug all the errors in the program at runtime.',
    'b' : 'It acts as a breakpoint in a program.',
    'c' : 'It will debug error in the current statement if any.',
    'd' : 'All of the above.`,
    'correct': 'b'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    var a = Math.max();
    var b = Math.min();
    print(a);
    print(b);`,
    'a' : '-Infinity Infinity',
    'b' : 'Infinity -Infinity',
    'c' : 'Infinity Infinity',
    'd' : '-Infinity -Infinity',
    'correct': 'a'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    var a = Math.max() < Math.min();
    var b = Math.max() > Math.min();
    print(a);
    print(b);`,
    'a' : 'true false',
    'b' : 'false true',
    'c' : 'true true',
    'd' : 'false false',
    'correct': 'a'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    var a = true + true + true * 3;
    print(a)`,
    'a' : '3',
    'b' : '0',
    'c' : 'Error',
    'd' : '5',
    'correct': 'd'
    },
    {
    'que':`What is the output of the following code snippet?
    
    print(NaN === NaN);`,
    'a' : 'true',
    'b' : 'false',
    'c' : 'undefined',
    'd' : 'Error',
    'correct': 'b'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    print(typeof(NaN));`,
    'a' : 'Object',
    'b' : 'Number',
    'c' : 'String',
    'd' : 'None of the above',
    'correct': 'b'
    },
    {
    'que':'What does the ‘toLocateString()’ method do in JS?',
    'a' : 'Returns a localised object representation.',
    'b' : 'Returns a parsed string.',
    'c' : 'Returns a localized string representation of an object.',
    'd' : 'None of the above.',
    'correct': 'c'
    },
    {
    'que':'The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?',
    'a' : 'Object Serialization',
    'b' : 'Object Encapsulation',
    'c' : 'Object Inheritance',
    'd' : 'None of the above',
    'correct': 'a'
    },
    {
    'que':'Which function is used to serialize an object into a JSON string in Javascript?',
    'a' : 'stringify()',
    'b' : 'parse()',
    'c' : 'convert()',
    'd' : 'None of the above',
    'correct': 'a'
    },
    {
    'que':'The 3 basic object attributes in Javascript are:',
    'a' : 'Class, prototype, objects parameters.',
    'b' : 'Class, prototype, objects extensible flag.',
    'c' : 'Class, parameters, objects extensible flag.',
    'd' : 'Classes, Native object',
    'correct': 'b'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    let sum = 0; 
    const a = [1, 2, 3];
    a.forEach(getSum);
    print(sum);
    function getSum(ele) {
       sum += ele;
    }`,
    'a' : '6',
    'b' : '1',
    'c' : '2',
    'd' : 'None of the above',
    'correct': 'a'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    a = [1, 2, 3, 4, 5];
    print(a.slice(2, 4));`,
    'a' : '3, 4',
    'b' : '2, 3',
    'c' : '3, 4, 5',
    'd' : '2, 3, 4',
    'correct': 'a'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    print(parseInt("123Hello"));
    print(parseInt("Hello123"));`,
    'a' : '123 NaN',
    'b' : '123Hello Hello123',
    'c' : 'NaN NaN',
    'd' : '123 123',
    'correct': 'a'
    },
    {
    'que':'Which of the following are closures in Javascript?',
    'a' : 'Variables',
    'b' : 'Functions',
    'c' : 'Objects',
    'd' : 'All of the above',
    'correct': 'd'
    },
    {
    'que':'Which of the following is not a Javascript framework?',
    'a' : 'Node',
    'b' : 'Vue',
    'c' : 'React',
    'd' : 'Cassandra',
    'correct': 'd'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    var a = "hello";
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
       sum += (a[i] - 'a');
    }
    print(sum);`,
    'a' : '47',
    'b' : 'NaN',
    'c' : '0',
    'd' : 'None of the above',
    'correct': 'b'
    },
    {
    'que':'What keyword is used to declare an asynchronous function in Javascript?',
    'a' : 'async',
    'b' : 'await',
    'c' : 'setTimeout',
    'd' : 'None of the above',
    'correct': 'a'
    },
    {
    'que':'How to stop an interval timer in Javascript?',
    'a' : 'clearInterval',
    'b' : 'clearTimer',
    'c' : 'intervalOver',
    'd' : 'None of the above',
    'correct': 'a'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    const set = new Set();
    set.add(5);
    set.add('Hello');
    set.add({ name: 'Scaler' });
    for (let item of set) {
     console.log(item + 6);
    }`,
    'a' : '11 NaN NaN',
    'b' : '11 NaN [object Object]',
    'c' : '11 Hello6 [object Object]6',
    'd' : 'None of the above',
    'correct': 'c'
    },
    {
    'que':'How are objects compared when they are checked with the strict equality operator?',
    'a' : 'The contents of the objects are compared',
    'b' : 'Their references are compared',
    'c' : 'Both A and B',
    'd' : 'None of the above',
    'correct': 'b'
    },
    {
    'que':'What does ... operator do in JS',
    'a' : 'It is used to spread iterables to individual elements',
    'b' : 'It is used to describe a datatype of undefined size',
    'c' : 'No such operator exists',
    'd' : 'None of the above',
    'correct': 'a'
    },
    {
    'que':`What will be the output of the following code snippet?
    
    const example = ({ a, b, c }) => {
     console.log(a, b, c);
    };
    example(0, 1, 2);`,
    'a' : '0 1 2',
    'b' : '0 Undefined Undefined',
    'c' : 'Undefined Undefined Undefined',
    'd' : 'None of the above',
    'correct': 'c'
    },
    
    ]
