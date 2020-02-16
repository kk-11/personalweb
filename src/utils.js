function createEmptyArray(length, filler = '_') {
	const arr = [];
	for(let i = 0; i<length; i++) {
		arr.push(filler);
	}
	return(arr);
}

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
export {
	createEmptyArray,
	getRandomColor
}
