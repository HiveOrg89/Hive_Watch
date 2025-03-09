// Should be reusable
"use client";
import { useEffect } from "react";
import "./player.css";

import { PlayerProvider, usePlayerContext } from "./context";
import Captions from "./components/captions/captions";
import Chapters from "./components/chapters/chapters";
import VideoEl from "./components/videoEl/videoEl";
import BottomControls from "./components/bottom_controls/bottom_controls";
import { VideoDetails } from "@/client_routing/types/player_types";

interface playerProps {
  videoDetails: VideoDetails | null;
  scope: string;
}

export default function Player({ videoDetails, scope }: playerProps) {
  return (
    <PlayerProvider videoDetails={videoDetails} scope={scope}>
      <PlayerContent />
    </PlayerProvider>
  );
}

export function PlayerContent({}) {
  const { player, loadManifest, unloadManifest, videoDetails, playerScope } =
    usePlayerContext();

  useEffect(() => {
    if (videoDetails) {
      loadManifest();
    } else {
      unloadManifest();
    }
  }, [videoDetails, player]);

  return (
    <div className='html5-player-container' data-scope={playerScope}>
      <Captions />
      <Chapters />
      <VideoEl />
      <BottomControls />
    </div>
  );
}
