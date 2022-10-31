import { SimpleGrid, Stack } from "@chakra-ui/react";

import AddProjectForm from "../components/add-project/Form";
import SupplyChain from "../components/add-project/SupplyChain";

export default function AddProduct() {
  return (
    <Stack direction="column" spacing={6}>
      <AddProjectForm />
      <SupplyChain />
    </Stack>
  );
}
