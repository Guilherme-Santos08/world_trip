import { Flex, Image } from '@chakra-ui/react'
export function Header() {
  return (
    <Flex
      py={['4', '4', '6']}
      justifyContent="center"
      as="header"
      w="100%"
      maxW={1430}
      mx="auto"
    >
      <Image src="Logo.png" alt="Logo da empresa worldTrip" />
    </Flex>
  )
}
