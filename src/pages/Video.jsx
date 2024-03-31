import { VideoPlayer } from "../components/VideoPlayer";
import { VideoDescription } from "../components/VideoDescription";
import { RelatedVideoList } from "../components/RelatedVideoList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchVideo } from "../redux/video/videoSlice";

export const Video = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [videoId, dispatch]);

  const { id, link, title, tags } = video || {};

  // decide what to render
  let content = null;
  if (isLoading) content = <div className="col-span-12">Loading...</div>;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !video?.id) {
    content = <div className="col-span-12">No video found!</div>;
  }

  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer link={link} title={title} />

          <VideoDescription video={video} />
        </div>

        <RelatedVideoList currentVideoId={id} tags={tags} />
      </div>
    );
  }

  return (
    <section className="pt-10 pb-10">
      <div className="mx-auto max-w-screen-2xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default Video;
