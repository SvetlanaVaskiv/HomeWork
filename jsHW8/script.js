

let button = document.querySelector('div');




let number = +prompt('Enter your number');
function createInput() {
	//let array = [];
	for (let i = 1; i <= number; i++) {

		let input = document.createElement('input')
		input.classList.add('input-item');
		if (i === number) {
			input.classList.add('margin-zero')
		}
		if (i % 2 != 0) {
			input.classList.add('odd');
			input.style.backgroundColor = '#FFFF00';
		}

		input.value = `Input ${i}`;
		if (i % 3 === 0) {
			input.value = "строка"
		}
		button.before(input);
		//	array.push(input)
	}



}
createInput(number);



let h2 = document.createElement('h2');
button.after(h2);
function clock() {
	let date = new Date(),
		hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
		minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
		seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
	h2.innerHTML = hours + ':' + minutes + ':' + seconds;
}
let intervalId = null;

console.log(intervalId)
function go() {
	intervalId = setInterval(clock, 1000);
}
function stop() {
	clearInterval(intervalId)
}

let buttonStart = document.createElement('button');
buttonStart.classList.add('start');
let buttonStop = document.createElement('button');
buttonStop.classList.add('stop');
buttonStart.innerHTML = 'Start';
buttonStart.addEventListener('click', go);
buttonStop.innerHTML = 'Stop';
buttonStop.addEventListener('click', stop)
//вобщем я не понимаю как это написать отмены интервала


h2.before(buttonStart);
h2.before(buttonStop);

let coffeeMachine = {
	message: 'Your coffee is ready!',
	start: function () {
		setTimeout(
			() => {
				console.log(this.message);
			}, 3000
		);
	},


}
coffeeMachine.start()

let teaPlease = {
	message: 'Wanna some tea instead of coffee?',
	start: function () {
		setTimeout(
			() => {
				console.log(this.message);
			}, 3000
		);

	},


};
//teaPlease = coffeeMachine.start.bind(teaPlease);
coffeeMachine.start = teaPlease.start.bind(teaPlease)
coffeeMachine.start()