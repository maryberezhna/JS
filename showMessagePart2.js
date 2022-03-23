 function showMessage(from,text) {
  alert(from + ":" + text)
}
showMessage('Ann','Hello!');
 showMessage('Masha','How are you doing?');
 /////////

 function showMessage7(from, text) {
 from='*' + from + "*";
   alert( from + ":" + text );
 }
 let from = "Ann";
 showMessage7(from, "Hello");
 alert(from)
//////////////


function showMessage8(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage8("Ann","some text"); // Ann: no text given
/////

 function showMessage9(text) {
    if (text === undefined){
      text="empty message";
    }
    alert(text);
 }
showMessage9();
////

  function showMessage10(text) {
  text= text||'empty';   // // if text is undefined or otherwise falsy, set it to 'empty'
  alert(text);
}
showMessage10();
//////
//  nullish coalescing operator ??
  function showCount(count) {
   alert(count ?? "nobody knows");  //// if count is undefined or null, show "unknown"
  }
  showCount(0);
  showCount(null);
  showCount();

