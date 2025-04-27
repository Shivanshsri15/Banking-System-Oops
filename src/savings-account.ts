import { Account } from "./account";
import { InterestCalculable } from "./interest-calculable";

export class SavingsAccount extends Account implements
    InterestCalculable {
    withdrawalLimit: number = 1000000; 
    interestRate: number;
    constructor(accountHolderName: string) {
        super(accountHolderName);
        this.withdrawalLimit = 1000000;
        this.interestRate = 0.03;
    }
    withdraw(amount: number): void {
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
    changeWithdrawalLimit(newLimit: number): void {
        if (newLimit <= 0) {
            throw new Error("Withdrawal limit must be positive.");
        }
        if (newLimit > 1000000) {
            throw new Error("Withdrawal limit exceeds the maximum limit of 1,000,000.");
        }
        this.withdrawalLimit = newLimit;
    }
    calculateInterest(): number { 
        return this.balance * this.interestRate;
    }
}