import React from 'react';
import NavBar from './NavBar';
import {
    Box,
    Center,
    Divider,
    Flex
} from '@chakra-ui/react';

export default function Layout({children}) {
    return (
        <Flex>
            <Center w='100%'>
                <Flex direction='column' w='70%' mt={10}>
                    <NavBar />
                    <Divider />
                    <Box w='100%' mt={5}>
                        {children}
                    </Box>
                </Flex>
            </Center>
        </Flex>
    )
}