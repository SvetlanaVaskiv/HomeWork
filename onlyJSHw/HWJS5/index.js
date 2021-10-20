function a() {
	let array = [];
	return function b() {
		let number;
		while (array.length < 100) {
			number = Math.round(1 + Math.random() * 99);
			if (!array.includes(number)) {
				break;
			}
		}
		if (number !== null) {
			array.push(number);
		}
		return number;
	}
}
let generator = a();
let array = [];
for (let i = 0; i < 100; i++) {
	let number = generator();
	array.push(number);
}
console.log(array)

