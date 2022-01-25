import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
      h={['250px', '450px']}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
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
            <SwiperSlide>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage="url('/europe.jpg')"
                bgPosition="100% 30%"
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
              >
                <Link href={'/continent/europa'}>
                  <a>
                    <Heading
                      fontSize={['3xl', '4xl', '5xl']}
                      color="gray.100"
                      fontWeight="bold"
                    >
                      Europa
                    </Heading>
                    <Text
                      fontWeight="bold"
                      color="gray.300"
                      fontSize={['0.8rem', '1xl', '2xl']}
                      mt={['2', '4']}
                    >
                      O continente mais antigo.
                    </Text>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage="url('/asia.jpg')"
                bgPosition="100% 30%"
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
              >
                <Link href={'/continent/asia'}>
                  <a>
                    <Heading
                      fontSize={['3xl', '5xl']}
                      color="gray.100"
                      fontWeight="bold"
                    >
                      Asia
                    </Heading>
                    <Text
                      fontWeight="bold"
                      color="gray.300"
                      fontSize={['0.8rem', '2xl']}
                      mt={['2', '4']}
                    >
                      O continente mais quente.
                    </Text>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>
        );
      </Swiper>
    </Flex>
  );
};

export { Slider };
