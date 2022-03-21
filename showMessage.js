function showMessage() {
  alert("This is a first function written in JS");
}
/////

function showMessage2() {
  let message ="This is a second function written in JS";
  alert(message);
}
showMessage2();
alert(showMessage2());  //don't work because var is local to function
//////

let userName="Masha";    //outer variable. The outer variable is only used if there’s no local one.
function showMessage3() {
  let message ="Hello, " + userName;
  alert(message);
}
showMessage3();
//////

let userName="Masha";
function  showMessage4() {
  userName="Maxim";    //changed the outer variable
  let message = "Hello, "+ userName;
  alert(message);
}
alert(userName);        //Masha before the function call
showMessage4();         //Hello,Maxim
alert(userName);        //Maxim
///////

let userName="Masha";
function showMessage5() {
  let userName="Vlada";     // declare a local variable
  let message = "Hello, " + userName;
  alert(message);
}
showMessage5();
alert(userName);            // Masha unchanged, the function did not access the outer variable
/////
