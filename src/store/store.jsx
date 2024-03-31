import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../redux/videos/videosSlice";
import tagsReducer from "../redux/tags/tagsSlice";
import videoReducer from "../redux/video/videoSlice";
import relatedVideosReducer from "../redux/relatedVideos/relatedVideosSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,

  },
});
