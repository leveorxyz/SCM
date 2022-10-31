import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    amount: 2400,
  },
  {
    name: "Feb",
    amount: 1398,
  },
  {
    name: "Mar",
    amount: 2376,
  },
  {
    name: "Apr",
    amount: 3908,
  },
  {
    name: "May",
    amount: 4800,
  },
  {
    name: "Jun",
    amount: 3800,
  },
  {
    name: "Jul",
    amount: 4300,
  },
  {
    name: "Aug",
    amount: 4000,
  },
  {
    name: "Sep",
    amount: 3800,
  },
  {
    name: "Oct",
    amount: 4500,
  },
  {
    name: "Nov",
    amount: 4700,
  },
  {
    name: "Dec",
    amount: 5100,
  },
];

export default function SalesAmountChart() {
  const bgColor = useColorModeValue("white", "gray.700");
  const tooltipColor = useColorModeValue(
    "var(--chakra-colors-gray-100)",
    "var(--chakra-colors-gray-800)"
  );

  return (
    <Box p={3} bgColor={bgColor} rounded="lg" height="fit-content">
      <Heading size="md" mb={6}>
        Sales Amount
      </Heading>
      <ResponsiveContainer width="100%" height="100%" minHeight="300px">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" color="var(--chakra-colors-gray-500)" />
          <YAxis color="var(--chakra-colors-gray-500)" />
          <Tooltip
            labelStyle={{
              color: "var(--chakra-colors-gray-500)",
            }}
            contentStyle={{
              backgroundColor: tooltipColor,
              borderWidth: 0,
              borderRadius: "var(--chakra-radii-md)",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="var(--chakra-colors-blue-500)"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
