import { useEffect, useState } from 'react'
import type { GetServerSideProps } from 'next'
import { Flex, Text } from '@chakra-ui/react'

import { api } from '../services/api'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { Carousel } from '../components/Carousel'
import { Separation } from '../components/Separation'
import Head from 'next/head'

export interface CountryCitys {
  id: number
  country: string
  city: string
  flag: string
  image: string
}

export interface Continent {
  id: number
  title: string
  subtitle: string
  image: string

  countryCitys: CountryCitys[]
  countryLength: number
  langueLength: number
  citys: number

  info: string
}

interface HomeProps {
  data: Continent
}

export default function Home({}: HomeProps) {
  const [data, setData] = useState([])

  useEffect(() => {
    const URL = window.location.protocol + '//' + window.location.host

    fetch(`${URL}/api/continent`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <Banner />
      <TravelTypes />
      <Separation />

      <Flex align="center" justify="center" mb={12}>
        <Text
          fontWeight="medium"
          as="h2"
          align="center"
          fontSize={['xl', '3xl']}
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
