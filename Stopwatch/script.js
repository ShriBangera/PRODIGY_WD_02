let startTime = 0;
let elapsedTime = 0;
let interval;
let isRunning = false;

function startPause() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById("startPauseBtn").textContent = "Start";
    } else {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateTime, 10);
        document.getElementById("startPauseBtn").textContent = "Pause";
    }
    isRunning = !isRunning;
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);

    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(time.getUTCMilliseconds()).padStart(3, '0');

    document.getElementById("display").textContent = `${minutes}:${seconds}.${milliseconds}`;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00.000";
    document.getElementById("startPauseBtn").textContent = "Start";
    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    if (!isRunning) return;
    const lapTime = document.getElementById("display").textContent;
    const lapDiv = document.createElement("div");
    lapDiv.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(lapDiv);
}
