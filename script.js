let first = 0;
let second = 0;
let operator = '';
let a = document.getElementsByClassName("num");
let display = document.getElementById("display");
let selection = Array.from(a);
let userInput = [];


function add(x,y){
    return x + y;
}

function sub(x,y){
    return x - y;
}

function divide(x,y){
    if ( y == 0){
    return alert('You can\'t divide by zero!')
    }else{
    return x / y;
    }
   
}

function mult(x,y){
    return x * y;
}

function operate(x,op,y){
    first = x;
    second = y;
    operator = op;

    if (op == '+'){
        return add(x,y);
    } else if (op == '-'){
        return sub(x,y);
    } else if (op == 'x' || op == '*'){
        return mult(x,y);
    } else if (op == '/'){
        return divide(x,y);
    }
}

function interact(){
    selection.forEach(element => element.addEventListener("click", (event)=>{
        userInput.push(event.target.value);
        //console.log(userInput);
    }) )
    
}

console.log(interact());

console.log(userInput);