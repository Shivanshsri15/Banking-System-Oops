import { Account } from "./account";

export class CurrentAccount extends Account {
    constructor( accountHolderName: string) {
        super( accountHolderName);
    }
    withdraw(amount: number): void {
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