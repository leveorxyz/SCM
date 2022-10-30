import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Container } from "../components/Container";

const Index = () => {
  const router = useRouter();
  const bgColor = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const onSubmit = () => router.push("/dashboard");

  return (
    <Container>
      <Flex
        w="100%"
        minH="100vh"
        align={"center"}
        justify={"center"}
        bgColor={bgColor}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          border={1}
          borderColor={borderColor}
          borderStyle={"solid"}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Enter new password
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={"orange.500"}
              color={"white"}
              _hover={{
                bg: "orange.600",
              }}
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
