import { Box, Flex, Text } from '@chakra-ui/react'
import { Continent } from '../../pages'
import { Items } from './Items'

interface InfoCountry {
  data: Continent
}

export function InfoCountry({ data }: InfoCountry) {
  return (
    <Flex
      flexDir={['column', 'column', 'column', 'column', 'row']}
      gap={['12', '12', '24']}
      alignItems={['flex-start', 'center']}
    >
      <Text fontSize={['md', 'lg']} color="headingsAndTextDark" w="full">
        {data?.info}
      </Text>
      <Flex flexDir={'row'} alignItems={'flex-start'} gap={[10, 10, 20]}>
        <Items text={data?.countryLength} type="Países" />
        <Items text={data?.langueLength} type="Linguas" />
        <Items text={data?.citys} type="Cidades" />
      </Flex>
    </Flex>
  )
}
