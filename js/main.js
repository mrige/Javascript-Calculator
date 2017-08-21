
var inputval = "";
var digits = [];
var entries = 0;
var result = 0.0;
var opPressed = false;

function display(id){
    //if(opPressed == false)
    const val = document.getElementById(id).value;
    inputval = inputval + val;
    document.getElementById("nameinput").value = inputval;
    digits.push(parseFloat(inputval));
    console.log("IN");
}

function reset(){
    inputval = "";
    document.getElementById("nameinput").value = inputval;
    result = 0.0;
    digits = [];
    entries = 0;
}

function add() {

   // var val = document.getElementById("nameinput").value;
    //digits.push(parseFloat(val));
    inputval = "";
    result += digits.pop();
    entries++;
    document.getElementById("nameinput").value = result;
    digits.push(result);
    console.log(result);
}

function subtract(){
   // var val = document.getElementById("nameinput").value;
    //digits.push(parseFloat(val));
    console.log(result);
    inputval = "";
    if(entries == 0){
        result = digits.pop();
    }
    else {
        result -= digits.pop();
    }
    entries++;
    console.log(entries);

    document.getElementById("nameinput").value = result;
}

function multiply(){}

function divide(){}

function equals(operator){
    var val = document.getElementById("nameinput").value;
    var res;
    digits.push(parseFloat(val));;
    if(operator == 1){
        res =  digits.pop() + digits.pop();
        console.log(res);
    }
    //document.getElementById("nameinput").value = res;
    digits = [];
    digits.push(document.getElementById("nameinput").value);
}
