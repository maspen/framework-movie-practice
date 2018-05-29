var SearchBar = (props) => (
  // searches existing movies, can use partial titles
  
	<div className="form-inline">
    	<input className="form-control" type="text" onChange={ props.textBoxChange } />
      <button onClick={props.search}>Search</button>
  </div> 
);

// <input className="form-control" type="text" onChange={(event) => props.textBoxChange(event.target.value)} />

window.SearchBar = SearchBar;