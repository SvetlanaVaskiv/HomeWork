

let button = document.querySelector('div');




let number = +prompt('Enter your number');
function createInput() {
	let array = [];
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
		array.push(input)
	}



}
createInput(number);
let h2 = document.createElement('h2');
button.after(h2);

function startTime() {
	let tm = new Date();
	let h = tm.getHours();
	let m = tm.getMinutes();
	let s = tm.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	h2.innerHTML = h + ":" + m + ":" + s;
	t = setInterval('startTime()', 1000);
}
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
let timer = startTime;
let buttonStart = document.createElement('button');
buttonStart.classList.add('start');

let buttonStop = document.createElement('button');
buttonStop.classList.add('stop');
buttonStart.innerHTML = 'Start';

buttonStart.addEventListener('click', function () { startTime() });
buttonStop.innerHTML = 'Stop';
buttonStop.addEventListener('click', function () { clearInterval(timer) })

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