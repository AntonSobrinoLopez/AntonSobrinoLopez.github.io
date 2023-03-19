let result = document.getElementById("screen")
let num1 = "";
let num2 = "";
let resultado = "";
let operador = "";
// result.innerText=0




function cleanScreen(){
  window.location.reload();
  result.innerText=0
}

function numero(X){
  
  if (!operador) {
    num1 += X;
    result.innerText = num1;
  } else {
    num2 += X;
    result.innerText += X;
  }
}


function calcular() {
  switch (operador) {
    case "+":
      resultado = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      resultado = parseInt(num1) - parseInt(num2);
      break;
    case "*":
      resultado = parseInt(num1) * parseInt(num2);
      break;
    case "/":
      resultado = parseInt(num1) / parseInt(num2);
      break;
    default:
      return;
  }

  result.innerText = num1 +' ' + operador + ' ' + num2 + "=" + resultado;
}


function operator(oper) {
  operador = oper;
  result.innerText = num1 + oper;
}



