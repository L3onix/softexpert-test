import React from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Th,
  Tr
} from '@chakra-ui/react';

export default function Home() {

  const produtos = [
    {id: 1, name: 'Produto1', productType: 'Alimento', value: 10.00},
    {id: 2, name: 'Produto2', productType: 'Bebida', value: 12.12},
    {id: 3, name: 'Produto3', productType: 'Doce', value: 1.29}
  ];

  return (
    <Layout>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Tipo</Th>
              <Th>Valor</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <ProductList produtos={produtos} />
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  )
}
