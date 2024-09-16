const cars = [{id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}];


const aCar = {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000};


function insertString(object) {
    const columns = Object.keys(object)
    const values = columns.map(col => typeof object[col] === 'string' ? `'${object[col]}'` : object[col])
    return `INSERT INTO cars (${columns.join(",")})
            VALUES (${values.join(",")});`;
}

// console.log(cars.map(insertString));


function add(n1, n2) {
    return n1 + n2;
}

const sub = function (n1, n2) {
    return n1 - n2;
}

const cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

// console.log( add(1,2) ) // What will this print?
// console.log( add ) // What will it print and what does add represent?
// console.log( add(1,2,3) ) ; // What will it print
// console.log( add(1) ); // What will it print
// console.log( cb(3,3,add) ); // What will it print
// console.log( cb(4,3,sub) ); // What will it print
// console.log(cb(3,"hh",add));// What will it print
//
// console.log(cb(3,3,add())); // What will it print (and what was the problem)


names = ["Lars", "John", "Fernado", "Claus", "Marcel"]

names.forEach(name => console.log(name));

console.log("<ul>\n" + names.map(name => "  <li>" + name + "</li>").join("\n") + "\n</ul>");

// console.log(add(1, 2))


function startsWithL(name) {
    return name.toLowerCase().startsWith("l");
}

function toUpperCase(name) {
    return name.toUpperCase();
}


function myFilter(array, callback) {
    filtered = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}

function myMap(array, callback) {
    mapped = []
    for (let i = 0; i < array.length; i++) {
        mapped.push(callback(array[i]));
    }
    return mapped;
}

nums = [10,20,30,40]

function addAcc(acc, curr) {
    return acc + curr
}

function myReduce(array, callback,initialValue) {
    let aaccumulater = initialValue;
    for (let i = 0; i < array.length; i++) {
        aaccumulater = callback(aaccumulater,array[i]);
    }
    return aaccumulater;
}

// console.log(myFilter(names, startsWithL));
// console.log(myMap(names, toUpperCase));
console.log(myReduce(nums, (acc, curr) => acc+curr,0));


const msgPrinter = function (msg, delay) {
    setTimeout(() => console.log(msg), delay);
};

// console.log("a d f e b");
// console.log("aaaaaaaaaa");
// msgPrinter ("bbbbbbbbbb",2000);
// console.log("dddddddddd");
// msgPrinter ("eeeeeeeeee",1000);
// console.log("ffffffffff");


const createPerson = function() {
    let name;
    let age;
    return {
        setName(newName) {
            name = newName;
        },
        setAge(newAge) {
            age = newAge;
        },
        getInfo() {
            return `${name}, ${age}`;
        }
    };
}

const person1 = createPerson();
const person2 = createPerson();
person1.setName("John");
person1.setAge(5);
person2.setName("Fernado");
person2.setAge(5);
// console.log(person1.getInfo());
// console.log(person2.getInfo());