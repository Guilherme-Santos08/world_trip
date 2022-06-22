import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'

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
    </>
  )
}

export default Home
