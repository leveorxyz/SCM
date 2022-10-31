import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  Cell,
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
    performance: 2400,
  },
  {
    name: "Feb",
    performance: 1398,
  },
  {
    name: "Mar",
    performance: 2376,
  },
  {
    name: "Apr",
    performance: 3908,
  },
  {
    name: "May",
    performance: 4800,
  },
  {
    name: "Jun",
    performance: 3800,
  },
  {
    name: "Jul",
    performance: 4300,
  },
  {
    name: "Aug",
    performance: 4000,
  },
  {
    name: "Sep",
    performance: 3800,
  },
  {
    name: "Oct",
    performance: 4500,
  },
  {
    name: "Nov",
    performance: 4700,
  },
  {
    name: "Dec",
    performance: 5100,
  },
];

export default function PerformanceChart() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const tooltipColor = useColorModeValue(
    "var(--chakra-colors-gray-100)",
    "var(--chakra-colors-gray-800)"
  );
  const barColor = useColorModeValue(
    "var(--chakra-colors-blue-300)",
    "var(--chakra-colors-blue-600)"
  );

  return (
    <Box p={3} bgColor={bgColor} rounded="lg" height="fit-content">
      <Heading size="md" mb={6}>
        Performance
      </Heading>
      <ResponsiveContainer width="100%" height="100%" minHeight="300px">
        <BarChart
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
          <Bar type="monotone" dataKey="performance" fill={barColor} radius={6}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
