import { Flex, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { NavItemProps } from "../../../types/proptypes";
import { NavLink } from "react-router-dom";

export const NavItem = ({ icon, to, children, ...rest }: NavItemProps) => {
  return (
    <Flex
      as={NavLink}
      to={to}
      align="center"
      _activeLink={{bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.50')}}
      p="4"
      mx="4"
      my="2"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: useColorModeValue('blackAlpha.800', 'blackAlpha.200'),
        color: 'white',
      }}
      {...rest}>
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};
