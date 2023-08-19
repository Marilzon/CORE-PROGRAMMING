import * as readline from "node:readline"
import { stdin as input, stdout as output } from "node:process"
import { EventEmitter } from "events"

interface IReadline extends EventEmitter {
  question (query: string, callback: (answer: string) => void): void
  close (): void
}

const rl: IReadline = readline.createInterface({
  input, output
})

rl.question("Enter you name: ", name => {
  console.log(`Hello ${name}`)
  rl.close()
})

rl.on('close', () => {
  console.log("Closing interface!")
  process.exit(0)
})
