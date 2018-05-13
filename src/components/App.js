class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
			  {title: 'Mean Girls'},
			  {title: 'Hackers'},
			  {title: 'The Grey'},
			  {title: 'Sunshine'},
			  {title: 'Ex Machina'},
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

*/  

  render() {
    return (
    	<h1>test</h1>
    );
  }
}

window.App = App;