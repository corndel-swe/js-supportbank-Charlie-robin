// Exercise 2 Part 1
// Finish this function by throwing an error if the id is invalid.
export function validateId(id) {
  if (id === null || id === undefined) {
    throw new Error('ID is required')
  }

  if (typeof id !== 'string') {
    throw new Error('ID is non-string')
  }

  if (id.length % 2 == 0) {
    throw new Error("ID isn't odd number of characters long")
  }

  if (!id.includes('a')) {
    throw new Error("ID doesn't contain the letter 'a'")
  }

  if (id !== id.toLowerCase()) {
    throw new Error("ID isn't all lowercase")
  }
}

// Exercise 2 Part 2
// Use try/catch with the `validateId` function above to validate the id.
// Return `true` if the id is valid.
// If an error is thrown: catch it, log a useful message, then return `false`
export function isIdValid(id, logger) {
  try {
    validateId(id)
    return true
  } catch (e) {
    logger.error(e.message)
    return false
  }
}
