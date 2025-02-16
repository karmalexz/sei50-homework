// //console.log('hello world');
// Write a function named greaterNum that:
//
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
const greaterNum = function(num1, num2) {
  if(num1 > num2) {
    console.log('num1 is greater');

  } else {
    console.log('num2 is greater')
  }


}
greaterNum(14, 10);
greaterNum(1000, 2000);







// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
// The Grade Assigner
function helloWorld(lang) {
  if(lang == 'fr'){
    return('hello! world')
  } else if(lang == 'es'){
    return('hello! world')
} else {
    return('Hello, World');
}

}

console.log(helloWorld('es'));
console.log(helloWorld('fr'));
console.log(helloWorld('en'));





// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F" (for example, scores above 90 receive an "A", scores between 90 and 80 receive a "B", and so on).
// Call that function for a few different scores and log the result to make sure it works.
// The Pluralizer
function assignGrade(number) {
   if(number > 90) {
     return('you got grade A')


   } else if(number > 85) {
     return('you got grade B')
   } else if(number > 70){
     return('you got grade C')
   } else {
     return('you are dumb')
   }

 }
 console.log(assignGrade(92));
 console.log(assignGrade(72));
 console.log(assignGrade(55));



// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different combinations of noun & number, and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

//function pluralize(noun, number) {








  // Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

  function squareNumber(num) {
    let squaredNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
  }
squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfOf(num) {
var half = num / 2;
console.log('Half of ' + num + ' is ' +  half);
return half;
}

halfOf(5);





// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf(num1, num2) {

  const result = (num1 / num2) * 100;
  console.log(`the percent of ${num1} ${num2} = ${result}`);
return percentOf;
}
percentOf(5, 6);



// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
//   const areaOfcircle = function(radius) {
//   const area = (Math.pi * (radius * radius)).to fixed to(2);
//   console.log(`the area of circle ${}`)
// }



//const areaOfcircle
// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
// js-homework-2.md
// function four(number) {
//   const halfNumber = number / 2;
//   const squareNumber =
//
// }







// Strings
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!
//
// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

function DrEvil(amount) {
  if(amount === 1000000){
  return (dollar + (pinky));

  } else {
  return amount + "dollar"

  }
}
console.log(DrEvil);



// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'
// Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('walk'): 'walking'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// Not Bad
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
