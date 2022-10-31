import {
  SimpleGrid,
  Stack,
  Button,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

import AddWorkerForm from "../components/create-project/AddWorkerForm";
import AddLocationForm from "../components/create-project/AddLocationForm";
import AddProductForm from "../components/create-project/AddProductForm";

export default function Create() {
  const btnBgColor = useColorModeValue("white", "gray.700");

  return (
    <>
      <SimpleGrid as="form" columns={{ base: 1, lg: 2 }} gap={6}>
        <Stack direction="column" spacing={6}>
          <AddWorkerForm />
          <AddLocationForm />
        </Stack>
        <AddProductForm />
      </SimpleGrid>
      <Center>
        <Button bgColor={btnBgColor} mt={6}>
          Create Product
        </Button>
      </Center>
    </>
  );
}
