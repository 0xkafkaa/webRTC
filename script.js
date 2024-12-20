let stream = null;
let mediaStream = null;
const videoEl = document.getElementById("my-video");
async function getMicAndCamera(constraints) {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    changeButtons([
      "green",
      "blue",
      "blue",
      "grey",
      "grey",
      "grey",
      "grey",
      "grey",
    ]);
    console.log(stream);
  } catch (e) {
    console.log(e);
  }
}
const constraints = {
  audio: true,
  video: {
    width: 1280,
    height: 720,
  },
};

function showMyVideo() {
  if (!stream) {
    alert("stream loading");
    return;
  }
  videoEl.srcObject = stream;
  const tracks = stream.getTracks();
  console.log(tracks);
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "blue",
    "grey",
    "grey",
    "blue",
  ]);
}
function stopMyVideo() {
  if (!stream) {
    alert("stream loading");
    return;
  }
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    track.stop();
  });
  changeButtons([
    "blue",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
    "grey",
  ]);
}

document
  .getElementById("share")
  .addEventListener("click", () => getMicAndCamera(constraints));
document
  .getElementById("show-video")
  .addEventListener("click", () => showMyVideo());
document
  .getElementById("stop-video")
  .addEventListener("click", () => stopMyVideo());
document
  .getElementById("change-size")
  .addEventListener("click", () => changeVideoSize());
document
  .getElementById("start-record")
  .addEventListener("click", () => startRecoding());
document
  .getElementById("stop-record")
  .addEventListener("click", () => stopRecoding());
document
  .getElementById("play-record")
  .addEventListener("click", () => playRecoding());
document
  .getElementById("share-screen")
  .addEventListener("click", () => shareScreen());
document
  .getElementById("start-screen-record")
  .addEventListener("click", () => startScreenRecoding());
document
  .getElementById("stop-screen-record")
  .addEventListener("click", () => stopScreenRecoding());
document
  .getElementById("play-screen-record")
  .addEventListener("click", () => playScreenRecoding());
