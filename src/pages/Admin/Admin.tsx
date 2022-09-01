import { Button, HStack } from '@chakra-ui/react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Navigation } from '../../common/components';
import { FaEdit } from 'react-icons/fa';
import { translatePath } from '../../utils/functions';

export const Admin = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  const navigate = useNavigate();

  return (
    <Navigation>
      <HStack h='4rem' p={4} alignItems="center" >
        <Button leftIcon={<FaEdit />} colorScheme='whatsapp' variant='solid' onClick={() => navigate(`${pathname}/create`)}>
          Ajouter une {translatePath(pathname)}
        </Button>
      </HStack>
      <Outlet />
    </Navigation>
  )
};
