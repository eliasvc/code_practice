/* Private Variable (Bank Account)
  Create a createAccount(initialBalance) function that returns:
  deposit(amount)
  withdraw(amount)
  balance()
  
  The balance must be private and not accessible from the outside.
*/
function createAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
    },
    withdraw(amount) {
      balance -= amount;
    },
    balance() {
      return balance;
    },
  };
}

let account = createAccount(20);
console.log(account.balance());
account.deposit(100);
account.withdraw(50);
console.log(account.balance());
