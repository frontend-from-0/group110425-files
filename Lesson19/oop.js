/* Programming paradigms
  OOP - Object Oriented programming
  FP - Functional programming

  OOP:  state is usually stored in objects and can be modified through methods 
  FP: state is immutable, and functions are designed to transform data rather than mutate it
  
  OOP: classes encapsulates related data and behavior
  FP: problems are broken down into smaller, composable functions that can be combined to solve larger problems.

*/

// Real life situation: we have multiple users on our website, and we want to store their information in a way that is easy to access and modify. Different users have different roles, and we want to be able to easily change their roles. We also need to make sure that all users have the same properties.

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.role = 'user';
  }

  presentUser() {
    console.log('This is a user with username ', this.username);
  }
}

class AdminUser extends User {
  constructor(username, email) {
    super(username, email);
    this.role = 'admin';
  }

  presentUser() {
    console.log('This is an admin user with username ', this.username);
  }
}


const user1 = new User('John', 'john@gmail.com');
const user2 = new User('Jane', 'jane@gmail.com');
const user3 = new AdminUser('Adam', 'adam@gmail.com');


console.log(user3.presentUser());
console.log(user1, user2, user3);