import { SimpleGrid, Stack } from "@chakra-ui/react";

import AddWorkerForm from "../components/create-project/AddWorkerForm";
import AddLocationForm from "../components/create-project/AddLocationForm";
import AddProductForm from "../components/create-project/AddProductForm";

export default function Create() {
  return (
    <SimpleGrid as="form" columns={{ base: 1, lg: 2 }} gap={6}>
      <Stack direction="column" spacing={6}>
        <AddWorkerForm />
        <AddLocationForm />
      </Stack>

      <AddProductForm />
    </SimpleGrid>
  );
}
