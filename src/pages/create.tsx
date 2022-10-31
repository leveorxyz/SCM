import { SimpleGrid, Stack } from "@chakra-ui/react";

import AddWorkerForm from "../components/create-project/AddWorkerForm";
import AddLocationForm from "../components/create-project/AddLocationForm";

export default function Create() {
  return (
    <SimpleGrid as="form" columns={{ base: 1, lg: 2 }}>
      <Stack direction="column" spacing={4}>
        <AddWorkerForm />
        <AddLocationForm />
      </Stack>
    </SimpleGrid>
  );
}
