

//function sum(array) {
//	let total = 0;
//	for (let value of array) {
//		total += value;

//	}
//	return total;
//}


//let total = document.querySelector('.total');
let body = document.querySelector('body')
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
console.log(getname2)