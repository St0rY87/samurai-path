import songs from "./songs.js";
import { play, pause, stop } from "./player.js";
import { showSong, showPlaylist } from "./display.js";
import { showSong as showSongPlayer } from "./player.js";

console.log("🎶 Добро пожаловать в музыкальный плеер!")

showPlaylist(songs);

showSong(songs[0]);
showSongPlayer(songs[0]);
play();

pause();
showSong(songs[1]);
showSongPlayer(songs[1]);
play();

stop();
