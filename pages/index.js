import Head from 'next/head'
import { Heading, Box } from '@chakra-ui/core'

export default function Home() {
  return (
    <Box>
      <Heading as='h1' color='teal.500'>Hello World</Heading>
    </Box>
  )
}
