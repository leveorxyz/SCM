import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.900", "gray.100");

  return (
    <Flex
      id="container"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bgColor={bgColor}
      color={color}
      transition="all 0.15s ease-out"
      {...props}
    />
  );
};
