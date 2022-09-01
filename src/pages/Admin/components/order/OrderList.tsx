import React, { useCallback, useMemo } from 'react';
import { Table } from '../../../../common/components';

export const OrderList = () => {
  const columns = useMemo(() => ['Réference', 'Catégrorie', 'Plat', 'Qté', 'Nom du client', 'Contact', 'Adresse', 'Effectué le', 'Etat'], []);

  const renderTable = useCallback(() => <Table resource="orders" fields={columns} />, []);

  return (
    <>
      {renderTable()}
    </>
  );
}
