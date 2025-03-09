import { AppRouter } from "../AppRouter/AppRouter";
import { Route } from "../AppRouter/components/route";
import { useAppDispatch } from "../store/hooks/hooks";
import { fetchChannelContent } from "../store/route_store/channel/actions";
import { fetchFeed } from "../store/route_store/home/actions";
import { fetchSelectedVideo } from "../store/route_store/watch/actions";
import Channel from "./channel/channel";
import ChannelFeaturedPage from "./channel/sub-routes/featured";
import ChannelLiveVideosPage from "./channel/sub-routes/live";
import ChannelVideosPage from "./channel/sub-routes/videos";
import UserHistoryPage from "./feed/history/history";
import Home from "./home/home";
import Watch from "./watch/watch";

export default function PageManager() {
  const dispatch = useAppDispatch();

  return (
    <AppRouter>
      <Route
        element={<Home />}
        path='/'
        action={async () => dispatch(fetchFeed())}
      />
      <Route
        element={<Watch />}
        path='/watch'
        action={async () => dispatch(fetchSelectedVideo())}
        visited
      />
      <Route
        element={<Channel />}
        path='/channel/:channel'
        action={async () => dispatch(fetchChannelContent())}
      >
        <Route element={<ChannelFeaturedPage />} path='/featured' />
        <Route element={<ChannelVideosPage />} path='/videos' />
        <Route element={<ChannelLiveVideosPage />} path='/live' />
      </Route>
      <Route element={<UserHistoryPage />} path='/feed/history' />
    </AppRouter>
  );
}
