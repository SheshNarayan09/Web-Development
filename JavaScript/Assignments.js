// Question 1: Write a program that determines whether a given number is positive or negative.
let num = -10;


if (num >= 0) {
    console.log("The number is positive");
} else {
    console.log("The number is negative");
}


// Question 2: Write a program that checks if a number is even or odd.
let num = 7;

if (num % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}


// Question 3: Write a program to determine the greater of two numbers.
let num1 = 25;
let num2 = 40;

if (num1 > num2) {
    console.log(num1 + " is greater");
} else if (num2 > num1) {
    console.log(num2 + " is greater");
} else {
    console.log("Both numbers are equal");
}


// Question 4: Write a program that transforms a numerical grade to a letter grade (e.g., grade 10 should display "A").
let grade = 10;

if (grade >= 9) {
    console.log("A");
} else if (grade >= 8) {
    console.log("B");
} else if (grade >= 7) {
    console.log("C");
} else if (grade >= 6) {
    console.log("D");
} else {
    console.log("F");
}


// Question 5: Write a program that calculates the ticket price based on age.
let age = 25;

if (age < 12) {
    console.log("Ticket price = 5");
} else if (age < 18) {
    console.log("Ticket price = 10");
} else if (age < 60) {
    console.log("Ticket price = 20");
} else {
    console.log("Ticket price = 15");
}


// Question 6: Write a program that calculates a discount based on the purchase amount.
let price = 120;

if (price >= 100) {
    console.log("Discount = 20%");
} else if (price >= 50) {
    console.log("Discount = 10%");
} else {
    console.log("Discount = 0%");
}


// Question 7: Write a program that greets the user based on the time of day.
let hour = new Date().getHours();

if (hour < 12) {
    console.log("Good morning");
} else if (hour < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}


// Question 9: Write a program that calculates the Body Mass Index (BMI) and categorizes it.

Formula: BMI = weight / (height * height)

let weight = 70;
let height = 1.75;

let bmi = weight / (height * height);

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi < 25) {
    console.log("Normal weight");
} else if (bmi < 30) {
    console.log("Overweight");
} else {
    console.log("Obese");
}


// Question 9: Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers, give players clues if their guess is higher, lower, or correct.
let secretNumber = 50;
let guess = 40;

if (guess > secretNumber) {
    console.log("Your guess is higher than the secret number");
} else if (guess < secretNumber) {
    console.log("Your guess is lower than the secret number");
} else {
    console.log("Correct! You guessed the number");
}


// Question 10: How can you check if a variable’s value makes someone an adult or a minor with If Else?
let age = 17;

if (age >= 18) {
    console.log("The person is an adult");
} else {
    console.log("The person is a minor");
}


// OBJECTS QUESTION //


// 1. Creating Objects & Property Access
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(car.model);      // Dot notation
console.log(car["year"]);    // Bracket notation



// 2. Adding & Updating Properties
const student = {
    name: "Alex",
    grade: 10
};

student.subject = "Math";
student.grade = 11;

console.log(student);



// 3. Deleting Properties
const product = {
    id: 101,
    name: "Laptop",
    price: 999,
    inStock: true
};

delete product.inStock;

console.log(product);



// 4. Checking Property Existence
const user = {
    name: "Sam",
    age: 25
};

console.log("email" in user);

console.log(user.hasOwnProperty("name"));



// 5. Counting Own Properties
const book = {
    title: "1984",
    author: "George Orwell",
    pages: 328
};

const keys = Object.keys(book);

console.log(keys);
console.log("Total properties:", keys.length);



// 6. Nested Objects — Reading Deep Properties
const user = {
    id: 42,
    profile: {
        firstName: "ravi",
        lastName: "kumar",
        contact: {
            email: "ravi@test.com",
            city: "delhi"
        }
    }
};

console.log(user.profile.contact.email);
console.log(user.profile.contact.city);



// 7. Property Shorthand & Object Methods
const name = "John";
const age = 30;

const person = {
    name,
    age,

    sayHello() {
        console.log("Hello, my name is John!");
    }
};

console.log(person);
person.sayHello();




// 8. Iterating Over Object Properties
const scores = {
    Math: 90,
    Science: 85,
    History: 88
};

for (const subject in scores) {
    console.log(subject + ": " + scores[subject]);
}



// 9. Transforming Object Values
const prices = {
    apple: 1.5,
    banana: 0.8,
    orange: 1.2
};

const doubledPrices = {};

for (const key in prices) {
    doubledPrices[key] = prices[key] * 2;
}

console.log(doubledPrices);



// 13. Basic Constructor Function
function Rectangle(width, height) {
    this.width = width;
    this.height = height;


    this.getArea = function () {
        return this.width * this.height;
    };
}

const rectangle1 = new Rectangle(10, 5);
const rectangle2 = new Rectangle(8, 4);

console.log(rectangle1.getArea());
console.log(rectangle2.getArea());
