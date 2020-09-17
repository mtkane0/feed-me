import React from 'react';
import Rating from '@material-ui/lab/Rating';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Price = (props) => {
  const customIcons = {
    1: {
      icon: <AttachMoneyIcon />,
      label: 'Cheap',
    },
    2: {
      icon: <AttachMoneyIcon />,
      label: 'Average',
    },
    3: {
      icon: <AttachMoneyIcon />,
      label: 'Pricey',
    },
    4: {
      icon: <AttachMoneyIcon />,
      label: 'Expensive',
    },
  };

  return (
    <Rating />
  )
}

export default Price;