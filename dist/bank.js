"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const current_account_1 = require("./current-account");
const fixed_deposit_account_1 = require("./fixed-deposit-account");
const savings_account_1 = require("./savings-account");
class Bank {
    constructor() {
        this.accounts = new Map();
    }
    createAccount(accountHolderName, accountType, years) {
        let account;
        switch (accountType) {
            case "Savings":
                account = new savings_account_1.SavingsAccount(accountHolderName);
                break;
            case "Current":
                account = new current_account_1.CurrentAccount(accountHolderName);
                break;
            case "FixedDeposit":
                account = new fixed_deposit_account_1.FixedDepositAccount(accountHolderName, years !== null && years !== void 0 ? years : 1);
                break;
            default:
                throw new Error("Invalid account type.");
        }
        this.accounts.set(account.getAccountNumber(), account);
        return account;
    }
    getAccount(accountNumber) {
        const account = this.accounts.get(accountNumber);
        if (!account) {
            throw new Error("Account not found.");
        }
        return account;
    }
}
exports.Bank = Bank;
