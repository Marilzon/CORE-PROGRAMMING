/* Declaring a tuple. */
const people: [string, string, number] = ['Marilzon', 'Sousa', 30];
const fruits: [string, ...string[]] = ['orange', 'mellons'];
let buyFruits: [number, boolean, ...string[]] = [10, true, ...fruits]

const listOfPeople = (names: string[], ages: number[]) => {
	return [...names, ...ages];
}

console.log(listOfPeople(['Marilzon', 'Sousa'], [30, 30]))
