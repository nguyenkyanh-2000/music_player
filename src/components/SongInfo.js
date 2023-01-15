import React from "react";
import styled from "@emotion/styled";
import Image1 from "../data/track_1.jpeg";
import { Typography } from "@mui/material";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { NoEncryption } from "@mui/icons-material";

export const SongInfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "24px",
}));

export const SongInfoText = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  padding: "8px",
  height: "80px",
  flexDirection: "column",
  color: theme.palette.secondary.lighter,
  justifyContent: "center",
  textAlign: "center",
}));

function SongInfo() {
  const { currentTrackImage, currentTrackName, currentTrackArtist } =
    useMusicPlayer();
  return (
    <SongInfoContainer>
      <img
        src={currentTrackImage}
        alt=""
        style={{ height: "80px", width: "80px" }}
      ></img>
      <SongInfoText>
        <Typography fontSize={"18px"} fontWeight={"800"}>
          {currentTrackName}
        </Typography>
        <Typography fontSize={"12px"}>{currentTrackArtist}</Typography>
      </SongInfoText>
    </SongInfoContainer>
  );
}

export default SongInfo;
