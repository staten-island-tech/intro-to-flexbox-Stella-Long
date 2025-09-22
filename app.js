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