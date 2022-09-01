import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { EditDrawer as proptypes } from '../../../../types/proptypes/edit/drawer';
import { EditDrawer } from '../../../../common/components';
import { useData } from '../../../../utils/hooks/use-data';
import { DishCategory } from '../../../../types/models/DishCategory';

export const CategoryEdit = ({ label, mode }: proptypes) => {
  const [category, setCategory] = useState<Partial<DishCategory>>({
    label: '',
  });
  const { save, update, getOne } = useData<Partial<DishCategory>>();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategory(prev => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        if (mode === 'update' && id) {
          console.log(+id);
          const { data } = await getOne('categories', +id);
          setCategory(data);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);

  const SaveEdit = () => {
    const execute = async () => {
      try {
        if (mode === 'update' && id) {
          await update('categories', +id, category);
          navigate(`/admin/categories`);
        } else {
          await save('categories', category);
          navigate(`/admin/categories`);
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
        <FormLabel htmlFor="name">Nom du categorie</FormLabel>
        <Input
          placeholder='exemple: entrée'
          name="label"
          value={category.label}
          onChange={handleChange}
        />
      </Box>

      <Divider />

      <Stack spacing='24px' direction="row">
        <Button colorScheme="whatsapp" onClick={SaveEdit}>Enregistrer</Button>
        <Button colorScheme='red' onClick={() => navigate(`/admin/categories`)}>Annuler la modification</Button>
      </Stack>
    </EditDrawer>
  );
}
