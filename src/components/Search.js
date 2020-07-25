import React from 'react';
import MovieList from './MovieList';
import App from './App';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      textEntered: '',
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' },
      ]
    }

    this.handleTextEntered = this.handleTextEntered.bind(this);
    this.handleMovieSearch = this.handleMovieSearch.bind(this);
  }

  handleTextEntered(e) {
    this.setState({
      textEntered: e.target.value
    });
    this.handleMovieSearch(this.state.textEntered);
    // console.log('movies:', this.state.movies);
  }

  handleMovieSearch(text) {
    console.log('RUNNING HANDLE ON GO')
    this.setState({
      movies: this.state.movies.filter((movie) => {
        console.log('text', text, movie.title.includes(text));
        return movie.title.includes(text);
      })
    })
  }

  render() {
    console.log('entered search bar', this.state.textEntered);

    let divStyle = {
      padding: '20px',
      textAlign: 'center',
    };

    let sorry = <div style={divStyle}><p>Sorry, no matches</p></div>;
    return (
      <div>
        <div style={divStyle}>
          <input onChange={this.handleTextEntered} type="text" name="search" placeholder="Search..." />
          <input type="submit" value="Go!" />
        </div>
        <div>
          {
            this.state.movies.length
              ?
              <MovieList movies={this.state.movies} />
              :
              sorry
          }
        </div>
      </div>
    )
  }
}


export default Search;