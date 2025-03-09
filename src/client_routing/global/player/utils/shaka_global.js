// Cast the imported module to the `shaka` namespace type if you need

export const attachPlayerToWindow = async () => {
  if (window && typeof window !== "undefined") {
    if (!window.shaka) {
      const shakaPlayer = await import("shaka-player/dist/shaka-player.ui.js");
      window.shaka = shakaPlayer;
      return "shaka player attached to window obj";
    } else {
      return "player already attached";
    }
  }
};
