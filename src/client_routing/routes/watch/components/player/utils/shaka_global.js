// Cast the imported module to the `shaka` namespace type if you need
if (window && typeof window !== "undefined") {
  import("shaka-player/dist/shaka-player.ui.js")
    .then((shakaPlayer) => {
      window.shaka = shakaPlayer;
    })
    .catch(console.error);
}
