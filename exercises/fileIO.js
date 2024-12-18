import fs from 'fs/promises'

// Part 1: Read the contents of ./resources/1-hello-world.txt
export async function readHelloWorld() {
  const path = new URL('./resources/1-hello-world.txt', import.meta.url)
  const txt = await fs.readFile(path, 'utf-8')
  return txt
}

// Part 2: Return the contents of ./resources/2-diary-entry.txt
export async function readDiaryEntry() {
  // TODO: Return the contents of the file as a utf-8 string
  const path = new URL('./resources/2-diary-entry.txt', import.meta.url)
  const txt = await fs.readFile(path, 'utf-8')
  return txt
}

// Part 3: Overwrite ./resources/3-save-data.txt with saveDataString
export async function writeSaveData(saveData) {
  // The path is provided for you:
  const path = new URL('./resources/3-save-data.txt', import.meta.url)

  // The data is converted to a string for you:
  const saveDataString = JSON.stringify(saveData)

  // TODO: Write the saveData string to the file
  await fs.writeFile(path, saveDataString)
}

// Part 4: Append text to ./resources/4-log-file.txt
export async function appendLogEntry(logEntry) {
  const textToAppend = logEntry + '\n'
  const path = new URL('./resources/4-log-file.txt', import.meta.url)
  fs.appendFile(path, textToAppend)
}
