let mediaRecorder;
let recordedBlobs;
function startRecoding() {
  if (!stream) {
    alert("No stream currently");
    return;
  }
  console.log("start recording");
  recordedBlobs = [];
  mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = (e) => {
    console.log("Data is available for the media recorder");
    recordedBlobs.push(e.data);
  };
  mediaRecorder.start();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "blue",
    "grey",
    "blue",
  ]);
}
function stopRecoding() {
  if (!mediaRecorder) {
    alert("Media Recorder not available");
    return;
  }
  console.log("stop recording");
  mediaRecorder.stop();
  console.log(recordedBlobs);
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "blue",
    "blue",
  ]);
}
function playRecoding() {
  console.log("play");
  if (!recordedBlobs) {
    alert("No recording available");
    return;
  }
  const superBuffer = new Blob(recordedBlobs);
  const playerEl = document.getElementById("other-video");
  playerEl.src = window.URL.createObjectURL(superBuffer);
  playerEl.controls = true;
  playerEl.play();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "blue",
  ]);
}
