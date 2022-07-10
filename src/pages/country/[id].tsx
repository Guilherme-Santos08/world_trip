import { Box, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Continent } from '..'
import { StackEx } from '../../components/Card'
import { Header } from '../../components/Header'
import { InfoCountry } from '../../components/InfoCountry'

export default function Country() {
  const router = useRouter()
  const { id } = router.query

  const [country, setCountry] = useState<Continent>(Object)
  useEffect(() => {
    const fetchApi = async () => {
      const fetchUrl = await fetch('http://localhost:3000/api/continent')
      const response = await fetchUrl.json()
      const data = await response.filter(
        (datas: Continent) => String(datas.id) === id
      )
      setCountry(data[0])
    }
    fetchApi()
  }, [id])

  return (
    <>
      <Head>
        <title>{country?.title}</title>
      </Head>
      <Header buttonBackHome={true} />
      <Flex
        alignItems="flex-end"
        justifyContent="flex-start"
        w="100%"
        h={400}
        bgImage={`url('${country?.image}')`}
        bgPosition="center center"
        bgRepeat="no-repeat"
        bgSize="cover"
        textAlign="start"
        color="headingsAndText"
        fontWeight="bold"
        px={['28', '32']}
        py="16"
      >
        <Text as="h2" fontSize={['3xl', '4xl']} fontWeight="semibold">
          {country?.title}
        </Text>
      </Flex>

      <Box mx={[4, 6, 140]} my={['6', '20']}>
        <Box>
          <InfoCountry data={country} />
        </Box>

        <Box mt={['9', '20']}>
          <Text
            as="h2"
            mb="7"
            fontSize={['xl', '4xl']}
            color="headingsAndTextDark"
            fontWeight="semibold"
          >
            Cidades +100
          </Text>
          <StackEx data={country?.countryCitys} />
        </Box>
      </Box>
    </>
  )
}
