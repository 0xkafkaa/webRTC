const supportedConst = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedConst);

async function changeVideoSize() {
  // const tracks = stream.getTracks();
  // tracks.forEach((track) => {
  //   console.log(track.getCapabilities());
  // });
  const videoTracks = stream.getVideoTracks();
  videoTracks.forEach((videoTrack) => {
    const height = document.getElementById("vid-height").value;
    const width = document.getElementById("vid-width").value;

    const constraints = {
      height: height,
      width: width,
      frameRate: 5,
    };
    videoTrack.applyConstraints(constraints);
  });
}

