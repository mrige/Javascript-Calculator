
var input_val = "";
var digit_list = [];
var op_pressed = false;
var is_negative = false;
var debug = true;


function reset(){
    input_val ="";
    digit_list=[];
    op_pressed = false;
    is_negative= false;
    document.getElementById("nameinput").value= input_val;
    console.clear();
}

function display(id){
    
    const number = document.getElementById(id).value;
    
    if(is_negative== true){
        number *= -1;
    }
    if(op_pressed == true){
        input_val = "";
    }
    else{
        digit_list.pop();
        input_val += number;
    }
    document.getElementById("nameinput").value = input_val;
    digit_list.push(parseFloat(input_val));
    
    if(debug == true){
        
        console.log("The input is : " + input_val);
        
    }
    
}

function add(){
    
    30
    
}
