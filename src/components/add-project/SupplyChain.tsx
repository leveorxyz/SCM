import {
  Heading,
  Stack,
  SimpleGrid,
  Badge,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiCalendar } from "react-icons/fi";

export default function SupplyChain() {
  const borderColor = useColorModeValue("gray.300", "gray.700");
  const bgColor = useColorModeValue("white", "gray.700");
  const inputBgColor = useColorModeValue("gray.100", "gray.800");

  return (
    <Stack spacing={4}>
      <Heading
        size="lg"
        borderBottomWidth={1}
        borderBottomColor={borderColor}
        borderBottomStyle="solid"
        pb={2}
      >
        Supply Chain
      </Heading>

      {Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
        <Stack key={i} bgColor={bgColor} p={3} rounded="lg" spacing={3}>
          <Heading size="md">Location {i}</Heading>
          <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={3}>
            <Stack
              direction={{ base: "row", lg: "column" }}
              spacing={2}
              justify="space-between"
            >
              <Heading size="sm">Location Type</Heading>
              <Badge
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="md"
                rounded="full"
                h="full"
                bgColor={inputBgColor}
              >
                Production
              </Badge>
            </Stack>

            <Stack direction={{ base: "row", lg: "column" }} spacing={2}>
              <Heading size="sm">Location</Heading>
              <FormControl>
                <Select
                  placeholder="Choose Location"
                  variant="filled"
                  bgColor={inputBgColor}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
            </Stack>

            <Stack direction={{ base: "row", lg: "column" }} spacing={2}>
              <Heading size="sm">Worker to Confirm</Heading>
              <FormControl>
                <Select
                  placeholder="Choose Worker"
                  variant="filled"
                  bgColor={inputBgColor}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
            </Stack>

            <Stack direction={{ base: "row", lg: "column" }} spacing={2}>
              <Heading size="sm">Expected Pickup Date</Heading>
              <FormControl>
                <InputGroup>
                  <Input
                    placeholder="Start Date"
                    variant="filled"
                    bgColor={inputBgColor}
                  />
                  <InputRightElement pointerEvents="none">
                    <FiCalendar />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
            </Stack>

            <Stack direction={{ base: "row", lg: "column" }} spacing={2}>
              <Heading size="sm">Price</Heading>
              <FormControl>
                <Input
                  placeholder="Price"
                  variant="filled"
                  bgColor={inputBgColor}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
            </Stack>
          </SimpleGrid>
        </Stack>
      ))}
    </Stack>
  );
}
