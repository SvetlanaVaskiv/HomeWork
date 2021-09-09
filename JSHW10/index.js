let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let number = Math.floor(1 + Math.random() * (6 - 1 + 1));
		if (number <= 5) {
			console.log('Start the game...')
			resolve(number)
		}
		else if (number === 6) {
			reject(new Error("Whoops!"))
		}
	}, 2000);
});


promise.then(number => {
	if (number === 1) { console.log('Stay here') }
	else if (number >= 2) { console.log(`Go ${number} steps`) }
})
	.catch(err => console.error('Exit'));


let goToShop = function () {
	let store = ['milk', 'bread', 'chiken', 'beacon', 'salad', 'pasta', 'soda',
		'tomato', 'cheese', 'potate', 'wine', 'pizza', 'whiskas'];

	store.splice(Math.floor(Math.random() * store.length))
	console.log(store)
	let promise = new Promise((resolve, reject) => {
		if (store.length > 2) {
			resolve()
		}
		reject(new Error('Too low product')
		)
	})

	return promise
}



function makeDinner() {
	let prom = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log('Bon appetit'));
		}, 3000);
	});
}

goToShop().then((res) => makeDinner(res))
	.catch((err) =>
		console.log(err.name, err.message))






