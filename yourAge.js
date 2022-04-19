alert("some code");
'use strict';  //обычно люди используют его для всего файла.

let admin;
let name = "John";
admin=name;
alert(admin);

//also you can do this  let admin, name;


let planetName;   // correct ourPlanetName
let currentUser;  //correct currentUserName

let age = prompt('Cкільки вам років?', 25); //Второй параметр является необязательным, но если не указать его, то Internet Explorer вставит строку "undefined" в поле для ввода.
alert(`Тобі ${age} років!`);


let isBoss = confirm("Ти тут головний?");
alert( isBoss );

alert("6"/"2");
let  str = "123"; //string
alert(typeof str);
let num = Number(str); //cтає числом 123
alert(typeof num); // number
