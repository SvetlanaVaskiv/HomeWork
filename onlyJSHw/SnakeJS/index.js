"use strict"
/*const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

/*const ground = new Image();
ground.src = "image/field.png";

const foodImg = new Image();
foodImg.src = "image/food.png";




let box = 32;
let score = 0;


let food = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box,

};


let snake = [];
snake[0] = {
	x: 9 * box,
	y: 10 * box,
}


let dir;

document.addEventListener("keydown", direction);
function direction(event) {
	if (event.keyCode == 37 && dir != "right")
		dir = "left";
	else if (event.keyCode == 38 && dir != "down")
		dir = "up";
	else if (event.keyCode == 39 && dir != "left")
		dir = "right";
	else if (event.keyCode == 40 && dir != "up")
		dir = "down";
}
function eatTail(head, arr) {
	for (let i = 0; i < arr.length; i++) {
		if (head.x == arr[i].x && head.y == arr[i].y)
			clearInterval(game);
	}
}

function drawGame() {

	(ground, 0, 0);


	ctx.drawImage(foodImg, food.x, food.y);

	for (let i = 0; i < snake.length; i++) {
		ctx.fillStyle = i == 0 ? "green" : "red";
		ctx.fillRect(snake[i].x, snake[i].y, box, box)
	}

	ctx.fillStyle = "white";
	ctx.font = " 50px Arial";
	ctx.fillText(score, box * 2.5, box * 1.7);

	let snakeX = snake[0].x;
	let snakeY = snake[0].y;
	if (snakeX == food.x && snakeY == food.y) {
		score++;
		food = {
			x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 3)) * box,

		}


	} else {
		snake.pop()

	}
	if (snakeX < box || snakeX > box * 17
		|| snakeY < 3 * box || snakeY > box * 17)
		clearInterval(game);



	if (dir == "left") snakeX -= box;
	if (dir == "right") snakeX += box;
	if (dir == "up") snakeY -= box;
	if (dir == "down") snakeY += box;

	let newHead = {
		x: snakeX,
		y: snakeY,
	};

	eatTail(newHead, snake)

	snake.unshift(newHead)

}



let game = setInterval(drawGame, 300)*/


/*const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const W = canvas.width = window.innerWidth;
const H = canvas.height = window.innerHeight;
let width = 10;
let height = 10;
var direction = "right";
var snake = {
	length: 5,
	array_length: [],

	draw: function () {
		ctx.clearRect(0, 0, W, H);
		this.array_length.forEach(function (x) {
			ctx.beginPath();
			ctx.fillStyle = "blue";
			ctx.fillRect(x.x, x.y, width, height);
		});
		this.update();
	},
	update: function () {
		var first = this.array_length[0];
		var first_x = first.x;
		var first_y = first.y;


		switch (direction) {

			case "right":
				first_x++;
				break;
			case "left":
				first_x -= 10;
				break;
			case "up":
				first_y -= 10;
				break;
			case "down":
				first_y += 10;
				break;

		}
		var lasat = this.array_length.pop();
		// lasat.x=first_x;
		//lasat.y=first_y;
		this.array_length.unshift({
			x: first_x,
			y: first_y
		});


	},
	update_direction: function (e) {

		var key = e.keyCode;

		if (key == "37" && direction != "right") direction = "left";
		else if (key == "38" && direction != "down") direction = "up";
		else if (key == "39" && direction != "left") direction = "right";
		else if (key == "40" && direction != "up") direction = "down";
		//alert(direction);
	}
};

for (var i = snake.length; i >= 0; i--) {
	snake.array_length.push({
		x: i * width,
		y: 0
	});
}
window.onkeydown = snake.update_direction;
var lasttime = 0;
function swag(time) {
	window.requestAnimationFrame(swag);
	if (time - lasttime > 200) {
		snake.draw();
		lasttime = time;
	}
}
window.requestAnimationFrame(swag);*/



/*function createCard(id) {
	const idElem = document.createElement('div');
	idElem.classList.add('card-id');
	const titleElem = document.createElement('div');
	titleElem.classList.add('card-title');
	const bodyElem = document.createElement('div');
	bodyElem.classList.add('card-body');
	const card = document.createElement('div');
	card.classList.add('card');
	card.append(idElem);
	card.append(titleElem);
	card.append(bodyElem);
	card.setAttribute('id', id)
	return card;
}
const cardContainer = document.getElementById('card-container')

for (let i = 1; i <= 9; i++) {
	let card = createCard(i);
	cardContainer.append(card);
}

function addEventListener(target, eventName, handler, className) {
	target.addEventListener(eventName, function (...parameters) {
		let target = event.target;
		while (target !== document && !target.classList.contains(className)) {
			target = target.parentNode
		} if (target !== document) {
			handler(target, ...parameters)
		}
	})
}

addEventListener(cardContainer, 'click', function (target, event) {
	console.log(target.id)
}, 'card')


*/


/*
async function getPost(id) {
	return (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()

}


class Card {
	constructor(id, state) {
		this._id = id;
		this._state = state;
	}
	updateState(state) {
		return this._state = state
	}

	get id() {
		return this._id;
	}
	get title() {
		return this._state.title;
	}
	get body() {
		return this._state.body;
	}

}
class Close {


	get title() {
		return '';
	}
	get body() {
		return '';
	}
}
class Open {
	constructor(
		body,
		title) {
		this._title = title;
		this._body = body;

	}

	get title() {
		return this._title
	}
	get body() {
		return this._body
	}

}


class CardProxy {
	constructor(card) {
		this._card = card;
		this._$id = document.createElement('div');
		this._$id.classList.add('card-id');
		this._$title = document.createElement('div');
		this._$title.classList.add('card-title');
		this._$body = document.createElement('div');
		this._$body.classList.add('card-body');
		this._$card = document.createElement('div');
		this._$card.classList.add('card');
		this._$card.append(this._$id);
		this._$card.append(this._$title);
		this._$card.append(this._$body);
	}


	render() {
		this._$id.innerHTML = this.card.id;
		this._$title.innerHTML = this.card.title;
		this._$body.innerHTML = this.card.body;
	}
	get $card() {
		return this._$card;
	}
	get card() {
		return this._card;
	}



}
const cardContainer = document.getElementById('card-container')
const record = document.getElementById('record');
const play = document.getElementById('play');
let proxyIndex = new Map();

for (let i = 1; i <= 9; i++) {
	const state = new Close();
	const card = new Card(i, state);
	const cardProxy = new CardProxy(card);
	cardContainer.append(cardProxy.$card);
	proxyIndex.set(cardProxy.$card, cardProxy);
	cardProxy.render();
}

cardContainer.addEventListener('click', async function (event) {
	const proxy = proxyIndex.get(event.target);
	const payload = await getPost(proxy.card.id);
	proxy.card.updateState(new Open(payload.title, payload.body));

	proxy.render();
});
let cards = [];



function handleClick(event) {
	const proxy = proxyIndex.get(event.target);
	cards.push(proxy);
}


function start() {
	clearAll();
	record.addEventListener('click', stop);
	record.removeEventListener('click', start);
	record.innerHTML = 'Stop';
	cardContainer.addEventListener('click', handleClick);
	play.setAttribute('disabled', '');

};
function stop() {
	record.addEventListener('click', start);
	record.removeEventListener('click', stop);
	record.innerHTML = 'Start';
	cardContainer.removeEventListener('click', handleClick)
	play.removeAttribute('disabled');
};
async function run() {
	clearAll();
	let i = 1;
	for (let proxy of cards) {
		setTimeout(async function () {
			const payload = await getPost(proxy.card.id);
			proxy.card.updateState(new Open(payload.title, payload.body));

			proxy.render();
		}, i++ * 1000)
	}
}

function clearAll() {
	for (let proxy of [...proxyIndex.values()]) {
		proxy.card.updateState(new Close());
		proxy.render()
	}
}
record.addEventListener('click', start)
play.addEventListener('click', run)*/

/*const N = 20;
const cellSize = 30
const blockSize = 35;
const MaxWidth = 10;
const MaxHeight = 20;
const border = 5;

ctx.strokeRect(35, 35, 35 * MaxWidth, 35 * MaxHeight)
ctx.lineWidth = 2;
*/
/*
class Point {
	constructor(
		x,
		y) {
		this._x = x;
		this._y = y;
	}
	get x() {
		return this._x;
		;
	}

	set x(value) {
		this._x = value
	}
	get y() {
		return this._y;
		;
	}

	set y(value) {
		this._y = value;
	}
}
class Platform {
	constructor(
		ctx,
		positionX,
		positionY,
		width,
		height,
		color,
	) {
		this._ctx = ctx;
		this._positionX = positionX;
		this._positionY = positionY;
		this._width = width;
		this._height = height;
		this._color = color;
	}
	get positionX() {
		return this._positionX;
	}
	get positionY() {
		return this._positionY;
	}
	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}
	get color() {
		return this._color;
	}
	set positionX(value) {
		this._positionX = value;
	}
	set positionY(value) {
		this._positionY = value;
	}
	render() {
		this._ctx.beginPath();
		this._ctx.fillStyle = this._color;

		this._ctx.fillRect(
			this.positionX,
			this.positionY,
			this.width,
			this.height
		);
	}
	/*	clear() {
			this._clear(this._begin);
		}
		_clear(begin) {
			this._ctx.clearRect(
				begin.x,
				begin.y,
				this._width,
				this._height
			);
		}*/
/*
}


class Field {
constructor(
width = 1000,
height = 800,


) {
this._width = width;
this._height = height;

}
get width() {
return this._width;
;
}

set width(value) {
this._width = value
}
get height() {
return this._height;
;
}

set height(value) {
this._height = value;
}
render() {
ctx.clearRect(0, 0, 1000, 800)
ctx.rect(0, 0, this.width, this.height);

ctx.stroke();
}
}
class Ball {
constructor(
ctx,
positionX,
positionY,
diametr,
lineWidth = 2,
color,
) {
this._ctx = ctx;
this._positionX = positionX;
this._positionY = positionY;
this._diametr = diametr;
this._lineWidth = lineWidth;
this._color = color;
}
get radius() {

return this._diametr / 2 - this._lineWidth;
}
get positionX() {
return this._positionX;
}
get positionY() {
return this._positionY;
}
get color() {
return this._color;
}
set positionX(value) {
this._positionX = value;
}
set positionY(value) {
this._positionY = value;
}
set radius(value) {
this._diametr = value;
}
render() {
this._ctx.fillStyle = this._color;
this._ctx.beginPath();


const x = this._positionX;
const y = this._positionY;
this._ctx.arc(
	x,
	y,
	this.radius,
	0,
	Math.PI * 2, true
);

this._ctx.fill();

}


/*	_clear(center) {
	this._ctx.clearRect(
		center.x - (this.radius + this._lineWidth * 2),
		center.y - (this.radius + this._lineWidth * 2),
		this._diametr,
		this._diametr
	)
}*/
/*
}
const ball = new Ball(ctx, 30, 250, 35, 2, 'red');
let platform = new Platform(ctx, 600, 760, 70, 35, 'black');
const field = new Field;
let moveDown = true;
let moveRight = true;
let score = 0;
let newPosX;
document.addEventListener('keydown', function (event) {
	if (event.code == "ArrowRight" && platform.positionX + platform.width !== 1000) {
		newPosX = platform.positionX += 5;

	} else if (event.code == "ArrowLeft" && platform.positionX != 0) {
		newPosX = platform.positionX -= 5;

	}
});
let arr = [];
console.log(arr)

for (let i = 1; i < 10; i++) {
	arr.push(platform)
}
console.log(arr)

let playGame = setInterval(function () {
	if (ball.positionX >= newPosX && ball.positionX <= newPosX && ball.positionY == platform.positionY) {
		//		if (ball.positionY >= platform.positionY && ball.positionY <= platform.positionY) {

		moveDown = true;
		score++;
	}
	
	if (ball.positionY - 100 == 0) {
		moveDown = false;

	}
	if (ball.positionX == 985) {
		moveRight = false;

	}
	if (ball.positionX === 15) {
		moveRight = true;

	}
	if (moveRight == true) {
		ball.positionX++;

	} else {
		ball.positionX--;

	}
	if (moveDown == true) {
		ball.positionY--;

	} else {
		ball.positionY++;

	}

	field.render();
	ball.render();
	platform.render();
}, 10)

*/
class Block {
	constructor(
		positionX,
		positionY,
		width,
		height,
	) {
		this._positionX = positionX;
		this._positionY = positionY;
		this._width = width;
		this._height = height;
	}
	get positionX() {
		return this._positionX;
	}
	get positionY() {
		return this._positionY;
	}
	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}

	set positionX(value) {
		this._positionX = value;
	}
	set positionY(value) {
		this._positionY = value;
	}
}

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let block
const blocks = [];
for (let i = 1, j = 50; i <= 10; i++) {

	let y = 50;
	let x = (35 + j) * i;
	block = new Block(x, y, 60, 35,);



	blocks.push(block)

}
