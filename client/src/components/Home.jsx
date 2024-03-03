import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Heading, Text, Image, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { products } = useSelector((store) => store);
    const dispatch = useDispatch();

    const fetchData = () => {
        fetch('https://blue-tough-cape-buffalo.cyclic.app/products')
            .then((res) => res.json())
            .then(data => {
                dispatch({ type: "PRODUCTS", data: data });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8; // Number of products to display per page

    // Logic to paginate the products array
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Logic to change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Navbar />
            <Center>
                <Text mt={4} fontSize="30px" fontWeight="bold" color="gray.600">
                    Explore our Products
                </Text>
            </Center>
            <Flex flexWrap="wrap" justifyContent="center">
                {currentProducts.map(product => (
                    <Link key={product.id} to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                        <Box key={product.id} width="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" m="4" boxShadow="lg" transition="transform 0.2s" _hover={{ transform: "scale(1.02)" }}>
                            <Image src={product.image} alt={product.name} objectFit="cover" height="200px" width="100%" />
                            <Box p="6" height="180px"> {/* Set a fixed height for the product box */}
                                <Box d="flex" alignItems="baseline">
                                    <Text fontWeight="semibold" fontSize="xl" color="teal.600">
                                        ${product.price}
                                    </Text>
                                </Box>
                                <Heading mt="1" fontSize="2xl" fontWeight="semibold" lineHeight="short">
                                    {product.name}
                                </Heading>
                            </Box>
                        </Box>
                    </Link>
                ))}
            </Flex>
            <Flex justifyContent="center" mt="4" mb='5'>
                {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
                    <Box key={i} as="button" onClick={() => paginate(i + 1)} px="3" py="1" mx="1" color="white" bg={currentPage === i + 1 ? "teal.500" : "gray.500"} borderRadius="md">
                        {i + 1}
                    </Box>
                ))}
            </Flex>
        </div>
    );
};

export default Home;
