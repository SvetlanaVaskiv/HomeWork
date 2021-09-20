"use strict"
//const canvas = document.getElementById("canvas");
//const ctx = canvas.getContext("2d");

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

/*function circle(positionX, positionY, radius, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(positionX, positionY, radius, 0, Math.PI * 2, true);
	ctx.fill();
}

function block(positionX, positionY, width, height, color) {
	ctx.fillStyle = color;
	ctx.fillRect(positionX, positionY, width, height);

}
let circleX = 30;
let circleY = 250;
let moveRight = true;
let moveTop = true;
let blockY = 200;
let heightBlock = 100;
let score = 0;
document.addEventListener('keydown', function (event) {
	if (event.code == "ArrowDown" && blockY + heightBlock !== 500) {
		blockY += 5;
	} else if (event.code == "ArrowUp" && blockY != 0) {
		blockY -= 5;
	}
})
let playGame = setInterval(function () {
	ctx.clearRect(0, 0, 800, 500);
	if (circleY >= blockY && circleY <= blockY + heightBlock && circleX == 725) {
		moveRight = false;
		score++;
	}
	if (circleY - 25 == 0) {
		moveTop = false;
	} else if (circleY + 25 == 500) {
		moveTop = true;
	}
	if (circleX - 25 == 0) {
		moveRight = true;
	}


	if (moveRight == true) {
		circleX++;
	} else {
		circleX--;
	}

	if (moveTop == true) {
		circleY--;
	} else {
		circleY++;
	}


	circle(circleX, circleY, 25, 'red');
	block(750, blockY, 25, heightBlock, 'black');
	if ((circleY <= blockY || circleY >= blockY + heightBlock) && circleX > 725) {
		clearInterval(playGame);
		console.log(score)
	}
}, 0)
*/
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
let pointx = [];
for (let i = 0; i < 15; i++) {
	let j = Math.floor(Math.random() * 1000);
	pointx.push(j)
}
let WIDTH = platform.width * Math.floor(Math.random() * 10)
let pointy = [];
for (let i = 0; i < 15; i++) {
	let k = Math.floor(Math.random() * 100);
	pointy.push(k)
}




let platforms = new Platform(ctx, pointx[0], pointy[0], WIDTH, 35, 'blue');
let platforms1 = new Platform(ctx, pointx[1], pointy[1], WIDTH, 35, 'blue');
let platforms2 = new Platform(ctx, pointx[2], pointy[2], WIDTH, 35, 'blue');
let platforms3 = new Platform(ctx, pointx[3], pointy[3], WIDTH, 35, 'blue');
let platforms4 = new Platform(ctx, pointx[4], pointy[4], WIDTH, 35, 'blue');
let platforms5 = new Platform(ctx, pointx[5], pointy[5], WIDTH, 35, 'blue');
let platforms6 = new Platform(ctx, pointx[6], pointy[6], WIDTH, 35, 'blue');
let platforms7 = new Platform(ctx, pointx[7], pointy[7], WIDTH, 35, 'blue');
let platforms8 = new Platform(ctx, pointx[8], pointy[8], WIDTH, 35, 'blue');
let platforms9 = new Platform(ctx, pointx[9], pointy[9], WIDTH, 35, 'blue');

console.log(platforms)
console.log(platforms1)
let playGame = setInterval(function () {
	if (ball.positionX >= newPosX && ball.positionX <= newPosX
		//	&& ball.positionY == platform.positionY
	) {

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
	platforms.render()
	platforms1.render()
	platforms2.render()
	platforms3.render()
	platforms4.render()
	platforms5.render()
	platforms6.render()
	platforms7.render()
	platforms8.render()
	platforms9.render()
}, 10)








