//null is the absence of value
let f = null;

//undefined
let g;

// functions are input output machines that can accept arguments or parameters
//declare and define function
function add(x,y){
    console.log(x+y);    
}
// run the function
const bill = add(5,15);
console.log(bill);

//scope
const x = 7
function helloX(){
    //scope variables are in-accessible outside outside of their functions
    const x = 9;
    //console.log(x);S
}
console.log(x);

const name = "Ben";
console.log(`Hello ${name}`);

function rocket(P, D, D) {
    const badges = Math.floor(P / B);
    const leftover = P % B;
    const money = badges * D + leftover
}

const age = 21;
if (age >= 18) {
    console.log("Vote");
} //wont run if the first statement is true
else if(age >= 21){
    console.group("You can drink adult beverages")
} else {
    console.log("no vote");
}

const age = 18;
const citizen = true;
// == means evaluation no data types considered
// === means evaliation of both type and if equal
if (age >= 35 && citizen === true) {
    console.log("run for pres")
}

if (!citizen){
    console.log("you gotta take test");
}

if (hw || !money){
    console.log("cannot go to the movies")
}

function enter(hasKey, hasMagic, is Banned) {
   if((hasKey === true || has Magic === true) && !isBanned) {
    console.log("you're princess ")
   }
}