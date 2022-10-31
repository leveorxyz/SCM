import {
  Stack,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  useColorModeValue,
  Button,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

export default function AddProductForm() {
  const borderColor = useColorModeValue("gray.300", "gray.700");
  const inputBgColor = useColorModeValue("gray.50", "gray.800");
  return (
    <Flex
      w="full"
      direction="column"
      justify="space-between"
      border={1}
      borderColor={borderColor}
      borderStyle="solid"
      rounded="lg"
      overflow="hidden"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} p={4}>
        <Stack direction="column" spacing={2}>
          <FormControl>
            <Input
              placeholder="Product name"
              variant="filled"
              bgColor={inputBgColor}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <Textarea
              placeholder="Description"
              variant="filled"
              bgColor={inputBgColor}
              resize="vertical"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
        </Stack>

        <Stack direction="column" spacing={2}>
          <FormControl>
            <Input
              placeholder="District"
              variant="filled"
              bgColor={inputBgColor}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl>
            <Input
              type="number"
              placeholder="Retail Price"
              variant="filled"
              bgColor={inputBgColor}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl>
            <Input
              placeholder="Product ID"
              variant="filled"
              bgColor={inputBgColor}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl>
            <Input placeholder="Unit" variant="filled" bgColor={inputBgColor} />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl>
            <Input
              placeholder="Amount"
              variant="filled"
              bgColor={inputBgColor}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
        </Stack>
      </SimpleGrid>

      <Button w="full" rounded="none" colorScheme="gray" mt={2}>
        Add Product
      </Button>
    </Flex>
  );
}
