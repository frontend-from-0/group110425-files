/*
===========================================================
  SIMPLE CONTACT BOOK APPLICATION
===========================================================
In this project, you'll create a Contact Book to store and
manage basic info: name, phone, and email.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, findIndex, etc.)
3. Conditionals (if-else)
4. Basic CRUD (Create, Read, Update, Delete) functionality

Below is a step-by-step guide, with sample code and 
comments explaining what each section does. Run this file
in Node.js or in your browser's console to see the output.
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Data
-----------------------------------------------------------
1. Create an array named 'contacts' with a few initial 
   sample contacts.
2. Each contact is an object with 'name', 'phone', and 
   'email' properties.
*/
const contacts = [
  { name: 'John', phone: '63 - xx -xx', email: 'john.doe@gmail.com' },
];

/*
-----------------------------------------------------------
  STEP 2: Display All Contacts
-----------------------------------------------------------
Function: displayAllContacts()
- Loops over the 'contacts' array.
- Logs a descriptive string for each contact.

Example output:
  Name: Alice, Phone: 123-456-7890, Email: alice@example.com
*/
function displayAllContacts() {
  console.log('Contacts in the contact book:');
  const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));

  for (const contact of sortedContacts) {
    console.log(
      `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`,
    );
  }

  console.log('-----------------------------');
}
displayAllContacts();

/*
-----------------------------------------------------------
  STEP 3: Add a New Contact
-----------------------------------------------------------
Function: addContact(name, phone, email)
- Creates a new contact object and pushes it into 'contacts'.
- Checks if a contact with the same name already 
  exists before adding. If found, logs a warning and returns.
- Logs "Contact added successfully." if everything is good.
*/
function addContact(name, phone, email) {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    if (contact.name === name) {
      console.log(
        `Contact with name ${name} already exists. Will not add again `,
      );
      return;
    }
  }

  contacts.push({ name, phone, email });
  console.log(`Contact with name ${name} added successfully`);
}
/*
-----------------------------------------------------------
  STEP 4: View a Contact by Name
-----------------------------------------------------------
Function: viewContact(name)
- Loops over 'contacts' to find one matching 'name'.
- Logs the contact info if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/
function viewContact(name) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      console.log(
        `Contact info found: ${name}, ${contacts[i].phone}, ${contacts[i].email} `,
      );
      return;
    }
  }
  console.log(`No contact found with the name: ${name}`);
}

function findContact(name, phone, email) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name || contacts[i].phone === phone  || contacts[i].email === email) {
      console.log(
        `Contact info found: ${contacts[i].name}, ${contacts[i].phone}, ${contacts[i].email} `,
      );
      return;
    }
  }
  console.log(`No contact found with the name: ${name}`);
}
/*
-----------------------------------------------------------
  STEP 5: Update a Contact
-----------------------------------------------------------
Function: updateContact(name, newPhone, newEmail)
- Finds the contact by name and updates phone + email.
- Logs "Contact updated successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/
function updateContact(name, newPhone, newEmail) {
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      contacts[i] = { name, phone: newPhone, email: newEmail };
      console.log(`Contact with name ${name} updated successfully.`);
      return;
    }
  }
  console.log(`No contact found with the name: ${name}`);
}

/*
-----------------------------------------------------------
  STEP 6: Remove a Contact
-----------------------------------------------------------
Function: removeContact(name)
- Finds the index of the contact with 'name' using 
  findIndex() or a loop.
- Splices it from the array if found.
- Logs "Contact removed successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/
function removeContact(name) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
      contacts.splice(i, 1);
      console.log(`Contact removed successfully.`);
      return;
    }
  }
  console.log(`No contact found with the name: ${name}`);
}
/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.
*/

console.log('Initial contact list:');
displayAllContacts();

console.log('\nAdding a new contact: Charlie');
addContact('Charlie', '777-777-7777', 'charlie@example.com');
displayAllContacts();

console.log("\nViewing Bob's contact:");
viewContact('Bob');
console.log("\nViewing Charlie's contact:");
viewContact('Charlie');

console.log("\nUpdating Bob's contact:");
updateContact('Bob', '999-999-9999', 'bob@updated.com');
viewContact('Bob');

console.log("\nUpdating Charlie's contact:");
updateContact('Charlie', '999-999-9999', 'charlie@updated.com');
viewContact('Charlie');

console.log('\nRemoving Bob:');
removeContact('Bob');
displayAllContacts();

console.log('\nRemoving Charlie:');
removeContact('Charlie');
displayAllContacts();

/*
-----------------------------------------------------------
  OPTIONAL ENHANCEMENTS:
-----------------------------------------------------------
1. Partial Name Search:
   - Instead of strict ===, use .includes() for the name check.

2. Sort Contacts:
   - Add a function to sort contacts alphabetically by name.
3. Search by multiple fields:
   - e.g., find a contact by phone number or email.
*/

console.log('TEST:')
const textContacts = [{name: 'Jane', phone:'phone', email: 'email'}];
console.log(textContacts.map(contact => contact.name).includes('Jane'));
