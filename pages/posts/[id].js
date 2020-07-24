import { Heading, Box, Text } from '@chakra-ui/core'
import { posts } from '../../data/posts'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { query } = router
  const { id } = query
  if (!id) {
    return <Text>Loading ... </Text>
  }
  const post = posts.find((p) => p.id === id)

  if (!post) {
    return <Text>No post found</Text>
  }

  return (
    <Box>
      <Heading as="h1" color="teal.500">
        {post.title}
      </Heading>
      <Text>{post.body}</Text>
    </Box>
  )
}
