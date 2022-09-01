import React, { useCallback, useEffect, useState } from 'react'
import { HStack, IconButton, Select, Table as TableContent, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { TableProps } from '../../../types/proptypes'
import { formatStatus, formatUrl } from '../../../utils/functions';
import { useData } from '../../../utils/hooks/use-data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Table = ({ fields, resource, showId }: TableProps) => {
  const { getListWithParams } = useData();
  const navigate = useNavigate();
  const [dataSet, setDataSet] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getListWithParams(resource, { page: currentPage, pageSize });
        setDataSet(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, [currentPage, pageSize]);

  const navigateToEdit = (id: number) => {
    navigate(`/admin/${resource}/${id}`);
  }

  const renderData = useCallback(() => (
    dataSet.map((dataset) => {
      const keys = Object.keys(dataset);
      return (
        <Tr onClick={() => navigateToEdit(dataset.id)} _hover={{ bg: 'blackAlpha.100', cursor: 'pointer' }} key={dataset.id}>
          {keys.map((key, index) => {
            const value = dataset[key as keyof typeof dataset];
            return (key !== 'id' || showId) && (
              <Td key={index}>{key === 'status' ? formatStatus(value) : key === 'url' ? formatUrl(value) : value}</Td>
            )
          })}
        </Tr>
      )
    })
  ), [dataSet]);

  return (
    <TableContainer bg={useColorModeValue("whiteAlpha.900", "blackAlpha.200")} borderRadius={4}>
      <TableContent variant='simple'>
        <TableCaption>

          <HStack justifyContent="space-between">
            <HStack spacing={2}>
              <IconButton aria-label='Search database' icon={<FaChevronLeft />} onClick={() => setCurrentPage(currentPage + 1)} />
              <IconButton aria-label="Search database" icon={<FaChevronRight />} onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : null} />
            </HStack>

            <HStack>
              <Text>
                Entrée par page
              </Text>
              <Select variant="filled" value={5} onChange={(e) => setPageSize(+e.target.value)}>
                <option value={5}>5</option>
                <option value={15}>15</option>
                <option value={25}>25</option>
              </Select>
            </HStack>
          </HStack>

        </TableCaption>

        <Thead>
          <Tr>
            {fields.map((label) => (
              <Th key={label}>{label}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {renderData()}
        </Tbody>
      </TableContent>
    </TableContainer>
  )
}
