import { Center, useColorModeValue, Stack, Heading, Box, Image, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

import { item } from '../../../types/models/Item';
import { OrderItem } from './List/OrderItem';

const STATIC_IMAGE = 'https://th.bing.com/th/id/R.d1408c82b62294f0ab44ed2b4cc172f7?rik=jBirlT4ETc3MLA&pid=ImgRaw&r=0';

export const CardItem = (props: item) => (
  <Center py={10} ml={7} width={'300px'}>
    <Box
      role={'group'}
      p={6}
      maxW={'330px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.500')}
      boxShadow={'base'}
      rounded={'lg'}
      pos={'relative'}
      zIndex={1}
      borderRadius='lg'
      overflow='hidden'>
      <Box
        rounded={'lg'}
        mt={3}
        pos={'relative'}
        height={'230px'}
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          filter: 'blur(5px)',
          zIndex: -2,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(6px)',
          },
        }}>
        <Image
          rounded={'full'}
          height={230}
          width={282}
          objectFit={'cover'}
          src={STATIC_IMAGE}
        />
      </Box>
      <Stack pt={8} align={'center'}>
        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          {props.category}
        </Text>
        <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
          {props.name}
        </Heading>
        <Stack direction={'row'} align={'center'}>
          <Text fontWeight={500} fontSize={'lg'}>
            Ar {props.price}
          </Text>
          <OrderItem name={props.name} />
        </Stack>
      </Stack>
    </Box>
  </Center>)
