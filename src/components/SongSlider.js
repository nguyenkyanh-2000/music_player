import { Slider, Typography } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";
import { Stack } from "@mui/system";

const StyledSlider = styled(Slider)(({ theme, ...props }) => ({
  color: theme.palette.secondary.lighter,
  height: 2,
  "&:hover": {
    cursor: "pointer",
  },

  "& .MuiSlider-thumb": {
    width: "13px",
    height: "13px",
    display: props.thumbless ? "none" : "block",
  },
}));

function SongSlider() {
  return (
    <Stack
      spacing={1}
      direction="row"
      sx={{ display: "flex", alignItems: "center", p: 2 }}
    >
      <Typography color={(theme) => theme.palette.secondary.lighter}>
        00:00
      </Typography>
      <StyledSlider thumbless="true"></StyledSlider>
      <Typography color={(theme) => theme.palette.secondary.lighter}>
        2:00
      </Typography>
    </Stack>
  );
}

export default SongSlider;
