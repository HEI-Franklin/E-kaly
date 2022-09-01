import React, { useEffect } from 'react';
import { Box, FormControl, InputRightElement, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaEye = chakra(FaEye);
const CFaEyeSlash = chakra(FaEyeSlash);

type PayLoadType = {
  email: string;
  password: string;
};
function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // fake login
    navigate("/admin/dishes");
  };

  return (
    <>
      <Button onClick={onOpen}>Se connecter</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={"lg"}>
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropBlur='2px'
        />
        <ModalContent >
          <Box minW={{ base: "80%", md: "500px" }}>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input type="email" placeholder="Adresse email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Mot de Passe"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? <CFaEye /> : <CFaEyeSlash />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  as={Link}
                  to="/admin"
                  colorScheme="teal"
                  width="full"

                >
                  Se connecter
                </Button>
              </Stack>
            </form>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export const Auth = () => (
  <LoginForm />
);
