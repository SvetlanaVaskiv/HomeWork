class Account {
	constructor(balance = 0, frozen = 0) {
		this.history = [`init balance: ${balance}`]
		this.balance = balance;
		this.frozen = frozen;
	}
	deposite(amount) {
		this.history.push(`deposite: ${amount}`)
		this.balance += amount
	}
	withdraw(amount) {

		if (this.balance < amount) {
			throw new Error('not enought balance')
		}
		this.history.push(`withdraw: ${amount}`)
		this.balance -= amount;
	}
	freeze(amount) {
		if (this.balance < amount) {
			throw new Error('not enought money for freeze')
		};
		this.frozen += amount;
		this.balance -= amount
		this.history.push(`frozen: ${amount}`)

		console.log(this.frozen)
	}

	unfreeze() {
		this.history.push(`unfreeeze: ${this.frozen}`)
		this.balance += this.frozen;

		this.frozen = 0

	}
	getBalance() {

		return this.balance;

	}
	getHistory() {
		let result = this.history.slice(0);
		result.push(`current balance: ${this.balance} , frozen balance ${this.frozen}`);
		return result;
	}


}
let account = new Account(100);
console.log(account.getBalance());
account.deposite(20);
console.log(account.getBalance());
account.withdraw(50);
console.log(account.getBalance())
console.log(account.getHistory())
account.freeze(30);
console.log(account.getBalance())
console.log(account.getHistory())
account.unfreeze()
console.log(account.getBalance())
console.log(account.getHistory())
try {
	account.withdraw(100)
	console.log(account.getBalance())
}
catch (er) {
	console.log(er.message)
}