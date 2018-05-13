class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Movie List'
    };
  }

  render() {
  	return (
  		<div className="movie-list-header">
  			<div><h1 className="title">{this.state.title}</h1></div>
			</div>
  	)
  };
}

window.Header = Header;