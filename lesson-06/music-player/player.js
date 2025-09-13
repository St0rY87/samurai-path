function play() {
    console.log("▶️ Воспроизведение началось")
}

function pause() {
    console.log("⏸️ Воспроизведение приостановлено")
}

function stop() {
    console.log("⏹️ Воспроизведение остановлено")
}

export function showSong(songName) {
    console.log(`🎤 Плеер показывает: ${songName}`);
}

export { play, pause, stop };