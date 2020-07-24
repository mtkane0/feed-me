import React from 'react';
import Movie from './Movie';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // console.log('props', this.props.movies);
    // console.log('props in MovieList', this.props.movies[0]);
    return (
      <div>
        <div>
          <h2>MovieList</h2>
        </div>
        <div>
          <Movie title={this.props.movies[0].title} />
          <Movie title={this.props.movies[1].title} />
          <Movie title={this.props.movies[2].title} />
          <Movie title={this.props.movies[3].title} />
          <Movie title={this.props.movies[4].title} />
        </div>
      </div>
    )
  }
}

export default MovieList;