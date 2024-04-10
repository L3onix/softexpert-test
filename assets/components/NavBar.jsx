import React from 'react';

import {Link as RouterLink} from 'react-router-dom';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react'

import {
    ChevronRightIcon
} from '@chakra-ui/icons'

export default function NavBar() {
    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to='/products'>Produtos</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to='/productTypes'>Tipos de Produtos</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}
