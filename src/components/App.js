class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stubData: [
			  {title: 'Mean Girls'},
			  {title: 'Hackers'},
			  {title: 'The Grey'},
			  {title: 'Sunshine'},
			  {title: 'Ex Machina'}
			],
			movies: [],
			searchQuery: '',
      newMovie: ''
    };

		this.state.movies = this.state.stubData;
  }

  componentDidMount() {
  	//
  };

  handleSearchBoxInputChange(text) {
  	this.setState({ searchQuery: text });	
  };
 
	searchMoviesButtonClick() {
		this.searchMovies();
	};

	searchMovies() {
		var movieMatchesArray = this.state.movies.filter
			(movie => movie.title.includes(this.state.searchQuery)); // want partials as well
		if(movieMatchesArray.length > 0) {
			this.setState({ movies: movieMatchesArray});
		} else {
			this.state.movies = [];
			this.setState({ movies: [{title: '\"' + this.state.searchQuery + '\" was not found'}] });		
		}
	}
  
  handleAddMoveInputChange(text) {
// console.log('handleAddMoveInputChange txt ', text);
    this.setState({ newMovie: text });    
  }
  
  addMovieButtonClick() {
console.log('addMovieButtonClick');
    this.addMovie;
  }
  
  addMovie() {
console.log('addMovie');     
  }
  
	render() {
    return (
    	<div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <AddMovieBar add={this.addMovieButtonClick.bind(this)} textBoxChange={this.handleAddMoveInputChange.bind(this)}/>
          </div>
          <div className="col-md-4" />
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <SearchBar search={this.searchMoviesButtonClick.bind(this)} textBoxChange={this.handleSearchBoxInputChange.bind(this)} />
          </div>
          <div className="col-md-4" />
        </div>
        <div className="row">
          <div className="col-md-12 border-helper">
            <VideoList movies={this.state.movies} />
          </div>
        </div>
    	</div>
    )
  };
}

window.App = App;