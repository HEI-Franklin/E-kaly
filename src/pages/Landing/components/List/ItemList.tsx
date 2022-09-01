import {
  Box,
  Button, Center, Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack, SimpleGrid,
  useDisclosure, Wrap, WrapItem
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CardItem } from '../CardItem';
import { useData } from "../../../../utils/hooks/use-data";


export const ItemList = () => {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize: React.SetStateAction<string>) => {
    setSize(newSize)
    onOpen()
  }
  const [dataSet, setDataSet] = useState<any[]>([]);
  const { getList } = useData();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getList("dishes");
        setDataSet(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);


  // @ts-ignore
  return (
    <>
      <Button
        onClick={() => handleClick(size)}
        key="full"
        m={4}
        rounded="full"
        size="lg"
        fontWeight="normal"
        px={6}
      >{`Notre carte d'aujourd'hui`}</Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={'green.400'}>
            {`Notre menu d'aujourd'hui`}
          </DrawerHeader>
          <Divider />
          <DrawerBody>

            <Wrap>
              <WrapItem>

                {dataSet.map((label) =>
                  <CardItem key={label.id} price={label.price} category={label.category} name={label.name} />
                )}


              </WrapItem>


            </Wrap>





          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )

}
