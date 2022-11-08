// https://www.youtube.com/watch?v=M421fR3TYxg

function scrolldown() {
	let Body = document.querySelector('body');
	Body.className = 'scrolled';
}

function scrollup() {
	let Body = document.querySelector('body');
	Body.className = '.';
}

window.onload = scrollup();