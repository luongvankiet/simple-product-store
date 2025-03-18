import { paths } from "@/paths";
import { Button, Container, Flex, HStack, Icon } from "@chakra-ui/react";
import { FaCartShopping, FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router";
import { ColorModeButton, useColorModeValue } from "./ui/color-mode";

const Navbar = () => {
  return (
    <Container>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <HStack
          bgGradient="to-r"
          gradientFrom={useColorModeValue("teal.950", "teal.50")}
          gradientTo={useColorModeValue("teal.500", "teal.500")}
          bgClip="text"
          fontSize="xl"
          fontWeight="extrabold"
          textTransform="uppercase"
          gap="2"
        >
          <Link to={paths.home}>Simple Product Store</Link>
          <Icon size="lg" color="teal.500">
            <FaCartShopping />
          </Icon>
        </HStack>

        <HStack gap="2" alignItems="center">
          <Link to={paths.createProduct}>
            <Button size="md" variant="subtle">
              <FaRegSquarePlus />
            </Button>
          </Link>

          <ColorModeButton />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
