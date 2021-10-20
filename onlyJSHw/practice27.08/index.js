/*class Account {
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
}*/

/*class Account {

	constructor(balance = 0, frozen = 0) {
		this.history = [`init balance: ${balance}`]
		this.balance = balance;
		this.frozen = frozen;
	}


	deposit(amount) {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.balance += amount;
				resolve()
				console.log(this.balance);
			}, Math.random() * 2000);
		})

	}

	withdraw(amount) {
		return new Promise((resolve, reject) => {
			if (this.balance < amount) {
				reject(new Error('not enought balance'));
			}
			this.history.push(`withdraw: ${amount}`)
			this.balance -= amount;
			resolve();
			console.log(this.balance)
		})
	}

	freeze(amount) {
		return new Promise((resolve, reject) => {
			if (this.balance < amount) {
				reject(new Error('not enought money for freeze')
				)
			};
			this.frozen += amount;
			this.balance -= amount
			this.history.push(`frozen: ${amount}`)
			resolve()
			console.log(`froze: ${this.frozen}`);
			console.log(`remainder: ${this.balance}`)

		})

	}




	getBalance() {
		return this.balance;
	}
}
let account = new Account(100);
/*account.deposit(200)
	.then(function () {
		console.log(account.getBalance())
		return account.withdraw(50);
	})
	.then(function () {
		console.log(account.getBalance())
	})
*/

/*async function ftr() {
	await account.deposit(500);
	await account.withdraw(300);
	await account.freeze(200);

}
ftr()
*/

let promise = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve(function sum(a, b) {
			return a + b
		})
	}, Math.random() * 1000);
})
promise.then(
	result => console.log(result(5, 8)));




let promiseSqu = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve(function square(a) {
			return a ** 2;
		})
	}, Math.random() * 1000);
})

promiseSqu.then(
	result => console.log(result(7))
)

let array = []
for (let i = 0; i < 10; i++) {
	array.push(Math.round(Math.random() * 100))
};
console.log(array)

//которая возводить число в квадрат и возвращает promise с результатом возведения через Math.rand() * 1000 mc.

function test(a) {
	let b = a ** 2;
	let promise = new Promise(function (resolve) {

		setTimeout(() => resolve(b),
			console.log(b)
			, 5000);



	})
}
test(8)
array.map(test)


function sum(x, y) {
	return new Promise(function (resolve) {
		const result = x + y;
		setTimeout(() => resolve(result), Math.random() * 1000);
	});
}
sum(5, 3).then(function (value) {
	console.log(value);
});

function square43(a) {
	return new Promise(function (resolve) {
		const result1 = a ** 2;
		setTimeout(() => resolve(result1), Math.random() * 1000);
	});
}
square43(5).then(function (value) {
	console.log(value);
});


let promises = array.map(async (n) => {
	return await square43(n);
});

Promise.all(promises).then(console.log);