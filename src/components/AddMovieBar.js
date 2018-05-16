var AddMovieBar = (props) => (
  // adds new movies
  
  <div className="form-inline">
    <input className="form-control" type="text" onChange={(event) => props.textBoxChange(event.target.value)} />
    <button className="add-green-button" onClick={props.add}>Add</button>
  </div>
);

window.AddMovieBar = AddMovieBar;