import {
  Stack,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FiCalendar } from "react-icons/fi";

export default function AddProjectForm() {
  const inputBgColor = useColorModeValue("gray.50", "gray.800");
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction={{ base: "column", md: "row" }} spacing={2}>
        <FormControl>
          <Input
            placeholder="Project Name"
            variant="filled"
            bgColor={inputBgColor}
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
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
        <FormControl>
          <InputGroup>
            <Input
              placeholder="End Date"
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
      <Stack direction={{ base: "column", md: "row" }} spacing={2}>
        <FormControl>
          <Input
            placeholder="Quantity"
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
          <Select
            placeholder="Choose Product"
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
    </Stack>
  );
}
