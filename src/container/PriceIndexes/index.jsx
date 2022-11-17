import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";

function PriceIndexes({ setBarChartKey }) {
  const [state, setState] = useState({
    high: true,
    average: true,
    low: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    const activeKeys = Object.keys(state);
    const active = activeKeys.filter(function (id) {
      return state[id];
    });
    setBarChartKey(active);
  }, [setBarChartKey, state]);

  const exchangeVol = JSON.parse(localStorage.getItem("HourlyExchangeVol"));

  return (
    <Box
      bgcolor="#fff"
      m={1}
      mt={0}
      px={{ xs: 2, lg: 5 }}
      py={1}
      borderRadius={4}
    >
      <Typography>Indexes</Typography>
      <Stack
        m={3}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "", md: "center" }}
        justifyContent="space-around"
        spacing={3}
      >
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.high}
                  onChange={handleChange}
                  name="high"
                  icon={
                    <CircleOutlinedIcon
                      fontSize="small"
                      sx={{ color: " #15b89b" }}
                    />
                  }
                  checkedIcon={
                    <CircleIcon fontSize="small" sx={{ color: " #15b89b" }} />
                  }
                />
              }
              label="Higher"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.average}
                  onChange={handleChange}
                  name="average"
                  icon={
                    <CircleOutlinedIcon
                      fontSize="small"
                      sx={{ color: " #ffd967" }}
                    />
                  }
                  checkedIcon={
                    <CircleIcon fontSize="small" sx={{ color: " #ffd967" }} />
                  }
                />
              }
              label="Average"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.low}
                  onChange={handleChange}
                  name="low"
                  icon={
                    <CircleOutlinedIcon
                      fontSize="small"
                      sx={{ color: " #f24c4b" }}
                    />
                  }
                  checkedIcon={
                    <CircleIcon fontSize="small" sx={{ color: " #f24c4b" }} />
                  }
                />
              }
              label="Lower"
            />
          </FormGroup>
        </FormControl>
        <Box>
          <Typography color="#f24c4b" fontWeight="bold">
            Maximum Range: <br />
            {exchangeVol?.TimeFrom ?? ""} to {exchangeVol?.TimeTo ?? ""}
          </Typography>
        </Box>
        <Box>
          <Typography color="#15b89b" fontWeight="bold">
            Minimum Range: <br />
            {exchangeVol?.TimeFrom ?? ""} to {exchangeVol?.TimeTo ?? ""}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default PriceIndexes;
