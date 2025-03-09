import { Dispatch } from "@reduxjs/toolkit";

import { updateInitialFetch } from "./slice";
// import { RootState } from "../../store";

export const fetchFeed = (): ((dispatch: Dispatch) => Promise<void>) => {
  return async (dispatch: Dispatch) => {
    await new Promise((resolve) => {
      const { pathname, search } = window.location;
      setTimeout(() => {
        console.log(pathname, search);
        resolve(null);
      }, 1000);
    });
    dispatch(updateInitialFetch(["vid1", "vid2"]));
  };
};
