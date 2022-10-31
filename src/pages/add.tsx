import { Button, Stack, Center, useColorModeValue } from "@chakra-ui/react";

import AddProjectForm from "../components/add-project/Form";
import SupplyChain from "../components/add-project/SupplyChain";

export default function AddProduct() {
  const btnBgColor = useColorModeValue("white", "gray.700");

  return (
    <>
      <Stack direction="column" spacing={6}>
        <AddProjectForm />
        <SupplyChain />
      </Stack>
      <Center>
        <Button bgColor={btnBgColor} mt={6}>
          Add Product
        </Button>
      </Center>
    </>
  );
}
