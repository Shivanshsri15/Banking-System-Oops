"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAccount = void 0;
const account_1 = require("./account");
class CurrentAccount extends account_1.Account {
    constructor(accountHolderName) {
        super(accountHolderName);
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
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
}
exports.CurrentAccount = CurrentAccount;
