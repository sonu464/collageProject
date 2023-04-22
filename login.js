
function loginBtn() {

    let username = document.querySelector(".user").value;
    let password = document.querySelector(".pass").value;
    if (username === "himt" && password === "mdu") {
        setTimeout(() => {
            window.location.replace("screen.html");
        }, 1000);
    } else {
        alert('Enter valid username and password!')
    }


    if (username === "himt" && password === "mdu") {
        setTimeout(() => {
            window.location.replace("result.html");
        }, 5000);
    }
}

// ______________________ Inspect Script _________________________

document.addEventListener('contextmenu',function cb(e){
    e.preventDefault();
})
