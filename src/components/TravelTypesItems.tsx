/* eslint-disable jsx-a11y/alt-text */
import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

type TravelTypesItems = {
  src: string
  alt: string
  text: string
}

export function TravelTypesItems({ src, text }: TravelTypesItems) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <>
      <Flex direction={['row', 'column']} align="center" justify="center">
        {isMobile ? (
          <Image src={src} mb="6" />
        ) : (
          <Text color="yellow.400" fontSize="4xl" mr="2">
            •
          </Text>
        )}
        <Text fontWeight="600" color="gray.700" fontSize={['md', 'xl', '2xl']}>
          {!isMobile && text}
        </Text>
      </Flex>
    </>
  )
}
