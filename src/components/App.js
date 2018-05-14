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
			searchQuery: ''
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

	render() {
    return (
    	<div>
	      <div className="navbar">
	    		<div className="header">
	    			<div><Header /></div>
	    		</div>
	    		<div className="col-md-6 offset-md-3">
	    			<div><SearchBar search={this.searchMoviesButtonClick.bind(this)} textBoxChange={this.handleSearchBoxInputChange.bind(this)} /></div>
	    		</div>
	    	</div>
	    	<div className="row">
	    		<div className="col-md-5">
	    			<div><VideoList movies={this.state.movies} /></div>
	    		</div>
	    	</div>
    	</div>
    )
  };
}

window.App = App;