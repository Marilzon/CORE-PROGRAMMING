enum Language {
	Spanish,
	Portuguese,
	English,
	French
}

enum Step {
	Back = 'S',
	Run = 'W',
	Left = 'A',
	Right = 'D',
}

enum Task {
	Todo,
	Progress,
	Done
}

const finishedTask = {
	id: 1,
	status: Task.Done,
	description: "Create a typescripts enum!"
}

if (finishedTask.status === Task.Done) {
	console.log("Task done!")
}

console.log(Language)
console.log(Step)
