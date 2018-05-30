var VideoListEntry = (props) => (
	<div className={props.movie.watched ? 'watched-true' : 'watched'}>
		<span id="props.id">{props.movie.title}
			<button className="watched" onClick={props.watchedClicked}>Watched</button></span>
	</div>
);

VideoListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// <div id="props.id">{props.movie.title}</div><div>Watched</div>
/*
	<div className="video-list-entry">
		<span id="props.id">{props.movie.title}
			<button className="watched" onClick={props.watchedClicked}>Watched</button></span>
	</div>
*/

window.VideoListEntry = VideoListEntry;