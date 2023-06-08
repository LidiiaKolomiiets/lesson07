const oneDollar = 40;
let result = 1;
let string = ''

for (let i = 10; i <= 100; i += 10) {
  result = i * oneDollar;
  string = string + result + '  ';
}
alert(string)


const integer = +prompt('Enter an integer.');

let text = 'Error! Enter another value!'

for (let i = 2; i <= integer; i++) {
  if (integer % i === 0 && i < integer) {
    text = integer + ' is not easy!';
    break;
  }
  else if (integer === i) {
    text = integer + ' is a prime number!';
  }
}
alert(text);


const numberInPower = +prompt("Enter to check whether it is possible to get a number from 3 to the power: ");

let resultNumber = 'Error! Cannot get this value!';


for (let i = 0; i < Math.abs(numberInPower); i++) {
  if (numberInPower === Math.pow(3, i) || numberInPower === Math.pow((-3), i)) {
    resultNumber = 'Can be obtained ' + numberInPower + ' by reducing the number 3 to a certain power!';
    break
  }

  else if (Math.abs(numberInPower) < Math.pow(3, i)) {
    resultNumber = 'You cannot get ' + numberInPower + ' by raising the number 3 to some power!';
    break
  }
}

alert(resultNumber);