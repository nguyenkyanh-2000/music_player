import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import { Typography } from "@mui/material";
import useMusicPlayer from "../hooks/useMusicPlayer";

const renderRow = (props) => {
  const { index, style } = props;
  const items = props.data.trackList;
  const play = props.data.playTrack;
  return (
    <ListItem component="div" key={index} style={style}>
      <ListItemButton
        onClick={() => {
          console.log(index);
          play(index);
        }}
      >
        <ListItemText
          primary={`${items[index].name}`}
          secondary={`${items[index].artist}`}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default function SongList() {
  const { trackList, playTrack } = useMusicPlayer();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        p: "8px",
        bgcolor: (theme) => theme.palette.primary.lighter,
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "800",
          textAlign: "center",
          textDecoration: "underline",
          marginBottom: "16px",
        }}
      >
        Your playlist
      </Typography>
      <FixedSizeList
        height={400}
        width={360}
        itemSize={80}
        itemData={{ trackList, playTrack }}
        itemCount={trackList.length}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
