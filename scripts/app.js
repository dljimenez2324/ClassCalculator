// --- we will pseudo code here ---

// we will use 10 buttons with numbers 0 through 9
// we will use + - *  and / for operators
// clear button
// = button
// display area
//
// --- Possible Features ---
// Perhaps a backspace button for deleting single characters without starting over completely
// Positive / negative button to toggle back and forth from pos to neg or neg to pos
// Possibly the ability to type out our numbers rather than use the keys

// --- The Process ---

// First number: we press number keys to build our first number, be it one or several digits
// Select an operator, telling us what kind of math we will be doing before selecting our second number
// Second number: we press number keys to build our second number, be it one or several digits
// Typically we click equals button to complete our math
// However, if we want to chain more operations / math together with more operators, clicking an operator should complete the math equation we set and then carry the result over as the first number for a new equation
// Also, if you hit equals , it will complete the equation, but then we can hit another operator in order to use the result as the first number of a new equation
// The clear button can be pressed at any time to clear out the equations / maths and the display at building a new first number

// --- How it Looks ---
// We want this calculator to look like a calculator layout.  meaning with a display on top and grid of keys / buttons down below


//
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMulti = document.getElementById("btnMulti");
let btnDivide = document.getElementById("btnDivide");
let btnEqual = document.getElementById("btnEqual");
let btnClear = document.getElementById("btnClear");

let displayArea = document.getElementById("displayArea");
let myPage = document.getElementById("myPage");

let stringNumber = "";
let operatorSaved = "";

let num1 = 0;
let num2 = 0;
let result = 0;


// lets test our buttons to see if they work
// The following function dictates the behavior of our number keys
function numberPress(btnNum){
    // used below to see if our code and buttons are linked 
    // alert("You pressed the " + btnNum + " key!");

    // check if we completed a number
    if(result !=0){
        resetCalc();
    }

    //this will take the empty string build upon itself appended and then shows us in console log
    stringNumber += btnNum;
    console.log(stringNumber);
    
    // after pressing a button update the display
    updateDisplay();
}

// operation pressed and saved to variable
function opPress(op){
    // if our result is NOT 0, we can assume we are trying to continue doing math with our current result as the first number
    if(result !=0){
        operatorSaved = op;
        num1 = result;  // this converts stringnumber to a number
        stringNumber = "";
        result = 0;
    }
    // if we have our first number and have NOT started building our second number, change the operator
    else if(num1 != 0 && stringNumber == ""){
        operatorSaved = op;
    }
   
    // if we have our first number and we have started building the second number, we want to "do math" and then continue on with our new operation
    else if(num1 !=0 && stringNumber != ""){
        doMath();
        operatorSaved = op;
        num1 = result;
        stringNumber = "";
        result = 0;
    }
    // by process of elimination we know that we were just building our 1st number and need to save it to continue on to building our second number
    else{
        operatorSaved = op;
        num1 = Number(stringNumber);  // this converts stringnumber to a number
        stringNumber = "";
    }
    
    updateDisplay();
}

// this will show our inputs on the display
function updateDisplay(){
    //displayArea.innerText = stringNumber;

    if(operatorSaved == ""){
        displayArea.innerText = stringNumber;
    }
    else{
        displayArea.innerText = num1 + " " + operatorSaved + " " + stringNumber;
    }
}

// this function clears out the saved values so we start over completely
function resetCalc(){
     stringNumber = "";
     operatorSaved = "";
     num1 = 0;
     num2 = 0;
     result = 0; 
     updateDisplay();
}

// clearing button
btnClear.addEventListener("click", function(){
    resetCalc();
});

function doMath(){
    num2 = Number(stringNumber);
    stringNumber = "";
    switch(operatorSaved){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "÷":
            result = num1 / num2
            break;            
    }
}

// equal event listener
btnEqual.addEventListener("click", function(){
    doMath();
    displayArea.innerText = result;
});

// return press down for equals event listener
myPage.addEventListener("keypress", function(event){
    if(event.key = "Enter"){
        doMath();
        displayArea.innerText = result;

    }
});


// number events
btn0.addEventListener("click", function(){
    numberPress("0")
});
btn1.addEventListener("click", function(){
    numberPress("1")
});
btn2.addEventListener("click", function(){
    numberPress("2")
});
btn3.addEventListener("click", function(){
    numberPress("3")
});
btn4.addEventListener("click", function(){
    numberPress("4")
});
btn5.addEventListener("click", function(){
    numberPress("5")
});
btn6.addEventListener("click", function(){
    numberPress("6")
});
btn7.addEventListener("click", function(){
    numberPress("7")
});
btn8.addEventListener("click", function(){
    numberPress("8")
});
btn9.addEventListener("click", function(){
    numberPress("9")
});


// operator event listener
btnPlus.addEventListener("click", function(){
    opPress("+");
});
btnMinus.addEventListener("click", function(){
    opPress("-");
});
btnMulti.addEventListener("click", function(){
    opPress("*");
});
btnDivide.addEventListener("click", function(){
    opPress("÷");
});



