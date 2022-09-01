import { Box, CloseButton, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { SidebarProps } from "../../../types/proptypes/navigation";
import { NavItem } from "./NavItem";
import { FaBars, FaCoffee, FaFileInvoice } from "react-icons/fa";

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Kaly'Naka
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <NavItem to="dishes" icon={FaCoffee}>
        Plats
      </NavItem>
      
      <NavItem to="orders" icon={FaFileInvoice}>
        Commandes
      </NavItem>

      <NavItem to="categories" icon={FaBars}>
        Catégories de plat
      </NavItem>
    </Box>
  );
};
