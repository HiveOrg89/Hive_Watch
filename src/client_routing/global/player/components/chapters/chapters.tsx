import { useEffect } from "react";
import generateChapters from "../../utils/generate_chapters";
import { usePlayerContext } from "../../context";

export default function Chapters() {
  const { videoDetails, chapters, setChapters, playerDimensions } =
    usePlayerContext();
  useEffect(() => {
    if (!videoDetails) return;
    const description = videoDetails?.description_string ?? "";
    const duration = Math.trunc(videoDetails?.duration ?? 50);

    setChapters(generateChapters(description, duration));
  }, [videoDetails?.video_id]);

  useEffect(() => {
    console.log(playerDimensions);
    // update chapter styles here
  }, [playerDimensions]);

  useEffect(() => {
    console.log(chapters);
  }, [chapters]);

  // generate chapter containers directly

  return <div className='chapters-container'></div>;
}
