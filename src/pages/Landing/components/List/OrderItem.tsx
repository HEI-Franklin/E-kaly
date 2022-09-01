import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input, Modal,
  ModalBody, ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay, Select, useDisclosure
} from "@chakra-ui/react";

export type Food = {
  name: string;
}

export const OrderItem = (props: Food) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen} colorScheme='teal' variant='outline' >Passer le commande</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Passer votre commande</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nom du client</FormLabel>
              <Input ref={initialRef} placeholder='Votre nom....' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Adresse</FormLabel>
              <Input placeholder='Adresse' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Plat à commander</FormLabel>
              <div>
                {props.name}
              </div>

            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Téléphone </FormLabel>
              <Input placeholder='+261 34 20 258 45' type={'number'} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Quantité</FormLabel>
              <Input type={'number'} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Confirmer
            </Button>
            <Button onClick={onClose}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
