//      firstHW4


/*let array = [];

for (let i = 0; i < 5; i++) {

	let value = 'qwertyjbyuyuyk';
	let result = '';
	let number = Math.round(Math.random() * 100)
	let index = Math.round(Math.random() * (value.length - 1));
	let char = value[index];

	result += char;


	array.push(result, number)
}




console.log(array)


let resultNumber = array.map(function (elem) {

	if (Number.isInteger(elem)) {
		return '*';
	}
	else {
		return elem
	}
});

console.log(resultNumber)*/



//              second

let array = [];

for (let i = 0; i < 11; i++) {

	let value = 'qwertyjbyuyuyk';
	let result = '';
	let index = Math.round(Math.random() * (value.length - 1));
	result += value[index];






	array.push(result)
}




console.log(array)

let char = array.map(function (element) {

	if (element == element.toLowerCase()) {
		return element.toUpperCase()
	}
})
console.log(char);

//           third



/*let array = [];

for (let i = 0; i < 15; i++) {

	let value = 'qwertyjbyuyuyk';
	let result = '';
	let index = Math.round(Math.random() * (value.length - 1));
	let char = value[index];
	if (Math.ceil(Math.random() * 2) == 2) {
		char = char.toUpperCase();
	}


	result += char;

	array.push(result)
}
console.log(array)

let char = array.map(function (elem) {
	if (elem == elem.toUpperCase()) {
		return elem.toLowerCase()
	}
	else { return elem.toUpperCase() }
}
)

console.log(char)
*/



//             four



/*let array = [];

for (let i = 0; i < 15; i++) {

	let value = 'qwrtjbmkxpауоеияё';
	let result = '';
	let index = Math.round(Math.random() * (value.length - 1));
	result += value[index];

	array.push(result)
}
console.log(array)

let sum = array.reduce((a, b) => b = 'ёуеыаоэяию'.includes(b) ? a + b : a,).length;

console.log(sum)*/

//         six


/*let array = [];

for (let i = 0; i < 15; i++) {

	let value = 'qwert;:*';
	let result = '';

	let index = Math.round(Math.random() * (value.length - 1));
	result += value[index];




	array.push(result)
}




console.log(array)
let symbol1 = 0;
let symbol2 = 0;
let symbol3 = 0;
for (let i = 0; i < array.length; i++) {
	if (array[i] === '*') {
		symbol1++;
	}
	else if (array[i] === ';') {
		symbol2++;
	}
	else if (array[i] === ':') {
		symbol3++;
	}
}




console.log(symbol1, symbol2, symbol3)
*/