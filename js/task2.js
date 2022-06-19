const userAge = +prompt("Enter your age:");
if (userAge > 1 && userAge < 122 ) {
  alert("You are " + userAge + " years old");
} else if (userAge === 1) {
  alert("You are " + userAge + " year old");
} else {
  alert(" Try again ");
}
