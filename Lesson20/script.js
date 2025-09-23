/*
===========================================================
  BANK ACCOUNT SYSTEM — OOP WITH PRIVATE FIELDS
===========================================================
In this project, you'll build a tiny banking model:
- Create accounts (checking/savings)
- Authenticate with PIN (private)
- Deposit, withdraw, transfer
- Keep a transaction history
- Run monthly processing (interest/fees)
- Print statements

You'll practice:
1. Classes, objects, and inheritance (extends)
2. Encapsulation with private fields (#)
3. Methods and basic validation
4. Arrays (push, filter, find, map)
5. Conditional logic and guard clauses
6. Static methods/properties (ID generators, rules)
7. (Optional) Error handling with try/catch

Test each step by running this file with Node.js.
*/

/*
-----------------------------------------------------------
  STEP 1: Transaction Class
-----------------------------------------------------------
1) Create a `Transaction` class that represents a single
   account operation.

2) Constructor should accept:
   - type: 'DEPOSIT' | 'WITHDRAW' | 'TRANSFER_OUT' | 'TRANSFER_IN' | 'FEE' | 'INTEREST'
   - amount: number (> 0)
   - description: string (optional)
   - meta: an object for extra info (e.g., { to: 100002 } for transfers)
   - timestamp: default to new Date()

3) Add a `toString()` instance method returning a readable line:
   e.g., "[2025-09-23 10:12] DEPOSIT +€100.00 (Initial funding)"
*/


/*
-----------------------------------------------------------
  STEP 2: Base Class - BankAccount with Private Fields
-----------------------------------------------------------
Create `BankAccount` with:
- Private fields:
  #balance (number), #pin (string), #transactions (array)
- Public properties:
  accountNumber (number), ownerName (string), currency (string)

Constructor:
  new BankAccount({ ownerName, pin, initialBalance = 0, currency = 'EUR' })

Public methods to implement:
  - getOwnerName() : string
  - getAccountNumber() : number
  - deposit(amount, description?) : void
  - withdraw(amount, description?) : void
  - changePin(oldPin, newPin) : boolean
  - getBalance(pin) : number | throws if locked or wrong pin
  - getTransactions(pin) : Transaction[] | throws if locked or wrong pin

Private helpers (use #):
  - #record(tx: Transaction) : void (to push transaction)
  - #requireAuth(pin) : throws if wrong or locked (used in methods that require pin)

Validation rules:
  - deposit/withdraw require amount > 0
  - withdraw must have sufficient balance (for base class)
*/


/*
-----------------------------------------------------------
  STEP 3: Subclasses — SavingsAccount & CheckingAccount
-----------------------------------------------------------
1) `SavingsAccount`:
   - Adds `interestRate` (e.g., 0.02 for 2% annual).
   - Method: applyMonthlyInterest() -> computes monthly interest
     interest = balance * (annualRate / 12)
     Record a Transaction("INTEREST", interest)

2) `CheckingAccount`:
   - Adds `overdraftLimit` (e.g., €200).
   - Override withdraw(): allow balance - amount >= -overdraftLimit
     If the operation dips below 0, also record a Transaction("FEE", fee)
     where fee is a flat fee (e.g., €5).
   - Provide static FEE = 5
*/



/*
-----------------------------------------------------------
  STEP 4: Bank — Manage Many Accounts
-----------------------------------------------------------
Create a `Bank` class to manage accounts and authentication flows.

Responsibilities:
- createChecking({ ownerName, pin, initialBalance?, overdraftLimit? }) -> CheckingAccount
- createSavings({ ownerName, pin, initialBalance?, interestRate? }) -> SavingsAccount
- findAccount(accountNumber) -> account or null
- authenticate(accountNumber, pin) -> boolean (and return the account)
- getBalance(accountNumber, pin)
- deposit(accountNumber, amount, description?)
- withdraw(accountNumber, pin, amount, description?)
- transfer(fromAcc, fromPin, toAcc, amount, description?)

Notes:
- For `transfer`: withdraw from source then deposit to target *only if both succeed*.
  Record TRANSACTION types: TRANSFER_OUT on source, TRANSFER_IN on target.
*/
