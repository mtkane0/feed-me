import React from 'react';
import MovieList from './MovieList';
import Search from './Search';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      addMovie: ''
    }
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  handleText(e) {
    this.setState({
      addMovie: e.target.value
    })
  }

  handleAddMovie(e) {
    //console.log('Add ', movieTitle);
    let movie = this.state.addMovie;
    this.setState({
      addMovie: ''
    })
    console.log('this.props', this.props)
    this.props.movies.push({ title: movie })
  }

  render() {

    let appStyle = {
      borderStyle: 'solid',
      width: '75%'
    };

    let movieListStyle = {

    };

    return (
      <div style={appStyle}>
        <div style={{ backgroundColor: '#D3D3D3', borderStyle: 'solid' }}>
          <h2>MovieList</h2>
        </div>
        <div style={movieListStyle}>
          <div>
            <input type="text" name="addMovie" onChange={this.handleText} value={this.state.addMovie} />
            <input type="button" value="Add" onClick={this.handleAddMovie} />
          </div>
          <div>
            <Search movies={this.props.movies} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
