import { Stack } from "@mui/system";
import React from "react";
import SongSlider from "./SongSlider";
import Controller from "./Controller";
import SongInfo from "./SongInfo";

const style = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "40%",
  backgroundColor: (theme) => theme.palette.secondary.darker,
  borderRadius: 2,
};

function ControllerArea() {
  return (
    <Stack direction="column" spacing={0} sx={style}>
      <SongInfo></SongInfo>
      <SongSlider></SongSlider>
      <Controller></Controller>
    </Stack>
  );
}

export default ControllerArea;
