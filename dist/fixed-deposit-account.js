"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedDepositAccount = void 0;
const account_1 = require("./account");
class FixedDepositAccount extends account_1.Account {
    ;
    constructor(accountHolderName, years) {
        super(accountHolderName);
        this.maturityDate = new Date();
        this.maturityDate.setFullYear(this.maturityDate.getFullYear() + years);
        this.interestRate = 0.05;
    }
    withdraw(amount) {
        if (this.maturityDate > new Date()) {
            throw new Error("Cannot withdraw before maturity date.");
        }
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }
        this.balance -= amount;
        this.transaction.push({
            type: "Withdraw",
            amount: amount,
            timeStamp: new Date(),
            description: `Withdrew ${amount}`,
        });
    }
    calculateInterest() {
        const timeInYears = (this.maturityDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 365);
        return this.balance * this.interestRate * timeInYears;
    }
}
exports.FixedDepositAccount = FixedDepositAccount;
