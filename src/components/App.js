import React from 'react';
import MovieList from './MovieList';


class App extends React.Component {
  render() {
    return (
      <div>
        Starter App component - hello there
        <MovieList movies={[
          { title: 'Mean Girls' },
          { title: 'Hackers' },
          { title: 'The Grey' },
          { title: 'Sunshine' },
          { title: 'Ex Machina' },
        ]} />
      </div>
    )
  }
}

export default App;
