import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";

function PriceIndexes() {
  const [state, setState] = useState({
    low: true,
    high: true,
    average: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box bgcolor="#fff" m={1} mt={0} px={5} py={1} borderRadius={4}>
      <Typography>Indexes</Typography>
      <Stack
        m={3}
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
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
            {} to {}
          </Typography>
        </Box>
        <Box>
          <Typography color="#15b89b" fontWeight="bold">
            Minimum Range: <br />
            {} to {}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default PriceIndexes;
