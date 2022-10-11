import { Text, Button, Flex, Avatar, Badge, Box } from '@chakra-ui/react'
//import { Button, Tooltip } from '@chakra-ui/button'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  
    <Layout title="Home | Next.js + TypeScript Example">
      <Flex>
      <Avatar name='n1mr0d.eth' src='https://bit.ly/broken-link' />
        <Box ml='3'>
          <Text>n1mr0d.eth</Text>
        </Box>
      </Flex>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
)

export default IndexPage
