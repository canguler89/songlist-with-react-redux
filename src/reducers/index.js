import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "A little bit", duration: "4:05" },
    { title: "In da Club", duration: "3:55" },
    { title: "Without me", duration: "2:30" },
    { title: "Nothing Else matter", duration: "3:53" },
    { title: "T.N.T", duration: "5:32" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
