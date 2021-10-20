/*let arr = [10, 2, 35, 4, 11, 6, 24,]
let result = arr.filter(function (elem) {
	return elem % 2 == 0;
});

console.log(result.length)*/





/*let arr = [1, 12, 3, 14, 5, 35, 7, 8, 9, 43, 11, 24, 13, 4];
let max = arr[0];
let maxIndex = 0;
let min = arr[0];
let minIndex = 0;
for (let i = 1; i < arr.length; i++) {
	if (arr[i] > max) {
		maxIndex = i;
		max = arr[i];
	};
	if (arr[i] < min) {
		minIndex = i;
		min = arr[i];
	}

}

console.log(maxIndex);
console.log(minIndex);*/



/*let arr = [10, 2, 35, 4, 11, 6, 24,];
let sum = arr.reduce(function (a, b) { return a + b; }

)

console.log(sum / arr.length);

*/





/*let arr = [10, -2, -35, 4, -11, 6, 24,];

let counter = arr.reduce(function (a, b) {

	if (b < 0) { a.push(b) };

	return a;
}, []
);
console.log(counter.length)*/



/*let array = [];
for (let i = 1; i < 14; i++) {
	array.push(i);
}



console.log(array);
let counter = 0

for (let i = 0; i < array.length; i++) {
	if (i % 2 === 0) { counter++; }
}
console.log(counter)*/


/*let array = [];
for (let i = 1; i <= 12; i++) {
	array.push(Math.round(Math.random() * 100));
}
console.log(array);
let sum = array.reduce(function (a, b) { return a + b });
let average = sum / array.length;
console.log(average);
array[4] = average;
console.log(array);*/


/*let array = [1, 2, 3, 4, 5,];
let sum = 0;
for (let i = 0; i < array.length; i++) {
	sum += array[i]
}
console.log(sum);*/


/*let array = [];
for (let i = 1; i <= 11; i++) {
	array.push(Math.round(Math.random() * 100));
}
let sum = 0;
for (let i = 0; i < array.length; i++) {
	sum += array[i]
};
let average = sum / array.length;

let counter = 0;
for (let i = 0; i < array.length; i++) {
	if (array[i] > average) {
		counter++;
	}
}
console.log(array);
console.log(average);
console.log(counter)*/






/*let array = [];
for (let i = 1; i <= 11; i++) {
	array.push(Math.round(Math.random() * 100));
}
console.log(array)
let temp = array[0];
let max = array[0];
let maxIndex = 0;
 for (let i = 1; i < array.length; i++) {
	if (arr[i] > max) {
		maxIndex = i;
		max = array[i];
	};
array[0] = [10];
array[10] = temp;
console.log(array)    DONT PREPARE*/

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


console.log(array);
*/



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

let array = [];

for (let i = 0; i < 19; i++) {
	let number = Math.round(Math.random() * 20);
	if (Math.round(Math.random()) === 0) {
		number *= -1;
	}
	array.push(number);
}
console.log(array)


let sum = 0;
for (let i = 0; i < array.length; i++) {
	if (array[i] < 0)
		break;
	sum += array[i]
}
console.log(sum)
