import { useDispatch, useSelector } from "react-redux";
import { RelatedVideoItem } from "./RelatedVideoItem";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../features/relatedVideos/relatedVideosSlice";
import PropTypes from "prop-types";

export const RelatedVideoList = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [tags, currentVideoId, dispatch]);

  // decide what to render
  let content = null;

  if (isLoading) content = <div className="col-span-12">Loading...</div>;
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <div className="col-span-12">No related videos found!</div>;
  }
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideoItem key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

RelatedVideoList.propTypes = {
  currentVideoId: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default RelatedVideoList;
