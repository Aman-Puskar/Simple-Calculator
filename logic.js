let input = document.querySelector("#input");
// let Ac = document.querySelector("#AC");
// let leftbracket = document.querySelector("#leftbracket");
let rightbracket = document.querySelector("#rightbracket");
let clear = document.querySelector("#clear");
let nine = document.querySelector("#nine");
let eight = document.querySelector("#eight");
let seven = document.querySelector("#seven");
let minus = document.querySelector("#minus");
let six = document.querySelector("#six");
let five = document.querySelector("#five");
let four = document.querySelector("#four");
let multiply = document.querySelector("#multiply");
let three = document.querySelector("#three");
let two = document.querySelector("#two");
let one = document.querySelector("#one");
let plus = document.querySelector("#plus");
let zero = document.querySelector("#zero");
let dot = document.querySelector("#dot");
let divide = document.querySelector("#divide");
let equal = document.querySelector("#equal");

function inputfield(operations) {
    input.innerHTML += operations;

}

document.querySelector("#AC").addEventListener('click', () => {
    input.innerHTML = " ";
})


document.querySelector("#leftbracket").addEventListener('click', () => {
    inputfield(leftbracket.innerHTML);
})
rightbracket.addEventListener('click', () => {
    inputfield(rightbracket.innerHTML)
})
clear.addEventListener('click', () => {
    let s = input.innerHTML;
    if (s.length > 0) {
        s = s.slice(0, -1); 
    }
    input.innerHTML = s;
})
nine.addEventListener('click', () => {
    inputfield(nine.innerHTML);
})
eight.addEventListener('click', () => {
    inputfield(eight.innerHTML);
})
seven.addEventListener('click', () => {
    inputfield(seven.innerHTML);
})
minus.addEventListener('click', () => {
    inputfield(minus.innerHTML);
})
six.addEventListener('click', () => {
    inputfield(six.innerHTML);
})
five.addEventListener('click', () => {
    inputfield(five.innerHTML);
})
four.addEventListener('click', () => {
    inputfield(four.innerHTML);
})
multiply.addEventListener('click', () => {
    inputfield(multiply.innerHTML);
})
three.addEventListener('click', () => {
    inputfield(three.innerHTML);
})
two.addEventListener('click', () => {
    inputfield(two.innerHTML);
})
one.addEventListener('click', () => {
    inputfield(one.innerHTML);
})
plus.addEventListener('click', () => {
    inputfield(plus.innerHTML);
})
zero.addEventListener('click', () => {
    inputfield(zero.innerHTML);
})
dot.addEventListener('click', () => {
    inputfield(dot.innerHTML);
})
divide.addEventListener('click', () => {
    inputfield(divide.innerHTML);
})
equal.addEventListener('click', () => {
    let expression = input.innerHTML;
    let result = eval(expression);
        input.innerHTML = result;

})