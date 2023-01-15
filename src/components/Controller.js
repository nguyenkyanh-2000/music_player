import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";

const style = {
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
};

const iconStyle = {
  fontSize: "40px",
  color: (theme) => theme.palette.secondary.lighter,
};

function Controller() {
  const isPlaying = true;
  return (
    <Box sx={style}>
      <IconButton>
        <SkipPreviousIcon sx={iconStyle} />
      </IconButton>
      <IconButton>
        {isPlaying ? (
          <PlayCircleIcon sx={iconStyle} />
        ) : (
          <PauseCircleIcon sx={iconStyle} />
        )}
      </IconButton>
      <IconButton>
        <SkipNextIcon sx={iconStyle} />
      </IconButton>
    </Box>
  );
}

export default Controller;
