import React from 'react';
import MovieList from './MovieList';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      textEntered: ''
    }

    this.handleOnEnterSearch = this.handleOnEnterSearch.bind(this);
    this.handleOnGo = this.handleOnGo.bind(this);
  }

  handleOnEnterSearch(e) {
    console.log('entered search bar')
    this.setState({
      textEntered: e.target.value
    })

  }

  handleOnGo(e) {
    console.log('user entered', this.state.textEntered);
  }


  render() {

    let divStyle = {
      padding: '30px',
      textAlign: 'center',
    };

    return (
      <div style={divStyle}>
        <input onChange={this.handleOnEnterSearch} type="text" name="search" placeholder="Search..." />
        <input onClick={this.handleOnGo} type="submit" value="Go!" />
      </div>
    )

  }
}


export default Search;