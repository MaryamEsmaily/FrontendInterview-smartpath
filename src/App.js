import { Grid } from "@mui/material";
import { useState } from "react";
import HourlyPriceChart from "./container/HourlyPriceChart";
import HourlyVolumeChart from "./container/HourlyVolumeChart";
import PriceIndexes from "./container/PriceIndexes";

function App() {
  const [barChartKey, setBarChartKey] = useState([]);
  return (
    <Grid container>
      <Grid item order={0} xs={12} lg={8}>
        <HourlyPriceChart barChartKey={barChartKey} />
      </Grid>
      <Grid item order={{ xs: 2, md: 1 }} xs={12} md={5} lg={4}>
        <HourlyVolumeChart />
      </Grid>
      <Grid item xs={12} order={{ xs: 1, md: 2 }} md={7} lg={12}>
        <PriceIndexes setBarChartKey={setBarChartKey} />
      </Grid>
    </Grid>
  );
}

export default App;
