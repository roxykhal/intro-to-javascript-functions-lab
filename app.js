//Max of 2 numbers (1)

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

console.log(maxOfTwoNumbers(3, 9));

//Write a function named isAdult, should take an age (number) and return 'Adult' if age is 18 or over and 'Minor' otherwise (2)


const isAdult = (age) => {
    if (age >= 18) {
        return 'adult';
    }
    else {
        return 'minor';
}};

    console.log(isAdult(19));

//Write a function named isCharAVowel that takes a single character as an argument. Return true if character is a vowel, and false otherwise (3)

const isCharAVowel = (character) => {
   return ['a', 'e', 'i', 'o', 'u'].includes(character.toLowerCase());
};

console.log(isCharAVowel('f'));

//Create a function called generateEmail. Two strings a name and a domain and should return a simple email address. 

const generateEmail = (name, domain) => {
    return name + '@' + domain;

};

console.log(generateEmail("roxykhal", "hotmail.com"));

//Define function called greetUser. Take a name and a time of day (morn, afternoon, evening) and return a personalised greeting. 

const greetUser = (timeOfDay, name) => {
    return `Have a good ${timeOfDay}, ${name}`;
}

console.log(greetUser(' morning', ' roxy'));

//Define function maxOfThree, accept three numbers and return the largest 

const maxOfThree =(x, y, z) => {
    return Math.max(x, y, z);
};

console.log(maxOfThree(5, 10, 15));

//CalculateTip, create a function. Two arguments: Bill amount and the tip percentage (as a whole number). Function should return the amount of the tip

const calculateTip = (billAmount, tipPercentage) => {
  return Math.round(billAmount * (tipPercentage / 100));
};

//Function named convertTemperature, takes two arguments - a temperature, and a string representing the scale. Convert the tempt to the other scale 

const convertTemperature = (temperature, scale) => {
  if (scale === "C") {
    // Celsius → Fahrenheit
    return (temperature * 9/5) + 32;
  } else (scale === "F"); {
    // Fahrenheit → Celsius
    return (temperature - 32) * 5/9;
  } 
};

console.log('Exercise 8 Result:', convertTemperature(32, "C")); // 89.6
console.log('Exercise 8 Result:', convertTemperature(32, "F")); // 0

//Basic calculator 

const basicCalculator = (num1, num2, operation) => {

    if(operation === 'subtract') {
        return num1 - num2;
    } else if (operation === 'add') {
        return num1 + num2;
    }  else if (operation === 'multiply') {
        return num1 * num2;
    }  else (operation === 'divide'); {
        return num1 / num2;
    }
 };

console.log(basicCalculator(10, 6, 'add'));