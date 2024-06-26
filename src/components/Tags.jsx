import { useDispatch, useSelector } from "react-redux";
import { Tag } from "./Tag";
import { useEffect } from "react";
import { fetchTags } from "../store/redux/tags/tagsSlice";

export const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags.lenghts > 0 ? (
    <section>
      <div className="max-w-screen-2xl mx-auto px-5 py-4 lg:px-0 flex gap-2 overflow-y-auto">
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.title} />
        ))}
      </div>
    </section>
  ) : null;
};

export default Tags;
