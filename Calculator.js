///CALCULATOR.JS

//ADDITION
function add(num1, num2) {
  var input = document.getElementById('outputbox').value;
  num1 = input[0];
  num2 = input[2];

  var resultBox = document.getElementById('resultbox');

  var result = parseInt(num1) + parseInt(num2);

  resultBox.value = result;
}

//SUBTRACTION
function subtraction(num1, num2) {
  var input = document.getElementById('outputbox').value;
  num1 = input[0];
  num2 = input[2];

  var resultBox = document.getElementById('resultbox');

  var result = parseInt(num1) - parseInt(num2);

  resultBox.value = result;
}

//MULTIPLICATION
function multiplication(num1, num2) {
  var input = document.getElementById('outputbox').value;
  num1 = input[0];
  num2 = input[2];

  var resultBox = document.getElementById('resultbox');

  var result = parseInt(num1) * parseInt(num2);

  resultBox.value = result;
}

//DIVSION
function division(num1, num2) {
  var input = document.getElementById('outputbox').value;
  num1 = input[0];
  num2 = input[2];

  var resultBox = document.getElementById('resultbox');

  var result = parseInt(num1) / parseInt(num2);

  resultBox.value = result;
}

//Extra Functions--Decimal, Equals, Enter, etc.
function checkButtonClearClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonclear = document.getElementById("buttonclear");
  var clear = "";
  
  buttonclear.clicked = false;

  if (buttonclear.value == clear){
    buttonclear.clicked = true;
    outputbox.value = "";
  }
  else{
    return "  ";
  }

}

function checkButtonEqualClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonequal = document.getElementById("buttonequal");
  var equal = "equal";
  
  buttonequal.clicked = false;

  if (buttonequal.value == equal){
    buttonequal.clicked = true;
    outputbox.value = outputbox.value + '=';
    let values = outputbox.value.split(','); //turn box value to an array
    if (outputbox.value.slice(-1) == '='){ //If I am solving an equation, get the operator and two numbers involved...
      if (outputbox.value[1] == '+') {
      //ADD
      add(outputbox.value[0], outputbox.value[2]);
      }else{
        console.log("OPT INVAL")
      }
      if (outputbox.value[1] == '-') {
      //SUBTRACT
      subtraction(outputbox.value[0], outputbox.value[2]);
      }else{
        console.log("OPT INVAL")
      }
      if (outputbox.value[1] == 'x') {
        //MULTIPLY
      multiplication(outputbox.value[0], outputbox.value[2]);
      }else{
        console.log("OPT INVAL")
      }
      if (outputbox.value[1] == '/') {
        //DIVIDE
      division(outputbox.value[0], outputbox.value[2]);
      }else{
        console.log("OPT INVAL")
      }
    }
  }
  else{
    return "  ";
  }

}

function checkButtonDecimalClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttondecimal = document.getElementById("buttondecimal");
  var decimal = "decimal";
  
  buttondecimal.clicked = false;

  if (buttondecimal.value == decimal){
    buttondecimal.clicked = true;
    outputbox.value = ".";
  }
  else{
    return "  ";
  }

}

//OPERATOR SET--+..etc.
function checkButtonPlusClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonplus = document.getElementById("buttonplus");
  var plus = "plus";
  
  buttonplus.clicked = false;

  if (buttonplus.value == plus){
    buttonplus.clicked = true;
    outputbox.value = outputbox.value + '+';//concat + input with last input

  }
  else{
    return "  "//button not clicked, return null.
  }

}

function checkButtonMinusClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonminus = document.getElementById("buttonminus");
  var minus = "minus";
  
  buttonminus.clicked = false;

  if (buttonminus.value == minus){
    buttonplus.clicked = true;
    outputbox.value = outputbox.value + '-';
  }
  else{
    return "  ";
  }

}

function checkButtonMultiplyClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonmultiply = document.getElementById("buttonmultiply");
  var multiply = "multiply";
  
  buttonmultiply.clicked = false;

  if (buttonmultiply.value == multiply){
    buttonmultiply.clicked = true;
    outputbox.value = outputbox.value + 'x';
  }
  else{
    return "  ";
  }

}

function checkButtonDivideClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttondivide = document.getElementById("buttondivide");
  var divide = "divide";
  
  buttondivide.clicked = false;

  if (buttondivide.value == divide){
    buttondivide.clicked = true;
    outputbox.value = outputbox.value + '/';
  }
  else{
    return "  ";
  }

}

//NUMBER SET---0-9

function checkButtonZeroClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonzero = document.getElementById("button0");
  var zero = parseInt(buttonzero.value);
  
  buttonzero.clicked = false;

  if (buttonzero.value == zero){
    buttonzero.clicked = true;
    outputbox.value = outputbox.value + zero;
  }
  else{
    return "  ";
  }

}

function checkButtonOneClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonone = document.getElementById("button1");
  var one = parseInt(buttonone.value);
  
  buttonone.clicked = false;

  if (buttonone.value == one){
    buttonone.clicked = true;
    outputbox.value = outputbox.value + one;
  }
  else{
    return "  ";
  }

}

function checkButtonTwoClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttontwo = document.getElementById("button2");
  var two = parseInt(buttontwo.value);
  
  buttontwo.clicked = false;

  if (buttontwo.value == two){
    buttontwo.clicked = true;
    outputbox.value = outputbox.value + two;
  }
  else{
    return "  ";
  }

}

function checkButtonThreeClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonthree = document.getElementById("button3");
  var three = parseInt(buttonthree.value);
  
  buttonthree.clicked = false;

  if (buttonthree.value == three){
    buttonthree.clicked = true;
    outputbox.value = outputbox.value + three;
  }
  else{
    return "  ";
  }

}

function checkButtonFourClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonfour = document.getElementById("button4");
  var four = parseInt(buttonfour.value);
  
  buttonfour.clicked = false;

  if (buttonfour.value == four){
    buttonfour.clicked = true;
    outputbox.value = outputbox.value + four;
  }
  else{
    return "  ";
  }

}

function checkButtonFiveClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonfive = document.getElementById("button5");
  var five = parseInt(buttonfive.value);
  
  buttonfive.clicked = false;

  if (buttonfive.value == five){
    buttonfive.clicked = true;
    outputbox.value = outputbox.value + five;
  }
  else{
    return "  ";
  }

}

function checkButtonSixClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonsix = document.getElementById("button6");
  var six = parseInt(buttonsix.value);
  
  buttonsix.clicked = false;

  if (buttonsix.value == six){
    buttonsix.clicked = true;
    outputbox.value = outputbox.value + six;
  }
  else{
    return "  ";
  }

}

function checkButtonSevenClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonseven = document.getElementById("button7");
  var seven = parseInt(buttonseven.value);
  
  buttonseven.clicked = false;

  if (buttonseven.value == seven){
    buttonseven.clicked = true;
    outputbox.value = outputbox.value + seven;
  }
  else{
    return "  ";
  }

}

function checkButtonEightClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttoneight = document.getElementById("button8");
  var eight = parseInt(buttoneight.value);

  buttoneight.clicked = false;

  if (buttoneight.value == eight){
    buttoneight.clicked = true;
    outputbox.value = outputbox.value + eight;
  }
  else{
    return "  ";
  }

}

function checkButtonNineClicked(){
  var outputbox = document.getElementById("outputbox");
  var buttonnine = document.getElementById("button9");
  var nine = parseInt(buttonnine.value);

  buttonnine.clicked = false;

  if (buttonnine.value == nine){
    buttonnine.clicked = true;
    outputbox.value = outputbox.value + nine;
  }
  else{
    return "  ";
  }

}


//Test outputs
console.log(calculate(1, "+", 2)); // 3
console.log(calculate(4, "-", 2)); // 2
console.log(calculate(2, "*", 3)); // 6
console.log(calculate(8, "/", 4)); // 2
console.log(calculate(2, "$", 3)); // Invalid operator