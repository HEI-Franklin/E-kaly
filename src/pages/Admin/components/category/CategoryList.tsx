import React, { useCallback, useMemo } from 'react';
import { Table } from '../../../../common/components';

export const CategoryList = () => {
  const columns = useMemo(() => ['id', 'label'], []);

  const renderTable = useCallback(() => <Table showId resource="categories" fields={columns} />, []);

  return (
    <>
      {renderTable()}
    </>
  );
}
