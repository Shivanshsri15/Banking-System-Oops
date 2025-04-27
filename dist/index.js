"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = require("./bank");
var bank = new bank_1.Bank();
var account = bank.createAccount("John Doe", "Savings");
account.deposit(1000);
console.log(account.getTransactionsHistory());
