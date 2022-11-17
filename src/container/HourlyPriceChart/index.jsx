import React, { useMemo } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box } from "@mui/system";

function HourlyPriceChart() {
  const data = useMemo(() => [], []);
  return (
    <Box height={500} my={2} mx={1} p={3} borderRadius={4} bgcolor="#fff">
      <ResponsiveBar
        colors={["#15b89b", "#ffd967", "#f24c4b"]}
        data={data ?? []}
        keys={[]}
        indexBy="time"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.5}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        enableLabel={false}
        borderRadius={4}
      />
    </Box>
  );
}

export default HourlyPriceChart;
