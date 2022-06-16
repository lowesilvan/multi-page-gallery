import { Box, Heading, Image, Tooltip, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router';

function AddCollectionBox() {
    const Navigate = useNavigate()
    return (
      <Box
        bg={useColorModeValue("white", "gray.800")}
        as="article"
        w={{ base: "320px", md: "350px" }}
        lineHeight="2"
        marginY="auto"
        marginX="auto"
        borderWidth="1px"
        maxW="sm"
        rounded="lg"
        shadow="2xl"
        position="relative"
        _hover={{ shadow: "dark-lg" }}
      >
        <Tooltip label="Hello! Add a new collection">
          <Box cursor="pointer" onClick={() => Navigate(`/create-collection`)}>
            <Image
              h="fit-content"
              objectFit="fill"
              w="100%"
              src="https://www.symbols.com/images/symbol/1608_addition.png"
              alt="add collection"
            />
          </Box>
        </Tooltip>
        <Heading size="lg" fontWeight="bold" marginY="4" paddingX="1rem" textAlign="center">
          Add Collection
        </Heading>
      </Box>
    );
}

export default AddCollectionBox
