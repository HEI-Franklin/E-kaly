import React, { useCallback, useMemo } from 'react';
import { Table } from '../../../../common/components';


export const DishList = () => {
  const columns = useMemo(() => ['Nom', 'Prix', 'Catégorie', 'Nombre de commande', 'Quantité'], []);
  
  const renderTable = useCallback(() => <Table resource="dishes" fields={columns} />, []);

  return renderTable();
}
