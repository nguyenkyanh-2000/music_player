import React from "react";
import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PlaceholderImage from "../data/placeholder_track.jpeg";

const SongInfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  height: "80px",
  padding: "24px",
  flexGrow: 1,
  marginTop: "16px",
}));

const SongInfoText = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  padding: "8px",
  height: "80px",
  flexDirection: "column",
  color: theme.palette.secondary.lighter,
  justifyContent: "center",
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
}));

const ImageStyle = (theme) => ({
  height: "80px",
  width: "80px",
});

function SongInfo() {
  const { currentTrackImage, currentTrackName, currentTrackArtist } =
    useMusicPlayer();
  return (
    <SongInfoContainer>
      <Box
        component="img"
        sx={ImageStyle}
        src={currentTrackImage ? currentTrackImage : PlaceholderImage}
      ></Box>
      <SongInfoText>
        <Typography fontSize={"18px"} fontWeight={"800"}>
          {currentTrackName ? currentTrackName : "Your Song"}
        </Typography>
        <Typography fontSize={"12px"}>
          {currentTrackArtist ? currentTrackArtist : "Your favorite artist"}
        </Typography>
      </SongInfoText>
    </SongInfoContainer>
  );
}

export default SongInfo;
