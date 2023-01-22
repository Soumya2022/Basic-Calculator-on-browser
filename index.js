// basic calculator

let a = prompt("Enter first value")
let b = prompt("Enter second value")

let choice = prompt("Enter your choice")

function add(a, b) {
    console.log(parseInt(a)+parseInt(b))
 }
 function subtract(a, b) {
     console.log(a-b)
 }   
 function multiply(a, b) {
     console.log(a*b)
 }

 if(choice == 1) {
     add(a, b);
 }
else if(choice == 2) {
    subtract(a, b);
 }
 else if(choice == 2) {
     multiply(a, b);
}
