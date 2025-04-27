import { Account } from "./account";
import { InterestCalculable } from "./interest-calculable";

export class FixedDepositAccount extends Account implements InterestCalculable {
    private maturityDate: Date;
    private interestRate: number;;
    constructor( accountHolderName: string, years: number) {
        super(accountHolderName);
        this.maturityDate = new Date();
        this.maturityDate.setFullYear(this.maturityDate.getFullYear() + years); 
        this.interestRate = 0.05;
    }
    withdraw(amount: number): void {
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
    calculateInterest(): number {
        const timeInYears = (this.maturityDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 365);
        return this.balance * this.interestRate * timeInYears;
    }
}