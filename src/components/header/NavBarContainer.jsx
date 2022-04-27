import { Flex, useColorModeValue } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={5}
      position="absolute"
      {...props}
      // bg={useColorModeValue('white')}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer
