import { Account } from "./account";
import { CurrentAccount } from "./current-account";
import { FixedDepositAccount } from "./fixed-deposit-account";
import { SavingsAccount } from "./savings-account";

export class Bank {
    private accounts: Map<string, Account>;
    constructor( ) {
        this.accounts = new Map<string, Account>();
    }
    createAccount(accountHolderName: string, accountType: string, years?: number ): Account {
        let account: Account;
        switch (accountType) {
            case "Savings":
                account = new SavingsAccount(accountHolderName);
                break;
            case "Current":
                account = new CurrentAccount(accountHolderName);
                break;
            case "FixedDeposit":
                account = new FixedDepositAccount(accountHolderName,years ?? 1);
                break;
            default:
                throw new Error("Invalid account type.");
        }
        this.accounts.set(account.getAccountNumber(), account);
        return account;
    }

    getAccount(accountNumber: string): Account { 
        const account = this.accounts.get(accountNumber);
        if (!account) {
            throw new Error("Account not found.");
        }
        return account;
    }

}