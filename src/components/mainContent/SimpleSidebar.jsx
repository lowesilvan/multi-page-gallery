import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import {
  FiHome,
  FiSettings
} from "react-icons/fi";
import {AiOutlineFileAdd} from "react-icons/ai"
import { Navigate, useNavigate } from "react-router-dom";

const LinkItems = [
  { name: "My Collections", icon: FiHome, url: "dashboard/my-collections" },
  {
    name: "Add New Collection",
    icon: AiOutlineFileAdd,
    url: "dashboard/add-new-collection",
  },
  { name: "Settings", icon: FiSettings },
];

function SimpleSidebar({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const Navigate = useNavigate()
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      {/* <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box> */}
    </Box>
  );
}

export default SimpleSidebar


const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} url={link.url}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, url, children, ...rest }) => {
  return (
    <Link
      onClick={() => Navigate(url)}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

// const MobileNav = ({ onOpen, ...rest }) => {
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 24 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue("white", "gray.900")}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue("gray.200", "gray.700")}
//       justifyContent="flex-start"
//       {...rest}
//     >
//       <IconButton
//         variant="outline"
//         onClick={onOpen}
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />

//       <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
//         Logo
//       </Text>
//     </Flex>
//   );
// };