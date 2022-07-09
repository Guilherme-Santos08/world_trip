import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Continent } from '..'
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
        <InfoCountry data={country} />
      </Box>
    </>
  )
}
