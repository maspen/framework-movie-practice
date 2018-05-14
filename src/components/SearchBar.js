var SearchBar = (props) => (
// <div><SearchBar search={this.searchMoviesButtonClick.bind(this)} 
//       textBoxChange={this.handleSearchBoxInputChange.bind(this)} /></div>
	<div className="search-bar form-inline">
  	<input className="form-control" type="text" onChange={(event) => props.textBoxChange(event.target.value)} />
  	<button onClick={props.search} className="btn hidden-sm-down">
    	<span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

window.SearchBar = SearchBar;