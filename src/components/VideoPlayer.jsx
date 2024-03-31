import PropTypes from 'prop-types';

export const VideoPlayer = ({ link, title }) => {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={link}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}

VideoPlayer.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
export default VideoPlayer