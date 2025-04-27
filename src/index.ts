import { Account } from "./account";
import { Bank } from "./bank";
import { SavingsAccount } from "./savings-account";

var bank: Bank = new Bank();
var account: Account = bank.createAccount("John Doe", "Savings");   
account.deposit(1000);
console.log(account.getTransactionsHistory())