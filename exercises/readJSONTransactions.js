import fs from 'fs/promises'

export async function readJSONTransactions() {
  const path = new URL('../data/Transactions2013.json', import.meta.url)
  const content = await fs.readFile(path, 'utf-8')
  return JSON.parse(content)
}
// Read the Transactions2013.json file
// Use JSON.parse to convert the string into an array of objects
// and return it

// Write a function that
// - Reads from Example.json
// - Parses it into JSON
// - returns the name from the object
function exerciseOne() {
  return "hello"
}

console.log(await exerciseOne())

// Write a function that
// - Reads from Example.json
// - Parses it into JSON
// - returns a string with the name, age and email from the object
