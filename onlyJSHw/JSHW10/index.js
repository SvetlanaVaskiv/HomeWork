/*let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let number = Math.floor(1 + Math.random() * (6 - 1 + 1));
		if (number <= 5) {
			console.log('Start the game...')
			resolve(number)
		}
		else if (number === 6) {
			reject(new Error("Whoops!"))
		}
	}, 2000);
});


promise.then(number => {
	if (number === 1) { console.log('Stay here') }
	else if (number >= 2) { console.log(`Go ${number} steps`) }
})
	.catch(err => console.error('Exit'));


let goToShop = function () {
	let store = ['milk', 'bread', 'chiken', 'beacon', 'salad', 'pasta', 'soda',
		'tomato', 'cheese', 'potate', 'wine', 'pizza', 'whiskas'];

	store.splice(Math.floor(Math.random() * store.length))
	console.log(store)
	let promise = new Promise((resolve, reject) => {
		if (store.length > 2) {
			resolve()
		}
		reject(new Error('Too low product')
		)
	})

	return promise
}



function makeDinner() {
	let prom = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log('Bon appetit'));
		}, 3000);
	});
}

goToShop().then((res) => makeDinner(res))
	.catch((err) =>
		console.log(err.name, err.message))*/


let circles = document.getElementsByClassName('circle')
/*function trasit(){
	let circle = document.querySelector('.active')
	return new Promise((resolve) => {
		let i =0;
		let interval = setInterval( () => {
			circle.classList.toggle('active')
			i++
if ( i ===7) {
	resolve()
}
		})
	})
}*/
/*
const red = 0;
const green = 2;
const yellow = 1;
class Traffic {
	flow = [
		red,
		yellow,
		green
	]
	constructor(mode) {
		this.direction = 1;
		this.mode = mode
	}
	next() {
		if( this.mode === 0) {
			this.direction = 1
		} else if (this.mode === this.flow.length -1) {
			this.direction = -1
		}
		this.mode += this.direction;
		return this.mode
	}
	current
}

class TrafficLig {
	circleSelector = '';
	activeSelector = '.active';
	redSelector = '.red';
	greenSelector = '.green';
	yellowSelector = '.yellow';
	delay = 2000;
	blink = 7;
	blinkDelay = 500;
constructor(selector, options = {}) {
	Object.assign(this.options);
	this.element = document.querySelector(selector);
	this.circleElement = this.element.querySelector(this.circleSelector);
	this.redElement = this.element.querySelector(this.redSelector);
	this.yellowElement = this.element.querySelector(this.yellowSelector);
	this.greenElement = this.element.querySelector(this.greenSelector);
this.elements = [
	this.redElement,
	this.yellowElement,
	this.greenElement
]
this.model = new Traffic(this.defaultMode)

}
transit () {
	return new Promise(resolve => {
		for( let element)
	})
}


}*/
/*let circles = document.querySelectorAll('.circle');


const RED = 0;
const YELLOW = 1;
const GREEN = 2;


class TrafficLightModel {

	flow = [
		RED,
		YELLOW,
		GREEN
	];

	constructor(mode = RED) {
		this.direction = 1;
		this.mode = mode;
	}

	next() {
		if (this.mode === 0) {
			this.direction = 1;
		} else if (this.mode === this.flow.length - 1) {
			this.direction = -1;
		}
		this.mode += this.direction;
		return this.mode;

	}

	current() {
		return this.mode;
	}

}


class TrafficLight {

	defaultMode = RED;
	circleSelector = '.circle'
	activeClass = 'active';
	redSelector = '.red';
	greenSelector = '.green';
	yellowSelector = '.yellow';

	delay = 2000;
	blinks = 7;
	blinkDelay = 500;


	constructor(selector, options = {}) {
		Object.assign(this, options);
		this.element = document.querySelector(selector);
		this.redElement = this.element.querySelector(this.redSelector);
		this.yellowElement = this.element.querySelector(this.yellowSelector);
		this.greenElement = this.element.querySelector(this.greenSelector);
		this.elements = [
			this.redElement,
			this.yellowElement,
			this.greenElement
		];
		this.model = new TrafficLightModel(this.defaultMode);
	}

	transit() {
		return new Promise(resolve => {

			for (let element of this.elements) {
				element.classList.remove(this.activeClass);
			}
			let current = this.model.current();
			let element = this.elements[current];
			let i = 0;
			let interval = setInterval(() => {

				element.classList.toggle(this.activeClass);
				i++;
				if (i > this.blinks) {
					clearInterval(interval);
					resolve();
				}

			}, this.blinkDelay);
		});

	}

	active(mode) {
		let element = this.elements[mode];
		element.classList.add(this.activeClass);
	}

	run() {
		setTimeout(async () => {
			await this.transit();
			this.model.next();
			let current = this.model.current();
			this.active(current);
			this.run();
		}, this.delay);

	}

}

let trafficLight1 = new TrafficLight('#trafficLight1');
trafficLight1.run();

let trafficLight2 = new TrafficLight('#trafficLight2', { defaultMode: GREEN });
trafficLight2.run();*/

