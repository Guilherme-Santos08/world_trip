import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react'

type TravelTypesItems = {
  src: string
  alt: string
  text: string
}

export function TravelTypesItems({ src, alt, text }: TravelTypesItems) {
  return (
    <Box maxW={200}>
      <Image
        mx="auto"
        src={src}
        alt={alt}
        display={['none', 'none', 'block']}
      />
      <Flex alignItems="center" flexDir="row" justifyContent="center">
        <Box
          w={3}
          h={3}
          display={['block', 'block', 'none']}
          bg="highlight"
          borderRadius="full"
          mr="1.5"
        />
        <Text fontSize="xl" display={['block', 'block', 'none']}>
          {text}
        </Text>
      </Flex>
    </Box>
  )
}
