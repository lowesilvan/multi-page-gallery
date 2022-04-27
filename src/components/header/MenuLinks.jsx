import { Box, Stack, Text, useColorModeValue} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import AddNewCollectionButton from "./AddNewCollectionButton"
import ToggleThemeMode from './ToggleThemeMode'

const MenuLinks = ({isOpen}) => {
    return (
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
        px={2}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <Link to="/home">
            <Text>Home</Text>
          </Link>
          <Link
            to="/all-collections"
            _hover={{ bg: useColorModeValue("gray.500") }}
          >
            <Text>All Collections</Text>
          </Link>
          <AddNewCollectionButton />
          <ToggleThemeMode />
        </Stack>
      </Box>
    );
}
 
export default MenuLinks;