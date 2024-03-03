// ProductListing.jsx

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Heading, Text, Image, Center, Select } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductListing = () => {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOrder, setSortOrder] = useState(''); // 'asc' for low to high, 'desc' for high to low
    const { products } = useSelector((state) => state);

    useEffect(() => {
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const handleFilter = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSort = (e) => {
        setSortOrder(e.target.value);
    };

    // Filter products based on selected category
    const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;

    // Sort products based on selected order
    const sortedProducts = sortOrder === 'asc' ? filteredProducts.sort((a, b) => a.price - b.price) : sortOrder === 'desc' ? filteredProducts.sort((a, b) => b.price - a.price) : filteredProducts;

    // Logic to paginate the sorted products array
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Logic to change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Navbar />
            <Center mt="4">
                <Select ml="2" maxWidth="200px" onChange={handleFilter} value={selectedCategory}>
                    <option value="">All Categories</option>
                    <option value="Sports & Outdoors">Sports & Outdoors</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                    <option value="Fashion">Fashion</option>
                </Select>
                <Select ml="2" maxWidth="200px" onChange={handleSort} value={sortOrder}>
                    <option value="">Filter By Price</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </Select>
            </Center>
            <Flex flexWrap="wrap" justifyContent="center">
                {currentProducts.map(product => (
                    <Link key={product.id} to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                        <Box key={product.id} maxW="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" m="4" boxShadow="lg" transition="transform 0.2s" _hover={{ transform: "scale(1.02)" }}>
                            <Image src={product.image} alt={product.name} objectFit="cover" height="200px" width="100%" />
                            <Box p="6" height="250px">
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
                            </Box>
                        </Box>
                    </Link>
                ))}
            </Flex>
            {/* Pagination */}
            <Flex justifyContent="center" mt="4" mb={5}>
                {Array.from({ length: Math.ceil(sortedProducts.length / productsPerPage) }, (_, i) => (
                    <Box key={i} as="button" onClick={() => paginate(i + 1)} px="3" py="1" mx="1" color="white" bg={currentPage === i + 1 ? "teal.500" : "gray.500"} borderRadius="md">
                        {i + 1}
                    </Box>
                ))}
            </Flex>
        </div>
    )
}

export default ProductListing;
