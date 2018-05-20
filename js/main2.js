
var input_val = "";
var output_val = "";
var digit_list = [];
var op = "";
var op_pressed = false;
var is_negative = false;
var percent_pressed = false;
var debug = true;
var result = 0;
var counter = 0;
var num_digits = 0;



function reset(){
    input_val ="";
    counter = 0;
    result = 0;
    num_digits = 0;
    output_val = 0;
    digit_list=[];
    op_pressed = false;
    is_negative= false;
    percent_pressed = false;
    document.getElementById("nameinput").value= input_val;
    console.clear();
}

function display(id){
    
    var number = document.getElementById(id).value;
    
    if(counter == 0 && is_negative== true){
        number *= -1;
        is_negative = false;
    }
    if(op_pressed == true){

        input_val = "";
        op_pressed = false;
        counter++;
        num_digits = 0;
    }
    else{

        if(input_val === ""){
            input_val = number;
            num_digits++;
        }
        else{
            input_val+=number;
            if(num_digits > 0){
                var m  = digit_list.pop();
                num_digits++;
            }
        }
        digit_list.push(parseFloat(input_val));
    }
    
    if(counter != 1 || is_negative == true || percent_pressed == true){
        output_val = digit_list.pop();
        digit_list.push(output_val);
        document.getElementById("nameinput").value = output_val+"";
        percent_pressed = false;
    }
    
    if(debug == true){
        
        console.log("The input is : " + input_val);
        digit_list.forEach(print);
        function print(item){
            console.log(item + " ");
        }
        console.log("NEW INPUT");
    }
    
}




function add(){
    op_pressed = true;
    if(digit_list.length == 2){
        result = digit_list.shift();
        result = chooseOp(result, digit_list.pop());
        digit_list = [];
        digit_list.push(result);
        console.log("Result : " + result);
    }
    op = "+";
    display("plus");
}




function subtract(){
    is_negative = true;
    op_pressed = true;
    if(digit_list.length == 2){
        result = digit_list.shift();
        result = chooseOp(result, digit_list.pop());
        digit_list = [];
        digit_list.push(result);
    }
    op = "-";
    display("minus");
}




function multiply(){
    op_pressed = true;
    if(digit_list.length == 2){
        result = digit_list.shift();
        result = chooseOp(result, digit_list.pop());
        digit_list = [];
        digit_list.push(result);
    }
    op = "*";
    display("multiply");
}



function divide(){
    op_pressed = true;
    if(digit_list.length == 2){
        result = digit_list.shift();
        result = chooseOp(result, digit_list.pop());
        digit_list = [];
        digit_list.push(result);
    }
    op = "/";
    display("divide");
}



function equals(){
    op_pressed = true;
    if(digit_list.length == 2){
        result = digit_list.shift();
        result = chooseOp(result, digit_list.pop());
        digit_list = [];
        digit_list.push(result);
    }
    op = "=";
    display("equals");
}

function signSwitch(){
    op_pressed = true;
    is_negative = true;
    var val =  digit_list.pop();
    val *= -1;
    digit_list.push(val);
    display("plusminus");
}

function percentage(){
    
    op_pressed = true;
    percent_pressed = true;
    var val = digit_list.pop();
    val = val/100;
    digit_list.push(val);
    display("percent");
    
}

function chooseOp(a,b){
    var ans = 0;
    if(op == "+"){
        ans = a+b;
    }
    else if(op == "-"){
        ans = a - b;
    }
    else if(op == "*"){
        ans = a*b;
    }
    else if(op == "/"){
        ans = a/b
    }
    else if (op == "+/-"){
        ans = result* -1;
    }
    
    return ans;
}
