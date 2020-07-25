import React from 'react';
import MovieList from './MovieList';
import App from './App';
let movies = require('./data/movies');

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      textEntered: '',
      movies: this.props.movies,
      placeholder: 'Search...'
    }

    this.handleTextEntered = this.handleTextEntered.bind(this);
    this.handleMovieSearch = this.handleMovieSearch.bind(this);
  }

  handleTextEntered(e) {
    this.setState({
      textEntered: e.target.value
    });
    this.handleMovieSearch(this.state.textEntered);
  }

  handleMovieSearch(text) {
    this.setState({
      movies: this.state.movies.filter((movie) => {
        console.log('text', text, movie.title.includes(text));
        return movie.title.includes(text);
      })
    })
  }

  handleRefresh(e) {
    console.log('handleRefresh activated')
    this.setState({
      movies: this.props.movies,
      textEntered: '',
      placeholder: 'Search...'
    })

  }

  render() {

    let divStyle = {
      padding: '20px',
      textAlign: 'center',
    };




    return (
      <div>
        <div style={divStyle}>
          <div>
            <input onChange={this.handleTextEntered} value={this.state.textEntered} type="text" name="search" placeholder={this.state.placeholder} />
            <input type="submit" value="Refresh" onClick={this.handleRefresh.bind(this)} />
            {/* <Refresh isText={} handleRefresh={handleRefresh} /> */}
          </div>
        </div>
        <div>
          {
            this.state.movies.length
              ?
              <MovieList movies={this.state.movies} />
              :
              <div style={divStyle}>
                <p>Sorry, no matches</p>
              </div>
          }
        </div>
      </div>
    )
  }
}


export default Search;