export interface Transaction {
    type: "Deposit" | "Withdraw" | "Transfer";
    amount: number;
    timeStamp: Date;
    description?: string;
}
