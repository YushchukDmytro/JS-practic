'use strict';

const box = document.getElementById('box'),
			btns = document.getElementsByTagName('button'),
			circles = document.getElementsByClassName('circle'),
			hearts = document.querySelectorAll('.heart'),
			oneHeart = document.querySelector('.heart'),
			wrapper = document.querySelector('.wrapper');

			// console.log(btns.length);

box.style.backgroundColor = 'pink';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'pink';


hearts.forEach(item => {
	item.style.backgroundColor = 'orange';
});

const div = document.createElement('div');

div.classList.add('black');

document.body.append(div);

// document.body.appendChild(box);

// document.body.prepend(div);

// hearts[1].before(div);
// hearts[1].after(div);

hearts[2].replaceWith(circles[1]);

