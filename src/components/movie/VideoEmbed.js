const VideoEmbed = ({id}) => (
  <div className="video-div">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="encrypted-media"
      allowFullScreen
      title="video"
    />
  </div>
)

export default VideoEmbed;
