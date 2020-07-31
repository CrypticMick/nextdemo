import { Box, Text } from '@chakra-ui/core'
import { useEffect, useState } from 'react'

// localhost:3000/useEffect/pokemon/1
export default function PokemonCharacter(props) {
  console.log(props)
  const { id } = props
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    // useEffect will fire when there is a new id present

    // id has not been set from server -- skip
    if (!id) return null

    // has id -- setPokemon
    // have an named function to call inside the useEffect that sets state
    // named function can use async/await -- useEffect cannot

    const setPokemonData = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
      const res = await fetch(url)
      const data = await res.json()
      setPokemon(data)
    }

    setPokemonData()
  }, [id])

  if (!id) {
    return (
      <Box>
        <Text>No id found.</Text>
      </Box>
    )
  }

  if (!pokemon)
    return (
      <Box>
        <Text>No Pokemon found.</Text>
      </Box>
    )

  return (
    <Box>
      <Text>TODO: Map pokemon data for user</Text>
    </Box>
  )
}

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context

  return {
    props: { id },
  }
}
