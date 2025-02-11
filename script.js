let first = '';
let second = '';
let operator = '';
let a = document.getElementsByTagName("button");
let display = document.getElementById("display");
let selection = Array.from(a);
let userInput = '';
let final = '';
let total = 0;
let currentOperation = 0; // 0 = Adding First number, 1 = Select Operation, 2 = Adding Second Number
let selectedOp = ''; 
let dotCounter = 0;

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

function determine_input(input_type,value){
    //
    if (input_type == "num"){
        //
        if (value == '.'){
            if (dotCounter == 1){
                value = '';
            } else {
                dotCounter = 1
            }
        }
        //
        if (currentOperation == 0){
            // We are adding first number 
            userInput += value;
            first = userInput;
            display.textContent = first;
        } else if (currentOperation == 1){
             // We are adding first number 
             userInput += value;
             second = userInput;
             console.log(second);           
             display.textContent = second;
        }
    }
    // 
    if (input_type == "op"){
        // 
        if (currentOperation == 0){
            if (first != ''){
                selectedOp = value;
                current_operation = 1;
                userInput = '';
                dotCounter = 0;
            }
        }
        //
       else if (currentOperation == 1 && second != ''){
            first = operate(parseFloat(first),selectedOp,parseFloat(second));
            display.textContent = first;
            console.log(first);
            selectedOp = value;
            second = '';
            userInput = '';
            dotCounter = 0;

        }
    }
    //
    if (input_type == 'cal'){
        first = parseFloat(first);
        second = parseFloat(second);
        display.textContent = operate(first,selectedOp,second);
        first = '';
        second = '';
        currentOperation = 0;
        selectedOp = '';
        userInput='';
        dotCounter = 0;
    }

}

function interact(){
    selection.forEach(element => element.addEventListener("click", (event)=>{
        determine_input(event.target.className,event.target.value)
   
    }))
};

interact();