import { Box, Button, Divider, FormLabel, Input, Select, Stack, Image, Badge, IconButton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EditDrawer as proptypes } from '../../../../types/proptypes/edit/drawer';
import { EditDrawer } from '../../../../common/components';
import { Dish } from '../../../../types/models/Dish';
import { DishCategory } from '../../../../types/models/DishCategory';
import { useData } from '../../../../utils/hooks/use-data';

const INITIAL_DISH: Omit<Dish, "id"> = {
  name: '',
  price: 0,
  category: '',
  quantity: 0,
  orderNumber: 0,
  url: '',
}

export const DishEdit = ({ label, mode }: proptypes) => {
  const [categories, setCategories] = useState<DishCategory[]>([]);
  const { save, update, getOne, getList } = useData<Omit<Dish | DishCategory, "id">>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [dish, setDish] = useState(INITIAL_DISH);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setDish(prev => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    console.log(dish);

    const fetch = async () => {
      try {
        const { data } = await getList('categories');
        setCategories(data as DishCategory[]);
        if (mode === 'update' && id) {
          const { data } = await getOne('dishes', +id);
          setDish(data as Omit<Dish, "id">);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);

  const SaveEdit = () => {
    console.log(dish);
    const execute = async () => {
      try {
        if (mode === 'update' && id) {
          await update('dishes', +id, dish);
          navigate(`/admin/dishes`);
        } else {
          save('dishes', dish);
          navigate(`/admin/dishes`);
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
        <Stack direction="row" alignItems="flex-end">
          {dish.url && (<Image
            borderRadius='full'
            boxSize='8rem'
            src={dish.url || ''}
            alt='Dan Abramov'
          />)}
        </Stack>
      </Box>

      <Box>
        <FormLabel htmlFor="name">Nom du plat</FormLabel>
        <Input
          placeholder='exemple: Gratin'
          value={dish.name}
          name="name"
          onChange={handleChange}
          type="text"
        />
      </Box>

      <Box>
        <FormLabel htmlFor="name">Prix du plat</FormLabel>
        <Input
          placeholder='exemple: 1000'
          value={dish.price}
          name="price"
          onChange={handleChange}
          type="number"
        />
      </Box>

      <Box>
        <FormLabel htmlFor='category'>Selectionner la catégorie du plat</FormLabel>
        <Select onChange={handleChange} name="category" value={dish.category}>
          {categories.map((category) => (
            <option value={category.label} key={category.label}>{category.label}</option>
          ))}
        </Select>
      </Box>

      <Box>
        <FormLabel htmlFor='quantity'>Entrer la quantité initial</FormLabel>
        <Input
          placeholder='exemple: 100'
          value={dish.quantity}
          onChange={handleChange}
          type="number"
          name="quantity"
        />
      </Box>

      <Divider />

      <Stack spacing='24px' direction="row">
        <Button colorScheme="whatsapp" onClick={SaveEdit}>Enregistrer</Button>
        <Button colorScheme='red' onClick={() => navigate(`/admin/dishes`)}>Annuler la modification</Button>
      </Stack>
    </EditDrawer>
  );
}
