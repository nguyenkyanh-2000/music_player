import React, { useContext } from "react";
import { WallPaper } from "./components/Wallpaper";
import { AppContainer } from "./components/AppContainer";
import "./theme/App.css";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import ControllerArea from "./components/ControllerArea";
import SongList from "./components/SongList";

function App() {
  return (
    <MusicPlayerProvider>
      <WallPaper>
        <AppContainer>
          <SongList></SongList>
          <ControllerArea></ControllerArea>
        </AppContainer>
      </WallPaper>
    </MusicPlayerProvider>
  );
}

export default App;
