

//function sum(array) {
//	let total = 0;
//	for (let value of array) {
//		total += value;

//	}
//	return total;
//}


//let total = document.querySelector('.total');
/*let body = document.querySelector('body')
function createButttons() {
	let array = [];

	let container = document.createElement('div');
	container.classList.add('container.first');
	body.prepend(container);
	for (let i = 0; i < 8; i++) {




		let button = document.createElement('button')
		//	button.innerHTML = array[i];
		button.innerHTML = i;
		array[i] = button;

		button.addEventListener('click', function () {
			let temp = [];

			for (let item of array) {
				temp.push(item.innerHTML);

			}
			temp.sort((a, b) => 0.5 - Math.random());
			for (let i = 0; i < temp.length; i++) {
				array[i].innerHTML = temp[i]
			}


		});

		container.append(button);


	}
}
createButttons();
createButttons();
createButttons();



function hello() {
	let name = 'masha';
	return function getname() {
		return name;
	}

}
let getname2 = hello()();
console.log(getname2)*/







/*const words = ['spray', 'limit', 'elite',
	'exuberant', 'destruction', 'present'];
let decFilter = (array, fn) => {
	let result = []
	for (val of array) {
		if (fn(val)) {
			result.push(fn(val))
		}



		//	if (val.lenght >6)
		// {
		//	result.push(val)
		//	}
	}
	return result
}
//let test = decFilter(words, function (val) {
//if (val.lenght > 6) {
//return val
//	}
//})
let test = decFilter(words, word => word.length > 6)
console.log(test)
//const result = words.filter(word => word.length > 6)
let decll = (a, b) => { return a + b };
console.log(decll(4, 5))
let exp = function (a, b) {
	return a + b
}
console.log(exp(3, 8));*/





/*const words = ['spray', 'limit', 'elite',
	'exuberant', 'destruction', 'present'];



const map1 = words.map(word => word.toUpperCase());
//console.log(map1)
let myMap = function (array, fun) {
	let result = []
	for (val of array) {

		result.push(fun(val))
	}
	return result
}


let mapMap = myMap(words, word => word.toUpperCase())

console.log(mapMap)*/






/*function createCalculate(n) {
	return () => n * 100

}
const calculate = createCalculate(42)
console.log(calculate)
*/

/*let createIncrement = function (n) {
	return (num) => n + num

}

const addOne = createIncrement(1);
const addTwo = createIncrement(200)
console.log(addOne(10))
console.log(addOne(30))
console.log(addTwo(10))
console.log(addTwo(20))*/



/*function urlGenerator(domain, version) {
	return function (url) {
		return `http://${url}.${domain}/api${version}`
	}
}
const myUrl = urlGenerator('com.ua', '/v1')
console.log(myUrl('bread'))


const myUrl1 = urlGenerator('ua', '/v2')
console.log(myUrl1('bread'))
*/

/*function urlGenerator(domain) {
	return function (version) {
		return `http://${domain}/api${version}`
	}
}
const ukr = urlGenerator('bread.com.ua')
console.log(ukr('v1'))
console.log(ukr('v2'))



console.log('----------')
const poland = urlGenerator('bread.pl')

console.log(poland('v1'))
console.log(poland('v2'))
console.log(poland('v3'))
console.log('----------')
const rum = urlGenerator('bread.pl')

console.log(rum('v1'))
console.log(rum('v2'))*/


/*function squareS1(a) {
	return a * 4;
};
console.log(squareS1(4));
let squareS2 = (a) => a * 4;

console.log(squareS2(5))

let squareS = function (a) {
	return a * 4;
};
console.log(squareS(3));






function PifagoreTheorem1(sideA, sideB) {
	return Math.sqrt(sideA ** 2 + sideB ** 2)
}
console.log(PifagoreTheorem1(3, 4))




let PifagoreTheorem = function (sideA, sideB) {
	return Math.sqrt(sideA ** 2 + sideB ** 2)
}
console.log(PifagoreTheorem(3, 4))

let PifagoreTheorem2 = (sideA, sideB) => Math.sqrt(sideA ** 2 + sideB ** 2)

console.log(PifagoreTheorem2(3, 4))


function discriminant1(a, b, c) {

	return (b ** 2 - 4 * a * c)
}
console.log(discriminant1(2, 2, 1))

let discriminant2 = (a, b, c) => (b ** 2 - 4 * a * c)

console.log(discriminant2(2, 2, 1))

let discriminant = function (a, b, c) {

	return (b ** 2 - 4 * a * c)
}
console.log(discriminant(2, 2, 1))


let number = [];
for (let i = 0; i < 100; i++) {
	number.push(Math.floor(Math.random() * 100))
}

function oddValue(array) {
	let result = []

	for (val of array) {
		if (val % 2 === 0) {
			result.push(val)
		}
	}
	return result
}
let test = oddValue(number);
console.log(test)


let oddValue1 = function (array) {
	let result = []

	for (val of array) {
		if (val % 2 === 0) {
			result.push(val)
		}
	}
	return result
}
let test1 = oddValue1(number);
console.log(test1)

let oddValue2 = (array) => {
	let result = []

	for (val of array) {
		if (val % 2 === 0) {
			result.push(val)
		}
	}
	return result
}


let test3 = oddValue2(number);
console.log(test3)







function evenValue(array) {
	let result = []

	for (val of array) {
		if (val % 2 !== 0) {
			result.push(val)
		}
	}
	return result
}
let test4 = evenValue(number);
console.log(test4)


let evenValue1 = function (array) {
	let result = []

	for (val of array) {
		if (val % 2 !== 0) {
			result.push(val)
		}
	}
	return result
}
let test5 = evenValue1(number);
console.log(test5)

let evenValue2 = (array) => {
	let result = []

	for (val of array) {
		if (val % 2 !== 0) {
			result.push(val)
		}
	}
	return result
}


let test6 = evenValue2(number);
console.log(test6)

let array5 = [1, 2, 3, 4, 5, 7, 8, 9, 10]

let search = function (array, find) {
	for (value of array) {
		if (value === find) {
			return value
		}
	}
}
console.log(search(array5, 7));

function search1(array, find) {
	for (value of array) {
		if (value === find) {
			return value
		}
	}



}
console.log(search1(array5, 10));
let search2 = (array, find) => {

	for (value of array) {
		if (value === find) {
			return value
		}
	}
}
console.log(search2(array5, 5));











/*sortNum = [];

функция сортировки.ерунда

for (; number.length;) { sortNum.push(number.splice(number.indexOf(Math.min(...number)), 1)[0]) }
console.log(sortNum)

function numberSort(array) {
	let flag = false;
	while (!flag) {
		flag = true;
		for (let i = 1; i < array.length; i += 1) {
			if (array[i - 1] > array[i]) {
				flag = false;
				let tmp = array[i - 1];
				array[i - 1] = array[i];
				array[i] = tmp;
			}
		}
	}

	return array;
}

numberSort(test5);
console.log(test5);



let FirstName = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];

console.log(FirstName)
function reverseArr() {
	let array = [];
	for (i = 0; i < FirstName.length; i++) {
		array[i] = FirstName[(FirstName.length - 1) - i]
	}
	return array
}

console.log(reverseArr(FirstName))

let secondNumber = [44, 12, 11, 7, 1, 99, 43, 5, 69]
console.log(secondNumber)
let reverseArr2 = () => {
	let array = [];
	for (i = 0; i < secondNumber.length; i++) {
		array[i] = secondNumber[(secondNumber.length - 1) - i]
	}
	return array
}
console.log(reverseArr2(secondNumber))

let str = 'Hi I am ALex'

function reverseStr(string) {
	let massive = "";
	for (i = 0; i < string.length; i++) {
		massive += string[(string.length - 1) - i];
	}
	return massive;
}
console.log(str);
console.log(reverseStr(str))

let lowCase = str.toLowerCase();
console.log(lowCase);
let up = str.toUpperCase();
console.log(up);


let myMap = function (array, fun) {
	let result = []
	for (val of array) {

		result.push(fun(val))
	}
	return result
}


let mapMap = myMap(FirstName, word => word.toLowerCase())

console.log(mapMap)
let upMap = myMap(FirstName, word => word.toUpperCase())
console.log(upMap);
let num = 1234678;
let num1 = [...num.toString()]
console.log(num1)


Array.prototype.reverseArr3 = function () {
	let array = [];
	for (i = 0; i < this.length; i++) {
		array[i] = this[(this.length - 1) - i]
	}
	return array
}

console.log(num1.reverseArr3())

console.log(Number(num1.reverseArr3().join("")));*/



let array9 = [1, 2, 3, 4, 5]
console.log(1)
let arrayLenght = function () {
	console.log(2)
	let i = 0;
	for (; i != undefined;) {
		console.log(3)
		return i++

	}
	console.log(4)
}
console.log(arrayLenght(array9))


/*//catch(e)
//{
if instanceof AccountBlo}


e.constructor.name*/

/*
let query = new XMLHttpRequest();
query.open('GET', 'https://jsonplaceholder.typicode.com/todos/2');
query.onload = function () {
	console.log(query.response);
	let query2 = new XMLHttpRequest();

	query2.open('GET', 'https://jsonplaceholder.typicode.com/todos/2');
	query2.onload = function () {
		console.log(query2.response)
	}
	query2.send()

	let query3 = new XMLHttpRequest();

	query3.open('GET', 'https://jsonplaceholder.typicode.com/todos/3');
	query3.onload = function () {
		console.log(query3.response)
	}
	query3.send()

	let query4 = new XMLHttpRequest();

	query4.open('GET', 'https://jsonplaceholder.typicode.com/todos/4');
	query4.onload = function () {
		console.log(query4.response)
	}
	query4.send()

	let query5 = new XMLHttpRequest();

	query5.open('GET', 'https://jsonplaceholder.typicode.com/todos/5');
	query5.onload = function () {
		console.log(query5.response)
	}
	query5.send()

	let query6 = new XMLHttpRequest();

	query6.open('GET', 'https://jsonplaceholder.typicode.com/todos/6');
	query6.onload = function () {
		console.log(query6.response)
	}
	query6.send()

	let query7 = new XMLHttpRequest();

	query7.open('GET', 'https://jsonplaceholder.typicode.com/todos/7');
	query7.onload = function () {
		console.log(query7.response)
	}
	query7.send()

	let query8 = new XMLHttpRequest();

	query8.open('GET', 'https://jsonplaceholder.typicode.com/todos/8');
	query8.onload = function () {
		console.log(query8.response)
	}
	query8.send()

	let query9 = new XMLHttpRequest();

	query9.open('GET', 'https://jsonplaceholder.typicode.com/todos/9');
	query9.onload = function () {
		console.log(query9.response)
	}
	query9.send()

	let query10 = new XMLHttpRequest();

	query10.open('GET', 'https://jsonplaceholder.typicode.com/todos/10');
	query10.onload = function () {
		console.log(query10.response)
	}
	query10.send()








}
query.send()*/
function ask(id) {
	return new Promise(function (resolve, reject) {
		let query = new XMLHttpRequest();
		query.open('GET', `https://jsonplaceholder.typicode.com/todos/${id}`);
		query.onload = function () {
			if (query.status !== 200) {
				reject(query.response)
			}

			setTimeout(function () {
				resolve(query.response);
			}, Math.random() * 1000);
		}
		query.send();
	});
}
ask(1)
	.then(function (value) {
		console.log(value);
		return ask(2)
	})
	.then(function (value) {
		console.log(value);
		return ask(3)
	})
	.then(function (value) {
		console.log(value);
		return ask(4)
	})
	.finally(function () {
		console.log('hfgyjgjvh')
	})















