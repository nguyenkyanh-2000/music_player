import React, { useState, createContext } from "react";
import Track1 from "../data/track_1.mp3";
import Image1 from "../data/track_1.jpeg";
import Track2 from "../data/track_2.mp3";
import Image2 from "../data/track_2.jpeg";
import Track3 from "../data/track_3.mp3";
import Image3 from "../data/track_3.jpeg";
import Track4 from "../data/track_4.mp3";
import Image4 from "../data/track_4.jpeg";
import Track5 from "../data/track_5.mp3";
import Image5 from "../data/track_5.jpeg";
import Track6 from "../data/track_6.mp3";
import Image6 from "../data/track_6.jpg";
import Track7 from "../data/track_7.mp3";
import Image7 from "../data/track_7.jpeg";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Same Soul",
      artist: "PVRIS",
      audioFile: Track1,
      imageFile: Image1,
    },
    {
      name: "Playing God",
      artist: "Polyphia",
      audioFile: Track2,
      imageFile: Image2,
    },
    {
      name: "ここにいる (I'm Here)(Stephen Walking Remix)",
      artist: "Aiobahn feat. rionos",
      audioFile: Track3,
      imageFile: Image3,
    },
    {
      name: "Graveyard Whistling",
      artist: "Nothing But Thieves",
      audioFile: Track4,
      imageFile: Image4,
    },
    {
      name: "Dally (feat. GRAY)",
      artist: "HYOLYN, GRAY",
      audioFile: Track5,
      imageFile: Image5,
    },
    {
      name: "You Change with the Seasons",
      artist: "The Night Café",
      audioFile: Track6,
      imageFile: Image6,
    },
    {
      name: "Regent's Park",
      artist: "Bruno Major",
      audioFile: Track7,
      imageFile: Image7,
    },
    { name: "" },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);

  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
