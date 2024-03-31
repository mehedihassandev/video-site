import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../store/redux/videos/videosSlice";
import tagsReducer from "../store/redux/tags/tagsSlice";
import videoReducer from "../store/redux/video/videoSlice";
import relatedVideosReducer from "../store/redux/relatedVideos/relatedVideosSlice";
import filterReducer from "../store/redux/filter/filterSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,
  },
});
