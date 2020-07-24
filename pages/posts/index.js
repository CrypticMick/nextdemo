import { Heading, Box, Link } from '@chakra-ui/core'
import { posts } from '../../data/posts'

export default function Posts() {
  return (
    <Box>
      <Heading as='h1' color='teal.500'>Welcome to my blog</Heading>
      {posts.map(p => (
          <Box>
              <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </Box>
      ))}
    </Box>
  )
}
