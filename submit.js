let right = 0;
let wrong = 0;
let index = 0;
let htmlQue = document.getElementById('html-que');
let optionInputs = document.querySelectorAll('.option');
let submit = document.getElementById("submit");

function loadQuestion() {

    reset();
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

function submitQuiz() {
    const data = htmlQuestions[index];
    let ans;

    optionInputs.forEach(input => {
        if (input.checked) {
            ans = input.value;
            visited();
        }else{
            notChecked()
        }
    })

    if (ans === data.correct) {
        right++;
        console.log("right",right);
    } else {
        wrong++;
        console.log("wrong",wrong);
    }

    index++;
    loadQuestion();
    
}


function reset() {
    optionInputs.forEach(input => {
        input.checked = false;
    })
}

function visited() {
    queHtmlBtn[index].style.backgroundColor = "green";
}
function notChecked() {
    queHtmlBtn[index].style.backgroundColor = "red";
}






