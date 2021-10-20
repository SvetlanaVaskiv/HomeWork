
let image = document.getElementById('image');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
//let image1 = document.getElementById('image1');
//let prev1 = document.getElementById('prev1');
//let next1 = document.getElementById('next1')
let images = [
	'./image/photo_2021-07-16_23-29-16.jpg',
	'./image/photo_2021-07-16_23-29-23.jpg',
	'./image/photo_2021-07-16_23-29-29.jpg',
]
let cards = document.getElementsByClassName('card')
for (let card of cards) {
	let $image = card.querySelector('.image');
	let $prev = card.querySelector('.prev');
	let $next = card.querySelector('.next');
	let index = 0;
	function prev() {
		if (index - 1 < 0) {
			index = images.length - 1
		} else {
			index--;
		}
		$image.src = images[index];
	}
	function next() {
		if (index + 1 === images.length) {
			index = 0
		} else {
			index++;
		}
		$image.src = images[index];

	}


	$next.addEventListener('click', next);
	$prev.addEventListener('click', prev);
	setInterval(next, 3000);
	$image.src = images[index];
}
/*let index = 0;
prev.addEventListener('click', function () {
	if (index - 1 < 0) {
		index = images.length - 1
	} else {
		index--;
	}
	image.src = images[index];
});
next.addEventListener('click', function () {
	if (index + 1 === images.length) {
		index = 0
	} else {
		index++;
	}
	image.src = images[index];

});
setInterval(function () {
	if (index + 1 === images.length) {
		index = 0
	} else {
		index++;
	}
	image.src = images[index];

}, 2000);
let slider = {
	index: 0,
	delay: 2000,
	items: [],
};
function Slider(images, index = 0, delay = 2000) {
	this.images = images;
	this.index = index;
	this.delay = delay;
	this.current = this.images[this.index]
}

Slider.prototype.next = function () {
	if (this.index - 1 < 0) {
		this.index = this.images.length - 1
	} else {
		this.index--;
	}
	this.current = this.images[this.index]
};

Slider.prototype.prev = function () {
	if (this.index + 1 === this.images.length) {
		this.index = 0
	} else {
		this.index++;
	}
	this.current = this.images[this.index]

};


Slider.prototype.getCurrent = function () {
	return this.current;
}
Slider.prototype.getDelay = function () {
	return this.delay;
}

let cards = document.getElementsByClassName('card');

let i = 0;
for (let card of cards) {
	let image = card.querySelector('.image');
	let prev = card.querySelector('.prev');
	let next = card.querySelector('.next');
	let slider = new Slider(images, i++);
	prev.addEventListener('click', function () {
		slider.prev1();
		image.src = slider.getCurrent();
	});
	next.addEventListener('click', function () {
		slider.next1();
		image.src = slider.getCurrent();
	});
	setTimeout(function () {
		slider.next1()
	}, slider.getDelay())
	image.src = slider.getCurrent();
}





/*prev1.addEventListener('click', function () {
	slider1.prev();
	image1.src = slider1.getCurrent();

})

next1.addEventListener('click', function () {
	slider1.prev();
	image1.src = slider1.getCurrent();

})
setTimeout(function () {
	slider1.next()
}, slider1.getDelay())
*/
