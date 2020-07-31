import { Heading, Box, Link } from '@chakra-ui/core'
import { pokemonData } from '../../data/pokemonData'

export default function Posts() {
  return (
    <Box>
      <Heading as="h1" color="teal.500">
        Welcome to PokeVille
      </Heading>
      {pokemonData.map(p => (
        <Box key={p.id}>
          <Link href={`/pokemon/${p.id}`}>{p.name}</Link>
        </Box>
      ))}
    </Box>
  )
}
