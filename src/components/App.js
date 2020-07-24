import React from 'react';
import MovieList from './MovieList';


class App extends React.Component {
  constructor(props) {
    super(props)

    //this.divStyle.bind(this);
  }


  // divStyle() {
  //   backgrounColor: '#F5F5F5'
  // }

  render() {
    return (
      <div style={{ borderStyle: 'solid' }}>
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
