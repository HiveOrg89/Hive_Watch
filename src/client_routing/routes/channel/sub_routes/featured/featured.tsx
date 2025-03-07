"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import OutLet from "../../../../AppRouter/components/Outlet";
import Player from "../../../watch/components/player/player";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/hooks";
import { updateInitialFetch } from "../../../../store/routes/channel/slice";
import { useRouteProperties } from "../../../../AppRouter/components/RouteProperties";
import "./featured.css";
import { PlayerBounds } from "../../../../types/player_types";

export default function Featured() {
  const { windowWidth } = useAppSelector((state) => state.app);
  const { featured } = useAppSelector((state) => state.channel);
  const [playerBounds, setPlayerBounds] = useState<PlayerBounds | null>({
    maxWidth: 500,
    maxHeight: 500,
    availableSpace: 500,
  });
  const isHidden = useRouteProperties();
  const containerRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isHidden) {
      // or any other function to remove the video so unloading occurs
      dispatch(updateInitialFetch({ featuredVideo: null }));
    }
  }, [isHidden]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const availableSpace =
      containerRef.current.clientWidth > 500
        ? 500
        : containerRef.current.clientWidth;
    const maxWidth = 500;
    const maxHeight = 500;
    setPlayerBounds({ maxWidth, maxHeight, availableSpace });
  }, [windowWidth, isHidden]);
  return (
    <div className='featured' ref={containerRef}>
      <p>These are the featured content</p>
      <Player
        videoDetails={featured.featuredVideo}
        scope={"channel-featured"}
        playerBounds={playerBounds}
      />
      <OutLet />
    </div>
  );
}
