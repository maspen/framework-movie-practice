var VideoListEntry = (props) => (

	<div className="video-list-entry">
		<span id={props.id}>{props.movie.title}
			<button className={props.movie.watched ? 'watched-true' : 'watched'} 
				onClick={() => props.watchedClicked('i')} value={props.id}>Watched</button>
		</span>
	</div>
);
// old: onClick={(e) => props.watchedClicked(e, `${props.movie}`)} 
// onClick={() => this.removeTag(i)}
/*
<button className={props.movie.watched ? 'watched-true' : 'watched'} 
				onClick={(e) => props.watchedClicked(e, props)}>Watched</button></span>


<button className={props.movie.watched ? 'watched-true' : 'watched'} 
				onClick={props.watchedClicked} value={props.movie}>Watched</button></span>	


	<div className="video-list-entry">
		<span id="props.id">{props.movie.title}
			<button className={props.movie.watched ? 'watched-true' : 'watched'} 
				onClick={props.watchedClicked} value={props}>Watched</button></span>
	</div>							
*/

VideoListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};