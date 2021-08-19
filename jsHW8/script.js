

let button = document.querySelector('div');




/*let number = +prompt('Enter your number');
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
*/


let h2 = document.createElement('h2');
button.after(h2);
let hour = 0;
let minutes = 0;
let seconds = 0;
function startTime() {
	let time = new Date();
	hour = time.getHours();
	minutes = time.getMinutes();
	seconds = time.getSeconds();
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);
	h2.innerHTML = hour + ":" + minutes + ":" + seconds;

	setTimeout('startTime()', 1000);

}

timer = setInterval((hour, minutes, seconds) => {
	this.hour = hour++;
	this.minutes = minutes++;
	this.seconds = seconds++

}, 5000);
console.log(hour);
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

let buttonStart = document.createElement('button');
buttonStart.classList.add('start');
let buttonStop = document.createElement('button');
buttonStop.classList.add('stop');
buttonStart.innerHTML = 'Start';
buttonStart.addEventListener('click', function () { startTime() });
buttonStop.innerHTML = 'Stop';
buttonStop.addEventListener('click', function () { clearInterval(timer) })
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