import { Box, Flex, Image, Text } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex
      align="center"
      justifyContent={['center', 'center', 'center', 'space-between']}
      backgroundImage="url('/Background.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      px={['4', '4', '6', 140]}
      pt="20"
      pb="16"
    >
      <Box>
        <Text fontSize={['xl', '2xl', '4xl']} color="headingsAndText">
          5 Continentes, <br /> infinitas possibilidades.
        </Text>
        <Text fontSize={['sm', 'md']} color="info" maxW="418px">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
        </Text>
      </Box>
      <Box pos="relative" w={700} display={['none', 'none', 'none', 'block']}>
        <Image
          src="Airplane.png"
          alt="imagem de um avião amarelo"
          pos="absolute"
          top="-120"
          right="0"
          zIndex={2}
        />
      </Box>
    </Flex>
  )
}
