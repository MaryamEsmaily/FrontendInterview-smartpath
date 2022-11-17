import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import useBreakpoints from "hook/useBreakpoints";

function BarChart({ data, keys, colors, padding = 0.5 }) {
  const { md } = useBreakpoints();
  return (
    <ResponsiveBar
      axisBottom={{
        tickRotation: md ? 0 : 90,
      }}
      colors={colors}
      data={data}
      keys={keys}
      indexBy="time"
      margin={{ top: 10, right: 20, bottom: md ? 30 : 90, left: 40 }}
      padding={padding}
      groupMode="grouped"
      enableLabel={false}
      borderRadius={4}
    />
  );
}

export default BarChart;
