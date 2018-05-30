class VideoListEntry extends React.component {
	constructor(props) {
    super(props);

    this.state = {

    }
  }

  alertAppOfMovieWatcher(movie) {
  	props.watchedClicked(movie);
  }

/*
movie -> props.movie
key -> props.key
movieIndex -> props.movieIndex
watchedClicked -> props.watchedClicked ---> App.this.watchedClicked
*/

  render() {
  	return(
			<div className="video-list-entry">
				<span id={props.id}>{props.movie.title}
					<button className={props.movie.watched ? 'watched-true' : 'watched'} 
						onClick={() => this.alertAppOfMovieWatcher(null, "foo")} value={props.id}>Watched</button>
				</span>
			</div>)
  }
};
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

window.VideoListEntry = VideoListEntry;