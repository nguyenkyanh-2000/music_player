import { LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { Stack } from "@mui/system";
import useMusicPlayer from "../hooks/useMusicPlayer";

const secondsToMinutes = (secs) => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
};

function SongSlider() {
  const interval = useRef();
  const { currentAudioPlayer, isPlaying } = useMusicPlayer();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState();
  const [elapsed, setElapsed] = useState();

  useEffect(() => {
    if (isPlaying) {
      interval.current = setInterval(() => {
        const _duration = Math.floor(currentAudioPlayer?.duration);
        const _elapsed = Math.floor(currentAudioPlayer?.currentTime);
        setProgress((_elapsed / _duration) * 100);
        setDuration(secondsToMinutes(_duration));
        setElapsed(secondsToMinutes(_elapsed));
      }, 100);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [
    isPlaying,
    currentAudioPlayer?.currentTime,
    currentAudioPlayer?.duration,
  ]);

  return (
    <Stack direction="row" sx={{ display: "flex", alignItems: "center", p: 2 }}>
      <Typography
        sx={{
          color: (theme) => theme.palette.secondary.lighter,
          position: "absolute",
          left: "16px",
        }}
      >
        {elapsed === undefined ? "00:00" : elapsed}
      </Typography>
      <Box sx={{ width: "248px", p: 1, position: "absolute", right: "64px" }}>
        <LinearProgress
          variant="determinate"
          color="secondary"
          value={progress}
        />
      </Box>
      <Typography
        sx={{
          color: (theme) => theme.palette.secondary.lighter,
          position: "absolute",
          right: "16px",
        }}
      >
        {duration === undefined ? "00:00" : duration}
      </Typography>
    </Stack>
  );
}

export default SongSlider;
