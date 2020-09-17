import React from 'react';
import Typography from '@material-ui/core/Typography';

const SiteInfo = () => {
  const infoStyle = {
    padding: '5%',
    fontFamily: '-apple-system',
  }
  return (
    <div style={infoStyle}>
      <Typography
        align="center"
        variant="h6"
      >Hungry and can't decide what to eat?</Typography>
      <Typography
        align="center"
        variant="h6"
      >Enter your zip code and we will find places near you.</Typography>
    </div>
  )
};

export default SiteInfo;
