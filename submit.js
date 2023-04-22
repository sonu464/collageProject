let right = 0;
let wrong = 0;
let index = 0;
let total = htmlQuestions.length;
let htmlQue = document.getElementById('html-que');
let optionInputs = document.querySelectorAll('.option');
let submit = document.getElementById("submit");

let navbar = document.querySelector(".navbar");
let container = document.querySelector(".container")

function loadQuestion() {

    if (index === total) {
        endQuiz();
    }

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
        }
    })

    if (ans === data.correct) {
        right++;
        console.log("right", right);
    } else {
        wrong++;
        console.log("wrong", wrong);
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
    queHtmlBtn[index].style.backgroundColor = "#bc894b";
}

function endQuiz() {
    let final1 = document.getElementById("final1")
    navbar.style.display = "none";
    container.style.display = "none";
    final1.style.display = "block"
    let div = document.createElement("div");
    final1.appendChild(div);
    div.className = "result"
    div.innerHTML = `
    <h1>Thankyou For Coming</h1>
    <h2>Right Marks ${right}/${total} </h2> `
}





