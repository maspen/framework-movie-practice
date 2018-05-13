class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Movie List'
    };
  }

  render() {
  	return (
  		<div className="movie-list-header form-inline">
  			<h1>{this.state.title}</h1>
			</div>
  	)
  };
}

window.Header = Header;