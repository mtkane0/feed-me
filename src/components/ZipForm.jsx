import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const ZipForm = () => {

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

  // const innerBoxStyle = {
  //   display: 'inline',
  //   width: '50%',

  //   border: 'solid red 1px'
  // }

  return (
    <div >
      <form>
        <Box style={{ width: '40vw' }}>
          <TextField style={searchStyle}
            label="Zip Code"
            variant="outlined"
          />
          <Button style={buttonStyle}
            variant="contained"
          >Find Food!</Button>
        </Box>
      </form>
    </div >
  )
};

export default ZipForm;