import React from 'react';
import { Text, Box, Flex, Image, Button, Center } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { removeFromCart } from '../redux/ActionCreator'; // Import the action creator for removing from cart

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId)); // Dispatch action to remove product from cart
    };

    return (
        <div>
            <Navbar />
            <Center><Text fontSize="xl" mt={10} fontWeight="bold" mb="4">Cart</Text></Center>
            {cartItems.length === 0 ? (
                <Center> <Text fontSize="xl" fontWeight="bold" color="gray.600">
                    No items in the cart
                </Text></Center>
            ) : (
                cartItems.map(item => (
                    <Box key={item.id} borderWidth="1px" borderRadius="lg" overflow="hidden" m="4" boxShadow="lg">
                        <Flex>
                            <Image src={item.image} alt={item.name} objectFit="cover" width="200px" height="200px" />
                            <Box p="6">
                                <Text fontWeight="semibold" fontSize="xl" color="teal.600">
                                    ${item.price}
                                </Text>
                                <Text fontSize="lg">{item.name}</Text>
                                <Text mt="2" color="gray.500">
                                    {item.description}
                                </Text>
                                <Button mt="4" colorScheme="red" onClick={() => handleRemoveFromCart(item.id)}>
                                    Remove from Cart
                                </Button>
                            </Box>
                        </Flex>
                    </Box>
                ))
            )}
        </div>
    );
}

export default Cart;
