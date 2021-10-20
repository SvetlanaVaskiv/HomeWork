
1







/*let array = [];
for (let i = 0; i < 17; i++) {
	array.push(Math.floor(Math.random() * 100))
}
console.log(array)



let oddValue = array.reduce(function (a, b) {
	if (b % 2 !== 0) { return a + b; } else { return a };
}, 0);
console.log(oddValue);

for (let i = 0; i < array.length; i++) {
	if (array[i] % 3 === 0) {
		array[i] = oddValue;
	}


}


console.log(array);*/




//1 another variant
/*const array = [];
for (let i = 0; i < 17; i++) {
	array.push(Math.floor(Math.random() * 100))
}
console.log(array)


const oddValue = array.reduce((a, b) => b % 2 !== 0 ? a + b : a, 0);
console.log(oddValue);
const resultArray = array.map((item) => item % 3 === 0 ? oddValue : item, 0);
console.log(resultArray);*/



/*const array = [];
for (let i = 0; i < 12; i++) {
	array.push(Math.floor(Math.random() * 100))
}
console.log(array)
let max = array[0];
let maxIndex = 0;
let min = array[0];
let minIndex = 0;
for (let i = 0; i < array.length; i++) {
	if (array[i] > max) {
		maxIndex = i;
		max = array[i];

	}
}
for (let i = 1; i < array.length; i++) {
	if (array[i] < min) {
		minIndex = i;
		min = array[i];
	}
}
console.log(max);
console.log(min);
console.log(maxIndex);
console.log(minIndex);
let interval;
if (maxIndex > minIndex) {
	interval = function () {
		return (maxIndex - minIndex) - 1;
	}

}
else {
	interval = function () {
		return (minIndex - maxIndex) - 1
	};

}


console.log(interval())
*/


/*let array = [];

for (let i = 0; i < 15; i++) {
	let number = Math.round(Math.random() * 20);
	if (Math.round(Math.random()) === 0) {
		number *= -1;
	}
	array.push(number);
}

console.log(array);




let negCounter = 0;
for (let i = 0; i < array.length; i++) {
	if (array[i] < 0) {
		negCounter++
	}
};

console.log(negCounter);
let posCounter = array.filter(function (a) { return a > 0 }).reduce((a, b) => a * b);

console.log(posCounter);


let zeroCounter = 0;
for (let i = 0; i < array.length; i++) {
	if (array[i] === 0) {
		zeroCounter++;
	}
}
console.log(zeroCounter);*/

//4 

/*const array = [];
for (let i = 0; i < 12; i++) {
	array.push(Math.floor(Math.random() * 100))
}
console.log(array)
let max = array[0];

let min = array[0];

for (let i = 0; i < array.length; i++) {
	if (array[i] > max) {

		max = array[i];

	}
}
for (let i = 1; i < array.length; i++) {
	if (array[i] < min) {

		min = array[i];
	}
}
console.log(max);

console.log(min);
console.log(min, max);*/





/*let array = [];

for (let i = 0; i < 19; i++) {


	let number = Math.round(Math.random() * 20);
	if (Math.round(Math.random()) === 0) {
		number *= -1;
	}
	array.push(number);
}
console.log(array)

let sum = 0;
let i = 0
for (; i < array.length; i++) {
	if (array[i] < 0)
		break;
	sum += array[i]
}
if (i === array.length) {
	sum = 0;
}

console.log(sum)*/


//another variant

/*let array = [];

for (let i = 0; i < 19; i++) {


	let number = Math.round(Math.random() * 20);
	if (Math.round(Math.random()) === 0) {
		number *= -1;
	}
	array.push(number);
}
console.log(array)
let sum = 0;
let hasNegative = false;
for (let value of array) {
	if (value < 0) {
		hasNegative = true;
		break;

	}
	sum += value;
}
//if (hasNegative) {
//console.log(sum);
//} else {
//	console.log(' underf')
//}
console.log(hasNegative ? sum : 'jrhvbehr')*/




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

/*let array = [];

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
console.log(char);*/

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
/*let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt quos adipisci dolor consequuntur quas? Iure harum teneturquasi vitae laudantium ullam eligendi modi possimus. Quia laboriosam ipsa, quasi vitae maiores voluptatibus minima ex dolore distinctio tempore non veritatis recusandae adipisci vel cumque, commodi optio magni, fugiat nulla? Eaque tempora voluptates soluta quas excepturi sed accusamus enim nobis similique? Explicabo voluptas voluptatibus aspernatur eligendi officiis sequi possimus soluta, iure dolorem quo repudiandae excepturi nam animi eum tempora labore ipsam odio minus quasi in amet aliquid similique? Dolorem magnam molestiae debitis obcaecati, at esse veritatis incidunt enim sint a ipsa quis."


let array = text.split(" ");
console.log(array);
let sum = array.reduce((a, b) => b = 'b' ? a + b : a,)
console.log(sum)*/
/*function makeCounter() {
	let counter = 0;
	return function () {
		console.log(++counter);
	}
}
let counter1 = makeCounter()
counter1();
counter1();
let counter2 = makeCounter();
counter2();
*/
function makeHello(phrase) {

	return function (name) {
		return `${phrase}, ${name}`;
	}
}
let hello1 = makeHello('hello');
let result = hello1('John')
console.log(result)


function makeCounter() {
	let counter = 0;
	return function () {
		return function () {
			console.log(++counter)
		}
	}
}
let counter1 = makeCounter();
counter1()();
counter1()();
counter1()()