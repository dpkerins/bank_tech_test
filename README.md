# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## How To Use
*clone this repository
*in the command line run these commands to get started:
```
node
.load account.js
account = new Account;
```
*You should now be able to run the methods account.withdraw(num, 'date'), deposit(num, 'date') and getStatement on account as seen below. Note: the date must be in a string, ie: '1/1/24'.

## Process
*TDD was used to build this using Jest for testing. 
*An Account class was built first, containing all of the methods and variables. 
*The Account class was refactored to extract the Withdrawal and Deposit classes.

## Next Steps
*I would mock the test so that the testing on the 3 classes was not interdependent. 
*I would add functionality so that the transactions appear in reverse order in the statement by date. 
*I would add tests and code to find edge cases, ie withdrawal without proper funs, etc. 




