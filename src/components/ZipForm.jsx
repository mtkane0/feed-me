import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


class ZipForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      zip: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      zip: e.target.value
    })
  }

  render() {
    const searchStyle = {
      width: '100%',
      fontSize: '1.5rem',
      marginLeft: 'auto',
      marginRight: 'auto',
    }

    const buttonStyle = {
      backgroundColor: '#ffb766',
      fontSize: '1em',
      width: '100%'
    }
    return (
      <div>
        <form>
          <Box style={{ width: '40vw' }}>
            <TextField style={searchStyle}
              placeholder="Ex. 94043"
              label="Zip Code"
              variant="outlined"
              value={this.state.zip}
              onChange={this.handleInputChange}
            />
            <Button style={buttonStyle}
              variant="contained"
              onClick={() => this.props.handleSubmit(this.state.zip)}
            >Find Food!</Button>
          </Box>
        </form>
      </div >
    )
  }
};

export default ZipForm;