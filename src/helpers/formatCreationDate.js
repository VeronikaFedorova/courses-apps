export function formatCreationDate(min) {
	let mm = min % 60;
	let hh = (min - mm) / 60;
	if (hh < 10) {
		hh = '0' + hh;
	}
	if (mm < 10) {
		mm = mm + '0';
	}
	if (hh === 1) {
		return `${hh}:${mm} hour`;
	} else {
		return `${hh}:${mm} hours`;
	}
}
