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