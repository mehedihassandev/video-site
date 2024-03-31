import PropTypes from 'prop-types';

export const Tag = ({ title }) => {
  return (
    <div
      className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
    >
      {title}
    </div>
  )
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Tag