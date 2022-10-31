import { SimpleGrid } from "@chakra-ui/react";

import SalesAmountChart from "./SalesAmount";
import SalesVolumeChart from "./SalesVolume";
import PerformanceChart from "./PerformanceChart";

export default function Analytics() {
  return (
    <SimpleGrid
      id="analytics"
      columns={{ base: 1, lg: 2 }}
      gap={3}
      w="full"
      py={6}
    >
      <SalesAmountChart />
      <SalesVolumeChart />
      <PerformanceChart />
    </SimpleGrid>
  );
}
