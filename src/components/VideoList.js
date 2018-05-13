var VideoList = (props) => (
/*
movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ]
*/  
  <div className="video-list">
    {props.movies.map((movie, i) =>
      <VideoListEntry movie={movie} key={movie.title.toString()} movieIndex={i} />
    )}
  </div>
);

VideoList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;