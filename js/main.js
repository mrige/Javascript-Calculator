
var inputval = "";
var digits = [];
var entries = 0;
var result = 0.0;
var opPressed = false;
var subPressed = false;
var prevPressed = "";

function display(id){
    
    const val = document.getElementById(id).value;
    var negate = 1;
    inputval = inputval + val;
    if(entries == -1 && subPressed == true){
        negate = -1;
    }
    document.getElementById("nameinput").value = negate * inputval;
    digits.push(parseFloat(negate * inputval));
    subPressed = false;
    console.log(inputval);
    
}

function reset(){
    inputval = "";
    document.getElementById("nameinput").value = inputval;
    result = 0.0;
    digits = [];
    entries = 0;
}

function add() {
    if(prevPressed == "sub")
        subtract();
    
    inputval = "";
    if(prevPressed =="add"){
        
        var inVal = digits.pop();
    
        result += inVal;
        entries++;
        document.getElementById("nameinput").value = result;
        digits.push(result);
        console.log(inVal + " val");
    }
    prevPressed = "add";
    subPressed = false;
}

function subtract(){
    if(prevPressed == "add")
        add();
    
    subPressed = true;
    
    if(entries > 0){
        inputval = "";
        
        var inVal = digits.pop();
        
        if(inVal < 0 || entries == 0)
            result += inVal;
        else
            result -= inVal;
        
        
        digits.push(result);
        console.log(result  + " sub");
        console.log(entries);
        document.getElementById("nameinput").value = result;
        prevPressed = "sub";
        
        
    }else{
        entries = -1;
    }
    
    
}

function multiply(){}

function divide(){}

function equals(operator){
    
    var val = document.getElementById("nameinput").value;
    var res;
    digits.push(parseFloat(val));
    
    if(operator == 1){
        res =  digits.pop() + digits.pop();
        console.log(res);
    }
    
    digits = [];
    digits.push(document.getElementById("nameinput").value);
    
}
