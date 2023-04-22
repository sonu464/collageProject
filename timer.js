setTimeout(() => {
    window.location.replace("result.html");
}, 3600000);

function countDown() {

    let countdown = document.getElementById("countdown")
    let countDownDate = new Date().getTime() + 3600000;

    let timer = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;


        let hours = Math.floor(distance / (1000 * 60 * 60));
        let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(distance % (1000 * 60 * 60) / 1000);

        let remainingTime = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
        countdown.textContent = remainingTime;

        if (distance < 0) {
            countdown.textContent = "Expired"
        }
    }, 1000);

}

countDown();
