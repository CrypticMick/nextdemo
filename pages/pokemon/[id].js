import { Box, Text } from '@chakra-ui/core'

export default function PokemonCharacter(props) {
  console.log(props)
  const { data } = props
  if (!data) {
    return (
      <Box>
        <Text>No pokemon found</Text>
      </Box>
    )
  }

  return (
    <Box>
      <Text>{data.name}</Text>
    </Box>
  )
}

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  const res = await fetch(url)
  const data = await res.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}
