import { useProductStore } from "@/store/product";
import { Button, Card, Image, Text, useDialog } from "@chakra-ui/react";
import { BiSolidEdit } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";
import { toaster } from "./ui/toaster";
import { useColorModeValue } from "./ui/color-mode";
import UpdateProductDialog from "./update-product-dialog";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const { deleteProduct } = useProductStore();
  const editDialog = useDialog();

  const handleDeleteProduct = async () => {
    const { success, message } = await deleteProduct(product._id);
    console.log("Success: ", success);
    console.log("Message: ", message);

    toaster.create({
      description: message,
      type: success ? "success" : "error",
    });
  };

  return (
    <>
      <Card.Root
        maxW="sm"
        overflow="hidden"
        _hover={{ transform: "translateY(-5px)", shadow: "lg" }}
        bg={bg}
      >

        <Image
          src={product.image}
          alt={product.title}
          fit="contain"
          width="full"
          height="300px"
          bgColor="white"
        />
        <Card.Body gap="2">
          <Card.Title>{product.title}</Card.Title>
          <Card.Description>{product.description}</Card.Description>
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
            color={textColor}
          >
            ${product.price}
          </Text>
        </Card.Body>
        <Card.Footer gap="2">
          <Button
            variant="solid"
            size="sm"
            flex="1"
            onClick={() => editDialog.setOpen(true)}
          >
            <BiSolidEdit />
            Edit
          </Button>
          <Button
            variant="solid"
            colorPalette="red"
            size="sm"
            flex="1"
            onClick={handleDeleteProduct}
          >
            <FaTrashCan /> Delete
          </Button>
        </Card.Footer>
      </Card.Root>

      <UpdateProductDialog
        product={product}
        open={editDialog.open}
        setOpen={editDialog.setOpen}
      />
    </>
  );
};

export default ProductCard;
