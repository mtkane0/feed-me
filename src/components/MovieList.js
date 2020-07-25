import React from 'react';
import Movie from './Movie';
import Search from './Search';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let style = {
      paddingLeft: '50px',
      paddingRight: '50px',
      paddingBottom: '50px'
    }

    return (
      <div>
        <div style={style}>
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