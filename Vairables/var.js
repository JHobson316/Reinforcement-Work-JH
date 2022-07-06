"use strict"

// Exercise 1
let greet1 = "my name is: ";
let greet2 = "Jordan";
let fullGreeting = greet1 + greet2;
console.log(fullGreeting);

//Exercise 2
function balance(){
    let total = prompt("Please enter your account balance.");
    let newTotal = parseInt(total, 10)-10;
    let newAlert = alert(`you spent $10. Your new balance is $${newTotal}`);
    return newAlert;
}

//balance();

// Exercise 3
function grading(){
    let grade = prompt("Enter your grade.");
    let extraCredit = prompt("Enter your extra credit.");
    let finalGrade = parseInt(grade, 10)+parseInt(extraCredit, 10);
    alert(`Your final grade is ${finalGrade}.`);
}

//grading();

// Exercise 4
function deduction(){
    let total = prompt("Please enter your account balance.");
    let withdrawal = prompt("How much would you like to withdraw?");
    let newBalance = parseInt(total, 10) - parseInt(withdrawal, 10);
    alert(`You withdrew $${withdrawal}. Your new balance is $${newBalance}.`);
}

deduction();