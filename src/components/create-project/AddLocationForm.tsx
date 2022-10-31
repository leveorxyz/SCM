import {
  Stack,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

export default function AddLocationForm() {
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
            <Input
              placeholder="District"
              variant="filled"
              bgColor={inputBgColor}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <Input
              placeholder="Sub-district"
              variant="filled"
              bgColor={inputBgColor}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
        </Stack>

        <FormControl>
          <Textarea
            placeholder="Detailed location"
            variant="filled"
            bgColor={inputBgColor}
            resize="vertical"
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
      </Stack>

      <Button
        bgColor={bottomBtnBgColor}
        w="full"
        rounded="none"
        colorScheme="gray"
      >
        Add Location
      </Button>
    </Stack>
  );
}
