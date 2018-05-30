class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    // props:
    // 				movie.title, movie.watched
    this.state = {
    	toggleWatched: 'watched-true'
    }

    this.toggleWatched = this.toggleWatched.bind(this);
  }

  componentWillMount() {
    this.toggleWatched();
  }

  toggleWatched() {
  	var css = (this.props.movie.watched) ? 'watched-true' : 'watched';
  	this.setState({ toggleWatched: css });
  }

  render() {
  	return (
			<div className="video-list-entry">
				<span id="props.id">{this.props.movie.title}
					<button className={this.state.toggleWatched} onClick={this.props.watchedClicked}>Watched</button></span>
			</div>
  	)
	};
}

// VideoListEntry.propTypes = {
//   movie: React.PropTypes.object.isRequired
// };

// <div id="props.id">{props.movie.title}</div><div>Watched</div>

window.VideoListEntry = VideoListEntry;