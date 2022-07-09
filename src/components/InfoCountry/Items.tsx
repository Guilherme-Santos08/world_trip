import { Box, Text } from '@chakra-ui/react'

interface Items {
  text: number | undefined
  type: string
}

export function Items({ text, type }: Items) {
  return (
    <Box fontWeight="semibold" textAlign="center">
      <Text color="highlight" fontSize={['2xl', '3xl', '5xl']} as="h2">
        {text}
      </Text>
      <Text fontSize={['xl', '2xl']} color="headingsAndTextDark">
        {type}
      </Text>
    </Box>
  )
}
