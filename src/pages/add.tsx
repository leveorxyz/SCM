import { SimpleGrid, Stack } from "@chakra-ui/react";

import AddProjectForm from "../components/add-project/Form";

export default function AddProduct() {
  return (
    <Stack direction="column" spacing={3}>
      <AddProjectForm />
    </Stack>
  );
}
