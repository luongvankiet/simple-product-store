import ProductCard from "@/components/product-card";
import { useColorModeValue } from "@/components/ui/color-mode";
import { paths } from "@/paths";
import { useProductStore } from "@/store/product";
import {
  Button,
  Card,
  Container,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { IoIosRocket } from "react-icons/io";
import { TbMoodSadSquint } from "react-icons/tb";
import { Link } from "react-router";

const Home = () => {
  const { fetchProducts, products } = useProductStore();

  const color = useColorModeValue("teal.600", "teal.300");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container
    py={12}>
      <VStack gap={8}>
        <Text
          display="flex"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          alignItems="center"
          gap={2}
        >
          Current Products
          <IoIosRocket />
        </Text>

        <SimpleGrid columns={3} gap={6}>
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            display="flex"
            fontSize="lg"
            textAlign="center"
            fontWeight="bold"
            color={color}
            alignItems="center"
            gap={2}
          >
            No producs found
            <TbMoodSadSquint />
            <Button variant="subtle" colorPalette="teal" size="lg" asChild>
              <Link to={paths.createProduct}>
                <Text as="span" fontWeight="bold">
                  Create new product
                </Text>
              </Link>
            </Button>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Home;
