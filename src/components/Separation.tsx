import { Flex } from '@chakra-ui/react'

export function Separation() {
  return (
    <Flex
      w={90}
      h={1}
      borderRadius="full"
      mx="auto"
      mt={['12', '12', '90']}
      mb={['12', '12', '14']}
      bg="headingsAndTextDark"
    />
  )
}
