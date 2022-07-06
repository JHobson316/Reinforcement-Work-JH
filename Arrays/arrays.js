// Exercise 1
function exercise1(){
    console.log('Ex1');
    const avengers = ['Tony','Steve','Bruce','Natasha','Wanda'];
    avengers.forEach(i => {
        console.log(i);
    });
}

exercise1();
 
// Exercise 2
function exercise2(){
    console.log('Ex2');
    const nums = ['1','2','3','4','5'];
    nums.forEach(element => {
        console.log(element);
    });
}

exercise2();
 
// Exercise 3
function exercise3(){
    console.log('Ex3');
    let vanguard = ['cayde','ikora','zavala','crow'];
    console.log(vanguard[2]);
    vanguard.splice(2,1);
    console.log(vanguard);
}

 exercise3();

// Exercise 4
function exercise4(){
    console.log('Ex4');
    let exArray = ['5','3','7','4'];
    console.log(exArray[2]);
    exArray.splice(1);
    console.log(exArray[2]);
}

exercise4();

// Exercise 5
console.log('Ex5');
let doubleArray = [477, 8914, 40461, 599148];
const doublingValues = doubleArray.map((item) => {
    return item*2;
});

console.log(doublingValues);

// Exercise 6
console.log('Ex6');
let words = ['pen', 'book', 'code'];
const pluralMaker = words.map((item) => {
    return item+'s';
});

console.log(pluralMaker);

// Exercise 7
console.log('Ex7');
let price = [390, 190, 311.85, 67, 19048, 5000, 670];
const priceCheck = price.filter((item) => {
    return item <=350;
});

console.log(priceCheck);

// Exercise 8
console.log('Ex8');
const cities = [
    { "name": "Shanghai", "population": 24300000 },
    { "name": "Los Angeles", "population": 3792621 },
    { "name": "New Delhi", "population": 21800000 },
    { "name": "Mumbai", "population": 18400000 },
    { "name": "Chicago", "population": 2695598 },
    { "name": "Houston", "population": 2100263 },
];
const popCheck = cities.filter((item) => {
    return item.population >= 5000000;
});

console.log(popCheck);

// Exercise 9
console.log('Ex9');
const nums = [1,2,3,4,5];
const Summary = nums.reduce((acc, curr) => acc + curr);

console.log(Summary);

// Exercise 10
const average = [1, 2, 3, 456, 108115, 45909.15154, 1988.1545, 145e8];
let sum = average.reduce((acc,curr) => acc + curr);
let mean = (sum / average.length);
console.log(mean);
