import { Box, Flex, Grid, Image, Stack, Text } from '@chakra-ui/react'
import { CountryCitys } from '../../pages'

interface StackExProps {
  data: CountryCitys[]
}

export function StackEx({ data }: StackExProps) {
  console.log(data)
  return (
    <Grid
      templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
      gap={['5', '10']}
      alignItems="center"
      justifyContent="center"
      px={['8', '0']}
    >
      {data?.map(city => (
        <Box
          borderBottomRightRadius="base"
          borderBottomLeftRadius="base"
          shadow="md"
          borderWidth="1px"
          w="full"
          maxW={['64', '72']}
          height={'279px'}
          key={city?.id}
        >
          <Image
            src={city?.image}
            alt={`Imagem da cidade ${city.city}`}
            w="100%"
            h="173px"
            borderTopRightRadius="base"
            borderTopLeftRadius="base"
          />
          <Flex
            px="6"
            py="4"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Text
                as="h3"
                fontSize="xl"
                fontWeight="bold"
                color="headingsAndTextDark"
              >
                {city?.city}
              </Text>
              <Text color="infoDark" fontSize="md">
                {city?.country}
              </Text>
            </Box>
            <Box h="30px" w="30px">
              <Image
                width="full"
                height="full"
                borderRadius="full"
                objectFit="cover"
                src={city?.flag}
                alt={`bandeira do país ${city.country}`}
              />
            </Box>
          </Flex>
        </Box>
      ))}
    </Grid>
  )
}
