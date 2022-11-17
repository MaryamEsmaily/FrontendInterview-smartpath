import React, { useMemo } from "react";
import { Box } from "@mui/system";
import { useGetHourlyPairOHLCV } from "hook/api/useApi";
import calculateAverage from "utils/calculateAverage";
import BarChart from "component/BarChart";

function HourlyPriceChart() {
  //
  const { data: HourlyPairOHLCV } = useGetHourlyPairOHLCV({
    fsym: "BTC",
    tsym: "USDT",
    limit: 10,
  });
  //
  const data = useMemo(
    () =>
      HourlyPairOHLCV?.Data?.map((item) => ({
        ...item,
        average: calculateAverage({ max: item.high, min: item.low }),
      })) ?? [],
    [HourlyPairOHLCV]
  );
  //
  return (
    <Box height={500} my={2} mx={1} p={3} borderRadius={4} bgcolor="#fff">
      <BarChart
        colors={["#15b89b", "#ffd967", "#f24c4b"]}
        data={data}
        keys={["high", "average", "low"]}
      />
    </Box>
  );
}

export default HourlyPriceChart;
