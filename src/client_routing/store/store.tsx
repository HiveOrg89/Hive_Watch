import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./route_store/home/slice";
import watchReducer from "./route_store/watch/slice";
import appReducer from "./app_store/slice";
import channelReducer from "./route_store/channel/slice";

const store = configureStore({
  reducer: {
    app: appReducer,
    home: homeReducer,
    watch: watchReducer,
    channel: channelReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
