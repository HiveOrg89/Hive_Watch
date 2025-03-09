import { useEffect } from "react";
import { usePlayerContext } from "../../context";
import { useRouteProperties } from "@/client_routing/AppRouter/components/hooks";

export default function BottomControls() {
  const { player, playerScope, playerElements } = usePlayerContext();
  const { isHidden } = useRouteProperties();

  useEffect(() => {
    const handleSpaceClick = (e: KeyboardEvent) => {
      e.preventDefault();
      const { videoElement } = playerElements;

      if (!videoElement) return;

      if (e.key === " ") {
        videoElement.paused ? videoElement.play() : videoElement.pause();
      }
    };

    document.addEventListener("keypress", handleSpaceClick);

    return () => {
      document.removeEventListener("keypress", handleSpaceClick);
    };
  }, [player, playerScope, isHidden]);

  return <div className='bottom-controls'></div>;
}
