var SearchBar = (props) => (
  // searches existing movies, can use partial titles
  
	<div className="form-inline">
    	<input className="form-control" type="text" onChange={(event) => props.textBoxChange(event.target.value)} />
      <button onClick={props.search}>Search</button>
  </div> 
);

window.SearchBar = SearchBar;