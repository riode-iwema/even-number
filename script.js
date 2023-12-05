//  question 1
function Even(number) {
    return number % 2 === 0;
  }
  let theNumber = 17;
  if (Even(theNumber)) {
    console.log(`${theNumber} is an even number.`);
  } else {
    console.log(`${theNumber} is an odd number.`);
  }
// question 2
function displayNumbers(first, second) {
    for (let i = first; i <= second; i++) {
      console.log(i);
    }
  }
  displayNumbers(0, 9);

//   question 3
function sumNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
      sum += i;
    }
    return sum;
  }
  let answer = sumNumbers(0, 9);
  console.log(`The sum of numbers from 0 to 9 is: ${answer}`);
  
  