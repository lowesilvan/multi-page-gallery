import { Box, Button, Heading, Image} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

function AllCollections() {
    //get albums from reducer
  const { album } = useSelector((state) => state.collection);
  console.log(album);
  const renderPhotos = (source) => {
    console.log("source: ", source);
    return (
      <Box
        p={5}
        bg="#E2E8F0"
        borderRadius={20}
        as="article"
        w="400px"
        lineHeight="2"
      >
        <Image
          h="350px"
          objectFit="fill"
          w="100%"
          src={album[0].photos[0]}
          alt={album[0].name}
        />
        <Heading size="xl" fontWeight="bold" marginTop="4">
          {album[0].name}
        </Heading>
        <Button></Button>
      </Box>
    );
  };
  return (
    <Box position="relative" top="5rem" p="1rem" textAlign="center" m="auto">
      {album.length > 0 && renderPhotos(album[0].photos[0])}
    </Box>
  );
}

export default AllCollections;
