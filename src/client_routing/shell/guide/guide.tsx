"use client";
import { useAppSelector } from "../../store/hooks/hooks";
import "./guide.css";
import MainGuide from "./components/main_guide";
import MiniGuide from "./components/mini_guide";
import { useLayoutEffect, useState } from "react";
import { useAppRouterContext } from "@/client_routing/AppRouter/components/contexts/AppRouterContext";

export default function Guide() {
  const { windowWidth } = useAppSelector((state) => state.app);
  const { targetRoute } = useAppRouterContext();
  const [resizeStyle, setResizeStyle] = useState("");
  const [watchStyle, setWatchStyle] = useState("");

  useLayoutEffect(() => {
    setWatchStyle(targetRoute.includes("/watch") ? "watch-active" : "");
    setResizeStyle(
      !targetRoute.includes("/watch") && windowWidth <= 1200
        ? "mini-active"
        : ""
    );
  }, [windowWidth, targetRoute]);

  if (!windowWidth || !targetRoute) return <></>;
  return (
    <div className={`guide-wrapper ${watchStyle} ${resizeStyle}`}>
      <MainGuide />
      <MiniGuide />
    </div>
  );
}
