export async function getPokemonList() {
  // TODO
  const request = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  )
  const json = await request.json()
  const names = json.results.map((result) => result.name)

  return names
}
