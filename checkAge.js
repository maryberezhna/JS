// variant 1
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

// variant2
function checkAge(age) {
  return (age > 18) ? true : confirm("Did parents allow you?");
}

//variant3
function checkAge(age) {
  return (age > 18) || confirm("Did parents allow you?");
}
