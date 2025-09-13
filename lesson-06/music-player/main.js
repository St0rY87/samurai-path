import songs from "./songs.js";
import { showSong, showPlaylist } from "./display.js";

import * as player from "./player.js"

console.log("🎶 Добро пожаловать в музыкальный плеер!")

player.play();
player.pause();
player.stop();
player.showSong(songs[0]);
player.showSong(songs[1]);