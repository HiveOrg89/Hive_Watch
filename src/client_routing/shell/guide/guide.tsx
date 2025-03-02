"use client";
import { useAppSelector } from "../../store/hooks/hooks";
import "./guide.css";
import { useBrowserContext } from "../../AppRouter/components/Provider";
import MainGuide from "./components/main_guide";
import MiniGuide from "./components/mini_guide";
import { useLayoutEffect, useState } from "react";

export default function Guide() {
  const { windowWidth } = useAppSelector((state) => state.app);
  const { targetRoute } = useBrowserContext();
  const [resizeStyle, setResizeStyle] = useState("");
  const [watchStyle, setWatchStyle] = useState("");

  useLayoutEffect(() => {
    setWatchStyle(targetRoute === "/watch" ? "watch-active" : "");
    setResizeStyle(
      targetRoute !== "/watch" && windowWidth <= 1200 ? "mini-active" : ""
    );
  }, [windowWidth, targetRoute]);

  if (!windowWidth) return <></>;
  return (
    <div className={`guide-wrapper ${watchStyle} ${resizeStyle}`}>
      <MainGuide />
      <MiniGuide />
    </div>
  );
}
