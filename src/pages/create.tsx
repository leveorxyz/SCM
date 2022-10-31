import { SimpleGrid } from "@chakra-ui/react";

import AddWorkerForm from "../components/create-project/AddWorkerForm";

export default function Create() {
  return (
    <SimpleGrid as="form" columns={{ base: 1, lg: 2 }}>
      <AddWorkerForm />
    </SimpleGrid>
  );
}
