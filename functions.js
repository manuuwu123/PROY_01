//Define la función sumar (add)
function add(a,b) {
   return a + b;
}

//Defina la función restar (substract)
function substract(a,b) {
  return a - b;
}

//Defina la función multiplicar (multiply)
function multiply(a,b) {
  return a * b;
}

//Defina la función dividir (divide)
function divide(a,b) {
  if (b == 0) {
    return "error no se puede dividir entre cero"
  } else {
    return a / b;
  }
}


exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;