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
        <div style={{ borderStyle: 'solid', backgroundColor: '#D3D3D3' }}>
          <h2>MovieList</h2>
        </div>
        <div style={{ padding: '50px' }}>
          {/* <Movie title={this.props.movies[0].title} />
          <Movie title={this.props.movies[1].title} />
          <Movie title={this.props.movies[2].title} />
          <Movie title={this.props.movies[3].title} />
          <Movie title={this.props.movies[4].title} /> */}
          {
            this.props.movies.map(movie =>
              <Movie title={movie.title} />
            )
          }
        </div>
      </div>
    )
  }
}

export default MovieList;