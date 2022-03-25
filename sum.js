// function sum (a,b) {
//   return a + b;   ///The directive return can be in any place of the function.
// }
// let  result = sum(5, 13);
// alert(result);
// ////

function checkAge(age) {
  if (age>=18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?")
  }
}

let age = prompt ("How old are you?", 18);  //Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.
if (checkAge(age)){
  alert("Access granted");
} else{
  alert("Access denied");
}

function showMovie(age) {
  if ( !checkAge(age) ) {  //!=если не
    return;   //It is possible to use return without a value. That causes the function to exit immediately.
  }
  alert( "Showing you the movie" );
}
/////
//A function with an empty return or without it returns undefined//
// Never add a newline between return and the value
