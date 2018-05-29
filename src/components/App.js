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
      addMovies: [
        {title: 'First Added Movie'}
      ],
      addMovie: '',
      searchBoxText: true,
      addBoxText: false

    };

		this.state.movies = this.state.stubData;

    // bind actions/buttons to 'this'
    this.addMovieButtonClick = this.addMovieButtonClick.bind(this);
    this.handleAddMoveInputChange = this.handleAddMoveInputChange.bind(this);
    this.searchMoviesButtonClick = this.searchMoviesButtonClick.bind(this);
    this.handleSearchBoxInputChange = this.handleSearchBoxInputChange.bind(this);

    this.restoreSearchMovies = this.restoreSearchMovies.bind(this);
    this.restoreAddMovies = this.restoreAddMovies.bind(this);
  }

  componentWillMount() {
    // ccalled right after constructor
  }

  componentDidMount() {
  	// called afte render()
  };

  /** ---------- Search --------- */

  // handleSearchBoxInputChange(text) {
  //   if (this.state.searchBoxText) {
  //     this.state.searchBoxText = false;
  //     this.state.addBoxText = true;
  //     this.restoreSearchMovies();
  //   }
  // 	this.setState({ searchQuery: text });	
  // };
  handleSearchBoxInputChange(event) {
    if (this.state.searchBoxText) {
      this.state.searchBoxText = false;
      this.state.addBoxText = true;
      this.restoreSearchMovies();
    }
    this.setState({ searchQuery: event.target.value }); 
  };
 
	searchMoviesButtonClick() {
    event.preventDefault();
    this.searchMovies();
	};

	searchMovies() {
		var movieMatchesArray = this.state.movies.filter
			(movie => movie.title.includes(this.state.searchQuery)); // want partials as well

		if(movieMatchesArray.length > 0) {
			this.setState({ movies: movieMatchesArray} );

      console.log('this.state.movies AFTER search results', this.state.movies);
		} else {
      this.state.movies = [];
			this.setState({ movies: [{title: '\"' + this.state.searchQuery + '\" was not found'}] });

      console.log('this.state.movies AFTER no movie found', this.state.movies);
		}
	}

  restoreSearchMovies() {
    this.setState({ movies: this.state.stubData });
  }
  
  /** ---------- Add --------- */

  // handleAddMoveInputChange(text) {
  //   if(this.state.addBoxText) {
  //     this.state.addBoxText = false;
  //     this.state.searchBoxText = true;
  //     this.restoreAddMovies();
  //   }
  //   this.setState({ addMovie: text });
  // }
  handleAddMoveInputChange(event) {
    if(this.state.addBoxText) {
      this.state.addBoxText = false;
      this.state.searchBoxText = true;
      this.restoreAddMovies();
    }
    this.setState({ addMovie: event.target.value });
  }

  addMovieButtonClick() {
    this.addMovie();
  }
  
  addMovie() {
    if(this.state.addMovie !== null) {

      console.log('movie to add:', this.state.addMovie);
      // TODO: check if 'movies' already contains this title
      //this.setState({ movies: [...this.state.addMovies, {title: this.state.addMovie}] });

      this.state.addMovies = [...this.state.addMovies, {title: this.state.addMovie}];
      this.setState({ movies: this.state.addMovies });

      console.log('this.state.movies AFTER movie added', this.state.movies);
    }
  }

  restoreAddMovies() {
    this.setState({ movies: this.state.addMovies });
  }

  // doesAddMovieExist(addMovie) {
  //   this.state.movies
  // }
  
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
            <AddMovieBar add={this.addMovieButtonClick} textBoxChange={this.handleAddMoveInputChange}/>
          </div>
          <div className="col-md-4" />
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <SearchBar search={this.searchMoviesButtonClick} textBoxChange={this.handleSearchBoxInputChange} />
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