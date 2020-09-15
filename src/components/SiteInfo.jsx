import React from 'react';
import Typography from '@material-ui/core/Typography';

const SiteInfo = () => {
  const infoStyle = {
    padding: '10%',
    fontFamily: '-apple-system',
  }
  return (
    <div>
      <Typography style={infoStyle}
        align="center"
        variant="h6"
      >Hungry? Enter your zip code and we will find places near you.</Typography>
    </div>
  )
};

export default SiteInfo;
