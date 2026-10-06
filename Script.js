
// Currying & UnCurrying 

//1.Create a curried function that accepts 3 numbers one by one and prints their sum.
function add(a)
{
    return function(b)
    {
        return function(c)
        {
            return a+b+c;
        }
    }
}
document.writeln(add(10)(20)(30)+"<br>");

//2.Create a curried function that accepts name, department, and salary and prints all three values.
function details(name)
{
    return function(department)
    {
        return function(salary)
        {
            document.writeln(name+" "+department+" "+salary+"<br>")
        }
    }
}
details("K.Rajesh Babu")("Full Stack Java Developer")(30000);

//3.Create a curried function that accepts 3 numbers and prints their multiplication.
function mul(num1)
{
    return function(num2)
    {
        return function(num3)
        {
            return num1*num2*num3;
        }
    }
}
document.writeln(mul(10)(20)(30)+"<br>");

//4.Convert a curried function that accepts a, b, and c into an uncurried function.
function uncurry(fn) {
    return function(a, b, c) {
        return fn(a)(b)(c);
    };
}

function add4(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

const uncurriedAdd = uncurry(add4);

console.log(uncurriedAdd(10, 20, 30));

//5.Write both curried and uncurried versions of a function that adds 4 numbers.
function add5(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a + b + c + d;
            };
        };
    };
}

console.log(add5(10)(20)(30)(40));

function add6(a, b, c, d) {
    return a + b + c + d;
}

console.log(add6(10, 20, 30, 40));


//Spread Operator

//6.Create two arrays of 5 numbers and merge them using the array spread operator.
let arr6 = [1, 2, 3, 4, 5];
let arr7 = [6, 7, 8, 9, 10];

let mergedArray = [...arr6, ...arr7];

console.log(mergedArray);

//7.Create two arrays containing student names and merge them into one array using spread.
let students7 = ["Rajesh", "Rahul", "Arun"];
let students8 = ["Kiran", "Vijay", "Ravi"];

let allStudents = [...students7, ...students8];

console.log(allStudents);

//8.Create an array and create another array containing the original values plus 3 new values using spread.
let students1 = ["Rajesh", "Rahul", "Arun"];
let students2 = ["Kiran", "Vijay", "Ravi"];

let allStudents8 = [...students1, ...students2];

console.log(allStudents8);

//9.Create two objects containing employee details and merge them using the object spread operator.
let employee1 = {
    name: "Rajesh",
    age: 25
};

let employee2 = {
    department: "IT",
    city: "Hyderabad"
};

let employee9 = {
    ...employee1,
    ...employee2
};

console.log(employee9);

//10.Create an employee object and create a new object by copying it and adding a salary property using spread.
let employee10 = {
    name: "Rajesh",
    department: "IT"
};

let newEmployee = {
    ...employee10,
    salary: 50000
};

console.log(newEmployee);

//11.Create two objects with different properties and combine them into one object using spread.
let personalDetails = {
    name: "Rajesh",
    age: 25
};

let professionalDetails = {
    job: "Developer",
    experience: "Fresher"
};

let employee = {
    ...personalDetails,
    ...professionalDetails
};

console.log(employee);

//12.Create two arrays and use spread to create one array in reverse order.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let reverseArray = [...arr2.reverse(), ...arr1.reverse()];

console.log(reverseArray);


// Rest Operator In Functions

//13.
function task13(a, b, ...remaining) {
    console.log("First value:", a);
    console.log("Second value:", b);
    console.log("Remaining values:", remaining);
}

task13(10, 20, 30, 40, 50, 60);

//14.
function task14(name, department, ...marks) {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
}

task14("Rajesh", "Computer Science", 85, 90, 78, 88);

//15.
function task15(a, b, ...additionalNumbers) {
    console.log("First number:", a);
    console.log("Second number:", b);
    console.log("Additional numbers:", additionalNumbers);
}

task15(10, 20, 30, 40, 50, 60);

//16.
function task16(...values) {
    console.log("5th value:", values[4]);
}

task16(10, 20, 30, 40, 50, 60);

//17.
function task17(product, price, ...remaining) {
    console.log("Product:", product);
    console.log("Price:", price);
    console.log("Remaining values:", remaining);
}

task17("Laptop", 50000, "Dell", "Black", "16GB RAM", "512GB SSD");

//18.
function task18(a, b, ...remaining) {
    console.log("First number:", a);
    console.log("Second number:", b);
    console.log("Remaining numbers:", remaining);
}

task18(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);



// Array Destructuring

//19.
function task19() {
    let values = [10, 20, 30, 40];

    let [a, b, c, d] = values;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

task19();

//20.
function task20() {
    let studentDetails = ["Rajesh", "Computer Science", 85];

    let [name, department, marks] = studentDetails;

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
}

task20();

//21.
function task21() {
    let numbers = [10, 20, 30, 40, 50];

    let [first, , , fourth] = numbers;

    console.log("First value:", first);
    console.log("Fourth value:", fourth);
}

task21();

//22.
function task22() {
    let values = [10, [20, 30], 40];

    let [a, [b, c], d] = values;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

task22();

//23.
function task23() {
    let numbers = [10, [20, [30, [40]]]];

    let [a, [b, [c, [d]]]] = numbers;

    console.log("First value:", a);
    console.log("Second value:", b);
    console.log("Third value:", c);
    console.log("Fourth value:", d);
}

task23();



// Object Destructuring

//24.
function task24() {
    let employee = {
        name: "Rajesh",
        designation: "Developer",
        salary: 50000
    };

    let { name, designation, salary } = employee;

    console.log("Name:", name);
    console.log("Designation:", designation);
    console.log("Salary:", salary);
}

task24();

//25.
function task25() {
    let student = {
        name: "Rajesh",
        department: "Computer Science",
        cgpa: 8.5
    };

    let { name, department, cgpa } = student;

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
}

task25();

//26.
function task26() {
    let employee = {
        name: "Rajesh",
        age: 25,
        designation: "Developer",
        salary: 50000,
        city: "Hyderabad"
    };

    let { name, designation, salary } = employee;

    console.log("Name:", name);
    console.log("Designation:", designation);
    console.log("Salary:", salary);
}

task26();

//27.
function task27() {
    let company = {
        employee: {
            name: "Rajesh",
            designation: "Developer"
        },
        team: {
            members: ["Rahul", "Arun", "Kiran"]
        }
    };

    let {
        employee: { name },
        team: { members }
    } = company;

    console.log("Employee Name:", name);
    console.log("Team Members:", members);
}

task27();

//28.
function task28() {
    let company = {
        department: {
            employee: {
                name: "Rajesh",
                designation: "Developer"
            }
        }
    };

    let {
        department: {
            employee: { name }
        }
    } = company;

    console.log("Employee Name:", name);
}

task28();


// Array Manipulation

//29.
function task29() {
    let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

    fruits.push("Papaya", "Pineapple", "Watermelon");

    console.log(fruits);
}

task29();

//30.
function task30() {
    let numbers = [10, 20, 30, 40, 50];

    numbers.pop();

    console.log(numbers);
}

task30();

//31.
function task31() {
    let students = ["Rajesh", "Rahul", "Arun", "Kiran", "Vijay"];

    students.shift();

    console.log(students);
}

task31();

//32.
function task32() {
    let numbers = [30, 40, 50, 60];

    numbers.unshift(10, 20);

    console.log(numbers);
}

task32();

//33.
function task33() {
    let numbers = [10, 20, 30, 40, 50];

    numbers.splice(2, 1, 100);

    console.log(numbers);
}

task33();

//34.
function task34() {
    let values = [10, 20, 30, 40, 50, 60];

    values.splice(2, 2);

    console.log(values);
}

task34();

//35.
function task35() {
    let numbers = [10, 20, 50, 60];

    numbers.splice(2, 0, 30, 40, 45);

    console.log(numbers);
}

task35();

//36.
function task36() {
    let numbers = [10, 20, 30, 40, 50, 60];

    numbers.splice(2, 2, 100, 200, 300);

    console.log(numbers);
}

task36();

//37.
function task37() {
    let students = ["Rajesh", "Rahul", "Arun", "Kiran", "Vijay"];

    students.splice(2, 1);

    console.log(students);
}

task37();

//38.
function task38() {
    let cart = ["Laptop", "Mouse", "Keyboard"];

    console.log("Original cart:", cart);

    cart.push("Headphones");
    console.log("After push:", cart);

    cart.pop();
    console.log("After pop:", cart);

    cart.shift();
    console.log("After shift:", cart);

    cart.unshift("Monitor");
    console.log("After unshift:", cart);
}

task38();


// Array Merge & Extraction Methods

//39.
function task39() {
    let fruits1 = ["Apple", "Banana", "Mango"];
    let fruits2 = ["Orange", "Grapes", "Papaya"];

    let allFruits = fruits1.concat(fruits2);

    console.log(allFruits);
}

task39();

//40.
function task40() {
    let array1 = [10, 20];
    let array2 = [30, 40];
    let array3 = [50, 60];

    let result = array1.concat(array2, array3);

    console.log(result);
}

task40();

//41.
function task41() {
    let values = [10, 20, 30, 40, 50, 60, 70, 80];

    let result = values.slice(2, 6);

    console.log(result);
}

task41();

//42.
function task42() {
    let students = ["Rajesh", "Rahul", "Arun", "Kiran", "Vijay"];

    let firstThree = students.slice(0, 3);

    console.log(firstThree);
}

task42();

//43.
function task43() {
    let numbers = [10, [20, [30, 40]]];

    let result = numbers.flat(2);

    console.log(result);
}

task43();

//44.
function task44() {
    let numbers = [10, [20, [30, [40, 50]]]];

    let result = numbers.flat(3);

    console.log(result);
}

task44();

//45.
function task45() {

    // slice()
    let numbers1 = [10, 20, 30, 40, 50];

    let result = numbers1.slice(1, 4);

    console.log("Slice result:", result);
    console.log("Original array after slice:", numbers1);


    // splice()
    let numbers2 = [10, 20, 30, 40, 50];

    numbers2.splice(1, 2);

    console.log("Splice result:", numbers2);
}

task45();


// Search & Other Array Methods

//46.
function task46() {
    let numbers = [10, 20, 30, 40, 50, 60];

    let result = numbers.includes(50);

    console.log(result);
}

task46();

//47.
function task47() {
    let numbers = [10, 20, 30, 20, 40, 20, 50];

    let result = numbers.indexOf(20);

    console.log("First occurrence:", result);
}

task47();

//48.
function task48() {
    let numbers = [10, 20, 30, 20, 40, 20, 50];

    let result = numbers.lastIndexOf(20);

    console.log("Last occurrence:", result);
}

task48();

//49.
function task49() {
    let numbers = [50, 10, 40, 20, 30];

    numbers.sort(function(a, b) {
        return a - b;
    });

    console.log(numbers);
}

task49();

//50.
function task50() {
    let numbers = [10, 20, 30, 40, 50];

    numbers.reverse();

    console.log(numbers);
}

task50();