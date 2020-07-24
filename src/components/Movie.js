import React from 'react';


class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
  }



  handleOnClick(e) {
    console.log('clicked', this.props.title);
  }

  handleOnMouseOver(e) {
    // console.log('hovering...', this.props.title);
    // console.log('state.hover: ', this.state.hover);
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    // console.log('Movie props', this.props);
    let style = {
      padding: '20px',
      borderStyle: 'solid',
      backgroundColor: this.state.hover ? 'green' : 'transparent'
    };

    return (
      <div style={style} onClick={this.handleOnClick} onMouseEnter={this.handleOnMouseOver} onMouseLeave={this.handleOnMouseOver}>{this.props.title}</div>
    )
  }
}

export default Movie;