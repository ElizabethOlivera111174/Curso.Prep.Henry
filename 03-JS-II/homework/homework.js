// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  let mayor;
  if (x>=y) {
    mayor=x;
  }else{
    mayor=y;
  }
  return mayor;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  let entrada;
  if (edad>=18) {
    entrada = "Allowed";
  }else{
    entrada ="Not allowed";
  }
  return entrada
} 

  function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
    let usuario;
    switch (status) {
      case 1:
        usuario="Online";
        break;
      case 2:
        usuario="Away";
        break;
    
      default:
        usuario="Offline";
        break;
    }
    return usuario;
  }


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  let user;
  if (idioma=="aleman") 
    user="Guten Tag!";
  else if (idioma=="mandarin") 
    user="Ni Hao!";
  else if (idioma=="ingles")
    user="Hello!";
  else
    user="Hola!";
  return user;
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  let devuelve;
  switch (color) {
    case "blue":
      devuelve="This is blue";
      break;
    case "red":
      devuelve="This is red";
      break;
    case "green":
      devuelve="This is green";
      break;
    case "orange":
      devuelve="This is orange";
      break;
    default:
      devuelve="Color not found";
      break;

    
  }
  return devuelve;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  let result;
  if (numero==10|| numero== 5 ) {
    result=true;
  }
  else{
    result=false;
  }
  return result;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  let result;
  if (numero>20 && numero <50) {
    result= true;
  }
  else{
    result=false;
  }
  return result;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  let result;
  if (numero== Math.floor(numero)) {
    result=true;
  }
  else{
    result=false;
  }

  return result;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let result;

  if(numero%3==0 && numero%5==0){
    result= "fizzbuzz";
  }
  else if (numero%3==0) {
    result="fizz";
  }
  else if(numero%5==0){
    result="buzz";
  }
  else
    result= numero;

    return result;
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

  let result;
  if(num1<0 || num2<0 || num3<0){
    result ="Hay negativos"
  }
  else if ((num1> num2) && (num1> num3)&& (num1>0)) {
    result="Número 1 es mayor y positivo";
  }
  
  else if(num1==0 || num2==0 || num3==0){
    result="Error";
  }
  else if ((num3>num1) && (num3>num2)) {
    result= num3+ 1;
  }
  else{
    result=false;
  }

  return result;
  
  
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  let result;
  let contar=0;
  let primo;
  for (let index = 1; index < numero+1; index++) {
    result=numero%index;
    if (result==0) {
      contar=contar+1;
    }
    
  }
  
  if (contar==2) {
    primo=true;
  }
  else{
    primo=false;
  }
  return primo;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  let result;
  if (valor) {
    result="Soy verdadero";
  }
  else{
    result="Soy falso";
  }
  return result;
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
 
  let multiplicar = []
  for (let i = 0; i < 11; i++) {
        multiplicar.push(6 * i);
  }
  return multiplicar;
}

function tieneTresDigitos(numero){
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  if(numero > 99 && numero < 1000){
    return true
  }
  return false
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let result=numero;
  let contador=0;
  do {
      contador=contador+1;
      result= result+5;
    
  } while (contador<8);
  return result;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
