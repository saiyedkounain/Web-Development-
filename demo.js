let heyBtn = document.querySelector('button');
heyBtn.addEventListener("click", getMsg);
let text = document.querySelector('h1');

function getMsg(){
    let name = prompt('Enter new name: ');
    text.textContent = 'Roll No 52: ' + name;

}