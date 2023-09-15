const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});


// Initialize Plyr
const players = Plyr.setup("video");
window.players = players;

// First Video
(function () {
  var video = document.querySelector("#player");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(
      "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    );
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();

// 2nd Video
(function () {
  var video = document.querySelector("#player");
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource("https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8");
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  plyr.setup(video);
})();
