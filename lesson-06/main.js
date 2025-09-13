import "./music-player/modules/styles/theme.js";
import songs from "./music-player/modules/songs.js";
import { showSong, showPlaylist } from "./music-player/modules/display.js";
import * as player from "./music-player/modules/player.js";


console.log("🎶 Добро пожаловать в музыкальный плеер!")

player.play();
player.pause();
player.stop();
player.showSong(songs[0]);
player.showSong(songs[1]);