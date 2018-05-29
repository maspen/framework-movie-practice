var AddMovieBar = (props) => (
  // adds new movies
  
  <div className="form-inline">
    <input className="form-control" type="text" onChange={ props.textBoxChange } />
    <button className="add-green-button" onClick={props.add}>Add</button>
  </div>
);
// <input className="form-control" type="text" onChange={(event) => props.textBoxChange(event.target.value)} />
window.AddMovieBar = AddMovieBar;