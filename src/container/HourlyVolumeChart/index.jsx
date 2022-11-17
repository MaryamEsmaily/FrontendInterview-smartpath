import React, { useMemo } from "react";
import { Box } from "@mui/system";
import BarChart from "component/BarChart";

function HourlyVolumeChart() {
  const data = useMemo(() => [], []);
  //
  return (
    <Box height={500} my={2} mx={1} p={3} borderRadius={4} bgcolor="#fff">
      <BarChart
        colors={"#15b89b"}
        data={data}
        keys={["high", "average", "low"]}
      />
    </Box>
  );
}

export default HourlyVolumeChart;
