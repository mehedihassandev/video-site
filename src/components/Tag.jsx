import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../store/redux/filter/filterSlice";

export const Tag = ({ title }) => {
  console.log(title);
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);

  const isSelected = selectedTags.includes(title) ? true : false;

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };
  return (
    <div className={style} onClick={handleSelect}>
      {title}
    </div>
  );
};

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Tag;
