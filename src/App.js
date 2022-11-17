import { Grid } from "@mui/material";
import HourlyPriceChart from "./container/HourlyPriceChart";
import HourlyVolumeChart from "./container/HourlyVolumeChart";
import PriceIndexes from "./container/PriceIndexes";

function App() {
  return (
    <Grid container>
      <Grid item xs={9}>
        <HourlyPriceChart />
      </Grid>
      <Grid item xs={3}>
        <HourlyVolumeChart />
      </Grid>
      <Grid item xs={12}>
        <PriceIndexes />
      </Grid>
    </Grid>
  );
}

export default App;
