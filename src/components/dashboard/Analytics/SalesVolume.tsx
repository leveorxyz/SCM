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
    volume: 36000,
  },
  {
    name: "Feb",
    volume: 18000,
  },
  {
    name: "Mar",
    volume: 23760,
  },
  {
    name: "Apr",
    uv: 2780,
    volume: 35000,
  },
  {
    name: "May",
    volume: 43000,
  },
  {
    name: "Jun",
    volume: 37000,
  },
  {
    name: "Jul",
    volume: 44000,
  },
  {
    name: "Aug",
    volume: 48000,
  },
  {
    name: "Sep",
    volume: 53000,
  },
  {
    name: "Oct",
    volume: 55000,
  },
  {
    name: "Nov",
    volume: 50000,
  },
  {
    name: "Dec",
    volume: 57000,
  },
];

export default function SalesVolumeChart() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const tooltipColor = useColorModeValue(
    "var(--chakra-colors-gray-100)",
    "var(--chakra-colors-gray-800)"
  );
  const strokeColor = useColorModeValue(
    "var(--chakra-colors-blue-300)",
    "var(--chakra-colors-blue-600)"
  );

  return (
    <Box p={3} bgColor={bgColor} rounded="lg" height="fit-content">
      <Heading size="md" mb={6}>
        Sales Volume
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
            dataKey="volume"
            stroke={strokeColor}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
