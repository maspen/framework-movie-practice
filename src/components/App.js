class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
			  {title: 'Mean Girls'},
			  {title: 'Hackers'},
			  {title: 'The Grey'},
			  {title: 'Sunshine'},
			  {title: 'Ex Machina'}
			]
    };
  }

  componentDidMount() {
  	// put methods here
  }

/*
+-----------------
Movie Lits
*-----------------

  *----------*
	movie title
  *----------*  

*-----------------

	<div id="container" ...

	<scripet>
		var dest = document.querySelector("#container")
	</>

*/  
	render() {
    return (
    	<div>
	      <div className="navbar">
	    		<Header />
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