"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(accountHolderName, balance) {
        this.accountHolderName = accountHolderName;
        this.balance = balance || 0;
        this.accountNumber = Account.generateAccountNumber();
        this.transaction = [];
    }
    static generateAccountNumber() {
        return Math.floor(Math.random() * 1000000000).toString();
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive.");
        }
        this.balance += amount;
        this.transaction.push({
            type: "Deposit",
            amount: amount,
            timeStamp: new Date(),
            description: `Deposited ${amount}`,
        });
    }
    getTransactionsHistory() {
        return this.transaction;
    }
    getBalance() {
        return this.balance;
    }
    getAccountHolderName() {
        return this.accountHolderName;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
}
exports.Account = Account;
