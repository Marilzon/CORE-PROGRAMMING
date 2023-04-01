const mustBeEqual = <T>(x: T, y: T) => {
	if (x !== y) {
		throw new Error(`${x}} must be equal to ${y}`)
	} else {
		console.log(`${x} must be equal to ${y}`)
	};
}

mustBeEqual(55, 55);

interface Data<T extends string | number> {
	id: T;
}

const filterById = <T extends string | number>(id: Task, data: Data<T>[]) => {
	return data.filter(x => x.id !== id)
}
