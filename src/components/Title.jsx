import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const headerStyles = {
  backgroundColor: '#ffb766', //grandpa orange
}

const headerTextStyles = {
  fontFamily: '-apple-system',
}

const Title = () => {
  return (
    <AppBar style={headerStyles}>
      <Toolbar>
        <FastfoodIcon edge="start" fontSize="large" />
        <Typography style={headerTextStyles} variant="h3">FeedMe</Typography>
      </Toolbar>
    </AppBar>
  )
};

export default Title;