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
console.log(discriminant(2, 2, 1))*/


let number = [];
for (let i = 0; i < 100; i++) {
	number.push(Math.floor(Math.random() * 100))
}

/*function oddValue(array) {
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
console.log(test4)*/


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

/*let evenValue2 = (array) => {
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
console.log(search2(array5, 5));*/










function sortNum(A) {
	let n = A.length;
	for (let i = 0; i < n - 1; i++) {
		let min = i;
		for (let j = i + 1; j < n; j++) { if (A[j] < A[min]) min = j; }
		let t = A[min]; A[min] = A[i]; A[i] = t;
	}
	return A;
}

console.log(sortNum(test5))



/*let FirstName = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];

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

console.log(Number(num1.reverseArr3().join("")));



let array8 = [44, 12, 11, 7, 1, 99, 43, 5, 69];

console.log(array8)

for (let j = 0; j < array8.length - 1; j++) {
	let max = array8[j]; // максимальное значение (будем всегда ставить в начало)
	let k = j; // индекс текущего максимума
	for (i = j + 1; i < array8.length; i++) {
		if (max < array8[i]) {
			max = array8[i];
			k = i;
		}
	}
	// ставим максимум на "первую" позицию
	let obmen = array8[j];
	array8[j] = max;
	array8[k] = obmen;
}
console.log(array8)// вобщем-то работает но я не совсем понятно*/