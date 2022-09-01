import { Stack, useColorModeValue } from '@chakra-ui/react';
import { EditDrawer as proptypes } from '../../../types/proptypes/edit/drawer';

export const EditDrawer = ({ children, label }: proptypes) => {
  return (
    <Stack spacing='24px' bg={useColorModeValue("white", "blackAlpha.200")} borderRadius={4} padding={5}>
      {children}
    </Stack>
  )
}
