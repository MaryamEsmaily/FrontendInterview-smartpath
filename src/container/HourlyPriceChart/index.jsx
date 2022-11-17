import React, { useMemo } from "react";
import { Box } from "@mui/system";
import { useGetHourlyPairOHLCV } from "hook/api/useApi";
import calculateAverage from "utils/calculateAverage";
import BarChart from "component/BarChart";
import { Stack, Typography } from "@mui/material";

function HourlyPriceChart({ barChartKey }) {
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
  const colors = { high: "#15b89b", average: "#ffd967", low: "#f24c4b" };
  const getColor = (bar) => colors[bar.id];
  //
  return (
    <Box
      height={500}
      mx={1}
      p={3}
      my={2}
      borderRadius={4}
      bgcolor="#fff"
      overflow="auto"
    >
      {barChartKey.length ? (
        <BarChart colors={getColor} data={data} keys={barChartKey} />
      ) : (
        <Stack
          height="100%"
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Typography fontWeight="bold">There is no data </Typography>
        </Stack>
      )}
    </Box>
  );
}

export default HourlyPriceChart;
