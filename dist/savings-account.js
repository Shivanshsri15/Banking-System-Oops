"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const account_1 = require("./account");
class SavingsAccount extends account_1.Account {
    constructor(accountHolderName) {
        super(accountHolderName);
        this.withdrawalLimit = 1000000;
        this.withdrawalLimit = 1000000;
        this.interestRate = 0.03;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }
        if (amount > 1000000) {
            throw new Error("Withdrawal amount exceeds the limit of 1,000,000.");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds.");
        }
        this.balance -= amount;
        this.transaction.push({
            type: "Withdraw",
            amount: amount,
            timeStamp: new Date(),
            description: `Withdrew ${amount}`,
        });
    }
    changeWithdrawalLimit(newLimit) {
        if (newLimit <= 0) {
            throw new Error("Withdrawal limit must be positive.");
        }
        if (newLimit > 1000000) {
            throw new Error("Withdrawal limit exceeds the maximum limit of 1,000,000.");
        }
        this.withdrawalLimit = newLimit;
    }
    calculateInterest() {
        return this.balance * this.interestRate;
    }
}
exports.SavingsAccount = SavingsAccount;
