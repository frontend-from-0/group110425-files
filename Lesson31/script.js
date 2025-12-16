function log(...value) {
  console.log('----------');
  console.log(value);
  console.log('----------');
  console.log();
  console.log();
}

// 1. Array Destructuring
// Given the following array, use array destructuring to assign the values of x, y, and z to their respective variables:
const coordinates = [10, 20, 30];

const [y, x, z] = coordinates;
console.log('Ex. 1');
console.log(x, y, z);

console.log('--------');

// 2. Object Destructuring
// Given the following object, use object destructuring to assign the values of name and age to their respective variables:
const personE14 = {
  name: 'John Doe',
  age: 25,
};

const { name, age } = personE14;
console.log('Ex. 2');

console.log(name, age);
console.log('--------');

// 3. Array Destructuring with Default Values
// Given the following array, use array destructuring with default values to assign the values of a, b, and c, with default values of 1, 2, and 3 respectively:
let numbers = [4, , undefined, null];

const [a = 1, b = 2, c = 3, d = 10] = numbers;

console.log('Ex. 3');
console.log(a, b, c, d);

console.log('--------');

// 4. Object Destructuring with Renaming
// Given the following object, use object destructuring with renaming to assign the value of name to a variable named fullName:
const personE16 = {
  name: 'Jane Doe',
};

const { name: fullName = 'Havva' } = personE16;
console.log('Ex. 4');

console.log(fullName);

console.log('--------');

// 5. Nested Object Destructuring
// Given the following nested object, use object destructuring to assign the values of name, age, and city to their respective variables:
const personE17 = {
  name: 'John Doe',
  age: 25,
  address: {
    city: 'New York',
  },
};

const {
  name: personName,
  age: personAge,
  address: { city },
} = personE17;
log('Ex. 5', personName, personAge, city);

// 6. Default Parameters + Arrow function
// Convert Named Function to Arrow Function with Default Parameters
// function greet  (name = 'User', greeting='Hi') {
//   return `${greeting}, ${name}!`;
// }

const greet = (name = 'User', greeting = 'Hi') => {
  return `${greeting}, ${name}!`;
};

log('Ex.6', greet());
log('Ex.6', greet('Alice'));

// 7. Default Parameters
// Add Default Parameters to an Existing Arrow Function, Default tax rate 0.1, default discount is 0.
const calculateTotal = (price, taxRate = 0.1, discount = 0) => {
  // Make sure to check that values are numbers before doing any calculation!
  return price + price * taxRate - discount;
};

const calculateTotalVAT10 = (price, discount) =>
  calculateTotal(price, 0.1, discount);

log(calculateTotal(100));
log(calculateTotal(100, 0.18));
log(calculateTotal(100, 0.1, 10));

// Optional Chaining
// Optional chaining allows you to safely access deeply nested properties.

// 8. Safe Access to Nested Object Properties
// Update the code to safely access userName and userCity using optional chaining to handle cases where properties might be missing.
const userEx8 = {
  profile: {
    // optional
    name: 'Alice',
    address: {
      city: 'Wonderland',
    },
  },
};

log(userEx8?.profile?.name, userEx8?.profile?.address?.city?.length);

// 9. Handle Missing Properties
// Update the code to use optional chaining to safely access userCountry and provide a default value of 'Unknown' if the property is missing.

const userEx9 = {
  profile: {
    name: 'Alice',
  },
};

log(userEx9?.profile?.userCountry ?? 'Sweden');

// 10. Optional Chaining with Function Calls
// Update the code to safely call the getName function using optional chaining, considering that profile or getName might be missing.

const userEx10 = {
  profile: {
    getName: () => 'Alice',
  },
};

log(userEx10?.profile?.getName?.());

// 11. Rewrite the code using the nullish coalescing operator to assign a default value to storedData only if userInput is null or undefined.
let userInput = false;
let storedData = userInput ?? 'Default Value';
let storedData2 = userInput ? userInput : 'Default Value'; //if statement

log('Ex11', storedData, storedData2); // Default Value

// 12. Rewrite the code using the nullish coalescing operator to display number of users even if it is 0.
let userCount = 0;
let displayCount0 = userCount || 'No users'; //or statement

let displayCount = userCount ?? 'No users';

log('Ex12. ', displayCount0, displayCount); // No users

// 13. Rewrite the code using the nullish coalescing operator to assign a default value of 3000 to timeout if config.timeout is null or undefined.

const config = {
  timeout: null,
};

const timeout =
  config.timeout !== undefined && config.timeout !== null
    ? config.timeout
    : 3000;

const timeout2 = config.timeout ?? 3000;



log('Ex13', timeout, timeout2); // 3000
