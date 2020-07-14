export function fireGA() {
	console.log(window.gtag);
	window.gtag('event', 'xyz');
}

export function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		let context = this, args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}


export function joinClasses() {
	return [].concat.apply([], arguments).map(expandClasses).filter(e => e).join(' ');
}

function expandClasses(classes) {
	if (!classes || typeof classes !== 'object' || Array.isArray(classes)) {
		return classes;
	}
	let mapKey = 's';
	let map = classes[mapKey];
	let hasMap = map && typeof map === 'object';
	let list = Object.keys(classes).filter(key => (!hasMap || key !== mapKey) && classes[key]);
	if (map) {
		list = list.map(e => map[e] || e);
	}
	return list.join(' ');
}
