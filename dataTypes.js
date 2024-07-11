let text = document.querySelector('p');
//name
let firstName = 'Saiyed';
let lastName = 'Kounain';
var courseName = 'JavaScript 2023 Course';
const price = 2100;
var modeOfPayment;
let btn = document.querySelector('button');
btn.addEventListener('click', showMsg);

function showMsg (){
    modeOfPayment = prompt('Mode of Payment?');

var output = firstName + " " + lastName + ' has bought the ' + courseName + ' of price $ ' + price + ' with ' + modeOfPayment;

text.textContent = output;


}
