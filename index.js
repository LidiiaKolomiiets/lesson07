const oneDollar = 40;
let result = 1;
let string = '' 
 
for( let i = 10; i <= 100; i+=10){
    result = i * oneDollar;
    string = string + result + '  ' ;
}
alert(string)


const integer = +prompt('Enter an integer.');

if( integer === 0 || integer === 1 || isNaN(integer)){
    alert('Error. Try another value.')
}

for (let i = 2; i <= integer; i++) {
    if (integer % i == 0 && i < integer) {
    alert('Error. Try another value.')
      break;
    } 
    else if (integer === i) {
      alert(integer + ' is a prime number!');
    }
}

let numberInPower = +prompt("Enter to check whether it is possible to get a number from 3 to the power: ");

let resultNumber = 'Error! Cannot get this value!';


for(let i = 0; i < Math.abs(numberInPower); i++){
    if(numberInPower === Math.pow(3, i) || numberInPower === Math.pow((-3), i))
    resultNumber = 'Can be obtained ' + numberInPower + ' by reducing the number 3 to a certain power!';
}

alert(resultNumber)

