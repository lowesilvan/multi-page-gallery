import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  VStack,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { uniqueId } from "lodash";
import { createCollection } from "../../redux/collectionReducer/collectionSlice";

function AddNewCollection({ photos }) {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  //Form States
  const [name, setName] = useState("");
  const [describe, setDescribe] = useState("");
  const [imageUpload, setImageUpload] = useState([]);
  const [isError, setIsError] = useState(false);

  //Form Submit onclick function
  const handleSubmit = (e) => {
    if (name === "") {
      return setIsError(true);
    } else if (describe === "") {
      return setIsError(true);
    } else if (imageUpload === [""]) {
      return setIsError(true);
    } else {
      console.log('1')
      dispatch(
        createCollection({
          id: uniqueId(),
          name: name,
          description: describe,
          photos: imageUpload,
        })
      );
      console.log('2')
      Navigate("/all-collections");
    }
    setIsError(false);
  };
  // convert Image to url
  const handleImageUpload = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setImageUpload((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };
  // preview image
  const renderPhotos = (source) => {
    // console.log("source: ", source);
    return source.map((photo, index) => {
      return (
        <VStack spacing={3}>
          <Image marginTop="2rem" src={photo} alt={name} key={index} />
        </VStack>
      );
    });
  };

  return (
    <Box position="relative" top="5rem" p="1rem" textAlign="center" m="auto">
      <Heading p="2">Add New Collection</Heading>
      <FormControl isInvalid={isError} p="1rem" w="600px" m="auto">
        <Stack spacing={5} padding="1rem">
          <Box>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              variant="flushed"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {isError && <FormErrorMessage>Name is required</FormErrorMessage>}
          </Box>
          <Box>
            <FormLabel htmlFor="name">Description</FormLabel>
            <Textarea
              id="description"
              placeholder="Describe this collection.."
              variant="flushed"
              required
              value={describe}
              onChange={(e) => setDescribe(e.target.value)}
            />
            {isError && (
              <FormErrorMessage>Description required</FormErrorMessage>
            )}
          </Box>
          <Box>
            <FormLabel htmlFor="upload" cursor="pointer">
              <HStack>
                <Text>Upload Images</Text> <FiUpload />
              </HStack>
            </FormLabel>
            <Input
              border="none"
              id="upload"
              type="file"
              multiple
              required
              size="xs"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {isError && <FormErrorMessage>Image is required</FormErrorMessage>}
          </Box>
          <Box>{renderPhotos(imageUpload)}</Box>
          <Box>
            <Button
              type="submit"
              onClick={handleSubmit}
              paddingX="12"
              paddingY="6"
            >
              Upload
            </Button>
          </Box>
        </Stack>
      </FormControl>
    </Box>
  );
}

export default AddNewCollection;
