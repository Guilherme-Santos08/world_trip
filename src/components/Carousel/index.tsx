// Import Swiper React components
import { Flex, Text, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Continent } from '../../pages'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])

interface CarouselProps {
  data: Continent[]
}

export function Carousel({ data }: CarouselProps) {
  return (
    <Flex
      w="100%"
      h={['250px', '450px']}
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {data.map(country => (
          <SwiperSlide key={country.id}>
            <Link href={`country/${country.id}`}>
              <Flex
                cursor="pointer"
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={`url('${country.image}')`}
                bgPosition="100% 30%"
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
                color="headingsAndText"
                fontWeight="bold"
              >
                <Text as="h3" fontSize={['2xl', '6xl']}>
                  {country.title}
                </Text>
                <Text
                  w={[280, 400]}
                  color="headingsAndText"
                  fontSize={['sm', '2xl']}
                >
                  {country.subtitle}
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}
