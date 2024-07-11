function Strength(password){
    let i = 0;
    if (password.length >= 6){
        i++;
    }
    if (password.length >= 10){
        i++;
    }
    if (/[A-Z]/.test(password)){
        i++;
    }
    if (/[0-9]/.test(password)){
        i++;
    }
    if (/[A-Za-z0-9]/.test(password)){
        i++;
    }
    return i;
}

let container = document.querySelector(".container");
document.addEventListener("keyup", function(){
    let password = document.querySelector("#YourPassword").value;


    let strength = Strength(password);
    if (strength <= 2){
        container.classList.add("weak");
        container.classList.remove("moderate");
        container.classList.remove("strong");
    }
    else if (strength > 2 && strength <= 4){
        container.classList.remove("weak");
        container.classList.add("moderate");
        container.classList.remove("strong");
    }
    else {
        container.classList.remove("weak");
        container.classList.remove("moderate");
        container.classList.add("strong");
    }
});
let password = document.querySelector("#YourPassword");
let show = document.querySelector(".show");

show.onclick = function sayMsg() {
    if  (password.type === "password"){
        password.setAttribute("type", "text");
        show.classList.add("hide");
    } else {
        password.setAttribute("type", "password");
        show.classList.remove("hide");
    }
};
let submit = document.querySelector('.submit');
submit.addEventListener('keyup', function(){
    let password = document.querySelector('#YourPassword').value;

    submit.onclick = function checkMsg(){
    if (pd <= 5){
        alert("Password Cannot be Weak");
    }
};
}
);