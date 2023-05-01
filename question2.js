function findDuplicate(elements) {
	let duplicate = null;
	for(let i = 0; i < elements.length - 1; i++) {
		if(elements[i] == elements[i + 1]) {
			duplicate = elements[i];
			break;
		}
	}
	console.log(`The duplicate element is ${duplicate}`);
}

findDuplicate([1, 2, 3, 4, 4]);
