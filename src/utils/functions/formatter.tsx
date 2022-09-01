import {
  Avatar
} from '@chakra-ui/react';

export const formatStatus = (status: 'IN_PROGRESS' | 'DELIVERED') => (
  status === 'DELIVERED' ? 'livrée' : 'en cours'
);

export const formatUrl = (url: string) => (
  <Avatar
    size={'sm'}
    src={url}
    mb={4}
    pos={'relative'}
    _after={{
      content: '""',
      w: 4,
      h: 4,
      rounded: 'full',
      pos: 'absolute',
      bottom: 0,
      right: 3,
    }}
  />
);
