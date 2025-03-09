import { useRouteProperties } from "@/client_routing/AppRouter/components/hooks";
import Player from "@/client_routing/global/player/player";
import { useAppSelector } from "@/client_routing/store/hooks/hooks";

export default function ChannelFeaturedPage() {
  const { featured } = useAppSelector((state) => state.channel);

  const { featuredVideo } = featured;

  console.log(featuredVideo);
  const { isHidden } = useRouteProperties();
  return (
    <div className='featured-page'>
      <h3>This is the featured page</h3>
      <Player
        videoDetails={isHidden ? null : featuredVideo}
        scope='featured-page'
      />
    </div>
  );
}
