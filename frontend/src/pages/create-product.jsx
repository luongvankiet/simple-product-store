import { useColorModeValue } from "@/components/ui/color-mode";
import { toaster } from "@/components/ui/toaster";
import { useProductStore } from "@/store/product";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  const navigate = useNavigate();

  const { createProduct } = useProductStore();

  const handleCreateProduct = async () => {
    // Handle product creation logic here
    const { success, message } = await createProduct(product);
    console.log("Success: ", success);
    console.log("Message: ", message);
    toaster.create({
      description: message,
      type: success ? "success" : "error",
    });

    setProduct({
      title: "",
      description: "",
      price: 0,
      image: "",
    });

    // redirect to products page if successful
    if (success) {
      navigate("/");
    }
  };

  return (
    <Container maxW="lg">
      <VStack gap={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Create New Product
        </Heading>
        <Box
          w="full"
          bg={useColorModeValue("white", "gray.900")}
          p={6}
          rounded={"lg"}
          shadow={"lg"}
        >
          <VStack gap={4}>
            <Input
              placeholder="Product Title"
              name="title"
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />
            <Textarea
              placeholder="Product Description"
              name="description"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
            <Input
              placeholder="Product Price"
              name="price"
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: parseFloat(e.target.value) })
              }
            />
            <Input
              placeholder="Product Image"
              name="image"
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            />

            <Button
              colorPalette="teal"
              variant="subtle"
              w="full"
              onClick={handleCreateProduct}
            >
              Create Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreateProduct;
