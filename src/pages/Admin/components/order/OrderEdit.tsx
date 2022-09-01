import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, Divider, FormLabel, HStack, Input, Select, Stack } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { EditDrawer as proptypes } from '../../../../types/proptypes/edit/drawer';
import { EditDrawer } from '../../../../common/components';
import { Dish } from '../../../../types/models/Dish';
import { Order } from '../../../../types/models/Order';
import { useData } from '../../../../utils/hooks/use-data';
import { DishCategory } from '../../../../types/models/DishCategory';
import { filterDishes } from '../../../../utils/functions';

export const OrderEdit = ({ label, mode }: proptypes) => {
  const { save, update, getOne, getList } = useData<Partial<Order | DishCategory> | Dish>();
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('');
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [categories, setCategories] = useState<DishCategory[]>([]);
  const { id } = useParams();
  const [order, setOrder] = useState<Partial<Order>>({
    dish: 0,
    quantity: 0,
    clientName: '',
    contact: '',
    address: '',
    status: 'DELIVERED'
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrder(prev => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    filterDishesByCategory();
    const fetch = async () => {
      try {
        const { data } = await getList('dishes');
        setDishes(data as Dish[]);
        const categories = await getList('categories');
        setCategories(categories.data as DishCategory[]);
        if (mode === 'update' && id) {
          const getOrder = await getOne('orders', +id);
          setOrder(getOrder.data as Omit<Order, "id" | "orderDate" | "category">)
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);

  const filterDishesByCategory = useCallback(() => (
    filterDishes(selectedFilter, dishes)
  ), [selectedFilter]);
  
  const SaveEdit = () => {
    const execute = async () => {
      try {
        console.log(order);
        if (mode === 'update' && id) {
          await update('orders', +id, order);
          navigate(`/admin/orders`);
        } else {
          await save('orders', order);
          navigate('/admin/orders');
        }
      } catch (err) {
        console.log(err);
      }
    }

    execute();
  }

  return (
    <EditDrawer label={label} mode={mode}>
      <Box>
        <FormLabel htmlFor="name">Nom du client</FormLabel>
        <Input
          placeholder='exemple: client'
          name="clientName"
          value={order.clientName}
          onChange={handleChange}
        />
      </Box>


      <Box>
        <FormLabel htmlFor='contact'>Contact</FormLabel>
        <Input
          placeholder='exemple: 034 032 512 36'
          onChange={handleChange}
          name="contact"
          type="text"
          value={order.contact}
        />
      </Box>

      <Box>
        <FormLabel htmlFor='contact'>Addresse</FormLabel>
        <Input
          placeholder='exemple: LOT IVH'
          onChange={handleChange}
          name="addresse"
          type="text"
          value={order.address}
        />
      </Box>

      <Box>
        <FormLabel htmlFor='quantity'>Quantité</FormLabel>
        <Input
          placeholder='exemple: 6'
          onChange={handleChange}
          name="quantity"
          value={order.quantity}
        />
      </Box>

      <Box>
        <HStack width="container.md">
          <Box>
            <FormLabel htmlFor='category'>Selectionner la categorie</FormLabel>
            <Select onChange={(e) => setSelectedFilter(e.target.value)} name="filterMethod" value={selectedFilter || 'none'}>
              {categories.map((category) => (
                <option value={category.label} key={category.id}>{category.label}</option>
              ))}
              <option value="none">Afficher tout</option>
            </Select>
          </Box>

          <Box>
            <FormLabel htmlFor='category'>Selectionner le plat</FormLabel>
            <Select onChange={handleChange} name="dish" value={order.dish || 1}>
              {filterDishesByCategory().map((dish: Dish) => (
                <option value={dish.name} key={dish.id}>{dish.name}</option>
              ))}
              <option value={1}>Gratin</option>
            </Select>
          </Box>

        </HStack>
      </Box>

      <Divider />

      <Stack spacing='24px' direction="row">
        <Button colorScheme="whatsapp" onClick={SaveEdit}>Enregistrer</Button>
        <Button colorScheme='red' onClick={() => navigate(`/admin/orders`)}>Annuler la modification</Button>
      </Stack>
    </EditDrawer>
  );
}
