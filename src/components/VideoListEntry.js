var VideoListEntry = (props) => (
	<div className="video-list-entry">
		<div id="props.id">{props.movie.title}</div>
	</div>
);

VideoListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

window.VideoListEntry = VideoListEntry;