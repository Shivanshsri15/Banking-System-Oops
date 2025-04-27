import { Transaction } from "./transaction";

export abstract class Account {
    protected balance: number;
    protected accountNumber: string;
    protected accountHolderName: string;
    protected transaction : Transaction[];
    constructor(accountHolderName: string, balance?: number) {
        this.accountHolderName = accountHolderName;
        this.balance = balance || 0;
        this.accountNumber = Account.generateAccountNumber();
        this.transaction = [];
    }
    static generateAccountNumber(): string {
        return Math.floor(Math.random() * 1000000000).toString();
    }
    deposit(amount: number): void {
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
    getTransactionsHistory(): Transaction[] {
        return this.transaction;
    }
    getBalance(): number {
        return this.balance;
    }
    getAccountHolderName(): string {
        return this.accountHolderName;
    }
    getAccountNumber(): string {
        return this.accountNumber;
    }
    
    abstract withdraw(amount: number): void 

}