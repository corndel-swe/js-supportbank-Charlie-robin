import fs from 'fs/promises'

export async function readJSONTransactions() {
  const path = new URL('../data/Transactions2013.json', import.meta.url)
  const content = await fs.readFile(path, 'utf-8')
  return JSON.parse(content)
}
// Read the Transactions2013.json file
// Use JSON.parse to convert the string into an array of objects
// and return it
