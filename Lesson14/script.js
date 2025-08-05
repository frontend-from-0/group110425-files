// This is a single line comment,

/* 

Multi line comment:
this is the second line
this is the second line
this is the second line

*/

const name = 'John';
const surname = 'Doe';

const idNumber = '19900101-0000';
const phoneNumber = '009031234567';

let age = 33;

let isStudent = true; // or false

let email; // the value is undefined, it's equal to this:
//  let email = 'undefined';

console.log('This is the first case', email);
email = 'john@gmail.com';
console.log('This is right after assigning the value, the value is:', email);

// We want to make email empty again:
email = null;
console.log('This is the right after emptying the value', email);

// Objects consist of key:value pairs
let person1 = {
  name: 'John',
  surname: 'Doe',
  email: 'john@gmail.com',
  idNumber: '19900101-0000',
  age: 33,
  isStudent: false,
  address: {
    line1: 'Kungsgatan 23',
    city: 'Gothenburg',
    country: 'Sweden',
    postalCode: '12345',
  },
};

let person2 = {
  name: 'Jane',
  surname: 'Doe',
  email: 'jane@gmail.com',
  idNumber: '19900101-0001',
  age: 33,
  isStudent: false,
  address: {
    line1: 'Kungsgatan 23',
    city: 'Gothenburg',
    country: 'Sweden',
    postalCode: '12345',
  },
};

const addressBook = [person1, person2];

console.log('The address book is:', addressBook);

alert('This is an alert!');
// In JS, \ inside a string is used to escape characters meaning make a special character a "plain string" (so the charater looses it special value).
prompt('What\'s your name?');

// Usually, we don't add random data types to arrays
const randomArray = [
  'hello',
  123,
  true,
  undefined,
  null,
  { name: 'john' },
  [1, 2, 4],
];

// Other types: Symbol, BigInt,
