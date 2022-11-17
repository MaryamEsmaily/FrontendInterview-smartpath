import { Grid } from "@mui/material";
import { useState } from "react";
import HourlyPriceChart from "./container/HourlyPriceChart";
import HourlyVolumeChart from "./container/HourlyVolumeChart";
import PriceIndexes from "./container/PriceIndexes";

function App() {
  const [barChartKey, setBarChartKey] = useState([]);
  return (
    <Grid container>
      <Grid item xs={12} lg={9}>
        <HourlyPriceChart barChartKey={barChartKey} />
      </Grid>
      <Grid item xs={12} lg={3}>
        <HourlyVolumeChart />
      </Grid>
      <Grid item xs={12} lg={12}>
        <PriceIndexes setBarChartKey={setBarChartKey} />
      </Grid>
    </Grid>
  );
}

export default App;
