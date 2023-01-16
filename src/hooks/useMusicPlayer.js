import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const useMusicPlayer = () => {
  const { state, setState } = useContext(MusicPlayerContext);

  // Play a specific track
  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].audioFile);
      state.audioPlayer.play();
      setState((state) => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
  }

  // Toggle play or pause
  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
  }

  // Play the previous track in the tracks array
  function playPreviousTrack() {
    const newIndex =
      (((state.currentTrackIndex + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    playTrack(newIndex);
  }

  // Play the next track in the tracks array
  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  /* Get the current song's duration
  async function getTrackDuration() {
    try {
      state.audioPlayer.addEventListener("canplaythrough", () => {
        console.log(Math.round(state.audioPlayer.duration));
        return Math.round(state.audioPlayer.duration);
      });
    } catch (error) {
      console.log("Error at getTrackDuration");
    }
  }
  */

  return {
    playTrack,
    togglePlay,
    currentAudioPlayer: state.audioPlayer,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    currentTrackArtist:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].artist,
    currentTrackImage:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].imageFile,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    currentTrackIndex: state.currentTrackIndex,
    playPreviousTrack,
    playNextTrack,
  };
};

export default useMusicPlayer;
