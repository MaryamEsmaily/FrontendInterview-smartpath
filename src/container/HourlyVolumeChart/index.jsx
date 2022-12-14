import React, { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/system";
import BarChart from "component/BarChart";
import { useGetHourlyExchangeVol } from "hook/api/useApi";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

function HourlyVolumeChart() {
  const { data: HourlyExchangeVol } = useGetHourlyExchangeVol({
    tsym: "BTC",
    limit: 10,
  });
  //
  useEffect(() => {
    if (HourlyExchangeVol)
      localStorage.setItem(
        "HourlyExchangeVol",
        JSON.stringify(HourlyExchangeVol)
      );
  }, [HourlyExchangeVol]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
    }, 360000);
  }, []);
  //

  //
  const [showTime, setShowTime] = useState();
  //
  const handleChangeTime = (e) => {
    setShowTime(e.target.value);
  };

  useEffect(() => {
    setShowTime(HourlyExchangeVol?.Data?.[0]?.time);
  }, [HourlyExchangeVol]);

  const data = useMemo(
    () =>
      HourlyExchangeVol?.Data?.filter((item) => item.time === +showTime) ?? [],
    [HourlyExchangeVol, showTime]
  );
  //
  return (
    <Box
      height={500}
      p={3}
      mx={1}
      mb={2}
      mt={{ base: 0, lg: 2 }}
      borderRadius={4}
      bgcolor="#fff"
      sx={{ textAlign: "center" }}
    >
      <Typography>
        Market Volume of
        <br /> {showTime}
      </Typography>
      <Box sx={{ "& div": { height: "370px!important" } }}>
        <BarChart
          padding={0.8}
          colors={"#15b89b"}
          data={data}
          keys={["volume"]}
        />
      </Box>
      <FormControl sx={{ textAlign: "center" }}>
        <RadioGroup row defaultValue="" name="radio-buttons-group">
          {HourlyExchangeVol?.Data?.map((item) => (
            <FormControlLabel
              sx={{ m: 0.3 }}
              checked={item.time === +showTime}
              key={item.time}
              value={item.time}
              onChange={handleChangeTime}
              control={
                <Radio
                  size="small"
                  sx={{
                    color: "#15b89b",
                    "&.Mui-checked": {
                      color: "#15b89b",
                    },
                    padding: 0,
                    margin: 0,
                  }}
                />
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default HourlyVolumeChart;
