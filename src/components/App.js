import React from 'react';
import MovieList from './MovieList';


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    let style = {
      borderStyle: 'solid',
      width: '75%'
    };

    return (
      <div style={style}>
        < MovieList movies={
          [
            { title: 'Mean Girls' },
            { title: 'Hackers' },
            { title: 'The Grey' },
            { title: 'Sunshine' },
            { title: 'Ex Machina' },
          ]} />
      </div >
    )
  }
}

export default App;
