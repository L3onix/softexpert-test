import React from 'react';
import {
  Td,
  Tr
} from '@chakra-ui/react';

export default function ProductList({ produtos }) {
  return (
    <>
      {
        produtos.map((produto) => {
          return (
            <Tr id="produto_{produto.id}">
              <Td>{produto.id}</Td>
              <Td>{produto.name}</Td>
              <Td>{produto.productType}</Td>
              <Td>{produto.value}</Td>
            </Tr>
          )
        })
      }
    </>
  )
}