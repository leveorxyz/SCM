import {
  Stack,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

export default function AddWorkerForm() {
  const borderColor = useColorModeValue("gray.300", "gray.700");
  const inputBgColor = useColorModeValue("gray.50", "gray.800");
  const bottomBtnBgColor = useColorModeValue("white", "gray.700");

  return (
    <Stack
      direction="column"
      border={1}
      borderColor={borderColor}
      borderStyle="solid"
      rounded="lg"
      overflow="hidden"
      spacing={0}
    >
      <Stack direction="column" spacing={2} p={4}>
        <Stack direction={{ base: "column", md: "row" }} spacing={2}>
          <FormControl>
            <Select
              placeholder="Select worker"
              variant="filled"
              bgColor={inputBgColor}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <Input
              placeholder="Email"
              variant="filled"
              bgColor={inputBgColor}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }} spacing={2}>
          <FormControl>
            <Input placeholder="Name" variant="filled" bgColor={inputBgColor} />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <Input
              placeholder="Contact"
              variant="filled"
              bgColor={inputBgColor}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
        </Stack>
      </Stack>

      <Button
        bgColor={bottomBtnBgColor}
        w="full"
        rounded="none"
        colorScheme="gray"
      >
        Add Worker
      </Button>
    </Stack>
  );
}
