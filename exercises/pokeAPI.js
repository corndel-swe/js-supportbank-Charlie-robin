export async function getPokemonList() {
  const request = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  )
  const json = await request.json()
  const names = json.results.map((result) => result.name)

  return names
}
