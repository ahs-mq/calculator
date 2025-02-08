let first = 0;
let second = 0;
let operator = '';
let a = document.getElementsByClassName("num");
let display = document.getElementById("display");
let selection = Array.from(a);
let userInput = '';
let final = ''


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
        if (event.target.value != '='){
            userInput += event.target.value;
            console.log(userInput);
        } else {
            final = userInput.replace(/[+\-*/]+/g, match => match[0]);
            final = final.split(/([+\-*/])/);
            console.log(final);
            console.log(operate(Number(final[0]),final[1],Number(final[2])));

        }
    }));
    
};

interact();