import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Divider } from '@chakra-ui/react';
import { FcSalesPerformance, FcConferenceCall, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon?: ReactElement;
}

export const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <>
      <Stack justifySelf={'center'} mx={6}>
        <Divider />
        <Box pt={5}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={'gray.100'}
            mb={1}
          >
            {icon}
          </Flex>
          <Text fontWeight={600}>{title}</Text>
        </Box>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    </>

  );
};

export const Features = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcSalesPerformance} w={10} h={10} />}
          title={"Coût raisonnable"}
          text={
            "Les restaurants ont des prix différents, mais la règle d'or est que les clients doivent avoir le sentiment que le coût de leur repas est juste et raisonnable, même dans les établissements haut de gamme. Évitez de faire payer trop cher."
          }
        />
        <Feature
          icon={<Icon as={FcConferenceCall} w={10} h={10} />}
          title={"Expertise culinaire"}
          text={
            "Les chefs sont choisis pour leurs compétences culinaires et leur inventivité. Cela s'applique aussi bien aux restaurants haut de gamme qu'aux restaurants économiques. De même, la direction du restaurant est passionnée par la nourriture, participe à la sélection des menus et est orientée vers le client."
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"Livraison"}
          text={
            "L'objectif d'un restaurant à succès est d'offrir aux clients une excellente expérience globale qui les incite à revenir encore et encore. Cela signifie que tout est axé sur l'amélioration de l'expérience du client."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
