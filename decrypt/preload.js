// const startButton = document.getElementById('startButton');
// const stopButton = document.getElementById('stopButton');
// const audioElement = document.getElementById('audioElement');
const startPB = document.getElementById('startPlayback');
const stopPB = document.getElementById('stopPlayback');

// let mediaRecorder;
// let mediaChunks = [];

// const audioContext = new AudioContext();
// const destination = audioContext.createMediaStreamDestination();

// startButton.addEventListener('click', () => {
//   navigator.mediaDevices.getUserMedia({ audio: true })
//   .then((stream) => {
//     mediaRecorder = new MediaRecorder(stream);
//     mediaRecorder.ondataavailable = (event) => {
//       if (event.data.size > 0) {
//         mediaChunks.push(event.data);
//       }
//     };

//     mediaRecorder.onstop = () => {
//       const audioBlob = new Blob(mediaChunks, { type: 'audio/wav' });
//       const audioUrl = URL.createObjectURL(audioBlob);
//       audioElement.src = audioUrl;
//     };

//     mediaRecorder.start();
//     startButton.disabled = true;
//     stopButton.disabled = false;
//   })
//   .catch((err) => {
//     console.error('Error accessing the microphone:', err);
//   });
// });

// stopButton.addEventListener('click', () => {
//   mediaRecorder.stop();
//   startButton.disabled = false;
//   stopButton.disabled = true;
// });

startPB.addEventListener('click', async () => {
  navigator.mediaDevices.getUserMedia({ audio: { deviceId: 'VB-Audio VoiceMeeter AUX VAIO' } })
    .then((stream) => {
      const audioPlayer = new Audio();
      audioPlayer.srcObject = stream;
      audioPlayer.play();
    })
    .catch((error) => {
      console.error('Error accessing virtual audio cable:', error);
    });
});

stopPB.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

