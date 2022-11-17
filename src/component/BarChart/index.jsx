import React from "react";
import { ResponsiveBar } from "@nivo/bar";

function BarChart({ data, keys, colors }) {
  return (
    <ResponsiveBar
      colors={colors}
      data={data}
      keys={keys}
      indexBy="time"
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      padding={0.5}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      role="application"
      ariaLabel="Nivo bar chart demo"
      enableLabel={false}
      borderRadius={4}
    />
  );
}

export default BarChart;
