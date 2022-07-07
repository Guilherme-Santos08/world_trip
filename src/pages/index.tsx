import type { GetServerSideProps, NextPage } from 'next'
import { Flex, Text } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { Carousel } from '../components/Carousel'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

interface CountryEmphasis {
  country: string
  state: string
}

export interface Continent {
  id: number
  title: string
  subtitle: string
  image: string

  countryEmphasis?: CountryEmphasis[]
  countryLength?: number
  langueLength?: number
  citys?: number
}

interface HomeProps {
  data: Continent
}

export default function Home({}: HomeProps) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/continent')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
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

      <Carousel data={data} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<any> = async () => {
  return {
    props: {},
  }
}
