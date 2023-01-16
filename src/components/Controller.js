import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import useMusicPlayer from "../hooks/useMusicPlayer";

const style = {
  position: "relative",
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  marginBottom: "24px",
};

const iconStyle = {
  fontSize: "40px",
  color: (theme) => theme.palette.secondary.lighter,
};

function Controller() {
  const { isPlaying, togglePlay, playPreviousTrack, playNextTrack } =
    useMusicPlayer();
  return (
    <Box sx={style}>
      <IconButton onClick={playPreviousTrack}>
        <SkipPreviousIcon sx={iconStyle} />
      </IconButton>
      <IconButton onClick={togglePlay}>
        {!isPlaying ? (
          <PlayCircleIcon sx={iconStyle} />
        ) : (
          <PauseCircleIcon sx={iconStyle} />
        )}
      </IconButton>
      <IconButton onClick={playNextTrack}>
        <SkipNextIcon sx={iconStyle} />
      </IconButton>
    </Box>
  );
}

export default Controller;
