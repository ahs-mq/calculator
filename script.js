let first = '';
let second = '';
let operator = '';
let a = document.getElementsByTagName("button");
let display = document.getElementById("display");
let selection = Array.from(a);
let userInput = '';
let final = '';
let total = 0;


function add(x,y){
    return total = x + y;
}

function sub(x,y){
    return total = x - y;
}

function divide(x,y){
    if ( y == 0){
    return alert('You can\'t divide by zero!')
    }else{
    return total = x / y;
    }
   
}

function mult(x,y){
    return total = x * y;
}

function operate(x,op,y){
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
        if( event.target.className == 'num'){
            userInput += event.target.value;
            first = userInput;
        } else if(event.target.className == 'op'){
            console.log(first);
            operator = event.target.value;
            console.log(operator);
            if (operator.length > 1){
                operator = operator.slice(-1);
            }
            userInput = '';
        } else if(event.target.className == 'cal'){
            //second = userInput;
            console.log(first);
            console.log(second);
            first = parseInt(first);
            second = parseInt(second);
            console.log(operate(first,operator,second));
            userInput = '';
            first = '';
            second = '';
            operator = '';
        }
    }))
};

interact();