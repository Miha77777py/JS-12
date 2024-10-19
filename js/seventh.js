const account = {
    balance: 2000,
    transactions: [],
    topUp(ammount) {
        this.balance += ammount;
        this.transactions.push(`top up - ${ammount}`);
        console.log(`Successfully!\nBalance: ${this.balance}\nTransactions: `);
        console.log(this.transactions);
    },
    withdraw(ammount) {
        this.balance -= ammount;
        this.transactions.push(`withdraw - ${ammount}`);
        console.log(`Successfully!\nBalance: ${this.balance}\nTransactions: `);
        console.log(this.transactions);
    }
}

console.log(account.balance);

account.topUp(200);
account.topUp(200);
account.topUp(200);
account.topUp(200);

account.withdraw(500);
account.withdraw(500);
account.withdraw(500);
account.withdraw(500);


