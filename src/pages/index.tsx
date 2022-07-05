import type { NextPage } from 'next'
import { Flex, Text } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { Carousel } from '../components/Carousel'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Flex
        w={90}
        h={1}
        borderRadius="full"
        mx="auto"
        mt={['12', '12', '90']}
        mb={['12', '12', '14']}
        bg="headingsAndTextDark"
      />
      <Flex align="center" justify="center" mb={12}>
        <Text
          fontWeight="medium"
          as="h2"
          align="center"
          fontSize="3xl"
          color="headingsAndTextDark"
          w={400}
        >
          Vamos nessa? Então escolha seu continente
        </Text>
      </Flex>

      <Carousel />
    </>
  )
}

export default Home
