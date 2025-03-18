import { useProductStore } from "@/store/product";
import {
  Button,
  CloseButton,
  Dialog,
  Input,
  Portal,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { toaster } from "./ui/toaster";

const UpdateProductDialog = ({ product, open, setOpen }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const { updateProduct } = useProductStore();

  const handleUpdateProduct = async () => {
    const { success, message } = await updateProduct(
      product._id,
      updatedProduct
    );
    console.log("Success: ", success);
    console.log("Message: ", message);

    toaster.create({
      description: message,
      type: success ? "success" : "error",
    });

    setOpen(false);
  };

  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Update Product</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack gap={4}>
                <Input
                  placeholder="Title"
                  name="title"
                  value={updatedProduct.title}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      title: e.target.value,
                    })
                  }
                />

                <Textarea
                  placeholder="Description"
                  name="description"
                  value={updatedProduct.description}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      description: e.target.value,
                    })
                  }
                />

                <Input
                  type="number"
                  placeholder="Price"
                  name="price"
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
                />

                <Input
                  placeholder="Image URL"
                  name="image"
                  value={updatedProduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                />
              </VStack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button onClick={handleUpdateProduct}>Save</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default UpdateProductDialog;
