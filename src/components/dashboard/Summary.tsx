import {
  SimpleGrid,
  Box,
  useColorModeValue,
  Heading,
  Text,
  Flex,
  Icon,
  chakra,
} from "@chakra-ui/react";
import {
  FiUser,
  FiBarChart,
  FiActivity,
  FiTool,
  FiArrowUp,
  FiArrowDown,
} from "react-icons/fi";

const SummaryData = [
  {
    title: "Traffic",
    value: 1738,
    change: 4.9,
    direction: true,
    metric: "week",
    icon: FiBarChart,
  },
  {
    title: "New Users",
    value: 47,
    change: 1.6,
    direction: false,
    metric: "month",
    icon: FiUser,
  },
  {
    title: "Sales",
    value: 26277,
    change: 6.8,
    direction: true,
    metric: "week",
    icon: FiActivity,
  },
  {
    title: "Performance",
    value: 56.74,
    change: 11.3,
    direction: true,
    metric: "week",
    icon: FiTool,
  },
];

export default function Summary() {
  const bgColor = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("gray.700", "gray.50");

  return (
    <SimpleGrid id="summary" columns={{ base: 2, lg: 4 }} w="100%" gap={3}>
      {SummaryData.map(
        ({ title, icon, value, change, metric, direction }, index) => (
          <Box key={index} bgColor={bgColor} color={color} p={3} rounded="lg">
            <Flex justify="space-between">
              <Box>
                <Heading as="h6" size="sm" fontWeight="normal">
                  {title}
                </Heading>

                <Text fontSize="2xl" fontWeight="bold">
                  {value}
                </Text>
              </Box>

              <Icon as={icon} w={8} h={8} color="blue.500" />
            </Flex>

            <Text fontSize="sm">
              <Flex
                display="inline-flex"
                align="center"
                color={direction ? "green.500" : "red.500"}
              >
                <Icon as={direction ? FiArrowUp : FiArrowDown} />
                &nbsp;
                <chakra.span>{change}%</chakra.span>
                &nbsp;
              </Flex>
              {direction ? "up" : "down"} from last {metric}
            </Text>
          </Box>
        )
      )}
    </SimpleGrid>
  );
}
