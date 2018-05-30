var VideoList = (props) => (
/*
movies: [
        {title: 'Mean Girls', watched: true/false},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ]
*/  
  <div className="video-list">
    {props.movies.map((movie, i) =>
      <VideoListEntry movie={movie} 
        key={movie.title.toString()} 
        movieIndex={i} 
        watchedClicked={props.watched} />
    )}
  </div>
);

VideoList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

/*
      <VideoListEntry movie={movie} 
        key={movie.title.toString()} 
        movieIndex={i} 
        watchedClicked={props.watched} />
*/

window.VideoList = VideoList;