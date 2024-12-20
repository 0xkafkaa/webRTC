async function shareScreen() {
  const options = {
    video: true,
    audio: true,
    surfaceSwitching: "include",
  };
  try {
    mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
  } catch (e) {
    console.log(e``);
  }

  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "green",
  ]);
}

let mediaRecorderForScreen;
let recordedBlobsForScreen;
function startScreenRecoding() {
  if (!mediaStream) {
    alert("No stream currently");
    return;
  }
  console.log("start screen recording");
  recordedBlobsForScreen = [];
  mediaRecorderForScreen = new MediaRecorder(mediaStream);
  mediaRecorderForScreen.ondataavailable = (e) => {
    console.log("Data is available for the media recorder");
    recordedBlobsForScreen.push(e.data);
  };
  mediaRecorderForScreen.start();
}
function stopScreenRecoding() {
  if (!mediaRecorderForScreen) {
    alert("Media Recorder not available");
    return;
  }
  console.log("stop recording");
  mediaRecorderForScreen.stop();
  console.log(recordedBlobsForScreen);
}
function playScreenRecoding() {
  console.log("play");
  if (!recordedBlobsForScreen) {
    alert("No recording available");
    return;
  }
  const superBuffer = new Blob(recordedBlobsForScreen);
  const playerEl = document.getElementById("other-video");
  playerEl.src = window.URL.createObjectURL(superBuffer);
  playerEl.controls = true;
  playerEl.play();
}
