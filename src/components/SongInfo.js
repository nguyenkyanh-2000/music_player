import React from "react";
import styled from "@emotion/styled";
import Image1 from "../data/track_1.jpeg";
import { Typography } from "@mui/material";

export const SongInfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "24px",
}));

export const SongInfoText = styled("div")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  color: theme.palette.secondary.lighter,
  justifyContent: "center",
  alignItems: "center",
}));

function SongInfo() {
  return (
    <SongInfoContainer>
      <img src={Image1} alt="" style={{ height: "80px", width: "80px" }}></img>
      <SongInfoText>
        <Typography fontSize={"24px"} fontWeight={"800"}>
          Same Soul
        </Typography>
        <Typography>PVRIS</Typography>
      </SongInfoText>
    </SongInfoContainer>
  );
}

export default SongInfo;
