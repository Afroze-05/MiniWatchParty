let player;

// Load the YouTube player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '480',
    width: '854',
    videoId: 'tbnzAVRZ9Xc', // Your motivational video
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  console.log("YouTube Player is ready.");
}

function playVideo() {
  if (player && typeof player.playVideo === 'function') {
    player.playVideo();
  }
}

function pauseVideo() {
  if (player && typeof player.pauseVideo === 'function') {
    player.pauseVideo();
  }
}

function joinRoom() {
  const room = document.getElementById("room").value.trim();
  const greeting = document.getElementById("greeting");

  if (room !== "") {
    greeting.textContent = `👋 Welcome, ${room}! Enjoy the party 🎉`;
  } else {
    alert("Please enter your name.");
  }
}
