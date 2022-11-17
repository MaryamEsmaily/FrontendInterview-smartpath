import React from "react";
import { ResponsiveBar } from "@nivo/bar";

function BarChart({ data, keys, colors, padding = 0.5 }) {
  return (
    <ResponsiveBar
      colors={colors}
      data={data}
      keys={keys}
      indexBy="time"
      margin={{ top: 10, right: 20, bottom: 30, left: 40 }}
      padding={padding}
      groupMode="grouped"
      enableLabel={false}
      borderRadius={4}
    />
  );
}

export default BarChart;
