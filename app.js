

var user = prompt('time to play code cracker. what is your name?');
console.log(user);

alert('Hi there ' + user + ', I\'m going to ask you a question.');
var answer = prompt(user + ', this is a yes/no question.  Please answer with Y or N.  Do you love coding?');
console.log('my users answer:', answer);

if (answer === 'Y') {
  alert('yay!  i love coding too!');
} else {
  alert('well, you prolly should not be in 201');
}

// Answer two //

var difficulty = prompt('what level of difficulty are yo used to?');
console.log('my users answer', answer);
