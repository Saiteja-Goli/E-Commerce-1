import React from 'react';
import { Flex, Box, Text, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Flex p="4" alignItems="center" boxShadow="md" bg="gray.100" position="sticky" zIndex="999" top='0'>
            <Box>
                {/* Wrap the Text component with Link */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Text fontSize="lg" fontWeight="bold" color="teal.500">ECommerce</Text>
                </Link>
            </Box>
            <Spacer />
            <Box >
                <Link to="/products" style={{ textDecoration: 'none' }}>
                    <Text color="gray.600" fontWeight="bold" fontSize={20} _hover={{ color: 'teal.500' }}>Products</Text>
                </Link>
            </Box>
            <Box ml="4" mr='10px'>
                {/* Add Link components for Cart and Products */}
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <Text color="gray.600" fontWeight="bold" fontSize={20} _hover={{ color: 'teal.500' }}>Cart</Text>
                </Link>
            </Box>

        </Flex>
    );
}

export default Navbar;
