import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Flex, Heading, Text, Image, Button, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { addToCart } from '../redux/ActionCreator';

const ProductDetails = () => {
  const { id } = useParams();
  console.log("ID : " + id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { products, cart } = useSelector((store) => store);
  const toast = useToast();

  // Find the product with the given id
  const product = products.find(product => {
    if (product.id == id) {
      console.log("productId", product.id);
      return true
    }
  });

  if (!product) return <div>Loading...</div>; // Return a loading indicator if product is not found

  const handleAddToCart = (product) => {
    // Check if the product ID already exists in the cart
    const isInCart = cart.some(item => item.id === product.id);
    if (isInCart) {
      // If the product is already in the cart, show a toast message
      toast({
        title: "Already in cart",
        description: "This product is already in your cart.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      // If the product is not in the cart, dispatch action to add it
      dispatch(addToCart(product));
      toast({
        title: "Product added",
        description: "Product added to cart successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    onClose(); // Close the modal after adding to cart
  };

  return (
    <div>
      <Navbar />
      <Flex justifyContent="center" mt="4">
        <Box maxW="800px" borderWidth="1px" borderRadius="lg" overflow="hidden" m="4" boxShadow="lg">
          <Flex>
            <Image src={product.image} alt={product.name} objectFit="cover" width="50%" />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text fontWeight="semibold" fontSize="xl" color="teal.600">
                  ${product.price}
                </Text>
                <Text ml="2" fontSize="sm" color="gray.500">
                  {product.category}
                </Text>
              </Box>
              <Heading mt="1" fontSize="2xl" fontWeight="semibold" lineHeight="short">
                {product.name}
              </Heading>
              <Text mt="2" color="gray.500">
                {product.description}
              </Text>
              <Button mt="4" mr="2" colorScheme="red">
                <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Back</Link>
              </Button>
              <Button mt="4" colorScheme="teal" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export default ProductDetails;
