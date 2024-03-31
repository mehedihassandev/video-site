import { useDispatch, useSelector } from "react-redux";
import { Video } from "./Video";
import { useEffect } from "react";
import { fetchVideos } from "../features/videos/videosSlice";

export const Videos = () => {
  const dispatch = useDispatch();

  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  function renderMessage(message) {
    return (
      <section className="pt-12">
        <div className="text-center">{message}</div>
      </section>
    );
  }

  if (isLoading) {
    return renderMessage('Loading...');
  }

  if (isError) {
    return renderMessage('Some error happened');
  }

  if (videos.length === 0) {
    return renderMessage('No videos found');
  }

  if (error) {
    return renderMessage(error);
  }

  return (
    <section className="pt-6">
      <div className="grid grid-cols-12 gap-4 max-w-screen-2xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {videos.map((video, index) => (
          <Video key={index} video={video} />
        ))}
      </div>
    </section>
  );
};

export default Videos;
